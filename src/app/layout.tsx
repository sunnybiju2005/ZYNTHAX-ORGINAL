import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DatabaseStatusBadge from '@/components/DatabaseStatusBadge';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Zynthax Digital Solutions | Web Development, Apps, UI/UX, SEO & Multimedia',
  description:
    'Zynthax Digital Solutions is a forward-thinking digital services agency specializing in high-speed websites, custom retail billing apps, UI/UX design, logo design & animation, video editing, and SEO.',
  keywords: [
    'Zynthax Digital Solutions',
    'Web Development',
    'Next.js Website',
    'Billing App Development',
    'UI/UX Design',
    'Photoshop Graphic Design',
    'Logo Design and Animation',
    'Video Editing',
    'SEO Optimization',
    'Startup Digital Solutions India',
  ],
  authors: [{ name: 'Sunny Biju', url: 'https://github.com/sunnybiju2005' }],
  creator: 'Zynthax Digital Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zynthax.com',
    title: 'Zynthax Digital Solutions | Modern Software & Digital Media',
    description:
      'Scale your business with Next.js web apps, retail billing software, dynamic branding, and video post-production.',
    siteName: 'Zynthax Digital Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zynthax Digital Solutions',
    description:
      'Scale your business with Next.js web apps, retail billing software, dynamic branding, and video post-production.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
        <DatabaseStatusBadge />
      </body>
    </html>
  );
}
