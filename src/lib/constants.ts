import { ModuleItem, IndustryItem, DashboardTab, PricingPlan, FAQItem, TestimonialItem } from '@/types';

export const TRUSTED_COMPANIES = [
  { name: 'Apex Global Logistics', location: '14 Locations' },
  { name: 'Novartis BioPharma', location: 'Global R&D Hubs' },
  { name: 'Cognizant Tech Park', location: '42 Facilities' },
  { name: 'Tata Motors Assembly', location: 'Plant Gate 1-8' },
  { name: 'Fortis Health City', location: 'Hospital Network' },
  { name: 'St. Xavier Campus', location: '3 Campuses' },
  { name: 'Adani Logistics Hub', location: 'Port & Inland' },
  { name: 'DLF Cyber City', location: 'Commercial Towers' },
];

export const COMPLIANCE_BADGES = [
  { title: 'ISO 27001 Certified', code: 'IS 719203' },
  { title: 'SOC 2 Type II', code: 'Audited 2026' },
  { title: 'GDPR & DPDP Ready', code: 'Data Masked' },
  { title: '99.99% Uptime SLA', code: 'Multi-Region' },
];

export const COMPARISON_ITEMS = [
  { traditional: 'Manual visitor register', tapscanner: 'Digital visitor registration' },
  { traditional: 'Paper gate passes', tapscanner: 'QR-based gate passes' },
  { traditional: 'Phone approvals', tapscanner: 'Instant approval workflows' },
  { traditional: 'Manual tracking', tapscanner: 'Real-time movement tracking' },
  { traditional: 'No audit trail', tapscanner: 'Complete audit logs' },
  { traditional: 'No analytics', tapscanner: 'Real-time dashboards' },
  { traditional: 'Emergency confusion', tapscanner: 'Emergency Roll Call' },
];

export const BENEFIT_CARDS = [
  {
    title: 'Faster Operations',
    description: 'Reduce check-in times to under 10 seconds and automate routine gate authorizations instantly.',
    icon: 'Zap',
  },
  {
    title: 'Enhanced Security',
    description: 'Verify identity credentials, screen watchlists, and manage returnable assets with automated approval gates.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Compliance & Audit Ready',
    description: 'Maintain secure, tamper-proof digital logs that satisfy GDPR, SOC 2, and internal auditing guidelines.',
    icon: 'FileCheck',
  },
  {
    title: 'Multi-location Management',
    description: 'Coordinate physical access rules, gate terminals, and guest lists across all facilities from one portal.',
    icon: 'Building2',
  },
];

export const WHY_TAPSCANNER_PILLARS = [
  {
    title: 'Enhanced Security perimeters',
    tagline: 'Multi-tenant isolation with real-time watchlist screening.',
    description: 'Screen every visitor against instant blacklists, VIP alerts, and work permit validity before gate clearance.',
    icon: 'ShieldCheck',
    metric: '100%',
    metricLabel: 'Audit Readiness',
  },
  {
    title: 'Zero-Friction Movement Automation',
    tagline: 'From guest check-in to employee break passes.',
    description: 'Empower receptionists and guards with automated QR check-ins, badge printing, and instant host notification.',
    icon: 'Zap',
    metric: '85%',
    metricLabel: 'Lobby Speedup',
  },
  {
    title: 'Multi-Location Cloud Centralization',
    tagline: 'Command 1 to 500+ facility gates from one portal.',
    description: 'Manage permissions, location-based workflows, and global security policies across offices, factories, and warehouses.',
    icon: 'Building2',
    metric: '500+',
    metricLabel: 'Global Enterprise Facilities',
  },
];

export const BENTO_FEATURES = [
  {
    id: 'gatepass',
    title: 'Interactive Gate Pass Management',
    tag: 'Material & Asset Tracking',
    description: 'Digital approval workflows for returnable and non-returnable goods with barcode asset verification.',
    span: 'col-span-12 lg:col-span-8',
    type: 'interactive_gatepass',
  },
  {
    id: 'qr_scanner',
    title: 'Touchless QR Code Entry',
    tag: 'Pre-Registration Kiosk',
    description: 'Send guests a single-use QR invite link. Scan at guard handheld or self-serve kiosk in 2 seconds.',
    span: 'col-span-12 lg:col-span-4',
    type: 'qr_demo',
  },
  {
    id: 'host_alerts',
    title: 'Instant Multi-Channel Alerts',
    tag: 'WhatsApp / Teams / SMS',
    description: 'Hosts get real-time notification with guest details, company name, and one-tap approval actions.',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    type: 'notification_cards',
  },
  {
    id: 'parcel_tracking',
    title: 'Delivery & Parcel Hub',
    tag: 'Logistics Control',
    description: 'Scan courier packages at security gate. Recipient receives automated pickup PIN & locker notification.',
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
    type: 'parcel_demo',
  },
  {
    id: 'rollcall',
    title: 'Emergency Evacuation Evac-Roll-Call',
    tag: 'Life Safety System',
    description: 'Instantly broadcast emergency roll calls to safety supervisors with live missing personnel tracking.',
    span: 'col-span-12 lg:col-span-4',
    type: 'rollcall_live',
  },
];

export const PLATFORM_MODULES: ModuleItem[] = [
  {
    id: 'visitor',
    title: 'Visitor Management',
    shortDesc: 'Automated touchless guest check-in, digital NDAs, and instant badge printing.',
    fullDesc: 'Transform lobby operations with self-service iPad kiosks and receptionist consoles. Pre-register guests, capture visitor photos, enforce digital NDA safety signings, and issue instant QR passes.',
    iconName: 'UserCheck',
    badge: 'Core Module',
    highlights: [
      'Touchless QR Pre-registration invites',
      'Self-Service Kiosk & Web Check-in',
      'Digital NDA & Safety Policy Signing',
      'Instant Wireless Badge Printer Integration',
      'VIP Visitor Red-Carpet Alerts',
    ],
    metrics: [
      { label: 'Avg Check-in Time', value: '< 10 Sec' },
      { label: 'Lobby Queue Reduction', value: '88%' },
    ],
    demoType: 'visitor',
  },
  {
    id: 'employee',
    title: 'Employee Movement',
    shortDesc: 'Multi-gate movement tracking, break passes, and building zone access logs.',
    fullDesc: 'Track employee entries, exits, building zone access, break passes, and official movement passes across all gates. View live check-in and check-out logs and movement histories.',
    iconName: 'Users',
    badge: 'Movement Control',
    highlights: [
      'Multi-Gate Access Authorization',
      'Break & Official Movement Pass Workflow',
      'Building Zone Access & Transfers',
      'Real-time On-Premise Headcount',
      'Live Check-in & Check-out Logs',
    ],
    metrics: [
      { label: 'Tracking Accuracy', value: '99.9%' },
      { label: 'Daily Employee Passes', value: '250,000+' },
    ],
    demoType: 'employee',
  },
  {
    id: 'gatepass',
    title: 'Gate Pass Management',
    shortDesc: 'Digital workflow for returnable & non-returnable material movements.',
    fullDesc: 'Digitize material check-in and check-out. Admins approve passes digitally, security guards scan item QR codes at perimeters, and automated alerts trigger if returnable items are overdue.',
    iconName: 'PackageCheck',
    badge: 'Asset Security',
    highlights: [
      'Returnable Asset Overdue Tracker',
      'Multi-Level Manager Approvals',
      'Item Photo & Invoice Upload',
      'Vehicle License Plate Recording',
      'Vendor Return Verification',
    ],
    metrics: [
      { label: 'Lost Asset Recovery', value: '94%' },
      { label: 'Gate Approval Time', value: '1.5 Mins' },
    ],
    demoType: 'gatepass',
  },
  {
    id: 'contractor',
    title: 'Contractor Management',
    shortDesc: 'Work permit verification, safety inductions, and gate access tracking.',
    fullDesc: 'Ensure no contractor enters restricted zones without safety induction training, work permits (PTW), and verified government IDs. Track daily contractor per-site headcount.',
    iconName: 'ShieldAlert',
    badge: 'Compliance & Safety',
    highlights: [
      'Permit to Work (PTW) Validation',
      'Mandatory Safety Orientation Check',
      'Contractor License Expiration Alerts',
      'Vendor Shift Headcount Caps',
      'Blacklist & Violation Logging',
    ],
    metrics: [
      { label: 'Safety Violations Prevented', value: '100%' },
      { label: 'Onboard Speedup', value: '75%' },
    ],
    demoType: 'contractor',
  },
  {
    id: 'vendor',
    title: 'Vendor Management',
    shortDesc: 'On-site vendor logging, schedule authorization, and gate perimeters control.',
    fullDesc: 'Authorize vendor check-in and out-pass sequences. Monitor vendor perimeters presence and link entries to official schedules, streamlining verification.',
    iconName: 'Building',
    badge: 'Operations Security',
    highlights: [
      'Vendor Invitation Workflows',
      'Schedule Verification & Entry Logs',
      'Movement History Tracking',
      'Automated Out-pass Approvals',
      'Blacklist Security Screening',
    ],
    metrics: [
      { label: 'Onboard Efficiency', value: '92%' },
      { label: 'Verification Speed', value: '< 15 Sec' },
    ],
    demoType: 'contractor',
  },
  {
    id: 'delivery',
    title: 'Delivery & Parcel Management',
    shortDesc: 'Courier package scanning, recipient PIN notifications, and pickup logs.',
    fullDesc: 'Streamline mailroom and gate parcel handling. Guards snap photos of incoming couriers, AI extracts recipient details, and automated alerts send secure pickup PINs to employees.',
    iconName: 'Truck',
    badge: 'Logistics Automation',
    highlights: [
      'OCR Parcel Label Reader',
      'Automated Recipient WhatsApp/SMS PIN',
      'Contactless Locker & Mailroom Pickup',
      'Driver & Vehicle Access Log',
      'Overdue Parcel Reminders',
    ],
    metrics: [
      { label: 'Mailroom Processing', value: '4x Faster' },
      { label: 'Unclaimed Parcel Rate', value: '< 1%' },
    ],
    demoType: 'delivery',
  },
  {
    id: 'emergency',
    title: 'Emergency Evacuation & Roll Call',
    shortDesc: 'One-click live evacuation lists for safety supervisors on mobile devices.',
    fullDesc: 'During emergency site evacuations, safety supervisors open the TapScanner Mobile App to view real-time lists of every visitor, employee, and contractor checked into the premises.',
    iconName: 'Flame',
    badge: 'Life Safety',
    highlights: [
      'One-Tap Emergency Siren Broadcast',
      'Real-Time Missing Personnel Roster',
      'Multi-Marshal Assembly Point Sync',
      'First Responder PDF Export',
      'Automatic Gate Unlocking Trigger',
    ],
    metrics: [
      { label: 'Roll Call Completion', value: '< 3 Mins' },
      { label: 'Live Data Accuracy', value: '100%' },
    ],
    demoType: 'emergency',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Visitor Registration',
    desc: 'Visitor submits a self-serve request or is pre-registered by an employee.',
    icon: 'QrCode',
    detail: 'Captures photo ID, details, and safety policy agreement.',
  },
  {
    step: '02',
    title: 'Employee Approval',
    desc: 'Host employee receives an instant notification to review and approve entry.',
    icon: 'BellRing',
    detail: 'One-tap approval from web portal or mobile app.',
  },
  {
    step: '03',
    title: 'QR Code Generation',
    desc: 'TapScanner automatically issues a secure, time-bound digital QR pass.',
    icon: 'Printer',
    detail: 'Delivered instantly via pass link or print badge.',
  },
  {
    step: '04',
    title: 'Check-In & Check-Out',
    desc: 'Guards scan the QR code at perimeters for real-time verification & audit logging.',
    icon: 'CheckCircle2',
    detail: 'Automates gate clearance and instant checkout logs.',
  },
];

export const DASHBOARD_TABS: DashboardTab[] = [
  {
    id: 'tapscanner',
    label: 'TapScanner Admin',
    role: 'Platform Owner Control',
    description: 'Manage platform-wide tenant accounts, company subscriptions, tenant monitoring, and platform configuration.',
    metrics: [
      { title: 'Total Company Tenants', value: '382', trend: '+14% monthly growth', isPositive: true },
      { title: 'Global active perimeters', value: '1,894', trend: 'Multi-region clusters online', isPositive: true },
      { title: 'Core system latency', value: '18ms', trend: '99.99% system availability', isPositive: true },
    ],
    recentActivity: [
      { time: '10:49 AM', event: 'Tenant "Novartis BioPharma" subscription renewed', status: 'Approved' },
      { time: '10:35 AM', event: 'New tenant company "DLF Cyber Towers" onboarded', status: 'Approved' },
      { time: '10:10 AM', event: 'Global failover test completed successfully', status: 'Approved' },
    ],
  },
  {
    id: 'super_admin',
    label: 'Super Admin',
    role: 'Company Super Admin Control',
    description: 'Centralized view of organization dashboard, branch management, global security policies, and user permissions.',
    metrics: [
      { title: 'Total Active Branches', value: '18', trend: 'Synced across 4 regions', isPositive: true },
      { title: 'System Users', value: '4,850', trend: 'SSO Enabled', isPositive: true },
      { title: 'Security violations', value: '0', trend: 'All perimeters secure', isPositive: true },
    ],
    recentActivity: [
      { time: '10:45 AM', event: 'New security blacklist rule updated for Factory Gate 3', status: 'Approved' },
      { time: '10:20 AM', event: 'Role permissions updated for Supervisor group', status: 'Approved' },
      { time: '09:15 AM', event: 'SSO configuration updated for all enterprise branches', status: 'Approved' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin',
    role: 'Branch Admin Operations',
    description: 'Manage local visitor registration, employee movement passes, contractor lists, and gate passes.',
    metrics: [
      { title: 'Expected Guests today', value: '142', trend: '88 pre-registered', isPositive: true },
      { title: 'Daily Employee passes', value: '342', trend: 'All approved', isPositive: true },
      { title: 'Contractor headcount', value: '112', trend: 'Safety credentials verified', isPositive: true },
    ],
    recentActivity: [
      { time: '10:42 AM', event: 'Visitor invitation sent to Sarah Connor (Cyberdyne)', status: 'Approved' },
      { time: '10:38 AM', event: 'Break pass approved for Employee Alex Rivera', status: 'Approved' },
      { time: '10:30 AM', event: 'Contractor group work permit verified for Zone C', status: 'Approved' },
    ],
  },
  {
    id: 'supervisor',
    label: 'Supervisor',
    role: 'Operational Review & Approvals',
    description: 'Review pending gate pass approvals, gate monitoring dashboard, security alerts, and incident logs.',
    metrics: [
      { title: 'Pending Gate Pass requests', value: '12', trend: 'Requires urgent review', isPositive: false },
      { title: 'Security alerts', value: '1', trend: 'Flagged vehicle at logistics gate', isPositive: false },
      { title: 'Active movements on review', value: '45', trend: 'Audit trails active', isPositive: true },
    ],
    recentActivity: [
      { time: '10:50 AM', event: 'Gate Pass GP-402 (Returnable Laptops) approved by Supervisor', status: 'Approved' },
      { time: '10:15 AM', event: 'Security alert: Unregistered vendor flagged at Gate 1', status: 'Flagged' },
      { time: '09:40 AM', event: 'Incident log #8921 (Gate 4 Sensor delay) marked resolved', status: 'Approved' },
    ],
  },
  {
    id: 'guard',
    label: 'Guard',
    role: 'Gate Entry & Exit Validation',
    description: 'Scan visitor and employee QR codes, print thermal badges, and log outward gate passes.',
    metrics: [
      { title: 'Lobby checks completed', value: '1,240', trend: '< 10s average check-in', isPositive: true },
      { title: 'Active scans at Gate 2', value: '84', trend: 'All passes valid', isPositive: true },
      { title: 'Badges printed today', value: '256', trend: 'Zebra printer online', isPositive: true },
    ],
    recentActivity: [
      { time: '10:49 AM', event: 'Visitor Sarah Jenkins checked in at Gate 4 Kiosk', status: 'Approved' },
      { time: '10:45 AM', event: 'Employee break pass QR scanned at Turnstile 1', status: 'Approved' },
      { time: '10:38 AM', event: 'Material delivery pass QR scanned and verified', status: 'Approved' },
    ],
  },
  {
    id: 'employee',
    label: 'Employee',
    role: 'My Visitors & Personal Movements',
    description: 'Send visitor invitations, request break passes, apply for official movement passes, and review history.',
    metrics: [
      { title: 'My expected visitors', value: '2', trend: 'Arriving at 2:00 PM', isPositive: true },
      { title: 'Break passes requested', value: '4', trend: 'All approved', isPositive: true },
      { title: 'Official movements logged', value: '18', trend: 'Last updated today', isPositive: true },
    ],
    recentActivity: [
      { time: '10:20 AM', event: 'Pre-registration link sent to Johnathan Vance', status: 'Approved' },
      { time: '09:00 AM', event: 'Break pass requested for lunch period', status: 'Approved' },
      { time: '08:45 AM', event: 'Official movement logged (Client office transfer)', status: 'Approved' },
    ],
  },
];

export const INDUSTRY_SOLUTIONS: IndustryItem[] = [
  {
    id: 'corporate',
    name: 'Corporate Offices & IT Parks',
    headline: 'Guest Experience & High-Volume Lobby Automation',
    description: 'Eliminate reception bottlenecks across commercial towers. Provide visitor pre-registration, automated elevator floor permissions, and seamless host notification.',
    iconName: 'Building',
    benefits: ['Touchless QR self-checkin', 'Smart Access Control', 'Live Visitor Status', 'Multi-Location Management'],
    stats: { label: 'Lobby Queue Reduction', value: '90%' },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Plants',
    headline: 'Strict Gate Pass Asset Control & Contractor Verification',
    description: 'Safeguard plant perimeters. Verify contractor safety orientation, digitize returnable material gate passes, and track truck logistics entry.',
    iconName: 'Factory',
    benefits: ['Industrial Visitor Management', 'Material Gate Passes', 'Vehicle Entry Management', 'Contractor Verification'],
    stats: { label: 'Asset Loss Reduction', value: '95%' },
  },
  {
    id: 'warehouses',
    name: 'Warehouses & Logistics Centers',
    headline: 'Driver Check-in, Parcel Hubs & Fleet Movement Analytics',
    description: 'Speed up loading dock turnaround. Digitally log truck drivers, scan incoming courier shipments, and automate driver gate clearance.',
    iconName: 'Truck',
    benefits: ['Driver Check-In', 'Visitor Registration', 'Vehicle Entry Management', 'Delivery Gate Passes'],
    stats: { label: 'Dock Wait Speedup', value: '65%' },
  },
];

export const INTEGRATIONS_LIST = [
  { name: 'Microsoft Teams', cat: 'Communication', icon: 'MessageSquare' },
  { name: 'WhatsApp Business', cat: 'Instant Alerts', icon: 'MessageCircle' },
  { name: 'Azure Active Directory', cat: 'SSO & Identity', icon: 'Key' },
  { name: 'Okta Identity Cloud', cat: 'Enterprise SSO', icon: 'Lock' },
  { name: 'Slack', cat: 'Host Ping', icon: 'Hash' },
  { name: 'Google Workspace', cat: 'Calendar Sync', icon: 'Calendar' },
  { name: 'Zebra Thermal Printers', cat: 'Hardware Badge', icon: 'Printer' },
  { name: 'Honeywell Barcode Readers', cat: 'Gate Hardware', icon: 'QrCode' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'TapScanner transformed our 18 manufacturing facilities from chaotic paper logbooks to a touchless 5-second QR entry system. Our ISO security audit score jumped to 100%.',
    author: 'Rajesh Subramanian',
    role: 'Vice President of Global Security',
    company: 'Apex Industrial Corporation',
    industry: 'Automotive & Industrial',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    impactBadge: '90% Faster Plant Entry',
  },
  {
    id: '2',
    quote: 'With over 4,000 visitors daily across Cyber Towers, lobby queues used to stretch out the door. TapScanner pre-registration reduced front desk check-in times to under 10 seconds.',
    author: 'Elena Rostova',
    role: 'Director of Workplace Experience',
    company: 'Cognizant Tech Park',
    industry: 'Commercial Real Estate',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    impactBadge: '4,000+ Daily Visitors Managed',
  },
  {
    id: '3',
    quote: 'The Gate Pass asset management and Emergency Evacuation Roll Call module alone paid for the system within the first 30 days. We now have complete peace of mind across all plant perimeters.',
    author: 'David H. Chen',
    role: 'Chief Information Security Officer (CISO)',
    company: 'Novartis BioPharma Hub',
    industry: 'Pharmaceuticals',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    impactBadge: '100% Asset Trackability',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter VMS',
    tagline: 'Essential visitor management for single office hubs.',
    priceMonthly: 79,
    priceAnnual: 65,
    ctaText: 'Start 14-Day Trial',
    features: [
      'Visitor Management',
      'Visitor Approval Workflow',
      'QR Check-In & Check-Out',
      'Digital Visitor Passes',
      'Reports & Dashboard',
    ],
  },
  {
    id: 'business',
    name: 'Business Plan',
    tagline: 'Scale-ready visitor operations for multi-branch organizations.',
    priceMonthly: 199,
    priceAnnual: 169,
    popular: true,
    badge: 'MOST POPULAR ⚡',
    ctaText: 'Book Demo',
    features: [
      'Everything in Starter',
      'Visitor Pre-Registration',
      'Visitor ID Verification',
      'Custom Approval Workflows',
      'Advanced Visitor Analytics',
      'Up to 10 Branches',
      'Priority Support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    tagline: 'Unlimited scale for multi-company & large-scale deployments.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    ctaText: 'Contact Sales',
    badge: 'SCALE READY 🛡️',
    features: [
      'Everything in Business',
      'Unlimited Branches',
      'Multiple Companies / Organizations',
      'Unlimited Visitor Records',
      'Priority Support',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'How does TapScanner streamline visitor check-ins?',
    answer: 'TapScanner replaces slow manual registers with touchless QR-based check-ins and instant host notifications. Visitors complete pre-registration or self-kiosk check-in in under 10 seconds, generating instant digital passes and automated host arrival pings.',
  },
  {
    id: '2',
    category: 'General',
    question: 'Can TapScanner support multiple branches or office locations?',
    answer: 'Yes, TapScanner is built on a multi-tenant cloud architecture that supports unlimited branches and regional office locations. Master administrators can set unified security policies across all sites while branch managers control location-specific approvals and visitor logs.',
  },
  {
    id: '3',
    category: 'General',
    question: 'Is TapScanner suitable for different industries?',
    answer: 'Absolutely. TapScanner is designed to adapt to diverse operational requirements across corporate offices, industrial manufacturing plants, commercial towers, healthcare facilities, and educational campuses. Custom workflows ensure compliance with industry-specific security and audit standards.',
  },
  {
    id: '4',
    category: 'General',
    question: 'How secure is visitor data?',
    answer: 'TapScanner enforces enterprise-grade data security with encrypted data storage, strict access controls, and full privacy compliance. All visitor records, digital badges, and audit logs are safely stored with automated retention policies and instant audit readiness.',
  },
  {
    id: '5',
    category: 'General',
    question: 'How quickly can we get started?',
    answer: 'Cloud deployment takes less than 30 minutes for single-office locations, requiring no complex IT infrastructure. Multi-branch enterprise setups can be fully configured and operational across all facility gates within 2 to 3 business days.',
  },
];
