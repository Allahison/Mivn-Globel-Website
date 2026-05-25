import { Inter } from "next/font/google";
import Script from "next/script";
import MouseFollower from "@/components/MouseFollower";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://mivn-globel-website.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mivan Global Ltd | CRM Automation, E-commerce Operations & Custom Software UK",
    template: "%s | Mivan Global Ltd",
  },
  description: "Mivan Global Ltd helps UK businesses automate CRM workflows, manage e-commerce operations, build custom software, create B2B portals, deploy AI agents, and connect wholesale inventory with dropshipping networks.",
  keywords: ["CRM automation UK", "e-commerce operations", "custom software development", "AI agents UK", "B2B portal", "wholesale systems", "dropshipping inventory", "TikTok Shop management", "Amazon management", "eBay management", "Mivan Global Ltd"],
  authors: [{ name: "Mivan Global Ltd" }],
  creator: "Mivan Global Ltd",
  publisher: "Mivan Global Ltd",
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
    siteName: "Mivan Global Ltd",
    title: "Mivan Global Ltd | CRM Automation, E-commerce Operations & Custom Software UK",
    description: "Mivan Global Ltd helps UK businesses automate CRM workflows, manage e-commerce, deploy AI agents, and build custom software.",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Mivan Global Ltd" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mivan Global Ltd | CRM Automation, E-commerce Operations & Custom Software UK",
    description: "Mivan Global Ltd helps UK businesses connect sales, stock, customers, AI agents, and systems into smarter digital operations.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mivan Global Ltd",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "UK-based digital operations company helping businesses with CRM automation, AI agents, e-commerce operations, custom software, B2B portals, and dropshipping inventory networks.",
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: `${BASE_URL}/contact`, telephone: "+442046346212", email: "support@mivanglobal.co.uk" },
  address: { "@type": "PostalAddress", addressCountry: "GB" },
  sameAs: ["https://linkedin.com", "https://youtube.com"],
  services: ["CRM Automation", "AI Agents", "E-commerce Operations", "Custom Software Development", "Wholesale & B2B Systems", "Dropshipping Inventory Network", "Websites & Funnels"],
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
        <CookieConsent />
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
