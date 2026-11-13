import React, { useState } from 'react';
import { Leaf, Zap } from 'lucide-react';
import { ModalIntent } from './Navbar';

interface SustainabilitySectionProps {
  onOpenModal: (intent: ModalIntent, contextLabel?: string) => void;
}

const ECO_METRICS = [
  {
    value: '100%',
    label: 'Electric Urban Fleet',
    detail: 'Electric cars, low-emission hybrids & agile e-scooters',
  },
  {
    value: '380+ t',
    label: 'CO₂ Saved Annually',
    detail: 'Verified carbon reduction across partner deliveries',
  },
  {
    value: '0 dB',
    label: 'Quiet Night Runs',
    detail: 'Whisper-silent EV hubs built for dense city centers',
  },
];

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onOpenModal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sustainability" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              {!imgError ? (
                <img
                  src="/src/assets/images/feature_fleet_yellow_1794585221589.jpg"
                  alt="Rapidmate charcoal and sunny yellow electric cargo scooter and EV van charging at an urban hub"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center lg:h-full"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-center">
                  <Zap className="h-10 w-10 text-yellow-400" aria-hidden="true" />
                  <p className="mt-3 font-display text-base font-semibold">
                    Zero-Emission Electric Fleet
                  </p>
                </div>
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5">
                <span className="text-xs font-medium text-slate-200">
                  Urban Micro-Charging Stations · Paris Metro
                </span>
                <span className="rounded bg-yellow-400 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-950 tabular-nums">
                  ZFE COMPLIANT
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-md bg-yellow-400 px-2.5 py-1 text-xs font-bold tracking-wide text-slate-950">
              <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Sustainability &amp; Eco-Commitment</span>
            </div>

            <h2
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              High-velocity logistics without the carbon footprint.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Cities deserve faster deliveries without extra exhaust or noise. Rapidmate operates a
              modern green fleet combining 100% electric cars, urban e-scooters, and low-emission
              hybrids—cutting carbon output while maintaining our 25-minute average delivery speed.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {ECO_METRICS.map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-2xl font-semibold text-yellow-400 tabular-nums sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal('trial', 'Request Eco-Fleet Partnership')}
                className="inline-flex min-h-[46px] items-center justify-center whitespace-nowrap shrink-0 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors duration-150 hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
              >
                Switch to Green Delivery
              </button>
              <span className="text-xs text-slate-400">
                Monthly CO₂ impact certificates included for B2B partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
