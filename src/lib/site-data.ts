export const COMPANY = {
  name: "Moving Link Technologies",
  shortName: "Moving Link",
  tagline: "Connecting Technology. Powering Possibilities.",
  statement:
    "Reliable technology solutions for connected, secure and smarter businesses.",
  phone: "+233 (0) 00 000 0000",
  whatsapp: "233000000000",
  email: "info@movinglinktech.com",
  address: "Accra, Greater Accra Region, Ghana",
  hours: "Mon – Sat, 8:00am – 6:00pm",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  cta: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "fiber-optic",
    title: "Fiber Optic Solutions",
    summary:
      "End-to-end fiber deployment, from trenching and termination to splicing, testing and long-term maintenance.",
    items: [
      "Fiber optic installation",
      "Fiber termination",
      "Fiber splicing",
      "Fiber testing (OTDR)",
      "Fiber maintenance",
      "Fiber network deployment",
    ],
    cta: "View Fiber Solutions",
    icon: "Cable",
  },
  {
    slug: "cctv",
    title: "CCTV & Surveillance",
    summary:
      "Designed surveillance coverage with IP and analog camera systems, recording, storage and remote monitoring.",
    items: [
      "CCTV installation",
      "IP cameras",
      "Analog cameras",
      "NVR / DVR systems",
      "Remote monitoring",
      "CCTV maintenance",
      "Security surveillance solutions",
    ],
    cta: "View CCTV Solutions",
    icon: "Cctv",
  },
  {
    slug: "networking",
    title: "Networking Solutions",
    summary:
      "Structured cabling and managed network infrastructure engineered for uptime, throughput and clean growth.",
    items: [
      "LAN / WAN installation",
      "Structured cabling",
      "Network configuration",
      "Wi-Fi installation",
      "Network troubleshooting",
      "Network infrastructure",
      "Switch and router configuration",
    ],
    cta: "View Networking Solutions",
    icon: "Network",
  },
  {
    slug: "access-control",
    title: "Access Control",
    summary:
      "Control who enters, when and how — biometric, card and smart lock systems with central management.",
    items: [
      "Biometric systems",
      "Fingerprint access",
      "RFID / card access",
      "Smart door locks",
      "Access control systems",
      "Access management",
    ],
    cta: "View Access Control",
    icon: "Fingerprint",
  },
  {
    slug: "fire-alarm",
    title: "Fire Alarm Systems",
    summary:
      "Detection and alarm systems installed, commissioned and routinely tested to keep buildings compliant.",
    items: [
      "Fire alarm installation",
      "Smoke detectors",
      "Heat detectors",
      "Fire alarm panels",
      "Manual call points",
      "Alarm testing",
      "Maintenance",
    ],
    cta: "View Fire Alarm Solutions",
    icon: "Flame",
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    summary:
      "Safe, certified electrical installation and power distribution, including backup power for critical loads.",
    items: [
      "Electrical installation",
      "Wiring",
      "Electrical maintenance",
      "Troubleshooting",
      "Power distribution",
      "Backup power solutions",
    ],
    cta: "View Electrical Services",
    icon: "Zap",
  },
  {
    slug: "web-development",
    title: "Website Development",
    summary:
      "Corporate and commerce websites built responsive, fast and maintainable — hosting and domains handled.",
    items: [
      "Business websites",
      "Corporate websites",
      "E-commerce websites",
      "Responsive web design",
      "Website maintenance",
      "Domain registration",
      "Hosting setup",
    ],
    cta: "Build Your Website",
    icon: "Globe",
  },
  {
    slug: "telephone",
    title: "Telephone Systems",
    summary:
      "Office voice systems from analog lines to full IP PBX and VoIP, configured and supported in-house.",
    items: [
      "Analog telephone systems",
      "IP telephone systems",
      "VoIP",
      "PBX systems",
      "Office telephone installation",
      "Telephone configuration",
      "Maintenance",
    ],
    cta: "View Telephone Solutions",
    icon: "PhoneCall",
  },
];

export const QUOTE_SERVICE_OPTIONS = [
  "Fiber Optic",
  "CCTV",
  "Networking",
  "Access Control",
  "Fire Alarm",
  "Electrical",
  "Website Development",
  "Telephone System",
  "Equipment Supply",
  "Other",
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Businesses Served" },
  { value: 10, suffix: "+", label: "Technology Solutions" },
  { value: 24, suffix: "/7", label: "Technical Support" },
  { value: 100, suffix: "%", label: "Customer Commitment" },
];

export const SECTORS = [
  "Homes",
  "Offices",
  "Hotels",
  "Schools",
  "Shops",
  "Corporate organizations",
  "Construction projects",
  "Commercial buildings",
  "Institutions",
];

export type ProductCategory = {
  slug: string;
  name: string;
  blurb: string;
  items: string[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "networking",
    name: "Networking",
    blurb: "Core and edge equipment for reliable business networks.",
    items: [
      "Routers",
      "Network switches",
      "TP-Link devices",
      "Wi-Fi access points",
      "Network cables",
      "Network racks",
      "Patch panels",
    ],
  },
  {
    slug: "cctv-security",
    name: "CCTV & Security",
    blurb: "Cameras, recorders and accessories for full site coverage.",
    items: ["CCTV cameras", "IP cameras", "DVR", "NVR", "CCTV accessories"],
  },
  {
    slug: "fiber-optic",
    name: "Fiber Optic",
    blurb: "Cables, patch cords and termination hardware for fiber links.",
    items: [
      "Fiber cables",
      "Fiber patch cords",
      "Fiber termination equipment",
      "Fiber accessories",
      "Fiber networking devices",
    ],
  },
  {
    slug: "connectivity",
    name: "Connectivity",
    blurb: "Satellite and wireless hardware for hard-to-reach locations.",
    items: [
      "Starlink equipment",
      "Starlink accessories",
      "Routers",
      "Access points",
    ],
  },
  {
    slug: "access-control",
    name: "Access Control",
    blurb: "Biometric and card-based entry hardware.",
    items: [
      "Biometric devices",
      "RFID readers",
      "Smart locks",
      "Access control panels",
    ],
  },
  {
    slug: "fire-safety",
    name: "Fire & Safety",
    blurb: "Detection devices and alarm panels for compliant buildings.",
    items: [
      "Smoke detectors",
      "Heat detectors",
      "Fire alarm panels",
      "Fire alarm accessories",
    ],
  },
  {
    slug: "communication",
    name: "Communication",
    blurb: "Voice hardware for offices of any size.",
    items: ["IP phones", "Analog phones", "PBX systems", "VoIP equipment"],
  },
  {
    slug: "electrical",
    name: "Electrical",
    blurb: "Power and installation materials for every deployment.",
    items: [
      "Electrical accessories",
      "Power equipment",
      "Backup power equipment",
      "Installation materials",
    ],
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  availability: "In Stock" | "On Order" | "Supply on Request";
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "tp-link-router",
    name: "TP-Link Business Router",
    category: "Networking",
    categorySlug: "networking",
    description: "Dual-band gigabit router for small and medium offices.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "enterprise-router",
    name: "Enterprise Edge Router",
    category: "Networking",
    categorySlug: "networking",
    description: "Multi-WAN routing with VPN and traffic shaping.",
    availability: "On Order",
    featured: true,
  },
  {
    id: "managed-switch",
    name: "24-Port Managed Switch",
    category: "Networking",
    categorySlug: "networking",
    description: "VLAN-capable gigabit switch with optional PoE budget.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "wifi-ap",
    name: "Ceiling Wi-Fi Access Point",
    category: "Networking",
    categorySlug: "networking",
    description: "High-density access point for offices and hotels.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "patch-panel",
    name: "Cat6 Patch Panel & Rack",
    category: "Networking",
    categorySlug: "networking",
    description: "Rack, panel and cable management for tidy comms rooms.",
    availability: "Supply on Request",
  },
  {
    id: "dome-camera",
    name: "IP Dome Camera",
    category: "CCTV & Security",
    categorySlug: "cctv-security",
    description: "Indoor dome camera with night vision and motion events.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "bullet-camera",
    name: "Outdoor Bullet CCTV Camera",
    category: "CCTV & Security",
    categorySlug: "cctv-security",
    description: "Weatherproof camera for perimeters and car parks.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "nvr",
    name: "8-Channel NVR Recorder",
    category: "CCTV & Security",
    categorySlug: "cctv-security",
    description: "Network video recorder with expandable storage.",
    availability: "On Order",
  },
  {
    id: "fiber-cable",
    name: "Single-Mode Fiber Cable",
    category: "Fiber Optic",
    categorySlug: "fiber-optic",
    description: "Armoured single-mode cable for outdoor runs.",
    availability: "Supply on Request",
    featured: true,
  },
  {
    id: "fiber-tools",
    name: "Fiber Termination Kit",
    category: "Fiber Optic",
    categorySlug: "fiber-optic",
    description: "Splice trays, pigtails, adaptors and enclosures.",
    availability: "On Order",
  },
  {
    id: "starlink",
    name: "Starlink Kit",
    category: "Connectivity",
    categorySlug: "connectivity",
    description: "Satellite internet hardware with installation available.",
    availability: "On Order",
    featured: true,
  },
  {
    id: "biometric",
    name: "Biometric Access Terminal",
    category: "Access Control",
    categorySlug: "access-control",
    description: "Fingerprint and card terminal with door controller.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "smart-lock",
    name: "Smart Door Lock",
    category: "Access Control",
    categorySlug: "access-control",
    description: "Keyless entry with PIN, card and mobile unlock.",
    availability: "Supply on Request",
  },
  {
    id: "smoke-detector",
    name: "Addressable Smoke Detector",
    category: "Fire & Safety",
    categorySlug: "fire-safety",
    description: "Addressable detector for panel-based alarm systems.",
    availability: "In Stock",
  },
  {
    id: "fire-panel",
    name: "Fire Alarm Control Panel",
    category: "Fire & Safety",
    categorySlug: "fire-safety",
    description: "Zoned control panel with battery backup.",
    availability: "On Order",
  },
  {
    id: "ip-phone",
    name: "IP Desk Phone",
    category: "Communication",
    categorySlug: "communication",
    description: "SIP desk phone for PBX and VoIP deployments.",
    availability: "In Stock",
    featured: true,
  },
  {
    id: "pbx",
    name: "IP PBX System",
    category: "Communication",
    categorySlug: "communication",
    description: "Office phone system with extensions and call routing.",
    availability: "On Order",
  },
  {
    id: "ups",
    name: "Rack UPS / Backup Power",
    category: "Electrical",
    categorySlug: "electrical",
    description: "Backup power for comms racks and critical equipment.",
    availability: "Supply on Request",
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  services: string[];
  description: string;
  equipment: string[];
  image: "cctv" | "fiber" | "hotel";
};

export const PROJECTS: Project[] = [
  {
    slug: "office-cctv-installation",
    name: "Office CCTV Installation",
    location: "Accra, Ghana",
    services: ["CCTV & Surveillance", "Networking"],
    description:
      "Full surveillance coverage for a two-floor corporate office, including camera positioning survey, cabling, recorder configuration and remote viewing for management.",
    equipment: ["IP dome cameras", "8-channel NVR", "PoE switch", "Cat6 cabling"],
    image: "cctv",
  },
  {
    slug: "hotel-network-infrastructure",
    name: "Hotel Network Infrastructure",
    location: "Greater Accra, Ghana",
    services: ["Networking", "Structured Cabling"],
    description:
      "Guest and back-office network for a hospitality property, with per-floor distribution, managed switching and full Wi-Fi coverage across rooms and public areas.",
    equipment: ["Managed switches", "Wi-Fi access points", "Racks & patch panels"],
    image: "hotel",
  },
  {
    slug: "fiber-optic-deployment",
    name: "Fiber Optic Deployment",
    location: "Tema, Ghana",
    services: ["Fiber Optic Solutions"],
    description:
      "Backbone fiber link between two facilities, including route survey, cable laying, splicing, termination and OTDR certification of every core.",
    equipment: ["Single-mode fiber", "Splice enclosures", "Patch panels", "Media converters"],
    image: "fiber",
  },
  {
    slug: "corporate-access-control",
    name: "Corporate Access Control Installation",
    location: "Accra, Ghana",
    services: ["Access Control", "Electrical"],
    description:
      "Biometric and card access across restricted areas with door controllers, electric strikes and centralised access management for HR.",
    equipment: ["Biometric terminals", "Door controllers", "Electric strikes"],
    image: "cctv",
  },
  {
    slug: "fire-alarm-installation",
    name: "Fire Alarm Installation",
    location: "Kumasi, Ghana",
    services: ["Fire Alarm Systems"],
    description:
      "Zoned fire detection for a commercial building, with detectors, manual call points, sounders and full commissioning tests.",
    equipment: ["Fire alarm panel", "Smoke & heat detectors", "Manual call points"],
    image: "hotel",
  },
  {
    slug: "office-ip-telephone-system",
    name: "Office IP Telephone System",
    location: "Accra, Ghana",
    services: ["Telephone Systems", "Networking"],
    description:
      "IP PBX rollout replacing analog lines, with numbered extensions, call routing, voicemail and staff handover training.",
    equipment: ["IP PBX", "SIP desk phones", "PoE switch"],
    image: "hotel",
  },
  {
    slug: "starlink-installation",
    name: "Starlink Installation",
    location: "Eastern Region, Ghana",
    services: ["Connectivity", "Networking"],
    description:
      "Satellite internet installation for a remote site, with mounting, alignment, surge protection and onward distribution to a local network.",
    equipment: ["Starlink kit", "Router", "Outdoor mounting hardware"],
    image: "fiber",
  },
  {
    slug: "complete-network-infrastructure",
    name: "Complete Network Infrastructure",
    location: "Accra, Ghana",
    services: ["Networking", "Electrical", "CCTV & Surveillance"],
    description:
      "Turnkey technology fit-out for a new commercial building covering data cabling, comms room build, surveillance and power distribution.",
    equipment: ["Racks", "Switches", "Cameras", "Distribution boards"],
    image: "hotel",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    body: "You tell us what you need. We listen, ask the right technical questions and outline the options.",
    icon: "MessageSquare",
  },
  {
    step: "02",
    title: "Site Assessment",
    body: "Our technical team evaluates the location, existing infrastructure and project requirements.",
    icon: "ClipboardCheck",
  },
  {
    step: "03",
    title: "Proposal & Quotation",
    body: "You receive a detailed proposal with scope, equipment schedule and a transparent quotation.",
    icon: "FileText",
  },
  {
    step: "04",
    title: "Installation",
    body: "Professional technicians install and configure the systems to specification and to standard.",
    icon: "Wrench",
  },
  {
    step: "05",
    title: "Testing & Commissioning",
    body: "Everything is tested, certified and handed over with documentation and training.",
    icon: "CircuitBoard",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    body: "After-sales support, preventive maintenance and upgrades keep the system performing.",
    icon: "LifeBuoy",
  },
];

export const WHY_US = [
  {
    title: "Professional Expertise",
    body: "Experienced technical professionals and installers on every deployment.",
    icon: "BadgeCheck",
  },
  {
    title: "Quality Equipment",
    body: "Reliable technology products sourced from trusted manufacturers.",
    icon: "PackageCheck",
  },
  {
    title: "Competitive Pricing",
    body: "Fair, transparent pricing based on your actual scope of work.",
    icon: "Scale",
  },
  {
    title: "Customized Solutions",
    body: "Systems designed specifically for each site and each project.",
    icon: "Settings2",
  },
  {
    title: "Professional Installation",
    body: "Proper installation, configuration, testing and commissioning.",
    icon: "HardHat",
  },
  {
    title: "After-Sales Support",
    body: "Continued technical support long after project completion.",
    icon: "Headset",
  },
  {
    title: "Reliable Service",
    body: "Fast response times and professional customer communication.",
    icon: "Timer",
  },
  {
    title: "Complete Solutions",
    body: "Multiple technology disciplines delivered under one company.",
    icon: "Layers",
  },
];

export const BRANDS = [
  "TP-Link",
  "Starlink",
  "Hikvision",
  "Dahua",
  "Ubiquiti",
  "Cisco",
  "Grandstream",
];

export const TESTIMONIALS = [
  {
    name: "Kwame Mensah",
    company: "Operations Manager, Corporate Office",
    initials: "KM",
    quote:
      "Moving Link Technologies provided an excellent networking and CCTV installation for our office. The installation was professional and the team was very responsive.",
  },
  {
    name: "Ama Boateng",
    company: "General Manager, Hospitality Group",
    initials: "AB",
    quote:
      "Wi-Fi coverage across the whole property was our biggest complaint. After the network rebuild, guest complaints effectively stopped.",
  },
  {
    name: "Daniel Owusu",
    company: "Facilities Lead, Construction Firm",
    initials: "DO",
    quote:
      "They handled fiber, access control and fire alarm on the same site. One team, one point of contact, and the documentation was thorough.",
  },
];

export const FAQS = [
  {
    q: "How do you determine the cost of a project?",
    a: "Pricing is based on scope of work, equipment required, project size, installation complexity, site location and your specific requirements. We quote after a site assessment so the figure you receive is accurate.",
  },
  {
    q: "Do you supply equipment as well as install it?",
    a: "Yes. We supply networking, CCTV, fiber, access control, fire safety, communication and electrical equipment, and we can supply only equipment if you already have installers.",
  },
  {
    q: "Do you work outside Accra?",
    a: "Yes. We deliver projects across Ghana. Travel and logistics are reflected transparently in the quotation.",
  },
  {
    q: "Do you offer maintenance after installation?",
    a: "We offer preventive maintenance, troubleshooting, repairs, system upgrades and ongoing technical support on custom terms.",
  },
  {
    q: "How long does a typical installation take?",
    a: "It depends on scope. A small office CCTV system can be completed in a day; a full building fit-out runs over several weeks. Timelines are confirmed in the proposal.",
  },
  {
    q: "Can you work with our existing infrastructure?",
    a: "Yes. Our site assessment covers what already exists so we can extend, upgrade or integrate rather than replace unnecessarily.",
  },
];

export const PRICING = [
  {
    title: "Site Assessment",
    price: "Book an Assessment",
    note: "Scoping visit",
    items: [
      "Site inspection",
      "Requirement analysis",
      "Technical recommendations",
      "Project assessment",
    ],
    cta: "Request Assessment",
    featured: false,
  },
  {
    title: "Installation",
    price: "Starting From GHS —",
    note: "Pricing confirmed after assessment",
    items: [
      "Professional installation",
      "Configuration",
      "Testing",
      "Commissioning",
    ],
    cta: "Request Installation Quote",
    featured: false,
  },
  {
    title: "Equipment Supply",
    price: "Current Market Price",
    note: "Equipment prices change — we quote live",
    items: [
      "Routers, switches & access points",
      "Cameras & recorders",
      "TP-Link & fiber equipment",
      "Starlink equipment",
      "Telephone & security devices",
    ],
    cta: "Request Product Price",
    featured: false,
  },
  {
    title: "Maintenance & Support",
    price: "Custom Pricing",
    note: "Per-visit or contract based",
    items: [
      "Preventive maintenance",
      "Troubleshooting",
      "Repairs",
      "System upgrades",
      "Technical support",
    ],
    cta: "Discuss Support",
    featured: false,
  },
  {
    title: "Complete Projects",
    price: "Request a Custom Quote",
    note: "Equipment + installation + configuration + testing + support",
    items: [
      "Single point of accountability",
      "Full equipment schedule",
      "Installation & configuration",
      "Testing & commissioning",
      "Ongoing support",
    ],
    cta: "Request a Custom Quote",
    featured: true,
  },
];
