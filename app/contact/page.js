import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const contactInfo = [
  {
    icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: 'Email', value: 'info@mivanglobal.com',
  },
  {
    icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    label: 'Phone / WhatsApp', value: '+92 300 0000000',
  },
  {
    icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    label: 'Location', value: 'Pakistan',
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
                <p className="hero-anim-1 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Get in Touch</p>
                <h1 className="hero-anim-2 text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-6 tracking-tight">
                  LET&apos;S BUILD
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">TOGETHER.</span>
                </h1>
                <p className="hero-anim-3 text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                  Tell us about your business. We&apos;ll reach out within 24 hours with a clear, actionable plan on how we can help you scale.
                </p>
                <div className="hero-anim-4 space-y-4">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="flex items-center gap-4 border border-white/10 rounded-xl px-5 py-4 hover:border-blue-500/30 transition-colors">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">{c.icon}</div>
                      <div>
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">{c.label}</div>
                        <div className="text-white font-bold text-sm">{c.value}</div>
                      </div>
                    </div>
                  ))}
                  <div className="border border-white/10 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Average Response Time</span>
                    </div>
                    <p className="text-white font-black text-xl">Under 24 Hours</p>
                    <p className="text-gray-500 text-xs mt-1">Mon – Sat, 9am – 9pm PKT</p>
                  </div>
                </div>
              </div>
              <div className="hero-anim-img relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden h-[580px] shadow-2xl">
                  <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85" alt="Mivan Global Suite team ready to help" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
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
                <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em] mb-2">Send a Message</p>
                <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">TELL US ABOUT<br />YOUR PROJECT.</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email</label>
                      <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Business / Company</label>
                    <input type="text" placeholder="Your Company Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">I&apos;m Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white">
                      <option value="">Select a service...</option>
                      <option>E-commerce Operations</option>
                      <option>Custom Development</option>
                      <option>Both Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea rows={5} placeholder="Tell us about your business and what you're looking to achieve..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all text-sm shadow-md uppercase tracking-wide">
                    Send Message
                  </button>
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
