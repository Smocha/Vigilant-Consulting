import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Vigilant Tech',
  description: 'Premium cybersecurity and AI consultancy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand text-gray-100 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}