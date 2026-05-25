import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata = {
  title: "Mivan Global Ltd | CRM Automation, E-commerce Operations & Custom Software UK",
  description: "Mivan Global Ltd helps growing businesses connect CRM, AI agents, e-commerce, stock, orders, customer support, reporting, and marketing into one automated operating system.",
  keywords: ["CRM automation UK", "e-commerce operations", "AI agents", "custom software", "B2B portal", "dropshipping inventory", "wholesale systems", "digital operations UK"],
  openGraph: { title: "Mivan Global Ltd | CRM Automation, E-commerce Operations & Custom Software UK", description: "We connect your sales, stock, customers, AI assistants, and systems so your business can scale without chaos.", url: "https://mivn-globel-website.vercel.app" },
};

const services = [
  {
    tag: 'CRM',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'CRM & Automation',
    desc: 'Capture leads, automate follow-ups, manage pipelines, send WhatsApp/SMS/email reminders, and book appointments automatically.',
    href: '/services/crm-automation',
    image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=800&q=80',
    imageAlt: 'CRM automation and lead management',
  },
  {
    tag: 'AI',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'AI Agents & Assistants',
    desc: 'Deploy AI assistants that qualify leads, answer customer questions, support staff, prepare summaries, and trigger workflows automatically.',
    href: '/services/ai-agents-personal-assistants',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    imageAlt: 'AI agents and business automation',
  },
  {
    tag: 'E-COMMERCE',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'E-commerce Operations',
    desc: 'Manage and grow sales across TikTok Shop, eBay, Amazon, WooCommerce, and Shopify with listings, stock sync, and dispatch workflows.',
    href: '/services/ecommerce-operations',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imageAlt: 'E-commerce operations and online shopping',
  },
  {
    tag: 'DEVELOPMENT',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Custom Software Development',
    desc: 'Bespoke B2B portals, inventory systems, and mobile apps built around your exact operational workflow.',
    href: '/services/custom-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    imageAlt: 'Custom software development and coding',
  },
  {
    tag: 'WHOLESALE',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'Wholesale & B2B Systems',
    desc: 'Trade ordering portals, live stock catalogues, customer pricing tiers, sales rep tools, and purchase order workflows.',
    href: '/services/wholesale-b2b-systems',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    imageAlt: 'Wholesale and B2B ordering systems',
  },
  {
    tag: 'DROPSHIPPING',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'Dropshipping Inventory Network',
    desc: 'Connect wholesale inventory with approved online sellers — wholesalers keep control while dropshippers list products across more channels.',
    href: '/services/dropshipping-inventory-network',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    imageAlt: 'Dropshipping and inventory network',
  },
];

const industries = [
  {
    icon: '📦',
    title: 'Wholesale & Importers',
    href: '/industries/wholesale-importers',
    desc: 'B2B portals, stock catalogues, purchase orders, dropshipping inventory networks',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  },
  {
    icon: '🏪',
    title: 'E-commerce Operators',
    href: '/industries/ecommerce-operators',
    desc: 'Marketplace operations, stock sync, dispatch workflows, profit reporting',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  },
  {
    icon: '⚖️',
    title: 'Law Firms',
    href: '/industries/law-firms',
    desc: 'Lead capture, consultation booking, client intake, CRM automation',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    icon: '📱',
    title: 'Mobile Phone Importers',
    href: '/industries/mobile-phone-importers',
    desc: 'IMEI tracking, device grading, dealer portals, marketplace operations',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  },
  {
    icon: '🛠️',
    title: 'Service Businesses',
    href: '/industries/service-businesses',
    desc: 'Booking funnels, WhatsApp automation, CRM pipelines, follow-up workflows',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
  },
];

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '20+', label: 'Systems & Portals Built' },
  { value: '500%+', label: 'Online Growth Experience' },
  { value: '4', label: 'Core Industries Served' },
];

const problems = [
  { icon: '🗂️', title: 'Manual Admin', desc: 'Too much time wasted on repetitive tasks, spreadsheets, copy-paste work, and chasing updates.' },
  { icon: '🔌', title: 'Disconnected Systems', desc: 'CRM, website, stock system, marketplaces, and reporting tools are not properly connected.' },
  { icon: '📉', title: 'Missed Sales', desc: 'Leads are not followed up quickly, stock is not pushed to enough channels, and marketplaces are underused.' },
  { icon: '👁️', title: 'Poor Visibility', desc: 'Owners cannot easily see live sales, profit, stock movement, customer activity, and operational performance.' },
];

const aiFeatures = [
  { icon: '🤖', title: 'AI Lead Assistant', desc: 'Qualifies enquiries, asks the right questions, and sends clean lead data into your CRM.' },
  { icon: '💬', title: 'AI Customer Support', desc: 'Answers common questions, supports customers, and escalates complex issues to your team.' },
  { icon: '📊', title: 'AI Business Assistant', desc: 'Summarises tasks, reminders, sales updates, and key business activity for owners and managers.' },
  { icon: '🛒', title: 'AI E-commerce Assistant', desc: 'Helps with product content, customer replies, return responses, and marketplace workflows.' },
];

const advantages = [
  { icon: '⚙️', title: 'Real Business Operations Experience', desc: 'We understand stock, orders, dispatch, sales, marketplaces, customer service, and reporting — not just websites.' },
  { icon: '🔗', title: 'Systems That Connect', desc: 'We connect CRM, e-commerce, inventory, accounting, customer support, and reporting tools so your team works from cleaner data.' },
  { icon: '⏱️', title: 'Automation That Saves Time', desc: 'We reduce repetitive admin with automated follow-ups, order flows, stock sync, reminders, notifications, and dashboards.' },
  { icon: '🛠️', title: 'Built Around Your Workflow', desc: 'We map your process first, then build the right system around it — not force you into a generic template.' },
  { icon: '🏪', title: 'Marketplace & Wholesale Knowledge', desc: 'We understand TikTok Shop, eBay, Amazon, WooCommerce, wholesale stock, B2B pricing, and dispatch performance.' },
  { icon: '🇬🇧', title: 'UK-Based Support', desc: 'Mivan Global Ltd is a UK company supporting UK businesses with practical digital solutions.' },
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
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/65 to-gray-950/30" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-5">
                  Mivan Global Ltd &middot; UK Digital Operations Partner
                </p>
                <h1 className="hero-anim-2 text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-6 tracking-tight">
                  AUTOMATE YOUR BUSINESS.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    SCALE YOUR SALES.
                  </span>
                  <span className="block text-white/80 text-3xl md:text-4xl xl:text-5xl mt-1">CONTROL EVERYTHING.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd helps growing businesses connect CRM, AI agents, e-commerce, stock, orders,
                  customer support, reporting, and marketing into one automated operating system — backed by real
                  marketplace, wholesale, and software experience.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20"
                  >
                    Book a Free Consultation
                  </Link>
                  <Link
                    href="/services/ecommerce-operations"
                    className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all"
                  >
                    Explore Services
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
                    <div className="text-white font-black text-xl">UK-Based</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest">Digital Operations Partner</div>
                  </div>
                  <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-md border border-blue-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">7+</div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest">Years Experience</div>
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

        {/* ── PROBLEM SECTION ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14 max-w-3xl">
              <p className="text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                YOUR BUSINESS IS GROWING —<span className="block text-gray-500">BUT YOUR SYSTEMS MAY NOT BE.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Most growing businesses lose time and money because their tools do not talk to each other.
                Orders are managed in one place, stock is checked somewhere else, leads sit in WhatsApp,
                staff rely on spreadsheets, and owners cannot see real performance clearly.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {problems.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <div className="border border-gray-200 rounded-2xl p-7 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300 group h-full">
                    <div className="text-3xl mb-4">{p.icon}</div>
                    <h3 className="text-gray-900 font-black text-base mb-2 uppercase tracking-wide">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">OUR SERVICES.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 100}>
                  <Link
                    href={s.href}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/40" />
                      <span className={`absolute top-4 left-4 inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded ${s.tagColor}`}>
                        {s.tag}
                      </span>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                      <div className="mt-6 text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
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

        {/* ── AI AGENTS SECTION ── */}
        <section className="bg-gray-950 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14 text-center">
              <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">AI Automation</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
                AI AGENTS THAT WORK WITH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">YOUR BUSINESS SYSTEMS.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We help businesses deploy AI agents connected to real workflows — not just simple chat widgets.
                AI assistants that qualify leads, answer customer questions, support staff, and hand over to your team when needed.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {aiFeatures.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 100}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300 group h-full">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <h3 className="text-white font-black text-base mb-2 group-hover:text-violet-400 transition-colors">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="text-center">
              <Link href="/services/ai-agents-personal-assistants" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-violet-600/20">
                Deploy an AI Assistant
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── DROPSHIPPING SECTION ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-teal-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">New Service</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                  DROPSHIPPING &amp;
                  <span className="block text-gray-500">WHOLESALE INVENTORY.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Turn your wholesale stock into a connected sales network. Mivan Global Ltd is developing a
                  dropshipping inventory system that helps wholesalers connect their live stock with approved
                  online sellers, resellers, and marketplace operators.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: '📡', title: 'Live Stock API', desc: 'Share selected inventory with approved sellers using live stock updates.' },
                    { icon: '🔐', title: 'Approved Reseller Access', desc: 'Control who can access your products, pricing, and catalogue.' },
                    { icon: '📦', title: 'Marketplace-Ready Data', desc: 'Provide titles, images, descriptions, barcodes, and stock information.' },
                    { icon: '🔄', title: 'Automated Order Flow', desc: 'Dropshipper orders flow back to the wholesaler for fulfilment.' },
                  ].map((f) => (
                    <div key={f.title} className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors group">
                      <span className="text-xl flex-shrink-0">{f.icon}</span>
                      <div>
                        <h4 className="text-gray-900 font-black text-sm mb-1 group-hover:text-teal-600 transition-colors">{f.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services/dropshipping-inventory-network" className="bg-teal-600 hover:bg-teal-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-teal-600/20">
                    Explore Dropshipping
                  </Link>
                  <Link href="/contact" className="border border-gray-300 hover:border-teal-400 text-gray-700 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all">
                    Discuss Integration
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85"
                    alt="Dropshipping and wholesale inventory management"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-teal-600/90 backdrop-blur-md rounded-xl px-5 py-4 border border-teal-500/30">
                    <div className="text-white font-black text-sm uppercase tracking-widest">Inventory Network</div>
                    <div className="text-teal-200 text-xs mt-1">Wholesalers + Dropshippers Connected</div>
                  </div>
                </div>
              </ScrollReveal>
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
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Who We Help</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                INDUSTRIES WE
                <span className="block text-gray-500">SPECIALISE IN.</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.title} delay={i * 100}>
                  <Link
                    href={ind.href}
                    className="group relative rounded-2xl overflow-hidden h-64 border border-gray-200 hover:border-blue-300 transition-all duration-300 block"
                  >
                    <Image src={ind.image} alt={ind.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20 group-hover:from-blue-950 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <span className="text-2xl mb-2">{ind.icon}</span>
                      <h3 className="text-white font-black text-sm leading-tight group-hover:text-blue-400 transition-colors">{ind.title}</h3>
                      <p className="text-gray-400 text-xs mt-1 leading-snug">{ind.desc}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-white py-24 relative overflow-hidden">
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
                    <div className="text-white font-black text-sm uppercase tracking-widest">Mivan Global Ltd</div>
                    <div className="text-blue-200 text-xs mt-1">UK Digital Operations Partner</div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Why Choose Us</p>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-10">
                    WHY BUSINESSES
                    <span className="block text-gray-500">CHOOSE MIVAN GLOBAL.</span>
                  </h2>
                </ScrollReveal>
                <div className="space-y-4">
                  {advantages.map((adv, i) => (
                    <ScrollReveal key={adv.title} delay={i * 80}>
                      <div className="flex items-start gap-5 border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group">
                        <div className="text-xl flex-shrink-0 mt-0.5">{adv.icon}</div>
                        <div>
                          <h3 className="text-gray-900 font-black text-sm mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-wide">{adv.title}</h3>
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
          heading="READY TO BUILD A SMARTER SYSTEM?"
          desc="Let's review your current workflow and show you how automation, e-commerce systems, or custom software can help your business scale without chaos."
          primaryLabel="Book a Free Consultation"
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
