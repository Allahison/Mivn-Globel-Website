import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "E-commerce Operations Management UK | Mivan Global Ltd",
  description: "Mivan Global Ltd helps e-commerce businesses manage multi-channel operations across TikTok Shop, eBay, Amazon, and WooCommerce — with stock sync, dispatch workflows, customer support, and profit reporting.",
  keywords: ["e-commerce operations UK", "marketplace management", "TikTok Shop operations", "eBay management", "multi-channel stock sync", "Mivan Global Ltd"],
  openGraph: { title: "E-commerce Operations — Mivan Global Ltd", description: "Sell across more channels without losing control. E-commerce operations for UK online sellers.", url: "https://mivn-globel-website.vercel.app/services/ecommerce-operations" },
};

const highlights = [
  { num: '01', title: 'LISTING MANAGEMENT', desc: 'Product listings created, maintained, and optimised across platforms with consistent titles, descriptions, and pricing.' },
  { num: '02', title: 'STOCK SYNC', desc: 'Real-time stock synchronisation across all your sales channels — preventing overselling and keeping inventory accurate.' },
  { num: '03', title: 'DISPATCH WORKFLOWS', desc: 'Structured dispatch processes that keep fulfilment fast, accurate, and consistent as order volumes grow.' },
  { num: '04', title: 'PROFIT REPORTING', desc: 'Clear reporting on which channels, products, and promotions are generating profit — not just revenue.' },
];

const operations = [
  { tag: 'LISTINGS', tagColor: 'bg-blue-100 text-blue-700', title: 'Listing Management', desc: 'Product listings created and maintained across TikTok Shop, eBay, Amazon, and WooCommerce with consistent information and pricing.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=75' },
  { tag: 'STOCK', tagColor: 'bg-teal-100 text-teal-700', title: 'Stock Sync Across Channels', desc: 'Real-time inventory synchronisation across all your marketplaces — preventing overselling and eliminating manual stock checks.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75' },
  { tag: 'SUPPORT', tagColor: 'bg-orange-100 text-orange-700', title: 'Customer Support Workflows', desc: 'Structured response workflows, templates, and message management that keep response times fast and ratings protected.', image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&q=75' },
  { tag: 'DISPATCH', tagColor: 'bg-green-100 text-green-700', title: 'Dispatch & Fulfilment', desc: 'Organised dispatch workflows that reduce errors, speed up packing, and keep your late dispatch rate low.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75' },
  { tag: 'PROMOTIONS', tagColor: 'bg-violet-100 text-violet-700', title: 'Promotions & Deals', desc: 'Planning and executing deals, vouchers, and bundle offers to drive volume during peak periods without cutting margins blindly.', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=75' },
  { tag: 'REPORTING', tagColor: 'bg-cyan-100 text-cyan-700', title: 'Profit & Channel Reporting', desc: 'Consolidated reporting on sales, costs, and profit across all channels — so you know what is actually working.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75' },
];

const platforms = ['TikTok Shop', 'eBay', 'Amazon', 'WooCommerce', 'Shopify', 'Etsy'];

export default function EcommerceOperations() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">E-commerce Operations &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  SELL ACROSS MORE CHANNELS
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WITHOUT LOSING CONTROL.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We help online sellers manage the operational side of multi-channel e-commerce — stock sync, dispatch
                  workflows, customer support, and profit reporting across TikTok Shop, eBay, Amazon, and WooCommerce.
                </p>
                <p className="hero-anim-3 text-gray-500 text-sm leading-relaxed max-w-xl mb-10">
                  If you buy stock from a wholesaler, we can also connect you to their live inventory through the
                  dropshipping network — removing the need to hold stock yourself.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Streamline My Operations</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Book a Free Consultation</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85" alt="E-commerce marketplace operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-blue-600/90 backdrop-blur-md border border-blue-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">Multi-Channel Operations</div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mt-1">Stock · Dispatch · Support · Profit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NUMBERED HIGHLIGHTS ── */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
              {highlights.map((h, i) => (
                <ScrollReveal key={h.num} delay={i * 100}>
                  <div className="p-8 hover:bg-gray-100 transition-colors duration-300 group h-full">
                    <div className="text-blue-500 font-black text-4xl mb-5 opacity-60 group-hover:opacity-100 transition-opacity">{h.num}.</div>
                    <h3 className="text-gray-900 font-bold text-sm uppercase tracking-widest mb-3">{h.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPERATIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Handle</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">EVERYTHING WE<span className="block">MANAGE FOR YOU.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {operations.map((op, i) => (
                <ScrollReveal key={op.title} delay={i * 80}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={op.image} alt={op.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/30" />
                      <span className={`absolute top-3 left-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${op.tagColor}`}>{op.tag}</span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-blue-600 transition-colors">{op.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{op.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORMS ── */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">Platforms We Work With</p>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((p) => (
                <span key={p} className="bg-white text-gray-700 font-bold px-6 py-2.5 rounded-xl text-sm border border-gray-200 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">{p}</span>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Scale?"
          heading="SELL MORE ACROSS MORE CHANNELS."
          desc="Let's review your current operations and build the workflows, stock control, and reporting your e-commerce business needs to grow."
          primaryLabel="Streamline My Operations"
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
