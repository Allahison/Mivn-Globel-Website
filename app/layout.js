import { Inter } from "next/font/google";
import Script from "next/script";
import MouseFollower from "@/components/MouseFollower";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mivan Global Suite — Digital Solutions for Modern Businesses",
  description: "E-commerce operations, custom development, and digital solutions for law firms, wholesalers, importers, and online businesses.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
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
