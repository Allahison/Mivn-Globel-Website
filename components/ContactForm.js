'use client';

import Script from 'next/script';
import { useCallback, useEffect, useRef, useState } from 'react';

const services = [
  'CRM & Automation',
  'AI Agents & Personal Assistants',
  'E-commerce Operations',
  'Custom Software Development',
  'Wholesale & B2B Systems',
  'Dropshipping Inventory Network',
  'Website / Funnel',
  'Not Sure Yet',
];

const initialForm = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
};

export default function ContactForm() {
  const recaptchaRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [siteKey, setSiteKey] = useState('');
  const [configLoaded, setConfigLoaded] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const renderRecaptcha = useCallback(() => {
    if (!siteKey || !recaptchaRef.current || !window.grecaptcha || widgetIdRef.current !== null) {
      return;
    }

    widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
      sitekey: siteKey,
      callback: (token) => setRecaptchaToken(token),
      'expired-callback': () => setRecaptchaToken(''),
      'error-callback': () => setRecaptchaToken(''),
    });
  }, [siteKey]);

  useEffect(() => {
    let active = true;

    async function loadConfig() {
      try {
        const response = await fetch('/api/contact');
        const data = await response.json();
        if (active) setSiteKey(data?.recaptchaSiteKey || '');
      } catch {
        if (active) setSiteKey('');
      } finally {
        if (active) setConfigLoaded(true);
      }
    }

    loadConfig();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    renderRecaptcha();
  }, [renderRecaptcha]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const resetCaptcha = () => {
    setRecaptchaToken('');
    if (window.grecaptcha && widgetIdRef.current !== null) {
      window.grecaptcha.reset(widgetIdRef.current);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!siteKey) {
      setStatus({ type: 'error', message: 'CAPTCHA is not configured yet.' });
      return;
    }

    if (!recaptchaToken) {
      setStatus({ type: 'error', message: 'Please complete the CAPTCHA before sending your enquiry.' });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus({ type: 'error', message: data?.message || 'Please check the form and try again.' });
        resetCaptcha();
        return;
      }

      setForm(initialForm);
      resetCaptcha();
      setStatus({
        type: 'success',
        message: 'Thank you. We have received your enquiry and will get back to you shortly.',
      });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email support@mivanglobal.co.uk.' });
      resetCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
          <input id="fullName" name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="Your Full Name" required maxLength={100} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
        </div>
        <div>
          <label htmlFor="company" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Business / Company</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your Company Name" maxLength={120} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required maxLength={160} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+44 or 07..." required maxLength={40} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">What Do You Need Help With?</label>
        <select id="service" name="service" value={form.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white">
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tell Us About Your Business</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Describe your business, current workflow, and what problems you are looking to solve..." required minLength={10} maxLength={2000} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" />
      </div>

      <div className="min-h-[78px]">
        {!configLoaded ? (
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
            Loading CAPTCHA...
          </div>
        ) : siteKey ? (
          <>
            <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" onLoad={renderRecaptcha} />
            <div ref={recaptchaRef} />
          </>
        ) : (
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            CAPTCHA is not configured yet.
          </div>
        )}
      </div>

      {status.message && (
        <div className={`rounded-xl px-4 py-3 text-sm font-semibold ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
          {status.message}
        </div>
      )}

      <button type="submit" disabled={submitting || !siteKey} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl transition-all text-sm shadow-md uppercase tracking-wide">
        {submitting ? 'Sending...' : 'Send Enquiry'}
      </button>
      <p className="text-center text-gray-400 text-xs">We respond within 24 hours &middot; Monday &ndash; Saturday &middot; United Kingdom</p>
    </form>
  );
}
