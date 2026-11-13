import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { ModalIntent } from './Navbar';

interface FooterProps {
  onOpenModal: (intent: ModalIntent, contextLabel?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#" className="inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              <BrandMark inverted />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Rapid, eco-friendly urban delivery and custom logistics for businesses, restaurants,
              and individuals across France.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Rapidmate on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-yellow-400 hover:text-yellow-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Rapidmate on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-yellow-400 hover:text-yellow-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Rapidmate on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-yellow-400 hover:text-yellow-400"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#solutions" className="transition-colors hover:text-yellow-400">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#audiences" className="transition-colors hover:text-yellow-400">
                  Individuals
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('courier')}
                  className="text-left transition-colors hover:text-yellow-400 cursor-pointer"
                >
                  Become a Courier
                </button>
              </li>
              <li>
                <a href="#sustainability" className="transition-colors hover:text-yellow-400">
                  About Us &amp; Eco-Fleet
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Legal Mentions</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('legal', 'Terms of Service')}
                  className="text-left transition-colors hover:text-yellow-400 cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('legal', 'Privacy Policy')}
                  className="text-left transition-colors hover:text-yellow-400 cursor-pointer"
                >
                  Privacy Policy (GDPR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('legal', 'Legal Notice & Carrier License')}
                  className="text-left transition-colors hover:text-yellow-400 cursor-pointer"
                >
                  Legal Notice
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Contact &amp; Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@rapidmate.fr"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-yellow-400"
                >
                  <Mail className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                  <span>contact@rapidmate.fr</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33186954210"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-yellow-400 tabular-nums"
                >
                  <Phone className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                  <span>+33 1 86 95 42 10</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" aria-hidden="true" />
                <span>Paris · Lyon · Marseille · Bordeaux</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Rapidmate SAS. All rights reserved.</p>
          <p>24/7 Dispatch &amp; Roadside Support · Zero-Emission Urban Logistics</p>
        </div>
      </div>
    </footer>
  );
};
