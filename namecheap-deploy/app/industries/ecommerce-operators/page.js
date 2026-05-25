import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "E-commerce Operations for Online Sellers UK | Mivan Global Ltd",
  description: "Mivan Global Ltd helps e-commerce operators manage multi-channel sales across TikTok Shop, eBay, and WooCommerce — with stock sync, dispatch workflows, customer support, and profit reporting.",
  keywords: ["e-commerce operations UK", "TikTok Shop management", "eBay seller tools", "multi-channel ecommerce", "stock sync marketplace", "Mivan Global Ltd"],
  openGraph: { title: "E-commerce Operators — Mivan Global Ltd", description: "Grow online sales without operational chaos. Multi-channel e-commerce operations for UK sellers.", url: "https://mivn-globel-website.vercel.app/industries/ecommerce-operators" },
};

const solutions = [
  { icon: '🔄', title: 'Stock Sync Across Channels', desc: 'Keep stock levels accurate across TikTok Shop, eBay, WooCommerce, and Amazon — preventing overselling and manual corrections.' },
  { icon: '📦', title: 'Dispatch Workflows', desc: 'Structured dispatch processes that keep your fulfilment fast, accurate, and consistent as order volumes grow.' },
  { icon: '💬', title: 'Customer Support Templates', desc: 'Pre-built response templates for common queries, returns, and complaints — reducing the time spent on repetitive messages.' },
  { icon: '📊', title: 'Profit & Channel Reporting', desc: 'Clear reporting on which products, channels, and promotions are generating profit — not just revenue.' },
  { icon: '🏪', title: 'Listing Management', desc: 'Product listings created and maintained across platforms with consistent titles, descriptions, and pricing.' },
  { icon: '⭐', title: 'Review & Feedback Management', desc: 'Processes for requesting reviews, responding to feedback, and maintaining strong seller ratings across marketplaces.' },
  { icon: '🔗', title: 'Wholesale Stock Connection', desc: 'If you sell products from a wholesale supplier, connect directly to their live inventory through the dropshipping network.' },
  { icon: '🛒', title: 'Returns & Refund Handling', desc: 'Clear returns workflows that handle refund requests consistently, protecting seller performance metrics.' },
];

const platforms = ['TikTok Shop', 'eBay', 'WooCommerce', 'Amazon', 'Shopify', 'Etsy'];

export default function EcommerceOperators() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">E-commerce Operators &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  GROW ONLINE SALES
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WITHOUT THE CHAOS.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd helps e-commerce operators manage multi-channel sales with stock sync, dispatch workflows,
                  customer support, and profit reporting — so you can scale without losing control.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Streamline My Operations</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Book a Free Consultation</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=85" alt="E-commerce online store and marketplace operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLATFORMS ── */}
        <section className="bg-gray-50 py-14 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">Marketplaces & Platforms We Work With</p>
              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((p) => (
                  <span key={p} className="bg-white text-gray-700 font-bold px-6 py-2.5 rounded-xl text-sm border border-gray-200 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors">{p}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Help With</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">HOW WE HELP<span className="block">ONLINE SELLERS.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group h-full flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-blue-600 transition-colors">{s.title}</h3>
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
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Outcome</p>
              <h2 className="text-4xl font-black text-gray-900">YOUR STORE RUNS SMOOTHLY<span className="block text-gray-500">ACROSS EVERY CHANNEL.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { icon: '🔄', title: 'Accurate Stock Everywhere', desc: 'Stock levels stay consistent across all platforms — preventing overselling and the customer complaints that come with it.' },
                { icon: '📦', title: 'Faster Dispatch', desc: 'Structured dispatch workflows mean orders are picked, packed, and shipped faster — protecting your seller ratings.' },
                { icon: '📊', title: 'Clear Profit View', desc: 'You can see which channels and products are actually making money — not just which ones have the most orders.' },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
                    <div className="text-4xl mb-5">{item.icon}</div>
                    <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Scale?"
          heading="SELL ACROSS MORE CHANNELS WITHOUT LOSING CONTROL."
          desc="Let's build the operations, workflows, and reporting that allow your e-commerce business to grow without the growing pains."
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
