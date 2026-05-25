import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Business Websites & Lead Generation Funnels UK | Mivan Global Ltd",
  description: "Mivan Global Ltd builds business websites, landing pages, booking funnels, lead forms, tracking, and CRM automation workflows that turn visitors into real enquiries and customers.",
  keywords: ["business website UK", "lead generation funnel", "landing page UK", "booking funnel", "website CRM automation", "Mivan Global Ltd"],
  openGraph: { title: "Websites & Funnels — Mivan Global Ltd", description: "Build websites, landing pages, booking funnels, and automation workflows that turn traffic into real customers.", url: "https://mivn-globel-website.vercel.app/services/websites-funnels" },
};

const features = [
  { tag: 'WEBSITES', tagColor: 'bg-blue-100 text-blue-700', icon: '🌐', title: 'Business Websites', desc: 'Professional websites for service businesses, B2B companies, agencies, wholesalers, and local businesses that clearly explain what you do and encourage enquiries.' },
  { tag: 'LANDING PAGES', tagColor: 'bg-violet-100 text-violet-700', icon: '🎯', title: 'Landing Pages', desc: 'Focused pages for campaigns, paid ads, consultations, lead magnets, and offers — designed to convert visitors into enquiries.' },
  { tag: 'BOOKING', tagColor: 'bg-teal-100 text-teal-700', icon: '📅', title: 'Booking Funnels', desc: 'Calendars, payment steps, reminders, confirmation messages, and follow-up automations so customers can book and pay without calling you.' },
  { tag: 'LEAD FORMS', tagColor: 'bg-orange-100 text-orange-700', icon: '📝', title: 'Lead Forms', desc: 'Forms that capture useful customer details and send them directly into your CRM — so no lead is missed or forgotten.' },
  { tag: 'TRACKING', tagColor: 'bg-red-100 text-red-700', icon: '📊', title: 'Tracking & Analytics', desc: 'Meta Pixel, Google Analytics, conversion events, call tracking, and campaign reporting so you can see what is working.' },
  { tag: 'AUTOMATION', tagColor: 'bg-green-100 text-green-700', icon: '🤖', title: 'Follow-Up Automation', desc: 'WhatsApp, SMS, and email workflows that follow up with leads automatically — so your team does not need to do it manually.' },
];

const bestFor = [
  'Service Businesses', 'Law Firms', 'Consultants', 'Clinics',
  'Training Providers', 'Local Trades', 'Agencies', 'B2B Companies',
];

export default function WebsitesFunnels() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Websites & Funnels &middot; Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  A WEBSITE THAT CAPTURES
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">LEADS, NOT JUST LOOKS GOOD.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  We create modern websites, landing pages, booking funnels, lead forms, and automation workflows that
                  help businesses turn visitors into enquiries, appointments, and customers.
                </p>
                <div className="hero-anim-4 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/20">Build My Website Funnel</Link>
                  <Link href="/contact" className="border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">Discuss Lead Generation</Link>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[540px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=85" alt="Business website and lead generation" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 bg-blue-600/90 backdrop-blur-md border border-blue-500/30 rounded-xl px-5 py-4">
                    <div className="text-white font-black text-xl">Website + Automation</div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-widest mt-1">Leads That Convert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-14">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">WEBSITES AND FUNNELS<span className="block">THAT WORK.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 group h-full flex flex-col">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.25em] px-2 py-0.5 rounded mb-3 w-fit ${f.tagColor}`}>{f.tag}</span>
                    <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEST FOR ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10 text-center">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-3">Who This Is For</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">BEST FOR THESE BUSINESSES.</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-3">
                {bestFor.map((b) => (
                  <span key={b} className="bg-white border border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl text-sm hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm">
                    {b}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to Get More Leads?"
          heading="BUILD A WEBSITE THAT ACTUALLY CONVERTS."
          desc="Let's create a website, funnel, and automation system that turns your traffic into real enquiries and appointments."
          primaryLabel="Build My Website Funnel"
          primaryHref="/contact"
          secondaryLabel="Discuss Lead Generation"
          secondaryHref="/contact"
          accent="blue"
        />

      </main>
      <Footer />
    </>
  );
}
