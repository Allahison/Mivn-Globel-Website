import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Wholesale & Importer Digital Solutions — Inventory & Supply Chain",
  description: "Real-time inventory management, automated purchase orders, supplier portals, and import logistics tools for wholesale businesses and importers.",
  keywords: ["wholesale management software", "importer tools", "inventory management", "purchase order automation", "supplier portal", "supply chain software"],
  openGraph: { title: "Wholesale & Importer Solutions — Mivan Global Suite", description: "Real-time inventory, automated POs, and supplier portals for wholesale businesses.", url: "https://mivn-globel-website.vercel.app/industries/wholesale-importers" },
};

const solutions = [
  { tag: 'INVENTORY', tagColor: 'bg-blue-100 text-blue-700', title: 'Inventory Management', desc: 'Real-time stock tracking across multiple warehouses with automated reorder alerts.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75' },
  { tag: 'LOGISTICS', tagColor: 'bg-teal-100 text-teal-700', title: 'Import & Logistics', desc: 'Track shipments, manage customs documentation, and coordinate with suppliers seamlessly.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75' },
  { tag: 'ORDERS', tagColor: 'bg-orange-100 text-orange-700', title: 'Purchase Orders', desc: 'Automated PO generation, approval workflows, and supplier management all in one place.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75' },
  { tag: 'PRICING', tagColor: 'bg-green-100 text-green-700', title: 'Pricing & Margins', desc: 'Dynamic pricing tools that account for import costs, duties, and desired margins automatically.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75' },
  { tag: 'SUPPLIERS', tagColor: 'bg-violet-100 text-violet-700', title: 'Supplier Portal', desc: 'Online portal for suppliers to submit invoices, track payment status, and manage orders.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75' },
  { tag: 'ANALYTICS', tagColor: 'bg-rose-100 text-rose-700', title: 'Sales Analytics', desc: 'Detailed reports on best-selling products, seasonal trends, and buyer behaviour patterns.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75' },
];

export default function WholesaleImporters() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Industries · Wholesale &amp; Importers</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  BUILT FOR
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">WHOLESALE.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Powerful tools for wholesale businesses and importers — manage your inventory,
                  suppliers, and sales channels from one central platform.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Talk to Us</Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">View Case Studies</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=85" alt="Wholesale warehouse inventory management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">Real-Time Sync</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mt-1">Across All Warehouses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Solutions</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">STREAMLINE YOUR<span className="block">SUPPLY CHAIN.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/30" />
                      <span className={`absolute top-3 left-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${s.tagColor}`}>{s.tag}</span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST BANNER ── */}
        <section className="bg-gray-100 py-14 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200 rounded-2xl px-10 py-8 bg-white shadow-sm">
                <div>
                  <p className="text-gray-900 font-black text-xl">Trusted by wholesale businesses across the region.</p>
                  <p className="text-gray-600 text-sm mt-1">From solo importers to large multi-warehouse distributors.</p>
                </div>
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all flex-shrink-0">
                  Streamline Your Business
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection
          heading="STREAMLINE YOUR WHOLESALE BUSINESS"
          desc="Let us build the digital backbone your wholesale operation needs."
          primaryLabel="Get Started"
          primaryHref="/contact"
          secondaryLabel="View Case Studies"
          secondaryHref="/case-studies"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
