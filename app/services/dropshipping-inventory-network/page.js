import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Dropshipping Inventory Network for Wholesalers UK | Mivan Global Ltd",
  description: "Mivan Global Ltd helps wholesalers connect live inventory with approved dropshippers and online sellers through automated stock feeds, product catalogues, and order workflows.",
  keywords: ["dropshipping inventory network UK", "wholesale dropshipping system", "dropshipper stock feed", "wholesaler reseller network", "Mivan Global Ltd"],
  openGraph: { title: "Dropshipping Inventory Network — Mivan Global Ltd", description: "Connect wholesale stock with approved dropshippers and online sellers using live stock feeds, catalogues, and order automation.", url: "https://mivn-globel-website.vercel.app/services/dropshipping-inventory-network" },
};

const coreFeatures = [
  { icon: '📡', title: 'Live Stock API', desc: 'Automatically share stock availability with approved sellers so they always have accurate inventory data.' },
  { icon: '📋', title: 'Product Catalogue Feed', desc: 'Provide product titles, descriptions, images, barcodes, pack sizes, case quantities, prices, and availability.' },
  { icon: '✅', title: 'Approved Reseller Accounts', desc: 'Allow wholesalers to approve, reject, suspend, or manage resellers with full control over who can access your products.' },
  { icon: '💰', title: 'Pricing Control', desc: 'Set wholesale pricing, reseller pricing, margin guidance, and minimum advertised pricing where required.' },
  { icon: '🔄', title: 'Order Forwarding', desc: 'Allow reseller orders to be sent back to the wholesaler for processing and fulfilment automatically.' },
  { icon: '🛡️', title: 'Stock Buffer Rules', desc: 'Protect stock accuracy and reduce overselling by using safety buffers and real-time inventory updates.' },
  { icon: '🏪', title: 'Marketplace Channel Support', desc: 'Support workflows for eBay, TikTok Shop, Amazon, WooCommerce, Shopify, and other sales channels.' },
  { icon: '📊', title: 'Reporting Dashboard', desc: 'Track reseller sales, product performance, stock movement, order volume, and fulfilment status.' },
];

const wholesalerBenefits = [
  'Increase product exposure across more channels',
  'Create extra sales from existing stock',
  'Reduce slow-moving stock',
  'Reach more marketplace sellers',
  'Keep control of pricing and fulfilment',
  'Avoid manually sending stock files',
  'Track reseller performance',
  'Grow sales without extra warehouse staff',
];

const dropshipperBenefits = [
  'Access ready-to-sell products without upfront stock',
  'View approved product catalogue with live stock',
  'Access product images and descriptions',
  'List products on marketplaces',
  'Send orders to the wholesaler for fulfilment',
  'Receive tracking updates automatically',
  'Focus on sales and marketing',
  'Reduce risk of unsold stock',
];

export default function DropshippingInventoryNetwork() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-teal-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Dropshipping Inventory Network &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  CONNECT WHOLESALE STOCK
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">WITH ONLINE SELLERS.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd is developing a dropshipping inventory system that allows wholesalers to make selected
                  products available to approved online sellers, resellers, and marketplace operators — while keeping full
                  control of stock, pricing, fulfilment, and product availability.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-teal-600/20">Build a Dropshipping Network</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Discuss Inventory Integration</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[540px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85" alt="Dropshipping inventory network and wholesale" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-teal-600/90 backdrop-blur-md border border-teal-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">Inventory Network</div>
                    <div className="text-teal-200 text-xs font-semibold uppercase tracking-widest mt-1">Wholesalers + Sellers Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-3xl mb-12">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Problem</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">STOCK SITTING IN ONE CHANNEL. SELLERS NEEDING PRODUCTS.</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Wholesale stock often sits inside one warehouse, one catalogue, or one sales channel. At the same
                time, online sellers need products to list but do not always want to buy stock upfront.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                The Mivan Global dropshipping inventory model connects both sides: wholesalers share approved
                inventory, and sellers list those products across marketplaces while orders flow back to the
                wholesaler for fulfilment.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FOR WHOLESALERS & DROPSHIPPERS ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 border border-teal-100 h-full">
                  <div className="text-3xl mb-4">🏭</div>
                  <h3 className="text-gray-900 font-black text-2xl mb-3">For Wholesalers</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Increase sales from existing stock by allowing approved sellers to promote and sell your products.
                    You stay in full control of which products are available, who can access them, pricing, fulfilment, and product data.
                  </p>
                  <ul className="space-y-2">
                    {wholesalerBenefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl p-8 border border-blue-100 h-full">
                  <div className="text-3xl mb-4">🛒</div>
                  <h3 className="text-gray-900 font-black text-2xl mb-3">For Dropshippers</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Access ready-to-sell products without buying stock upfront. List products across marketplaces,
                    send orders to the wholesaler, and focus on sales and marketing.
                  </p>
                  <ul className="space-y-2">
                    {dropshipperBenefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── CORE FEATURES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Core System Features</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">HOW THE NETWORK WORKS.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreFeatures.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:bg-gray-50 transition-all duration-300 group h-full">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <h3 className="text-gray-900 font-black text-base mb-2 group-hover:text-teal-600 transition-colors">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Connect?"
          heading="TURN YOUR WHOLESALE STOCK INTO A DROPSHIPPING NETWORK."
          desc="Let's connect your live inventory with approved sellers while keeping control of stock, pricing, and fulfilment."
          primaryLabel="Discuss Dropshipping Automation"
          primaryHref="/contact"
          secondaryLabel="Contact Mivan Global"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
