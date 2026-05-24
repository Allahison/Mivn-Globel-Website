import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

const highlights = [
  { num: '01', title: 'LISTING OPTIMISATION', desc: 'We create high-converting product pages with SEO-friendly titles, bullet points, and professional imagery ensuring maximum visibility across all channels.' },
  { num: '02', title: 'STOCK & DISPATCH SYNC', desc: 'Advanced logic prevents overselling and ensures 100% accurate dispatch performance to protect your account health and feedback score.' },
  { num: '03', title: 'STRATEGIC PROMOTIONS', desc: 'We plan and execute deals, vouchers, and bundle offers strategically to drive volume during peak trading periods like Black Friday.' },
  { num: '04', title: 'UNIFIED SUPPORT', desc: 'Centralised dashboards for customer messaging and returns handling allow us to drastically reduce response times and improve customer satisfaction.' },
];

const operations = [
  { tag: 'GROWTH', tagColor: 'bg-green-100 text-green-700', title: 'Listing Optimisation', desc: 'We create high-converting product pages with SEO-friendly titles, bullet points, and enhanced imagery to ensure maximum visibility on Amazon and eBay.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=75' },
  { tag: 'OPERATIONS', tagColor: 'bg-blue-100 text-blue-700', title: 'Inventory Sync Logic', desc: 'Real-time stock synchronisation across all your channels (TikTok, Amazon, eBay) to prevent overselling and eliminate manual stock checks.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75' },
  { tag: 'EFFICIENCY', tagColor: 'bg-purple-100 text-purple-700', title: 'Customer Support', desc: 'Unified support workflows that route messages from all platforms into one inbox, prioritising urgent queries to reduce response times.', image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&q=75' },
  { tag: 'COMPLIANCE', tagColor: 'bg-red-100 text-red-700', title: 'Performance Protection', desc: 'We strictly monitor dispatch performance and policy compliance to prevent "Late Dispatch" rates and protect your seller privileges.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75' },
  { tag: 'STRATEGY', tagColor: 'bg-orange-100 text-orange-700', title: 'Strategic Promotions', desc: 'We plan and execute lightning deals, vouchers, and multi-buy offers strategically to drive volume during peak trading periods.', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=75' },
  { tag: 'INSIGHTS', tagColor: 'bg-teal-100 text-teal-700', title: 'Data & Reporting', desc: 'Clear, consolidated reporting on profit, loss, and channel performance, giving you total visibility without the need for spreadsheets.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75' },
];

const advantages = [
  { icon: '🌐', title: 'MULTI-CHANNEL STRATEGY', subtitle: "We don't just maintain your current sales; we actively identify gaps in the market to expand your footprint.", points: ['Competitor Analysis & Tracking', 'New Marketplace Launches (eBay/TikTok)', 'Trend Forecasting'] },
  { icon: '⚙️', title: 'AUTOMATED SYSTEMS', subtitle: 'We replace fragile spreadsheets with robust, API-connected workflows that eliminate human error.', points: ['Real-time API Integrations', 'Automated Stock Buffers', 'Zero Manual Data Entry'] },
  { icon: '🛡️', title: 'RISK MITIGATION', subtitle: 'Your account health is your biggest asset. We proactively monitor metrics to prevent suspensions before they happen.', points: ['Policy Compliance Checks', 'Late Dispatch Prevention', 'Negative Feedback Removal'] },
  { icon: '💰', title: 'COST EFFICIENCY', subtitle: 'Scale your order volume significantly without needing to hire more administrative staff.', points: ['Reduced Overhead Costs', 'Streamlined Dispatch Flows', 'Higher Profit Margins'] },
];

const platforms = ['Shopify', 'WooCommerce', 'Amazon', 'Daraz', 'eBay', 'Noon', 'TikTok Shop'];

export default function EcommerceOperations() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── Split */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">E-commerce Operations · Complete Management</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  DOMINATE EVERY
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">MARKETPLACE.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We handle the complex operations of selling on Amazon, eBay, TikTok Shop. From listing
                  optimisation to real-time stock synchronisation, we ensure your business scales without the manual headaches.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Get Started Today</Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">View Case Studies</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85" alt="E-commerce marketplace operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">Amazon · eBay · TikTok</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mt-1">All Channels Managed</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
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

        {/* ── OPERATIONAL EXCELLENCE ── Cards with images */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Operational Excellence</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">EVERYTHING WE<span className="block">HANDLE FOR YOU.</span></h2>
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
                      <button className="mt-5 text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:gap-3 transition-all duration-200 w-fit">
                        Learn More <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                      </button>
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

        {/* ── MIVAN ADVANTAGE ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Mivan Advantage</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">SCALABLE INFRASTRUCTURE<span className="block text-gray-500">FOR MODERN SELLERS.</span></h2>
                <p className="text-gray-600 text-lg mb-8">Stop worrying about account health and manual data entry. We build the systems that allow you to sleep at night while your store keeps selling.</p>
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Get a Free Consultation</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {advantages.map((adv, i) => (
                  <ScrollReveal key={adv.title} delay={i * 100}>
                    <div className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group h-full">
                      <div className="text-2xl mb-4">{adv.icon}</div>
                      <h3 className="text-gray-900 font-black text-sm uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors">{adv.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">{adv.subtitle}</p>
                      <ul className="space-y-1.5">
                        {adv.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          heading="READY TO SCALE WITHOUT THE HEADACHES?"
          desc="Let our team take over your marketplace operations and drive real, measurable growth."
          primaryLabel="Get a Free Consultation"
          primaryHref="/contact"
          secondaryLabel="See Our Results"
          secondaryHref="/case-studies"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
