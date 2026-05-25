import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy — Mivan Global Suite",
  description: "Read Mivan Global Suite's Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  { title: "1. Information We Collect", content: "We collect information you provide directly to us when you contact us, request a consultation, or communicate with our team.", list: ["Name, email address, phone number", "Business name and industry", "Information about your business needs", "Technical data such as IP address and browser type"] },
  { title: "2. How We Use Your Information", content: "We use the information we collect to:", list: ["Respond to your enquiries and provide services", "Send relevant information about our services (with consent)", "Improve our website and service offerings", "Comply with legal obligations", "Analyse site traffic to improve performance"] },
  { title: "3. Cookies", content: "Our website uses cookies to enhance your browsing experience. We use:", list: ["Essential cookies — required for the website to function", "Analytics cookies — help us understand visitor behaviour", "Marketing cookies — deliver relevant ads (with your consent only)"] },
  { title: "4. Data Sharing", content: "We do not sell or rent your personal information. We may share data only:", list: ["With trusted service providers assisting us", "When required by law", "With your explicit consent"] },
  { title: "5. Data Security", content: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, or destruction." },
  { title: "6. Data Retention", content: "We retain your data only as long as necessary. Contact enquiry data is typically retained for up to 2 years unless a longer period is required by law." },
  { title: "7. Your Rights", content: "You have the right to:", list: ["Access the personal data we hold about you", "Request correction of inaccurate data", "Request deletion of your personal data", "Withdraw marketing consent at any time", "Lodge a complaint with the relevant data authority"] },
  { title: "8. Third-Party Links", content: "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their own policies." },
  { title: "9. Changes to This Policy", content: "We may update this Privacy Policy from time to time. Continued use of our website after changes constitutes acceptance of the updated policy." },
  { title: "10. Contact Us", content: "If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us through our Contact page." },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-50 py-16 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-base">Last updated: January 2026</p>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600 text-base leading-relaxed mb-10 p-5 bg-blue-50 border border-blue-100 rounded-xl">
              Mivan Global Ltd. is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
            </p>
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="border-b border-gray-100 pb-10 last:border-0">
                  <h2 className="text-xl font-black text-gray-900 mb-3">{section.title}</h2>
                  {section.content && <p className="text-gray-600 text-sm leading-relaxed mb-4">{section.content}</p>}
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />{item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/terms" className="text-blue-600 text-sm font-bold hover:underline">View Terms of Service →</Link>
              <Link href="/contact" className="text-blue-600 text-sm font-bold hover:underline">Contact Us →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
