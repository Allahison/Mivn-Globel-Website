import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Wholesale B2B Portal & Inventory Systems UK | Mivan Global Ltd",
  description: "Mivan Global Ltd builds wholesale ordering portals, B2B inventory systems, customer pricing tools, sales rep systems, and stock dashboards for UK wholesalers and importers.",
  keywords: ["wholesale B2B portal UK", "wholesale ordering system", "B2B inventory management", "wholesale software UK", "trade portal", "Mivan Global Ltd"],
  openGraph: { title: "Wholesale & B2B Systems — Mivan Global Ltd", description: "Build wholesale ordering portals, live stock catalogues, customer pricing, and B2B dashboards.", url: "https://mivn-globel-website.vercel.app/services/wholesale-b2b-systems" },
};

const features = [
  { tag: 'ORDERING', tagColor: 'bg-blue-100 text-blue-700', icon: '🛒', title: 'B2B Ordering Portal', desc: 'Allow trade customers to browse products, see live stock, place orders, and access invoices online — replacing phone orders and manual stock checks.' },
  { tag: 'PRICING', tagColor: 'bg-violet-100 text-violet-700', icon: '💰', title: 'Customer-Specific Pricing', desc: 'Create pricing tiers, special rates, account-based discounts, and customer group pricing so each trade customer sees the right price.' },
  { tag: 'CATALOGUE', tagColor: 'bg-teal-100 text-teal-700', icon: '📋', title: 'Live Stock Catalogue', desc: 'Show available products, cases, pallets, short-date items, new arrivals, and promotional stock with real-time availability.' },
  { tag: 'SALES REP', tagColor: 'bg-orange-100 text-orange-700', icon: '👤', title: 'Sales Rep Tools', desc: 'Give sales reps access to customer accounts, order history, live pricing, and order placement tools when visiting customers or working remotely.' },
  { tag: 'PURCHASING', tagColor: 'bg-green-100 text-green-700', icon: '📦', title: 'Purchase Order Planning', desc: 'Track supplier orders, expected arrivals, container loads, cost prices, and reorder requirements to keep stock flowing.' },
  { tag: 'ACCOUNTS', tagColor: 'bg-red-100 text-red-700', icon: '📊', title: 'Credit & Statement Reporting', desc: 'Show outstanding balances, payment history, credit notes, aged balances, and account statements to customers and internal teams.' },
  { tag: 'CLEARANCE', tagColor: 'bg-yellow-100 text-yellow-700', icon: '⚡', title: 'Short-Date Clearance Tools', desc: 'Create clearance catalogues and promotional product lists quickly from selected stock to move short-date or slow-moving items.' },
  { tag: 'DROPSHIPPING', tagColor: 'bg-teal-100 text-teal-700', icon: '🔗', title: 'Dropshipping Integration', desc: 'Allow selected inventory to be made available to approved resellers and dropshippers, extending your sales channels without extra manual work.' },
];

export default function WholesaleB2BSystems() {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-teal-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Wholesale & B2B Systems &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  MAKE WHOLESALE ORDERING
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">FASTER AND CLEANER.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We build digital systems for wholesalers, importers, and distributors who need live stock visibility,
                  customer-specific pricing, faster ordering, better reporting, and stronger control over sales and inventory.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-teal-600/20">Build My Wholesale Portal</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Discuss B2B Requirements</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[540px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85" alt="Wholesale inventory and B2B ordering systems" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-teal-600/90 backdrop-blur-md border border-teal-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">B2B Portal</div>
                    <div className="text-teal-200 text-xs font-semibold uppercase tracking-widest mt-1">Live Stock &middot; Trade Ordering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">WHOLESALE SYSTEMS<span className="block">WE DELIVER.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:bg-gray-50 transition-all duration-300 group h-full flex flex-col">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2 py-0.5 rounded mb-3 w-fit ${f.tagColor}`}>{f.tag}</span>
                    <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-teal-600 transition-colors">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEMS WE SOLVE ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Common Problems We Solve</p>
              <h2 className="text-4xl font-black text-gray-900">IF ANY OF THESE SOUND FAMILIAR.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: '📞', problem: 'Customers call or message for stock manually' },
                { icon: '📄', problem: 'Sales reps use outdated price lists' },
                { icon: '❓', problem: 'Stock is not visible in real time' },
                { icon: '📊', problem: 'Purchase orders are tracked in spreadsheets' },
                { icon: '💳', problem: 'Credit notes and statements are hard to manage' },
                { icon: '⏱️', problem: 'Short-date products are slow to promote' },
                { icon: '🔌', problem: 'Marketplace and wholesale stock are not connected' },
                { icon: '📤', problem: 'Stock cannot easily be shared with dropshippers' },
              ].map((item) => (
                <div key={item.problem} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-teal-300 transition-colors">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <p className="text-gray-700 text-sm font-medium leading-snug">{item.problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Digitise?"
          heading="BUILD A SMARTER WHOLESALE OPERATION."
          desc="Let's replace phone orders, spreadsheets, and manual stock checks with a connected B2B system your customers and team will actually use."
          primaryLabel="Build My Wholesale Portal"
          primaryHref="/contact"
          secondaryLabel="Discuss Requirements"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
