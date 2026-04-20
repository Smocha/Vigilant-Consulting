import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VIGILANT Consulting',
  description:
    'Cybersecurity consulting services - RMF, NIST compliance, vulnerability management, cloud security',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-primary text-white`}>
        <Nav />
        {/* Offset to account for fixed navbar height */}
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}