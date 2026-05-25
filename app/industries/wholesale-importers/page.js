import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "B2B Systems for Wholesale Importers UK | Mivan Global Ltd",
  description: "Mivan Global Ltd helps wholesale importers digitise their operations with B2B ordering portals, live stock catalogues, customer pricing, PO tracking, and dropshipping inventory networks.",
  keywords: ["wholesale importer UK", "B2B ordering portal", "live stock catalogue", "wholesale digital system", "importer software UK", "Mivan Global Ltd"],
  openGraph: { title: "Wholesale & Importers — Mivan Global Ltd", description: "Live stock, faster orders, and better control for wholesale importers and B2B businesses.", url: "https://mivn-globel-website.vercel.app/industries/wholesale-importers" },
};

const problems = [
  'Customers calling or messaging to check stock availability manually',
  'Outdated price lists shared by email or PDF causing pricing errors',
  'Stock levels not visible in real time across the team',
  'Purchase orders tracked in spreadsheets with no clear status',
  'Credit notes and statements difficult to manage and share with customers',
  'Short-date or clearance products slow to promote and move',
  'Marketplace and wholesale stock not connected — overselling or discrepancies',
  'No way to share live inventory with approved dropship resellers',
];

const solutions = [
  { icon: '🛒', title: 'B2B Ordering Portal', desc: 'A self-service portal where your trade customers can view live stock, check their pricing, place orders, and download invoices without calling you.' },
  { icon: '📦', title: 'Live Stock Catalogue', desc: 'A real-time product catalogue that shows stock levels, product details, and availability — updated automatically as stock moves.' },
  { icon: '💷', title: 'Customer-Specific Pricing', desc: 'Set different price tiers for different customers or account groups, applied automatically when they log in and browse.' },
  { icon: '👤', title: 'Trade Account Dashboards', desc: 'Give each customer their own login to see their order history, outstanding invoices, credit notes, and account statement.' },
  { icon: '📋', title: 'Purchase Order Tracking', desc: 'Track inbound stock orders from suppliers with clear status — ordered, in transit, received, and put away.' },
  { icon: '🧑‍💼', title: 'Sales Rep Tools', desc: 'Allow your sales team to place orders on behalf of customers, apply discounts, and manage relationships from one system.' },
  { icon: '📊', title: 'Credit & Statement Reporting', desc: 'Automated credit notes and account statements that customers can access themselves — reducing admin queries.' },
  { icon: '🔗', title: 'Dropshipping Inventory Network', desc: 'Connect your wholesale stock with approved online sellers — share live inventory and process their orders automatically.' },
];

export default function WholesaleImporters() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-teal-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Wholesale & Importers &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  LIVE STOCK.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">FASTER ORDERS.</span>
                  <span className="block text-white/80 text-4xl md:text-5xl mt-1">BETTER CONTROL.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd helps wholesale importers move away from manual processes — building B2B ordering portals,
                  live stock catalogues, customer pricing systems, and dropshipping inventory networks.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-teal-600/20">Digitise My Wholesale Operation</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Build a B2B Portal</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85" alt="Wholesale warehouse and inventory management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMS ── */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Common Problems We Solve</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">DOES THIS SOUND FAMILIAR?</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4">
                    <span className="text-red-400 font-black text-sm flex-shrink-0 mt-0.5">✕</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">HOW WE HELP<span className="block">WHOLESALE BUSINESSES.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:bg-gray-50 transition-all duration-300 group h-full flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-teal-600 transition-colors">{s.title}</h3>
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
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Outcome</p>
              <h2 className="text-4xl font-black text-gray-900">YOUR WHOLESALE OPERATION RUNS<span className="block text-gray-500">WITH LESS MANUAL WORK.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { icon: '📦', title: 'Customers Self-Serve', desc: 'Trade customers view stock, check pricing, and place orders themselves — without calling or messaging your team.' },
                { icon: '🔄', title: 'Stock Always Accurate', desc: 'Live stock levels visible across your team and your customers — no more overselling or out-of-date information.' },
                { icon: '🔗', title: 'More Sales Channels', desc: 'Connect your stock with online sellers through the dropshipping network — moving more product without more admin.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-teal-300 hover:shadow-md transition-all duration-300 group">
                    <div className="text-4xl mb-5">{item.icon}</div>
                    <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Modernise?"
          heading="DIGITISE YOUR WHOLESALE OPERATION."
          desc="Let's build a B2B ordering portal, live stock catalogue, and pricing system that makes your business easier to run."
          primaryLabel="Digitise My Wholesale Operation"
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
