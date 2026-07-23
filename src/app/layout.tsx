import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/ui/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'TapScanner | Enterprise Visitor & Employee Movement Management System (VAMS)',
  description:
    'Cloud-based multi-tenant SaaS platform for touchless QR visitor check-ins, employee movements, gate passes, contractor workflows, emergency evacuations, and real-time security audit logs.',
  keywords: [
    'TapScanner',
    'Visitor Management System',
    'VAMS',
    'Gate Pass Software',
    'Employee Movement System',
    'Touchless QR Check-in',
    'Emergency Evacuation Roll Call',
    'Enterprise Security SaaS',
    'Contractor Safety Induction',
  ],
  authors: [{ name: 'TapScanner' }],
  openGraph: {
    title: 'TapScanner | Enterprise Visitor & Employee Movement System (VAMS)',
    description:
      'Replace vulnerable paper logbooks with touchless QR check-ins, automated material gate passes, instant WhatsApp host pings, and real-time security roll calls.',
    url: 'https://tapscanner-vams.com',
    siteName: 'TapScanner',
    images: [
      {
        url: '/og-tapscanner-enterprise.png',
        width: 1200,
        height: 630,
        alt: 'TapScanner Enterprise SaaS Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 antialiased font-sans selection:bg-orange-500 selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
