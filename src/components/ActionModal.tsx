import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { ModalIntent } from './Navbar';

interface ActionModalProps {
  isOpen: boolean;
  intent: ModalIntent;
  contextLabel?: string;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  isOpen,
  intent,
  contextLabel,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [segment, setSegment] = useState('E-Commerce & Retail');
  const [vehicle, setVehicle] = useState('Electric Scooter');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setError('');
    setSubmitted(false);
  }, [isOpen, intent, contextLabel]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (intent === 'login') {
      if (!validateEmail(email)) {
        setError('Please enter a valid account email address.');
        return;
      }
      if (password.trim().length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      setSubmitted(true);
      return;
    }

    if (intent === 'app') {
      if (!phone.trim() || phone.trim().length < 8) {
        setError('Please enter a valid mobile number to receive your download link.');
        return;
      }
      setSubmitted(true);
      return;
    }

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError('Please provide a valid phone number so dispatch can reach you.');
      return;
    }

    setSubmitted(true);
  };

  const titleByIntent: Record<ModalIntent, string> = {
    trial: contextLabel || 'Start Your Rapidmate Free Trial',
    courier: contextLabel || 'Become a Rapidmate Courier',
    login: 'Log in to Rapidmate',
    app: contextLabel || 'Get the Rapidmate Mobile App',
    legal: contextLabel || 'Legal Information',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="inline-block border-b-2 border-yellow-400 pb-0.5 text-xs font-bold tracking-wide text-slate-950">
              Rapidmate Operations
            </p>
            <h3 id="modal-title" className="mt-2 font-display text-xl font-bold text-slate-950">
              {titleByIntent[intent]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {intent === 'legal' ? (
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
            <p>
              <strong className="text-slate-950">Rapidmate SAS</strong> provides urban rapid delivery
              and electric logistics services across France in compliance with French transport
              regulations and European GDPR data protection standards.
            </p>
            <p>
              All parcel tracking telemetry, recipient phone numbers, and proof-of-delivery photos
              are encrypted in transit and retained strictly for fulfillment verification and SLA
              auditing.
            </p>
            <p>
              For legal inquiries, data access requests, or carrier insurance documentation, contact{' '}
              <a href="mailto:contact@rapidmate.fr" className="font-semibold text-slate-950 underline decoration-yellow-400 decoration-2">
                contact@rapidmate.fr
              </a>
              .
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-500 cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        ) : submitted ? (
          <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50/70 p-6 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-slate-950" aria-hidden="true" />
            <h4 className="mt-3 font-display text-lg font-bold text-slate-950">
              {intent === 'login'
                ? 'Verification Link Sent'
                : intent === 'app'
                  ? 'Download Link Dispatched'
                  : 'Request Received'}
            </h4>
            <p className="mt-1.5 text-sm text-slate-700">
              {intent === 'login'
                ? `Check ${email} for your secure sign-in link to the Rapidmate portal.`
                : intent === 'app'
                  ? `We sent an SMS download link for iOS & Android to ${phone}.`
                  : `Thank you, ${name}. Our Paris logistics desk will reach out to ${email} within 15 minutes.`}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {intent === 'login' && (
              <>
                <div>
                  <label htmlFor="login-email" className="block text-xs font-semibold text-slate-700">
                    Work or Courier Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.fr"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    required
                  />
                </div>
              </>
            )}

            {intent === 'app' && (
              <div>
                <p className="mb-3 text-sm text-slate-600">
                  Enter your mobile number to receive a direct App Store &amp; Google Play install
                  link, or scan at our mobile portal.
                </p>
                <label htmlFor="app-phone" className="block text-xs font-semibold text-slate-700">
                  Mobile Phone Number
                </label>
                <input
                  id="app-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                  required
                />
              </div>
            )}

            {(intent === 'trial' || intent === 'courier') && (
              <>
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Camille Laurent"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="camille@domain.fr"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+33 6 12 34 56 78"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                      required
                    />
                  </div>
                </div>

                {intent === 'trial' ? (
                  <div>
                    <label htmlFor="modal-segment" className="block text-xs font-semibold text-slate-700">
                      Delivery Category
                    </label>
                    <select
                      id="modal-segment"
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    >
                      <option>E-Commerce &amp; Retail</option>
                      <option>Groceries &amp; Frozen Goods</option>
                      <option>Restaurants &amp; Catering</option>
                      <option>Pharmaceuticals &amp; Lab</option>
                      <option>Personal Package / Moving</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="modal-vehicle" className="block text-xs font-semibold text-slate-700">
                      Preferred Electric / Eco Vehicle
                    </label>
                    <select
                      id="modal-vehicle"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400/60"
                    >
                      <option>Electric Scooter</option>
                      <option>Electric Cargo Bike</option>
                      <option>Electric Compact Car</option>
                      <option>Hybrid Utility Van</option>
                    </select>
                  </div>
                )}
              </>
            )}

            {error && (
              <p role="alert" className="text-xs font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 flex min-h-[46px] w-full items-center justify-center rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 cursor-pointer"
            >
              {intent === 'login'
                ? 'Sign In'
                : intent === 'app'
                  ? 'Send Download Link'
                  : intent === 'courier'
                    ? 'Submit Courier Application'
                    : 'Request Instant Callback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
