import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Custom Systems for Mobile Phone Importers UK | Mivan Global Ltd",
  description: "Mivan Global Ltd builds IMEI tracking systems, device grading workflows, dealer portals, warranty management, and marketplace listing tools for mobile phone importers and resellers.",
  keywords: ["mobile phone importer UK", "IMEI tracking system", "device grading software", "dealer portal mobile phones", "warranty management system", "Mivan Global Ltd"],
  openGraph: { title: "Mobile Phone Importers — Mivan Global Ltd", description: "Track every device from import to resale with IMEI tracking, grading, and dealer portals.", url: "https://mivn-globel-website.vercel.app/industries/mobile-phone-importers" },
};

const solutions = [
  { icon: '📱', title: 'IMEI Tracking', desc: 'Track every device by IMEI from the point of import through grading, storage, sale, and warranty — with full accountability.' },
  { icon: '⭐', title: 'Device Grading System', desc: 'Structured grading workflows that assess condition, record cosmetic and functional status, and assign a consistent grade to each device.' },
  { icon: '🛒', title: 'Dealer Ordering Portal', desc: 'A self-service portal where approved dealers can browse graded stock, view pricing, place orders, and track deliveries.' },
  { icon: '🔧', title: 'Warranty & Repair Workflows', desc: 'Manage warranty claims, repair requests, and device returns — tracking status at every stage and keeping customers informed.' },
  { icon: '🏪', title: 'Marketplace Listing Support', desc: 'Export device listings with condition, specs, and pricing to eBay, Back Market, and other platforms from a central system.' },
  { icon: '💷', title: 'Dealer Pricing & Tiers', desc: 'Set different pricing structures for different dealer account types, applied automatically when they order.' },
  { icon: '📦', title: 'Stock & Batch Management', desc: 'Manage incoming stock batches, track which devices are graded, available, reserved, or sold across your operation.' },
  { icon: '📊', title: 'Reporting Dashboard', desc: 'See stock levels, grading throughput, dealer sales, and margin per device in one clear reporting view.' },
];

export default function MobilePhoneImporters() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Mobile Phone Importers &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  TRACK EVERY DEVICE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">FROM IMPORT TO RESALE.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd builds custom systems for mobile phone importers — IMEI tracking, device grading,
                  dealer portals, warranty workflows, and marketplace listing tools all connected in one place.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-cyan-600/20">Build My Device Tracking System</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Book a Free Consultation</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=85" alt="Mobile phone import business and device management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-cyan-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">SYSTEMS FOR MOBILE<span className="block">PHONE BUSINESSES.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:bg-gray-50 transition-all duration-300 group h-full flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-cyan-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULT ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-12 text-center">
              <p className="text-cyan-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Outcome</p>
              <h2 className="text-4xl font-black text-gray-900">YOUR IMPORT BUSINESS<span className="block text-gray-500">RUNS WITH FULL VISIBILITY.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { icon: '📱', title: 'Every Device Accounted For', desc: 'IMEI-level tracking means you always know where each device is — from the batch it arrived in to who it was sold to.' },
                { icon: '🛒', title: 'Dealers Order Themselves', desc: 'Approved dealers browse graded stock, check pricing, and place their own orders — without needing to call or message you.' },
                { icon: '🔧', title: 'Warranty Handled Cleanly', desc: 'Warranty claims and repair requests are managed in a structured workflow — not through scattered emails and WhatsApp messages.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-cyan-300 hover:shadow-md transition-all duration-300 group">
                    <div className="text-4xl mb-5">{item.icon}</div>
                    <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Build?"
          heading="BUILD A SYSTEM AROUND YOUR IMPORT OPERATION."
          desc="Let's discuss your current workflow and design a tracking, grading, and dealer system that fits how your business actually works."
          primaryLabel="Build My Device Tracking System"
          primaryHref="/contact"
          secondaryLabel="Book a Free Consultation"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
