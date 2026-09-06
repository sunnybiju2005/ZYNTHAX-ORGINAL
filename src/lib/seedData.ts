import { WorkCategory, PortfolioItem, TeamMember, SiteContent, ServiceItem } from '@/types';
import { db } from './firebase';
import { collection, doc, writeBatch, serverTimestamp } from 'firebase/firestore';

export const initialWorkCategories: WorkCategory[] = [
  {
    id: 'cat-websites',
    name: 'Websites & Web Apps',
    description: 'High-performance Next.js and React web applications built for speed, conversion, and global reach.',
    order: 1,
    slug: 'websites',
    icon: 'Globe',
  },
  {
    id: 'cat-logos',
    name: 'Logos & Brand Identity',
    description: 'Memorable, distinct vector brand marks, design systems, and animated identity guidelines.',
    order: 2,
    slug: 'logos',
    icon: 'Sparkles',
  },
  {
    id: 'cat-uiux',
    name: 'UI/UX Design',
    description: 'Intuitive, research-backed interface designs and interactive Figma prototypes.',
    order: 3,
    slug: 'ui-ux',
    icon: 'Layout',
  },
  {
    id: 'cat-videos',
    name: 'Video Editing & Motion',
    description: 'High-impact promotional videos, social reels, corporate trailers, and logo animations.',
    order: 4,
    slug: 'videos',
    icon: 'Film',
  },
  {
    id: 'cat-apps',
    name: 'Mobile & System Apps',
    description: 'Cross-platform mobile apps (including retail billing apps) and robust desktop software.',
    order: 5,
    slug: 'apps',
    icon: 'Smartphone',
  },
  {
    id: 'cat-graphics',
    name: 'Photoshop & Graphics',
    description: 'Creative advertising banners, photo manipulation, social media kits, and commercial collateral.',
    order: 6,
    slug: 'graphics',
    icon: 'Image',
  },
];

export const initialPortfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    categoryId: 'cat-websites',
    title: 'AuraPay Fintech Dashboard & Portal',
    description: 'A modern, ultra-responsive financial analytics portal built with Next.js, WebSockets, and real-time transaction tracking with sub-second latency.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/aurapay_dashboard',
    link: 'https://aurapay.example.com',
    createdAt: '2026-08-15',
    tags: ['Next.js', 'React', 'TypeScript', 'Fintech', 'Realtime'],
    client: 'Aura Financial Labs',
    featured: true,
  },
  {
    id: 'port-2',
    categoryId: 'cat-apps',
    title: 'QuickPOS Retail Billing & Inventory App',
    description: 'An offline-first Android and desktop billing system with instant thermal receipt printing, barcode scanning, and cloud inventory synchronization.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e5572263?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/quickpos_billing',
    link: 'https://quickpos.example.com',
    createdAt: '2026-08-10',
    tags: ['Flutter', 'React Native', 'SQLite', 'Billing', 'Retail POS'],
    client: 'HyperMart Stores',
    featured: true,
  },
  {
    id: 'port-3',
    categoryId: 'cat-uiux',
    title: 'PulseFit Smart Wearable Companion UI',
    description: 'End-to-end design system and interactive prototype for a health tracker tracking sleep, biomechanics, and recovery metrics.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/pulsefit_uiux',
    link: 'https://figma.com/@zynthax/pulsefit',
    createdAt: '2026-07-28',
    tags: ['Figma', 'UI/UX Design', 'Design System', 'Mobile App'],
    client: 'PulseFit Bio',
    featured: true,
  },
  {
    id: 'port-4',
    categoryId: 'cat-logos',
    title: 'Vortex Quantum Brand Identity & Logo Suite',
    description: 'Geometric 3D brandmark, typography hierarchy, and animated vector assets for a deep-tech cybersecurity provider.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/vortex_brandmark',
    link: 'https://behance.net/gallery/vortex-brand',
    createdAt: '2026-07-20',
    tags: ['Branding', 'Vector Design', 'Logo', 'Styleguide'],
    client: 'Vortex Quantum Security',
    featured: true,
  },
  {
    id: 'port-5',
    categoryId: 'cat-videos',
    title: 'HyperDrive EV Cinematic Launch Commercial',
    description: '30-second 4K commercial with dynamic 3D camera tracking, sound design, and custom 60fps logo sting animation.',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/hyperdrive_trailer',
    link: 'https://vimeo.com/zynthax/hyperdrive',
    createdAt: '2026-08-01',
    tags: ['After Effects', 'Premiere Pro', '4K Commercial', 'Sound Design'],
    client: 'HyperDrive Motors',
    featured: false,
  },
  {
    id: 'port-6',
    categoryId: 'cat-graphics',
    title: 'Luminary Cosmetic Global Campaign Kit',
    description: 'High-end photo retouching, composition, social media launch banners, and print packaging for an organic skincare line.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/luminary_retouching',
    link: 'https://dribbble.com/zynthax/luminary',
    createdAt: '2026-06-18',
    tags: ['Photoshop', 'Photo Manipulation', 'Print Advertising', 'Social Kit'],
    client: 'Luminary Skincare London',
    featured: false,
  },
  {
    id: 'port-7',
    categoryId: 'cat-websites',
    title: 'Solstice Luxury Architectural Portfolio',
    description: 'Minimalist, fluid-scrolling showcase website featuring webGL spatial previews and immersive lighting transitions.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/solstice_architects',
    link: 'https://solstice.example.com',
    createdAt: '2026-07-05',
    tags: ['React', 'Next.js', 'WebGL', 'Architecture'],
    client: 'Solstice Design Studios',
    featured: false,
  },
  {
    id: 'port-8',
    categoryId: 'cat-apps',
    title: 'OmniDesk ERP & Employee Management Suite',
    description: 'Electron and React-powered enterprise desktop application for payroll calculations, timesheet logging, and role-based permissions.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imagePublicId: 'zynthax/portfolio/omnidesk_erp',
    link: 'https://omnidesk.example.com',
    createdAt: '2026-08-18',
    tags: ['Desktop App', 'Electron', 'Node.js', 'Enterprise'],
    client: 'OmniGlobal Logistics',
    featured: true,
  },
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sunny Biju',
    role: 'Founder & Head of Innovation',
    qualification: 'B.Tech in Computer Science & Engineering',
    bio: 'Visionary technologist and founder of Zynthax Digital Solutions. Dedicated to elevating business infrastructure through cutting-edge web development, intelligent billing applications, and seamless digital identity.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    photoPublicId: 'zynthax/team/sunny_biju',
    portfolioLinks: [
      { label: 'GitHub', url: 'https://github.com/sunnybiju2005' },
      { label: 'LinkedIn', url: 'https://linkedin.com' },
    ],
    order: 1,
    email: 'zynthax13@gmail.com',
  },
  {
    id: 'team-2',
    name: 'Aravind Nair',
    role: 'Chief Executive Officer (CEO)',
    qualification: 'MBA in Technology Management, B.Tech IT',
    bio: 'Experienced strategist overseeing enterprise client partnerships, digital growth campaigns, and service delivery excellence across global markets.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    photoPublicId: 'zynthax/team/aravind_nair',
    portfolioLinks: [
      { label: 'LinkedIn', url: 'https://linkedin.com' },
      { label: 'Twitter', url: 'https://x.com' },
    ],
    order: 2,
    email: 'zynthax13@gmail.com',
  },
  {
    id: 'team-3',
    name: 'Devika Menon',
    role: 'Lead Full-Stack & App Developer',
    qualification: 'M.Tech in Software Engineering',
    bio: 'Specialist in cloud-native architectures, high-speed billing and POS applications, REST/GraphQL APIs, and real-time database synchronization.',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    photoPublicId: 'zynthax/team/devika_menon',
    portfolioLinks: [
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'Portfolio', url: 'https://devikamenon.dev' },
    ],
    order: 3,
  },
  {
    id: 'team-4',
    name: 'Rohan Sharma',
    role: 'Senior UI/UX & Brand Designer',
    qualification: 'B.Des in Visual Communication',
    bio: 'Crafts hypnotic visual experiences, responsive design systems, iconic logo packages, and pixel-perfect Photoshop compositions.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    photoPublicId: 'zynthax/team/rohan_sharma',
    portfolioLinks: [
      { label: 'Dribbble', url: 'https://dribbble.com' },
      { label: 'Behance', url: 'https://behance.net' },
    ],
    order: 4,
  },
  {
    id: 'team-5',
    name: 'Kavya Pillai',
    role: 'Motion Graphics & Video Director',
    qualification: 'Diploma in 3D Animation & Multimedia',
    bio: 'Master of kinetic typography, dynamic logo stingers, social video storytelling, and color grading that commands viewer attention.',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    photoPublicId: 'zynthax/team/kavya_pillai',
    portfolioLinks: [
      { label: 'Vimeo', url: 'https://vimeo.com' },
      { label: 'Instagram', url: 'https://instagram.com' },
    ],
    order: 5,
  },
];

export const initialSiteContent: SiteContent = {
  heroTitle: 'Transforming Ideas into High-Impact Digital Realities',
  heroSubtitle: 'Zynthax Digital Solutions empowers startups and enterprises with modern websites, custom mobile and billing apps, captivating branding, and cinematic multimedia.',
  heroImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  heroImagePublicId: 'zynthax/banners/hero_main',
  aboutText: 'Zynthax Digital Solutions was born out of a relentless passion for engineering immaculate digital products. Based in India and serving partners worldwide, our multidisciplinary team fuses software engineering rigor with world-class visual aesthetics.',
  aboutMission: 'To accelerate business growth by delivering tailored, resilient web applications, intelligent mobile utilities, and unforgettable brand identities that outperform the competition.',
  aboutVision: 'To be the premier digital transformation catalyst known globally for creative fearlessness, technical excellence, and unmatched client loyalty.',
  founderMessage: '“In today’s hyper-connected marketplace, average software and forgettable design are invisible. At Zynthax, every pixel, every line of code, and every video frame is engineered to command attention and deliver measurable business outcomes.” — Sunny Biju, Founder',
  stats: [
    { label: 'Projects Delivered', value: '45+' },
    { label: 'Client Satisfaction', value: '99.4%' },
    { label: 'Average Speed Score', value: '98/100' },
    { label: 'Support Response', value: '< 2 hrs' },
  ],
  testimonials: [
    {
      id: 'test-1',
      name: 'Vikramaditya Rao',
      role: 'Chief Operating Officer',
      company: 'Apex Retail Solutions',
      content: 'Zynthax built our retail billing application from scratch. The offline capability and ultra-fast barcode checkout increased our counter throughput by 40%. Their team is top tier!',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'test-2',
      name: 'Elena Rostova',
      role: 'Founder & Managing Director',
      company: 'Nordic Creative House',
      content: 'The branding and animated logo Zynthax crafted blew our board away. They are not just developers; they are genuine visual artists who care deeply about identity.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'test-3',
      name: 'Rahul K. Varma',
      role: 'Director of Growth',
      company: 'FinTrack Technologies',
      content: 'Our website traffic doubled within 60 days of Zynthax taking over our SEO and redesigning our portal in Next.js. Flawless execution and lightning speed!',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Rank higher, capture organic high-intent buyers, and dominate search results.',
    description: 'We conduct comprehensive technical SEO audits, implement semantic schema markup, optimize core web vitals, curate high-authority keyword strategies, and build conversion-focused content architecture.',
    features: [
      'Technical SEO & Core Web Vitals Audits',
      'On-Page & Semantic Schema Markup',
      'High-Intent Keyword & Competitor Research',
      'Local Business & Google Map Pack SEO',
      'Continuous Analytics & Keyword Tracking Reports',
    ],
    deliverables: ['Audit Report', 'Keyword Map', 'Speed Optimization', 'Monthly Performance Dashboard'],
    iconName: 'Search',
    categorySlug: 'websites',
    accentColor: '#00f2fe',
  },
  {
    id: 'web-dev',
    title: 'Website Building & Web Development',
    tagline: 'Lightning-fast, conversion-focused websites engineered with modern frameworks.',
    description: 'From interactive corporate landing pages to complex web portals and e-commerce platforms. Built with Next.js, React, Tailwind-free bespoke CSS, and cloud backends that scale automatically.',
    features: [
      'Custom React & Next.js SSR/SSG Architectures',
      'Mobile-First & 100% Fluid Responsive Layouts',
      'Ultra-Fast Loading with CDN Asset Optimization',
      'Headless CMS & Dynamic Firestore Integrations',
      'Bank-Grade Security & HTTPS Best Practices',
    ],
    deliverables: ['Production Ready Web App', 'Source Code Access', 'SEO Ready Pages', 'CMS Training'],
    iconName: 'Globe',
    categorySlug: 'websites',
    accentColor: '#4facfe',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tagline: 'Intuitive user journeys and breathtaking interfaces designed to convert.',
    description: 'We uncover your customers’ friction points through empathetic user research and translate insights into clean wireframes, micro-interactions, and high-fidelity clickable Figma design systems.',
    features: [
      'User Journey Mapping & Information Architecture',
      'Wireframing & Interactive Figma Prototypes',
      'Comprehensive Design Systems & Component Libraries',
      'Accessibility (WCAG 2.1) Auditing & Compliance',
      'Usability Testing & Design Handoff Documentation',
    ],
    deliverables: ['Figma Workspace Files', 'Interactive Clickable Prototype', 'Design Token System', 'Asset Export Kit'],
    iconName: 'Layout',
    categorySlug: 'ui-ux',
    accentColor: '#a855f7',
  },
  {
    id: 'photoshop',
    title: 'Photoshop & Graphic Design',
    tagline: 'Vibrant, high-resolution visuals that command immediate attention.',
    description: 'Master-level photo retouching, creative manipulation, advertising billboards, social media marketing kits, product packaging, and sales collateral tailored for print and digital screens.',
    features: [
      'Commercial High-End Photo Retouching & Color Grading',
      'Digital Art Composition & Surreal Photo Manipulation',
      'High-Converting Social Media Ad Creatives',
      'Print Packaging, Flyers, Brochures & Roll-ups',
      'Complete Corporate Stationery & Business Collateral',
    ],
    deliverables: ['Layered PSD Sources', 'Ultra High-Res Exports (TIFF/PNG/PDF)', 'Social Media Aspect Bundles'],
    iconName: 'Image',
    categorySlug: 'graphics',
    accentColor: '#ec4899',
  },
  {
    id: 'logo-design',
    title: 'Logo Design & Brand Identity',
    tagline: 'Timeless, memorable visual identities that define your company’s aura.',
    description: 'We don’t just draw icons—we build enduring brand assets. We analyze your competitive positioning to craft unique vector logos, harmonious typography palettes, and complete corporate identity books.',
    features: [
      'Original Vector Logo Concepts & Creative Exploration',
      'Typography Hierarchy & Color Palette Formulation',
      'Comprehensive Brand Guideline Manuals (PDF)',
      'Favicon & App Icon Formats',
      'Full Commercial Copyright & Vector Master Files',
    ],
    deliverables: ['Scalable Vectors (AI, EPS, SVG)', 'High-Res PNGs (Transparent)', 'Brand Guidelines Book'],
    iconName: 'Sparkles',
    categorySlug: 'logos',
    accentColor: '#8b5cf6',
  },
  {
    id: 'logo-animation',
    title: 'Logo Animation & Motion Branding',
    tagline: 'Bring your static brand mark to life with cinematic motion.',
    description: 'Add charisma to your brand across video intros, website headers, mobile app splash screens, and presentations with custom 2D/3D kinetic animations and synchronized sound design.',
    features: [
      'Custom 2D & 3D Logo Intros / Outros',
      'Lightweight Lottie/JSON Web & Mobile Animations',
      'Alpha Channel Transparent Background Exports',
      'Custom Sound FX & Audio Branding Scoring',
      '4K 60FPS Delivery in Multiple Aspect Ratios (16:9, 9:16, 1:1)',
    ],
    deliverables: ['4K MP4 / ProRes Video', 'Lottie / JSON Web Animation', 'GIF & Transparent MOV', 'Sound FX Included'],
    iconName: 'PlayCircle',
    categorySlug: 'videos',
    accentColor: '#f43f5e',
  },
  {
    id: 'video-editing',
    title: 'Professional Video Editing',
    tagline: 'Turn raw footage into thumb-stopping stories that captivate and convert.',
    description: 'End-to-end post-production for promotional films, YouTube content, TikTok/Reels ads, corporate documentaries, and events. Includes professional sound design, color grading, and VFX.',
    features: [
      'Dynamic Pace Cutting & Story Sequencing',
      'Cinematic Color Correction & LUT Grading',
      'High-Impact Motion Graphics & Lower Thirds',
      'Studio-Quality Audio Cleaning & Sound Mixing',
      'Subtitles, Captions, and Multi-Platform Aspect Formats',
    ],
    deliverables: ['Master 4K Video Files', 'Vertical Reel Cuts (9:16)', 'Thumbnail Graphic Options'],
    iconName: 'Film',
    categorySlug: 'videos',
    accentColor: '#e11d48',
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    tagline: 'Custom mobile utilities, retail billing systems, and robust desktop applications.',
    description: 'We develop dependable software solutions designed for daily business operations. From high-speed retail billing apps with barcode and thermal printer integration to cross-platform mobile apps and system software.',
    features: [
      'Custom Retail & Restaurant POS Billing Applications',
      'Thermal Printer, Barcode Scanner & Hardware Integrations',
      'Cross-Platform iOS & Android Apps (Flutter / React Native)',
      'Native Windows & Mac Desktop Systems (Electron / Tauri)',
      'Offline-First Local Storage with Cloud Backup Sync',
    ],
    deliverables: ['Installable APK / IPA / Windows EXE', 'Source Code Repository', 'Admin Setup Documentation'],
    iconName: 'Smartphone',
    categorySlug: 'apps',
    accentColor: '#10b981',
  },
];

/**
 * Helper to seed Firestore with initial data when Firebase is connected
 */
export async function seedFirestoreDatabase(): Promise<{ success: boolean; message: string }> {
  if (!db) {
    return {
      success: false,
      message: 'Firestore is not initialized. Please configure your Firebase credentials in .env.local first.',
    };
  }

  try {
    const batch = writeBatch(db);

    // 1. Seed Categories
    for (const cat of initialWorkCategories) {
      const ref = doc(db, 'workCategories', cat.id);
      batch.set(ref, cat, { merge: true });
    }

    // 2. Seed Portfolio Items
    for (const item of initialPortfolioItems) {
      const ref = doc(db, 'portfolioItems', item.id);
      batch.set(ref, {
        ...item,
        timestamp: serverTimestamp(),
      }, { merge: true });
    }

    // 3. Seed Team Members
    for (const member of initialTeamMembers) {
      const ref = doc(db, 'teamMembers', member.id);
      batch.set(ref, member, { merge: true });
    }

    // 4. Seed Site Content
    const siteContentRef = doc(db, 'siteContent', 'main');
    batch.set(siteContentRef, initialSiteContent, { merge: true });

    await batch.commit();

    return {
      success: true,
      message: 'Successfully seeded workCategories, portfolioItems, teamMembers, and siteContent into Firestore!',
    };
  } catch (err: any) {
    console.error('Firestore seeding failed:', err);
    return {
      success: false,
      message: `Failed to seed Firestore: ${err?.message || err}`,
    };
  }
}
