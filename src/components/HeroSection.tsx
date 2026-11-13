import React, { useState } from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { ModalIntent } from './Navbar';

interface HeroSectionProps {
  onOpenModal: (intent: ModalIntent, contextLabel?: string) => void;
}

const TRUST_METRICS = [
  {
    value: '40K+',
    label: 'Deliveries per month',
    detail: 'Across Paris & major hubs',
  },
  {
    value: '99.9%',
    label: 'Successful deliveries',
    detail: 'Verified proof on drop-off',
  },
  {
    value: '24/7',
    label: 'Availability',
    detail: 'Day, night & weekend dispatch',
  },
  {
    value: '25 Min.',
    label: 'Average delivery time',
    detail: 'Dynamic EV urban routing',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-bold tracking-wide text-slate-600 sm:text-sm">
              Zero-Emission Urban Logistics · Paris &amp; Île-de-France
            </p>

            <h1
              className="mt-4 font-display font-extrabold tracking-tight text-slate-950"
              style={{
                fontSize: 'clamp(2.25rem, 3.8vw, 3.35rem)',
                lineHeight: 1.08,
                textWrap: 'balance',
              }}
            >
              Your reliable delivery partner for hassle-free logistics and on-time deliveries.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              On-demand electric delivery engineered for e-commerce brands, groceries,
              pharmaceuticals, restaurants, and individuals—moving across town faster with zero
              tailpipe emissions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal('trial', 'Get Started with Rapidmate')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition-all duration-150 hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onOpenModal('courier')}
                className="inline-flex min-h-[48px] items-center justify-center whitespace-nowrap shrink-0 rounded-lg border-2 border-slate-900 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-colors duration-150 hover:bg-slate-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 cursor-pointer"
              >
                Become a Courier
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
              <span>E-Commerce</span>
              <span className="text-yellow-500" aria-hidden="true">·</span>
              <span>Groceries &amp; Cold Chain</span>
              <span className="text-yellow-500" aria-hidden="true">·</span>
              <span>Pharmaceuticals</span>
              <span className="text-yellow-500" aria-hidden="true">·</span>
              <span>Restaurants</span>
              <span className="text-yellow-500" aria-hidden="true">·</span>
              <span>Personal Parcels</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 sm:min-h-[400px]">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_logistics_yellow_1794585220627.jpg"
                  alt="Rapidmate matte charcoal and sunny yellow electric delivery van and scooter parked outside a Parisian boutique"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 text-center text-white">
                  <Truck className="h-12 w-12 text-yellow-400" aria-hidden="true" />
                  <p className="mt-4 font-display text-lg font-semibold">
                    Rapidmate 100% Electric Urban Fleet
                  </p>
                </div>
              )}

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 text-white sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
                      100% Electric Last-Mile Dispatch
                    </p>
                    <p className="text-xs text-slate-200 sm:text-sm">
                      Instant courier matching across city hubs · Live recipient tracking
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-tight text-yellow-400 tabular-nums">
                    AVG 25 MIN ETA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column Trust Metrics Counter Banner with Yellow Accent Highlights */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {TRUST_METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex flex-col ${
                  index !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''
                }`}
              >
                <span className="font-mono text-3xl font-semibold tracking-tight text-yellow-400 tabular-nums sm:text-4xl">
                  {metric.value}
                </span>
                <span className="mt-1.5 font-display text-sm font-semibold text-white sm:text-base">
                  {metric.label}
                </span>
                <span className="mt-0.5 text-xs text-slate-400">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
