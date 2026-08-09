import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type QuoteState = {
  open: boolean;
  openQuote: (opts?: { service?: string; product?: string }) => void;
  closeQuote: () => void;
  presetServices: string[];
  quoteItems: string[];
  addItem: (name: string) => void;
  removeItem: (name: string) => void;
  clearItems: () => void;
};

const QuoteContext = createContext<QuoteState | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [presetServices, setPresetServices] = useState<string[]>([]);
  const [quoteItems, setQuoteItems] = useState<string[]>([]);

  const openQuote = useCallback((opts?: { service?: string; product?: string }) => {
    setPresetServices(opts?.service ? [opts.service] : []);
    if (opts?.product) {
      setQuoteItems((prev) => (prev.includes(opts.product!) ? prev : [...prev, opts.product!]));
    }
    setOpen(true);
  }, []);

  const value = useMemo<QuoteState>(
    () => ({
      open,
      openQuote,
      closeQuote: () => setOpen(false),
      presetServices,
      quoteItems,
      addItem: (name) =>
        setQuoteItems((prev) => (prev.includes(name) ? prev : [...prev, name])),
      removeItem: (name) => setQuoteItems((prev) => prev.filter((i) => i !== name)),
      clearItems: () => setQuoteItems([]),
    }),
    [open, openQuote, presetServices, quoteItems],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
