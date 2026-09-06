export interface WorkCategory {
  id: string;
  name: string;
  description: string;
  order: number;
  slug?: string;
  icon?: string;
}

export interface PortfolioItem {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePublicId: string;
  link?: string;
  createdAt?: string;
  tags?: string[];
  client?: string;
  featured?: boolean;
}

export interface PortfolioLink {
  label: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  bio: string;
  photoUrl: string;
  photoPublicId: string;
  portfolioLinks: PortfolioLink[];
  order: number;
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface ClientMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'in-progress' | 'replied';
  timestamp: any;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export interface CompanyStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  heroImagePublicId?: string;
  aboutText: string;
  aboutMission: string;
  aboutVision: string;
  founderMessage: string;
  testimonials: Testimonial[];
  stats?: CompanyStat[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  iconName: string;
  categorySlug: string;
  accentColor: string;
}
