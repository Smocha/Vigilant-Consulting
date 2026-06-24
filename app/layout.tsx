import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vigilantechusa.com"),

  title: {
    default: "Vigilant Consulting",
    template: "%s | Vigilant Consulting",
  },

  description:
    "Cybersecurity, AI, Compliance, Risk Management, CMMC, NIST 800-171, Security Assessments, and Government Contracting Support.",

  keywords: [
    "Cybersecurity",
    "CMMC",
    "NIST 800-171",
    "Risk Management",
    "Compliance",
    "AI Consulting",
    "Government Contracting",
    "Security Assessments",
    "Vigilant Consulting",
  ],

  authors: [
    {
      name: "Vigilant Consulting",
      url: "https://vigilantechusa.com",
    },
  ],

  creator: "Vigilant Consulting",
  publisher: "Vigilant Consulting",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Vigilant Consulting",
    description:
      "Cybersecurity, AI, Compliance, Risk Management, CMMC, and Government Contracting Support.",
    url: "https://vigilantechusa.com",
    siteName: "Vigilant Consulting",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vigilant Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vigilant Consulting",
    description:
      "Cybersecurity, AI, Compliance, Risk Management, and Government Contracting Support.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vigilant Consulting",
    url: "https://vigilantechusa.com",
    logo: "https://vigilantechusa.com/logo.png",
    email: "info@vigilantechusa.com",
    telephone: "+1-619-313-0088",
    sameAs: [
      "https://www.linkedin.com/company/vigilant-consulting",
      "https://github.com/Smocha/Vigilant-Consulting",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}