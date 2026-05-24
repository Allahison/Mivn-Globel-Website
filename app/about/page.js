import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "About Us — Mivan Global Suite",
  description: "Learn about Mivan Global Suite — we fix vendor fragmentation for ambitious SMEs. E-commerce, custom software, and digital transformation specialists.",
  keywords: ["about Mivan Global", "digital operations company", "e-commerce specialists", "custom software team"],
  openGraph: { title: "About Us — Mivan Global Suite", description: "We fix vendor fragmentation for ambitious SMEs. Meet the team behind digital transformation.", url: "https://mivn-globel-website.vercel.app/about" },
};

const steps = [
  { icon: '🔍', num: '01', title: 'AUDIT & GOALS', desc: 'We map your current processes, identify bottlenecks, and define clear KPI targets.' },
  { icon: '⚙️', num: '02', title: 'BUILD & INTEGRATE', desc: 'We configure the Suite, build custom tools, and integrate your existing data.' },
  { icon: '🚀', num: '03', title: 'LAUNCH & TRAIN', desc: 'We go live and train your team extensively to ensure full adoption.' },
  { icon: '📈', num: '04', title: 'OPTIMISE & SUPPORT', desc: 'We provide 24/7 monitoring and continuous improvements to scale performance.' },
];

const team = [
  {
    name: 'Mehran',
    role: 'Founder & CEO',
    desc: 'Visionary entrepreneur with deep expertise in e-commerce operations and digital transformation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Sarah Khan',
    role: 'Head of E-commerce',
    desc: 'Certified marketplace specialist with 7+ years managing Amazon, eBay, and TikTok Shop operations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Ali Raza',
    role: 'Head of Development',
    desc: 'Full-stack engineer specialising in scalable web applications, B2B portals, and API integrations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Usman Tariq',
    role: 'Business Development',
    desc: 'Growth strategist helping clients expand into new markets, channels, and revenue streams.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
];

const methodology = [
  {
    icon: '🔄', tag: 'AUTOMATION', tagColor: 'bg-blue-100 text-blue-700',
    title: 'FULL-FUNNEL AUTOMATION',
    highlight: 'SYSTEMS THAT SCALE YOUR BUSINESS',
    desc: 'Automating your entire journey from click to close. Every touchpoint streamlined, every lead captured, every sale tracked.',
  },
  {
    icon: '🧩', tag: 'INFRASTRUCTURE', tagColor: 'bg-violet-100 text-violet-700',
    title: 'CUSTOM INFRASTRUCTURE',
    highlight: null,
    desc: 'Bespoke software built specifically for your workflow. No generic tools — just clean systems designed around how your business actually operates.',
  },
  {
    icon: '📊', tag: 'ANALYTICS', tagColor: 'bg-teal-100 text-teal-700',
    title: 'REAL-TIME ANALYTICS',
    highlight: null,
    desc: 'Live dashboards tracking every penny of spend. See profit, loss, and performance data in real-time so you can make fast, confident decisions.',
  },
  {
    icon: '⚡', tag: 'DEPLOYMENT', tagColor: 'bg-orange-100 text-orange-700',
    title: 'RAPID DEPLOYMENT',
    highlight: null,
    desc: "Launching your new operating system in days. We move fast without cutting corners — your business can't afford to wait months for results.",
  },
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
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/55 to-gray-950/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Company · About Mivan Global Suite</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  WE FIX THE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    FRAGMENTATION.
                  </span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Built for ambitious SMEs who are done tolerating the chaos of disconnected vendors,
                  manual admin, and growth that never quite arrives.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">
                    Work With Us
                  </Link>
                  <Link href="/case-studies" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">
                    See Results
                  </Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[540px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85" alt="Mivan Global Suite team working together" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">5+ Years</div>
                    <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest">Building Digital Infrastructure</div>
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
                <p className="text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">The Problem</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                  VENDOR<span className="block">FRAGMENTATION.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  SMEs are trapped in vendor fragmentation: marketing, operations, finance, and systems
                  don&apos;t talk to each other. The result is wasted ad spend, manual admin, cash-flow
                  blind spots, and stalled growth.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-200">
                  Learn How We Solve This
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=85" alt="Business challenges and fragmented operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 p-6 w-full">
                      {[
                        { icon: '💸', label: 'Wasted Ad Spend' },
                        { icon: '🗂️', label: 'Manual Admin' },
                        { icon: '📉', label: 'Cash-Flow Blind Spots' },
                        { icon: '🚧', label: 'Stalled Growth' },
                      ].map((item) => (
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
                    STOP TRADING TIME
                    <span className="block text-gray-500">FOR MONEY.</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    We build the automated infrastructure that runs your business for you. Scale faster,
                    convert more, and cut costs — all without hiring a single new employee.
                  </p>
                </ScrollReveal>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <ScrollReveal key={step.num} delay={i * 100}>
                      <div className="flex items-start gap-5 border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group">
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
                <div className="relative rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85" alt="Modern digital operations workflow" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14 text-center">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">The People Behind the Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">OUR TEAM.</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {team.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 100}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-gray-900 text-lg">{member.name}</h3>
                      <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-3">{member.role}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUCCESS METHODOLOGY ── */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Success Methodology</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">WHY OUR CLIENTS WIN.</h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl">
                It isn&apos;t magic; it&apos;s engineering. Here is the four-part foundation behind every successful case study we deliver.
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
          desc="Let's build an operating system that scales."
          primaryLabel="Request a Consultation"
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
