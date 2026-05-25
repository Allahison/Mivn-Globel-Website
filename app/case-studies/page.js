import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Case Studies — Mivan Global Ltd",
  description: "Real business results across wholesale, e-commerce, law firms, mobile phone importers, and service businesses. See how Mivan Global Ltd helps businesses connect their systems and scale.",
  keywords: ["case studies Mivan Global", "digital transformation results", "e-commerce success UK", "CRM automation results", "wholesale system results"],
  openGraph: { title: "Case Studies — Mivan Global Ltd", description: "Real systems delivering real outcomes across wholesale, e-commerce, law firms, and service businesses.", url: "https://mivn-globel-website.vercel.app/case-studies" },
};

const useCases = [
  {
    industry: 'Wholesale Importer',
    sub: 'B2B ordering & inventory visibility',
    badge: 'Systems',
    badgeColor: 'bg-teal-100 text-teal-700',
    icon: '📦',
    accentColor: 'from-teal-600 to-teal-800',
    problem: 'The business was managing stock, customer pricing, and orders manually through spreadsheets, calls, and WhatsApp.',
    solution: 'Connected B2B ordering workflow with live stock visibility, customer pricing, order management, and reporting.',
    result: 'Reduced manual admin, improved stock visibility, and cleaner ordering process for customers and staff.',
    features: ['B2B ORDERING PORTAL', 'LIVE STOCK CATALOGUE', 'CUSTOMER PRICING', 'ORDER REPORTING'],
    href: '/industries/wholesale-importers',
  },
  {
    industry: 'E-commerce Seller',
    sub: 'Multi-channel marketplace operations',
    badge: 'Operations',
    badgeColor: 'bg-blue-100 text-blue-700',
    icon: '🏪',
    accentColor: 'from-blue-600 to-blue-800',
    problem: 'Sales were spread across TikTok Shop, eBay, and WooCommerce with no central system for stock, orders, or support.',
    solution: 'Centralised marketplace operations with stock sync, dispatch workflows, customer support templates, and profit reporting.',
    result: 'Improved marketplace control, faster dispatch, better customer support, and clearer profit visibility.',
    features: ['STOCK SYNC', 'DISPATCH WORKFLOWS', 'CUSTOMER SUPPORT', 'PROFIT REPORTING'],
    href: '/industries/ecommerce-operators',
  },
  {
    industry: 'Law Firm',
    sub: 'Lead capture & client automation',
    badge: 'Automation',
    badgeColor: 'bg-violet-100 text-violet-700',
    icon: '⚖️',
    accentColor: 'from-violet-600 to-violet-800',
    problem: 'Enquiries were coming in through various channels but follow-up was slow and client intake was handled manually.',
    solution: 'Automated enquiry capture, consultation booking, client intake forms, WhatsApp reminders, and CRM pipeline.',
    result: 'Faster lead response, improved consultation bookings, and reduced admin for the intake team.',
    features: ['LEAD CAPTURE', 'BOOKING AUTOMATION', 'CLIENT INTAKE', 'CRM PIPELINE'],
    href: '/industries/law-firms',
  },
  {
    industry: 'Mobile Phone Reseller',
    sub: 'IMEI tracking & device management',
    badge: 'Software',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    icon: '📱',
    accentColor: 'from-cyan-600 to-cyan-800',
    problem: 'Devices were tracked in spreadsheets with no IMEI-level visibility, grading system, or dealer ordering process.',
    solution: 'Custom system with IMEI tracking, device grading, warranty workflows, dealer portal, and marketplace listing support.',
    result: 'Improved stock visibility, faster device processing, and a cleaner dealer ordering experience.',
    features: ['IMEI TRACKING', 'DEVICE GRADING', 'DEALER PORTAL', 'WARRANTY WORKFLOWS'],
    href: '/industries/mobile-phone-importers',
  },
  {
    industry: 'Dropshipping Network',
    sub: 'Wholesale inventory + reseller connection',
    badge: 'Network',
    badgeColor: 'bg-teal-100 text-teal-700',
    icon: '🔗',
    accentColor: 'from-teal-600 to-teal-800',
    problem: 'A wholesaler had strong stock but limited online sales channels and no way to share inventory with approved resellers.',
    solution: 'Dropshipping inventory system connecting wholesaler stock with approved online sellers and marketplace operators.',
    result: 'Increased product exposure, more sales channels, and improved stock movement without extra manual work.',
    features: ['LIVE STOCK FEED', 'RESELLER APPROVALS', 'ORDER FORWARDING', 'CATALOGUE SHARING'],
    href: '/services/dropshipping-inventory-network',
  },
  {
    industry: 'Service Business',
    sub: 'CRM automation & booking system',
    badge: 'CRM',
    badgeColor: 'bg-orange-100 text-orange-700',
    icon: '🛠️',
    accentColor: 'from-orange-600 to-orange-800',
    problem: 'Enquiries were not being followed up consistently, appointments were booked manually, and the team had no clear pipeline view.',
    solution: 'CRM pipeline with WhatsApp automation, booking calendar, follow-up sequences, and team notification workflows.',
    result: 'Faster lead response, more bookings, reduced manual admin, and a clearer view of pipeline and conversion.',
    features: ['CRM PIPELINE', 'WHATSAPP AUTOMATION', 'BOOKING CALENDAR', 'FOLLOW-UP WORKFLOWS'],
    href: '/industries/service-businesses',
  },
];

const methodology = [
  { icon: '🔍', tag: 'AUDIT', tagColor: 'bg-blue-100 text-blue-700', title: 'AUDIT & UNDERSTAND', highlight: null, desc: 'We map current processes, systems, team responsibilities, and growth goals before recommending anything.' },
  { icon: '⚙️', tag: 'DESIGN', tagColor: 'bg-violet-100 text-violet-700', title: 'DESIGN THE SYSTEM', highlight: null, desc: 'We design a practical digital workflow around your actual business — not a generic template.' },
  { icon: '🛠️', tag: 'BUILD', tagColor: 'bg-teal-100 text-teal-700', title: 'BUILD & INTEGRATE', highlight: 'CONNECTED SYSTEMS THAT SCALE', desc: 'We build and connect CRM, portals, dashboards, and integrations around your business needs.' },
  { icon: '📈', tag: 'IMPROVE', tagColor: 'bg-orange-100 text-orange-700', title: 'IMPROVE & SCALE', highlight: null, desc: 'We review performance and improve the system as your business grows — we do not disappear after launch.' },
];

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-gray-950 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/85 via-gray-950/65 to-gray-950/35" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Work We Have Done</p>
              <h1 className="hero-anim-2 text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
                INDUSTRIES WE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">HAVE HELPED.</span>
              </h1>
              <p className="hero-anim-3 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                Real systems delivering real outcomes — across wholesale, e-commerce, law firms, mobile phone importers, and service businesses.
              </p>
            </div>
          </div>
        </section>

        {/* ── CASE STUDY CARDS ── */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-2">Anonymised Examples</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">HOW WE HAVE HELPED BUSINESSES.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <ScrollReveal key={uc.industry} delay={i * 80}>
                  <Link
                    href={uc.href}
                    className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white block h-full flex flex-col"
                  >
                    <div className={`h-1 w-full bg-gradient-to-r ${uc.accentColor}`} />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{uc.icon}</span>
                          <div>
                            <h3 className="text-gray-900 font-black text-lg group-hover:text-blue-600 transition-colors leading-tight">{uc.industry}</h3>
                            <p className="text-gray-400 text-xs mt-0.5">{uc.sub}</p>
                          </div>
                        </div>
                        <span className={`inline-block text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded flex-shrink-0 ${uc.badgeColor}`}>{uc.badge}</span>
                      </div>
                      <div className="space-y-3 mb-5 flex-1">
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Problem</p>
                          <p className="text-gray-600 text-xs leading-relaxed">{uc.problem}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Solution</p>
                          <p className="text-gray-600 text-xs leading-relaxed">{uc.solution}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Result</p>
                          <p className="text-gray-700 text-xs leading-relaxed font-medium">{uc.result}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {uc.features.map((f) => (
                          <span key={f} className="bg-gray-950 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg">{f}</span>
                        ))}
                      </div>
                      <div className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                        View Industry Solutions
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">WHY OUR CLIENTS GET RESULTS.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {methodology.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 100}>
                  <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:bg-white transition-all duration-300 group flex gap-5 h-full">
                    <div className="text-3xl flex-shrink-0 mt-1">{m.icon}</div>
                    <div className="flex-1">
                      <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded mb-3 ${m.tagColor}`}>{m.tag}</span>
                      <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-blue-600 transition-colors">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{m.desc}</p>
                      {m.highlight && <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg w-fit">{m.highlight}</div>}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="READY TO BUILD YOUR SUCCESS STORY?"
          desc="Let's review your current workflow and show you how connected digital systems can improve your business."
          primaryLabel="Book a Free Consultation"
          primaryHref="/contact"
          secondaryLabel="Explore Our Services"
          secondaryHref="/services/crm-automation"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
