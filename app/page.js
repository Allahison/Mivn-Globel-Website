import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

const services = [
  {
    tag: 'OPERATIONS',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'E-commerce Operations',
    desc: 'Complete management of Amazon, eBay & TikTok Shop — listing optimisation, inventory sync, dispatch, and customer support.',
    href: '/services/ecommerce-operations',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imageAlt: 'E-commerce operations and online shopping',
  },
  {
    tag: 'DEVELOPMENT',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Custom Development',
    desc: 'Bespoke B2B portals, inventory systems, and mobile apps built around your exact operational workflow.',
    href: '/services/custom-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    imageAlt: 'Custom software development and coding',
  },
];

const industries = [
  {
    icon: '⚖️',
    title: 'Law Firms',
    href: '/industries/law-firms',
    desc: 'Client portals, case tracking & digital billing',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    icon: '📦',
    title: 'Wholesale & Importers',
    href: '/industries/wholesale-importers',
    desc: 'Inventory, supplier & PO management',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  },
  {
    icon: '🏪',
    title: 'E-commerce Operators',
    href: '/industries/ecommerce-operators',
    desc: 'Store optimisation & performance marketing',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
  {
    icon: '📱',
    title: 'Mobile Phone Importers',
    href: '/industries/mobile-phone-importers',
    desc: 'IMEI tracking & import compliance tools',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  },
];

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years Experience' },
];

const caseStudies = [
  {
    tag: 'E-COMMERCE',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Scaling an Online Retailer to 10x Revenue',
    result: '10x Revenue',
    desc: 'Streamlined operations and targeted campaigns tripled order volume in 6 months.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    tag: 'LAW FIRM',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Digital Transformation for a Legal Practice',
    result: '60% Admin Saved',
    desc: 'A custom client portal reduced admin workload and accelerated invoice collection.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
  {
    tag: 'WHOLESALE',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'Inventory Management for Wholesale Importer',
    result: '20hrs/wk Saved',
    desc: 'Custom ERP eliminated stock discrepancies and automated purchase orders entirely.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
];

const advantages = [
  { icon: '🌐', title: 'Multi-Channel Strategy', desc: 'We identify gaps across marketplaces to actively expand your footprint.' },
  { icon: '⚙️', title: 'Automated Systems', desc: 'API-connected workflows that replace fragile spreadsheets with zero manual entry.' },
  { icon: '🛡️', title: 'Risk Mitigation', desc: 'Proactive account health monitoring to prevent suspensions before they happen.' },
  { icon: '💰', title: 'Cost Efficiency', desc: 'Scale order volume significantly without hiring additional administrative staff.' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-5">
                  Mivan Global Suite · Digital Operations
                </p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  DOMINATE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    YOUR MARKET.
                  </span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We handle the complex operations of selling on Amazon, eBay, and TikTok Shop — and build
                  the custom software that runs your business automatically.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link
                    href="/services/ecommerce-operations"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/case-studies"
                    className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>

              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=85"
                    alt="Modern business operations and digital workspace"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-2xl">200+</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest">Clients Scaled</div>
                  </div>
                  <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-md border border-blue-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-2xl">98%</div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest">Satisfaction</div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 100} className="text-center py-10 px-6">
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{stat.label}</div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Offer</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">OUR SERVICES.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 150}>
                  <Link
                    href={s.href}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/40" />
                      <span className={`absolute top-4 left-4 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${s.tagColor}`}>
                        {s.tag}
                      </span>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-2xl mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <div className="mt-7 text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                        Learn More
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

        {/* ── INDUSTRIES ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Who We Serve</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                INDUSTRIES WE
                <span className="block text-gray-500">SPECIALISE IN.</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.title} delay={i * 100}>
                  <Link
                    href={ind.href}
                    className="group relative rounded-2xl overflow-hidden h-64 border border-gray-200 hover:border-blue-300 transition-all duration-300 block"
                  >
                    <Image src={ind.image} alt={ind.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20 group-hover:from-blue-950 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-3xl mb-2">{ind.icon}</span>
                      <h3 className="text-white font-black text-lg leading-tight group-hover:text-blue-400 transition-colors">{ind.title}</h3>
                      <p className="text-gray-400 text-xs mt-1 leading-snug">{ind.desc}</p>
                      <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Proof of Work</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">CASE STUDIES.</h2>
              </div>
              <Link href="/case-studies" className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 hover:gap-3 transition-all duration-200">
                View All
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.title} delay={i * 120}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={cs.image} alt={cs.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/30" />
                      <span className={`absolute top-4 left-4 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${cs.tagColor}`}>
                        {cs.tag}
                      </span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-blue-600 transition-colors leading-snug">{cs.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{cs.desc}</p>
                      <div className="bg-gray-950 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg w-fit">
                        {cs.result}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── MIVAN ADVANTAGE ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left" className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85"
                    alt="Business team collaboration and strategy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-blue-600/90 backdrop-blur-md rounded-xl px-5 py-4 border border-blue-500/30">
                    <div className="text-white font-black text-sm uppercase tracking-widest">The Mivan Advantage</div>
                    <div className="text-blue-200 text-xs mt-1">Engineering-led growth</div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Mivan Advantage</p>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-10">
                    WHY BUSINESSES
                    <span className="block text-gray-500">CHOOSE US.</span>
                  </h2>
                </ScrollReveal>
                <div className="space-y-5">
                  {advantages.map((adv, i) => (
                    <ScrollReveal key={adv.title} delay={i * 100}>
                      <div className="flex items-start gap-5 border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group">
                        <div className="text-2xl flex-shrink-0">{adv.icon}</div>
                        <div>
                          <h3 className="text-gray-900 font-black text-base mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-wide">{adv.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Scale?"
          heading="READY TO SCALE YOUR BUSINESS?"
          desc="Let's build the operating system your business deserves."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
          secondaryLabel="How We Work"
          secondaryHref="/about"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
