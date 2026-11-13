import React, { useState } from 'react';
import { BatteryCharging, MapPin, ShieldAlert, Users } from 'lucide-react';

const ROUTE_STAGES = [
  {
    id: 'pickup',
    label: 'Pickup Confirmed',
    eta: '25 min',
    step: 'Courier assigned · Rue de Rivoli Hub',
    progress: '28%',
  },
  {
    id: 'transit',
    label: 'In EV Transit',
    eta: '11 min',
    step: 'Electric scooter en route · Zero emissions',
    progress: '68%',
  },
  {
    id: 'dropoff',
    label: 'Delivered',
    eta: '0 min',
    step: 'Signed & photo verified at doorstep',
    progress: '100%',
  },
] as const;

export const SolutionsGrid: React.FC = () => {
  const [activeStage, setActiveStage] = useState<(typeof ROUTE_STAGES)[number]['id']>('transit');
  const currentStage = ROUTE_STAGES.find((s) => s.id === activeStage) ?? ROUTE_STAGES[1];

  return (
    <section id="solutions" className="border-t border-slate-100 bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-block border-b-2 border-yellow-400 pb-0.5 text-xs font-bold tracking-wide text-slate-950">
            Rapidmate Solutions
          </p>
          <h2
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Logistics infrastructure built for speed, visibility, and zero emissions.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Every delivery combines precision routing, electric urban vehicles, dedicated courier
            squads, and around-the-clock operational support.
          </p>
        </div>

        {/* Asymmetric Bento Grid with Sunny Yellow Accent Icons */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 1: Real-time tracking (col-span-7) */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:shadow-md sm:p-8 lg:col-span-7">
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-colors group-hover:bg-yellow-500">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                  01
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-slate-950">
                01. Real-time order tracking from pickup to drop-off
              </h3>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Monitor every courier movement with second-by-second GPS precision, automated SMS
                tracking links for your recipients, and instant digital proof of delivery.
              </p>
            </div>

            {/* Interactive Tracking Preview */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-slate-200/80 p-1">
                  {ROUTE_STAGES.map((stage) => (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setActiveStage(stage.id)}
                      className={`whitespace-nowrap shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                        activeStage === stage.id
                          ? 'bg-yellow-400 text-slate-950 shadow-xs'
                          : 'text-slate-700 hover:text-slate-950'
                      }`}
                    >
                      {stage.label}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-slate-950 tabular-nums">
                  ETA {currentStage.eta}
                </span>
              </div>

              <div className="mt-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-yellow-400 transition-all duration-300"
                    style={{ width: currentStage.progress }}
                  />
                </div>
                <p className="mt-2.5 text-xs font-medium text-slate-700">
                  {currentStage.step}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Eco-friendly 100% EV (col-span-5) */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:shadow-md sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-colors group-hover:bg-yellow-500">
                  <BatteryCharging className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                  02
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-slate-950">
                02. Eco-friendly 100% electric vehicles &amp; e-scooters
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Our urban fleet relies on electric cars, compact EV vans, and agile e-scooters to
                bypass city congestion while eliminating local carbon emissions.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
              <div>
                <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">0g</p>
                <p className="mt-0.5 text-xs text-slate-500">Tailpipe CO₂ per km</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">100%</p>
                <p className="mt-0.5 text-xs text-slate-500">Clean-zone compliant</p>
              </div>
            </div>
          </div>

          {/* Card 3: Flexible team-based deliveries (col-span-5) */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:shadow-md sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-colors group-hover:bg-yellow-500">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                  03
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-slate-950">
                03. Flexible team-based deliveries for daily consistency
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                Assign dedicated courier teams trained on your packaging standards and customer
                protocol—scaling effortlessly from quiet Tuesdays to weekend volume spikes.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-slate-600">
              <span>Scheduled routes &amp; ad-hoc bursts</span>
              <span className="font-mono font-semibold text-slate-950 tabular-nums">SLA 99.9%</span>
            </div>
          </div>

          {/* Card 4: 24/7 roadside/towing & vehicle support (col-span-7) */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:shadow-md sm:p-8 lg:col-span-7">
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-colors group-hover:bg-yellow-500">
                  <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                  04
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-slate-950">
                04. 24/7 specialized roadside, towing &amp; vehicle support assistance
              </h3>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Unexpected flat tires or fleet downtime never stall your orders. Our rapid mobile
                maintenance, towing, and instant vehicle swap network keeps drivers and parcels
                moving around the clock.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">
              <div>
                <p className="font-display text-sm font-semibold text-slate-950">Rapid Towing</p>
                <p className="mt-0.5 text-xs text-slate-500">Immediate recovery dispatch</p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-slate-950">Backup EV Swap</p>
                <p className="mt-0.5 text-xs text-slate-500">Zero missed delivery windows</p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-slate-950">24/7 Live Ops</p>
                <p className="mt-0.5 text-xs text-slate-500">Direct human dispatch desk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
