import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Varun Narendra Patil | Mechanical Engineering Portfolio',
  description:
    'M.S. Mechanical Engineering (Thermal, Design and Manufacturing). Battery thermal management, PCM/thermosyphons, boiling experiments, prototyping, and experimental validation.',
  openGraph: {
    title: 'Varun Narendra Patil | Mechanical Engineering Portfolio',
    description: 'Thermal, Design and Manufacturing · BTMS · PCM · Thermosyphons · Experimental Validation',
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
