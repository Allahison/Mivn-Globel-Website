'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-gray-950 border border-white/10 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between backdrop-blur-md">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span className="text-2xl flex-shrink-0 mt-0.5">🍪</span>
          <p className="text-gray-300 text-sm leading-relaxed">
            We use cookies to improve your experience and analyse site traffic.
            By clicking <strong className="text-white">Accept</strong>, you agree to our{' '}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-gray-400 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all shadow-lg shadow-blue-600/20"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
