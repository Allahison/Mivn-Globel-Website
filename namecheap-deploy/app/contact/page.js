import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "Contact Us — Mivan Global Ltd",
  description: "Get in touch with Mivan Global Ltd. Request a free consultation for CRM automation, e-commerce operations, AI agents, custom software, or wholesale systems. UK-based, respond within 24 hours.",
  keywords: ["contact Mivan Global", "free consultation UK", "CRM automation inquiry", "e-commerce consultation", "custom software inquiry"],
  openGraph: { title: "Contact Mivan Global Ltd", description: "Request a free consultation. We respond within 24 hours. UK-based digital operations partner.", url: "https://mivn-globel-website.vercel.app/contact" },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '07878 044342',
    href: 'https://wa.me/447878044342',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Landline',
    value: '020 4634 6212',
    href: 'tel:02046346212',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'support@mivanglobal.co.uk',
    href: 'mailto:support@mivanglobal.co.uk',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'United Kingdom',
    href: null,
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=60" alt="" fill sizes="100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/92 via-gray-950/80 to-gray-950/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] items-center gap-12 py-20">
              <div>
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Contact Mivan Global Ltd</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  LET&apos;S BUILD A
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SMARTER SYSTEM.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Tell us about your business, your current workflow, and the problems you want to solve.
                  We will review your requirements and suggest a practical next step.
                </p>
                <div className="hero-anim-4 space-y-3">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-center gap-4 border border-white/10 rounded-xl px-5 py-4 hover:border-blue-500/30 transition-colors">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">{c.icon}</div>
                      <div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-white font-bold text-sm hover:text-blue-400 transition-colors">{c.value}</a>
                        ) : (
                          <div className="text-white font-bold text-sm">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Average Response Time</span>
                    </div>
                    <p className="text-white font-black text-xl">Usually Within 24 Hours</p>
                    <p className="text-gray-500 text-xs mt-1">Monday &ndash; Saturday, UK Business Hours</p>
                  </div>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[580px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85" alt="Mivan Global Ltd team ready to help" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-2">Send an Enquiry</p>
                <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">TELL US ABOUT<br />YOUR BUSINESS.</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input type="text" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Business / Company</label>
                      <input type="text" placeholder="Your Company Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                      <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Phone / WhatsApp</label>
                      <input type="tel" placeholder="+44 or 07..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">What Do You Need Help With?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white">
                      <option value="">Select a service...</option>
                      <option>CRM &amp; Automation</option>
                      <option>AI Agents &amp; Personal Assistants</option>
                      <option>E-commerce Operations</option>
                      <option>Custom Software Development</option>
                      <option>Wholesale &amp; B2B Systems</option>
                      <option>Dropshipping Inventory Network</option>
                      <option>Website / Funnel</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tell Us About Your Business</label>
                    <textarea rows={5} placeholder="Describe your business, current workflow, and what problems you are looking to solve..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all text-sm shadow-md uppercase tracking-wide">
                    Send Enquiry
                  </button>
                  <p className="text-center text-gray-400 text-xs">We respond within 24 hours &middot; Monday &ndash; Saturday &middot; United Kingdom</p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
