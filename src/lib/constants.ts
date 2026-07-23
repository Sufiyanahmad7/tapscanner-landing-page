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
    desc: 'Visitor submits a visit request or is pre-registered by an employee.',
    icon: 'QrCode',
    detail: 'Captures visitor photo, details, company profile, and safety policy agreement.',
  },
  {
    step: '02',
    title: 'Employee Approval',
    desc: 'The assigned employee receives the visitor request in the TapScanner platform, reviews the visitor details, and approves or rejects the request.',
    icon: 'BellRing',
    detail: 'The employee can review visitor information, purpose of visit, scheduled date and time, and approve or reject the request directly from the TapScanner web portal or mobile application.',
  },
  {
    step: '03',
    title: 'QR Code Generation',
    desc: 'Once approved, TapScanner automatically generates a secure QR code and visitor pass.',
    icon: 'Printer',
    detail: 'Enables instant receipt via printout or pass link, pre-authorizing access to specific gates or offices.',
  },
  {
    step: '04',
    title: 'Check-In & Check-Out',
    desc: 'The Guard verifies the QR code at entry and exit. TapScanner records the complete visitor history, timestamps, and audit logs.',
    icon: 'CheckCircle2',
    detail: 'Automates door perimeters clearance, tracks movement durations, and registers the checkout log.',
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
    benefits: ['Touchless QR self-checkin', 'Elevator & Turnstile Integration', 'VIP arrival alerts', 'Multi-tenant isolation'],
    stats: { label: 'Lobby Queue Reduction', value: '90%' },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Plants',
    headline: 'Strict Gate Pass Asset Control & Contractor Verification',
    description: 'Safeguard plant perimeters. Verify contractor safety orientation, digitize returnable material gate passes, and track truck logistics entry.',
    iconName: 'Factory',
    benefits: ['Permit to Work (PTW) checks', 'Returnable asset overdue alerts', 'Vehicle license plate scan', 'Safety orientation check-off'],
    stats: { label: 'Asset Loss Reduction', value: '95%' },
  },
  {
    id: 'healthcare',
    name: 'Hospitals & Healthcare Hubs',
    headline: 'Patient Visitor Access Control & Restricted Zone Security',
    description: 'Manage high visitor footfall while safeguarding ICU, pharmacy, and laboratory access. Limit visitor count per bed and enforce safety compliance.',
    iconName: 'Hospital',
    benefits: ['Max visitor per patient enforcement', 'Restricted ward QR passes', 'Contractor credentials verification', 'Emergency evac readiness'],
    stats: { label: 'Zone Control Compliance', value: '100%' },
  },
  {
    id: 'education',
    name: 'Educational Institutions',
    headline: 'Student Leave Gate Passes & Guardian Identity Verification',
    description: 'Secure university and school campuses. Verify parents before student pick-up, manage host hostel gate passes, and audit staff movements.',
    iconName: 'GraduationCap',
    benefits: ['Parent OTP verification', 'Out-pass approval workflow', 'Campus perimeter security', 'Real-time headcount logs'],
    stats: { label: 'Campus Safety Rating', value: '99.8%' },
  },
  {
    id: 'warehouses',
    name: 'Warehouses & Logistics Centers',
    headline: 'Driver Check-in, Parcel Hubs & Fleet Movement Analytics',
    description: 'Speed up loading dock turnaround. Digitally log truck drivers, scan incoming courier shipments, and automate driver gate clearance.',
    iconName: 'Truck',
    benefits: ['Driver QR quick-scan', 'Parcel OCR auto-notify', 'Dock scheduling sync', 'Material delivery audit'],
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
      'Up to 1,000 Visitors / month',
      'Touchless QR Check-in & Self Kiosk',
      'Instant Email & SMS Host Alerts',
      'Digital safety policy signing & Photo Capture',
      'Basic Badge Printing Integration',
      'Standard Audit Reports & CSV Export',
      'Single Location Support',
    ],
  },
  {
    id: 'pro',
    name: 'Professional Plan',
    tagline: 'Complete movement control for growing corporate facilities.',
    priceMonthly: 199,
    priceAnnual: 169,
    popular: true,
    badge: 'MOST POPULAR ⚡',
    ctaText: 'Book Pro Demo',
    features: [
      'Unlimited Visitors & Guests',
      'Employee Movement & Break Pass Module',
      'Material Gate Pass (Returnable & Asset Tracking)',
      'WhatsApp & MS Teams Host Alerts',
      'Delivery & Parcel Tracking Hub',
      'Emergency Evacuation Evac-Roll-Call App',
      'Up to 5 Facility Gates / Locations',
      'Priority 24/7 Support SLA',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Custom',
    tagline: 'Custom multi-tenant platform for global enterprises & plants.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    ctaText: 'Talk to Sales',
    badge: 'ENTERPRISE READY 🛡️',
    features: [
      'Everything in Professional Plan',
      'Unlimited Facilities & Gate Locations',
      'Custom Single Sign-On (Okta, Azure AD, SAML 2.0)',
      'Contractor Safety Induction & PTW Module',
      'Elevator, Turnstile & SDK Integrations',
      'Dedicated Account Manager & Onsite Training',
      'Custom SLA 99.99% Uptime Guarantee',
      'Private Cloud or On-Premise Deployment Option',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'How quickly can TapScanner be deployed across our facility?',
    answer: 'TapScanner is cloud-native and multi-tenant. Standard cloud setup for a corporate lobby takes less than 30 minutes using standard iPads and wireless thermal printers. Multi-plant enterprise deployments with custom SSO typically complete within 3 to 5 business days.',
  },
  {
    id: '2',
    category: 'Security & Compliance',
    question: 'How does TapScanner ensure GDPR and DPDP visitor privacy compliance?',
    answer: 'TapScanner encrypts all visitor data at rest using AES-256 and in transit via TLS 1.3. You can set automated PII retention policies (e.g., auto-purge visitor photos and phone numbers after 30 or 90 days), enforce digital safety policy signings, and ensure visitors never see prior guest names (eliminating paper register privacy breaches).',
  },
  {
    id: '3',
    category: 'Hardware & Setup',
    question: 'Does TapScanner require proprietary hardware?',
    answer: 'No! TapScanner runs on standard hardware. Kiosks run on any iOS/Android tablet or iPad. Guard gate apps run on standard smartphones or rugged Android handhelds. Printers support standard Zebra, Brother, or Epson Bluetooth/Wi-Fi thermal printers.',
  },
  {
    id: '4',
    category: 'Hardware & Setup',
    question: 'What happens if our building loses internet connection?',
    answer: 'The TapScanner Mobile Security Guard App includes an offline queue engine. Guards can continue scanning QR passes and logging gate entries offline. Once internet connectivity is restored, the local buffer automatically syncs all logs back to the central cloud console without data loss.',
  },
  {
    id: '5',
    category: 'General',
    question: 'Can we manage multiple branches and sub-tenants under one account?',
    answer: 'Yes! TapScanner is built from the ground up on a multi-tenant SaaS architecture. Master Super Admins can set global security policies while location managers manage branch-specific gates, receptionists, and approval workflows.',
  },
  {
    id: '6',
    category: 'Security & Compliance',
    question: 'Does TapScanner support Single Sign-On (SSO) and Role-Based Access Control (RBAC)?',
    answer: 'Yes. We support SAML 2.0, OAuth2, Okta, Azure Active Directory, and Google Workspace SSO. RBAC allows granular permissions across our six-level hierarchy: TapScanner Admin, Super Admin, Admin, Supervisor, Guard, and Employee.',
  },
  {
    id: '7',
    category: 'Pricing',
    question: 'Is there a limit on the number of hosts or employees?',
    answer: 'Professional and Enterprise plans include unlimited employee profiles so your entire organization can receive instant visitor pings via WhatsApp, Teams, or Email.',
  },
  {
    id: '8',
    category: 'Pricing',
    question: 'Can we request a custom proof of concept (POC) for our manufacturing plant?',
    answer: 'Absolutely. Click "Book Consultation" or fill out our Enterprise Inquiry form to request a 14-day zero-risk pilot at your plant or corporate head office.',
  },
];
