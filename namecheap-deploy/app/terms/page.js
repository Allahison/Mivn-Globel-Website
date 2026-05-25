import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms of Service — Mivan Global Suite",
  description: "Terms of Service for Mivan Global Suite. Read our terms and conditions before using our services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using the Mivan Global Suite website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and users of our website.",
  },
  {
    title: "2. Services Provided",
    content: "Mivan Global Ltd. provides the following services:",
    list: [
      "E-commerce operations management (Amazon, eBay, TikTok Shop)",
      "Custom software and web application development",
      "B2B portal and inventory system development",
      "Digital strategy and consultancy",
      "System integrations and automation",
    ],
  },
  {
    title: "3. Client Responsibilities",
    content: "As a client or user of our services, you agree to:",
    list: [
      "Provide accurate and complete information when requested",
      "Maintain confidentiality of any account credentials provided",
      "Not use our services for any unlawful or prohibited purpose",
      "Comply with all applicable laws and regulations",
      "Not attempt to reverse-engineer or copy proprietary systems we develop",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: "Unless otherwise agreed in a separate written contract, the intellectual property rights for all custom software, portals, and systems developed by Mivan Global Ltd. remain our property until full payment is received. Upon final payment, all agreed IP rights are transferred to the client as specified in the project agreement.",
  },
  {
    title: "5. Confidentiality",
    content: "We treat all client business information, data, and project details with strict confidentiality. We do not share, sell, or disclose client information to third parties without explicit consent, except where required by law.",
  },
  {
    title: "6. Payment Terms",
    content: "Payment terms are outlined in individual project proposals and contracts. Generally:",
    list: [
      "A deposit is required before project commencement",
      "Milestone payments are due upon delivery of agreed deliverables",
      "Final payment is due before full IP transfer or system handover",
      "Late payments may result in paused services",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: "Mivan Global Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question. We do not guarantee specific results from e-commerce operations management, as marketplace performance depends on factors beyond our control.",
  },
  {
    title: "8. Termination",
    content: "Either party may terminate a service agreement with 30 days written notice. Upon termination, all outstanding payments become immediately due. We reserve the right to terminate services immediately in cases of breach of these terms.",
  },
  {
    title: "9. Third-Party Platforms",
    content: "Our e-commerce management services operate on third-party platforms (Amazon, eBay, TikTok Shop). We are not responsible for changes in platform policies, account suspensions caused by platform decisions outside our control, or service interruptions caused by third-party platforms.",
  },
  {
    title: "10. Website Disclaimer",
    content: "The content on this website is provided for general information purposes only. While we strive for accuracy, we make no warranties about the completeness or reliability of information on this site. Case study results and statistics represent individual client outcomes and are not guaranteed for all clients.",
  },
  {
    title: "11. Governing Law",
    content: "These Terms of Service are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    title: "12. Changes to Terms",
    content: "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the new terms.",
  },
  {
    title: "13. Contact",
    content: "For any questions regarding these Terms of Service, please contact us at: hello@mivanglobal.com",
  },
];

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gray-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Legal</p>
            <h1 className="text-4xl md:text-6xl font-black leading-none mb-4 tracking-tight">
              TERMS OF
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">SERVICE.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-4">Last updated: January 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600 text-base leading-relaxed mb-10 pb-10 border-b border-gray-100">
              Please read these Terms of Service carefully before using the Mivan Global Suite website or engaging our services. These terms constitute a legally binding agreement between you and Mivan Global Ltd.
            </p>
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-black text-gray-900 mb-3">{s.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.content}</p>
                  {s.list && (
                    <ul className="space-y-2 ml-4">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
