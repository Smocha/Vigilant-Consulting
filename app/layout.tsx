import type { Metadata, Viewport } from "next";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vigilantechusa.com"),

  title: {
    default: "Vigilant Consulting",
    template: "%s | Vigilant Consulting",
  },

  description:
    "Veteran-led cybersecurity, AI, compliance, risk management, CMMC, NIST 800-171, security assessments, and government contracting support.",

  keywords: [
    "Vigilant Consulting",
    "Cybersecurity Consulting",
    "CMMC",
    "NIST 800-171",
    "Risk Management",
    "Cybersecurity Compliance",
    "AI Consulting",
    "Government Contracting",
    "Security Assessments",
    "Cloud Security",
    "Veteran-Owned Business",
    "San Diego Cybersecurity",
  ],

  authors: [
    {
      name: "Vigilant Consulting LLC",
      url: "https://vigilantechusa.com",
    },
  ],

  creator: "Vigilant Consulting LLC",
  publisher: "Vigilant Consulting LLC",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Vigilant Consulting",
    description:
      "Veteran-led cybersecurity, compliance, engineering, and technology advisory services.",
    url: "https://vigilantechusa.com",
    siteName: "Vigilant Consulting",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vigilant Consulting LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vigilant Consulting",
    description:
      "Veteran-led cybersecurity, compliance, engineering, and technology advisory services.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}