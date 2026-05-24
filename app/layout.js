import { Inter } from "next/font/google";
import Script from "next/script";
import MouseFollower from "@/components/MouseFollower";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://mivn-globel-website.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mivan Global Suite — Digital Operations & Custom Software",
    template: "%s | Mivan Global Suite",
  },
  description: "E-commerce operations management for Amazon, eBay & TikTok Shop. Custom software development, B2B portals, and digital solutions for law firms, wholesalers, and importers.",
  keywords: ["e-commerce operations", "custom software development", "Amazon management", "eBay management", "TikTok Shop", "B2B portal", "law firm software", "wholesale management", "Mivan Global Suite"],
  authors: [{ name: "Mivan Global Suite" }],
  creator: "Mivan Global Suite",
  publisher: "Mivan Global Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Mivan Global Suite",
    title: "Mivan Global Suite — Digital Operations & Custom Software",
    description: "E-commerce operations management for Amazon, eBay & TikTok Shop. Custom software development and digital solutions for modern businesses.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Mivan Global Suite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mivan Global Suite — Digital Operations & Custom Software",
    description: "E-commerce operations management for Amazon, eBay & TikTok Shop. Custom software development and digital solutions for modern businesses.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mivan Global Suite",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "E-commerce operations and custom software development for modern businesses.",
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: `${BASE_URL}/contact` },
  sameAs: ["https://linkedin.com", "https://youtube.com"],
  services: ["E-commerce Operations", "Custom Software Development", "B2B Portals", "Digital Transformation"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <MouseFollower />
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a11897a294a01e42ff66538"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
