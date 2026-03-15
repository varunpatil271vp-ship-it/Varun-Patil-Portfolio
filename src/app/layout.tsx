import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Varun Narendra Patil | Mechanical Engineering Portfolio',
  description: 'M.S. Mechanical Engineering (Design & Manufacturing). Thermal-fluid systems, optimization, prototyping, and experimental engineering.',
  openGraph: {
    title: 'Varun Narendra Patil | Mechanical Engineering Portfolio',
    description: 'Design & Manufacturing · Thermal Systems · Optimization · Prototyping',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
