import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "About Mivan Global Ltd — UK Digital Operations Partner",
  description: "Mivan Global Ltd was built from real operational experience. We help businesses replace manual work and disconnected tools with CRM automation, AI agents, e-commerce systems, and custom software.",
  keywords: ["about Mivan Global Ltd", "UK digital operations company", "CRM automation specialists", "e-commerce operations UK"],
  openGraph: { title: "About Mivan Global Ltd — UK Digital Operations Partner", description: "Built from real business problems. We help growing businesses replace manual work with connected digital systems.", url: "https://mivn-globel-website.vercel.app/about" },
};

const steps = [
  { icon: '🔍', num: '01', title: 'AUDIT & UNDERSTAND', desc: 'We map your current processes, systems, team responsibilities, bottlenecks, and growth goals before suggesting anything.' },
  { icon: '⚙️', num: '02', title: 'DESIGN THE WORKFLOW', desc: 'We design a practical digital workflow that connects sales, stock, customers, operations, and reporting.' },
  { icon: '🛠️', num: '03', title: 'BUILD & INTEGRATE', desc: 'We configure CRM systems, automations, dashboards, websites, portals, and custom tools around your business.' },
  { icon: '🎓', num: '04', title: 'TRAIN & LAUNCH', desc: 'We help your team use the system properly with clear workflows and practical training.' },
  { icon: '📈', num: '05', title: 'IMPROVE & SCALE', desc: 'We review performance, remove friction, and improve the system as your business grows.' },
];

const methodology = [
  {
    icon: '🔄', tag: 'AUTOMATION', tagColor: 'bg-blue-100 text-blue-700',
    title: 'FULL-FUNNEL AUTOMATION',
    highlight: 'SYSTEMS THAT SCALE YOUR BUSINESS',
    desc: 'Automating your entire journey from first enquiry to final sale. Every touchpoint streamlined, every lead captured, every order tracked.',
  },
  {
    icon: '🧩', tag: 'INFRASTRUCTURE', tagColor: 'bg-violet-100 text-violet-700',
    title: 'CUSTOM INFRASTRUCTURE',
    highlight: null,
    desc: 'Systems built specifically for your workflow. No generic tools — just clean digital infrastructure designed around how your business actually operates.',
  },
  {
    icon: '🤖', tag: 'AI INTEGRATION', tagColor: 'bg-teal-100 text-teal-700',
    title: 'PRACTICAL AI AGENTS',
    highlight: null,
    desc: 'AI assistants connected to your real business systems — CRM, WhatsApp, e-commerce, stock data, and internal workflows — not just simple chat widgets.',
  },
  {
    icon: '⚡', tag: 'DEPLOYMENT', tagColor: 'bg-orange-100 text-orange-700',
    title: 'RAPID DEPLOYMENT',
    highlight: null,
    desc: 'We move fast without cutting corners. New systems are launched in days or weeks, not months — so your business gets results quickly.',
  },
];

const problems = [
  { icon: '💸', label: 'Missed Follow-ups' },
  { icon: '🗂️', label: 'Manual Spreadsheets' },
  { icon: '📉', label: 'Stock Overselling' },
  { icon: '🚧', label: 'Poor Reporting' },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/65 to-gray-950/30" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">About Mivan Global Ltd &middot; UK Digital Operations</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  WE BUILD SYSTEMS
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    THAT WORK.
                  </span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Mivan Global Ltd was built from real operational experience — not theory. We understand what happens
                  when sales, stock, dispatch, marketing, customer service, finance, and reporting all depend on different systems.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">
                    Work With Us
                  </Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">
                    See Our Work
                  </Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[540px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85" alt="Mivan Global Ltd team" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">7+ Years</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest">Digital &amp; E-commerce Experience</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">Why We Exist</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                  BUILT FROM REAL<span className="block">BUSINESS PROBLEMS.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Many businesses do not fail because they lack ambition. They struggle because their systems
                  cannot keep up with growth.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  Leads are missed because follow-ups are manual. Stock is oversold because marketplaces are
                  not synced. Staff waste hours checking spreadsheets. Owners cannot see real profit clearly.
                  Customers chase updates. Reports arrive too late.
                </p>
                <p className="text-gray-800 font-bold text-base leading-relaxed">
                  Mivan Global Ltd exists to fix these problems.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=85" alt="Business challenges and manual operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 p-6 w-full">
                      {problems.map((item) => (
                        <div key={item.label} className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center">
                          <div className="text-2xl mb-1">{item.icon}</div>
                          <p className="text-white font-bold text-xs leading-snug">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-4">How We Work</p>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                    STOP RUNNING YOUR
                    <span className="block text-gray-500">BUSINESS MANUALLY.</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    We build connected digital systems that run your business for you. Scale faster,
                    convert more, and reduce admin — without hiring more staff for manual tasks.
                  </p>
                </ScrollReveal>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <ScrollReveal key={step.num} delay={i * 80}>
                      <div className="flex items-start gap-5 border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:bg-white transition-all duration-300 group">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-sm">{step.num}</div>
                        <div>
                          <h3 className="text-gray-900 font-black text-sm uppercase tracking-wider mb-1 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              <ScrollReveal direction="right" className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[560px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85" alt="Modern digital operations workflow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── FOUNDER SECTION ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Leadership</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">LED BY OPERATIONAL EXPERIENCE.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-2xl">M</span>
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-2xl">Mehran</h3>
                      <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-1">Founder &mdash; Mivan Global Ltd</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Mehran has hands-on experience across e-commerce operations, marketplace growth, wholesale systems,
                    CRM automation, and custom software development. His work focuses on helping businesses replace
                    manual processes with connected digital systems that improve visibility, speed, and growth.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Mivan Global Ltd combines e-commerce operations, marketplace management, CRM automation, AI agent
                    deployment, custom software development, and wholesale business systems experience — working with
                    trusted specialists where needed.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="space-y-5">
                  {[
                    { icon: '🏪', title: 'Marketplace Operations', desc: 'TikTok Shop, eBay, Amazon, WooCommerce — hands-on experience managing listings, stock, dispatch, and performance.' },
                    { icon: '🤖', title: 'CRM & AI Automation', desc: 'Building WhatsApp workflows, booking funnels, lead pipelines, AI agents, and automated follow-up systems.' },
                    { icon: '📦', title: 'Wholesale & B2B Systems', desc: 'Creating ordering portals, inventory dashboards, dropshipping networks, and B2B customer management tools.' },
                    { icon: '⚙️', title: 'Custom Software Development', desc: 'Designing and building portals, dashboards, mobile apps, and API integrations around real business workflows.' },
                  ].map((item, i) => (
                    <ScrollReveal key={item.title} delay={i * 80}>
                      <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <h4 className="text-gray-900 font-black text-sm uppercase tracking-wide mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── SUCCESS METHODOLOGY ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Approach</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">WHY OUR CLIENTS WIN.</h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl">
                It is not just about technology. Here is the foundation behind every successful system we build and deliver.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
              {methodology.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 100}>
                  <div className="bg-white p-10 hover:bg-gray-50 transition-colors duration-300 group flex gap-5 h-full">
                    <div className="text-3xl flex-shrink-0 mt-1">{m.icon}</div>
                    <div className="flex-1">
                      <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded mb-3 ${m.tagColor}`}>{m.tag}</span>
                      <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-blue-600 transition-colors">{m.title}</h3>
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
          eyebrow="Ready to Transform?"
          heading="STOP RUNNING YOUR BUSINESS MANUALLY."
          desc="Let's build a connected digital system that scales your sales, reduces admin, and gives you clear visibility."
          primaryLabel="Book a Free Consultation"
          primaryHref="/contact"
          secondaryLabel="See Our Work"
          secondaryHref="/case-studies"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
