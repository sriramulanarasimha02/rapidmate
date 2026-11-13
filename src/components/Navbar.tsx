import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

export type ModalIntent = 'trial' | 'courier' | 'login' | 'app' | 'legal';

interface NavbarProps {
  onOpenModal: (intent: ModalIntent, contextLabel?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Business Solutions', href: '#solutions' },
    { label: 'Individuals', href: '#audiences' },
    { label: 'Become a Courier', href: '#audiences' },
    { label: 'About Us', href: '#sustainability' },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-8 px-4 py-2 sm:px-6 lg:px-8">
        <a
          href="#"
          className="rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          aria-label="Rapidmate home"
        >
          <BrandMark />
        </a>

        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 rounded py-1 text-slate-700 transition-colors duration-150 hover:text-slate-950 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenModal('login')}
            className="whitespace-nowrap shrink-0 rounded-lg px-4 py-2 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 cursor-pointer"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => onOpenModal('trial', 'Start Your Free Trial')}
            className="whitespace-nowrap shrink-0 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-xs transition-all duration-150 hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 cursor-pointer"
          >
            Free Trial
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition-colors hover:bg-slate-50 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenModal('login');
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenModal('trial', 'Start Your Free Trial');
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-500"
            >
              Free Trial / Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
