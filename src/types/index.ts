export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  demoType: 'visitor' | 'employee' | 'gatepass' | 'contractor' | 'delivery' | 'emergency';
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  benefits: string[];
  stats: { label: string; value: string };
}

export interface DashboardTab {
  id: string;
  label: string;
  role: string;
  description: string;
  metrics: { title: string; value: string; trend: string; isPositive: boolean }[];
  recentActivity: { time: string; event: string; status: 'Approved' | 'Pending' | 'Flagged' | 'Checked Out' }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number | 'Custom';
  priceAnnual: number | 'Custom';
  popular?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Security & Compliance' | 'Hardware & Setup' | 'Pricing';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  rating: number;
  impactBadge: string;
}

export interface InquiryFormData {
  companyName: string;
  industry: string;
  country: string;
  city: string;
  organizationSize: string;
  locationCount: string;
  employeeCount: string;
  interestedModules?: string[];
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  message?: string;
  consent: boolean;
}
