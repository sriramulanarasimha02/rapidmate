import React, { useState } from 'react';
import { ArrowRight, Check, Package } from 'lucide-react';
import { ModalIntent } from './Navbar';
import audienceFulfillmentImg from '../assets/images/audience_business_fulfillment_1794584907230.jpg';

interface AudienceSectionProps {
  onOpenModal: (intent: ModalIntent, contextLabel?: string) => void;
}

type AudienceKey = 'individuals' | 'businesses' | 'couriers';

interface AudienceDetail {
  key: AudienceKey;
  tabLabel: string;
  kicker: string;
  headline: string;
  description: string;
  points: string[];
  metricValue: string;
  metricLabel: string;
  ctaLabel: string;
  modalIntent: ModalIntent;
  modalContext: string;
}

const AUDIENCE_DATA: Record<AudienceKey, AudienceDetail> = {
  individuals: {
    key: 'individuals',
    tabLabel: 'Individuals',
    kicker: 'Personal On-Demand Delivery',
    headline: 'Personal packages, moving support, and last-minute gifts—delivered in minutes.',
    description:
      'Skip post office queues and unreliable windows. Book an electric courier from your phone to send keys, forgotten laptops, floral gifts, or compact apartment move boxes across town.',
    points: [
      'Door-to-door pickup in under 15 minutes across metro zones',
      'Insured handling for fragile items, gifts, and urgent documents',
      'Light moving support with electric vans for bulky personal items',
      'Shareable live tracking map with PIN-verified handover',
    ],
    metricValue: '60 sec',
    metricLabel: 'Booking time from pickup entry to courier dispatch',
    ctaLabel: 'Send a Personal Package',
    modalIntent: 'trial',
    modalContext: 'Book a Personal Delivery',
  },
  businesses: {
    key: 'businesses',
    tabLabel: 'Businesses & Restaurants',
    kicker: 'Enterprise & Merchant Logistics',
    headline: 'B2B scalability for electronics, FMCG, frozen goods, and restaurant dispatch.',
    description:
      'Connect your storefront, warehouse, or kitchen directly to our electric fleet. Rapidmate handles cold-chain groceries, high-value electronics, pharmaceuticals, and high-volume daily routes.',
    points: [
      'Temperature-controlled cargo boxes for frozen goods & fresh meals',
      'API & Shopify/POS plug-and-play order sync with live webhooks',
      'Multi-drop route batching for FMCG and retail restocking',
      'Dedicated account manager with custom SLA reporting',
    ],
    metricValue: '99.9%',
    metricLabel: 'On-time fulfillment across e-commerce & cold-chain runs',
    ctaLabel: 'Start Business Free Trial',
    modalIntent: 'trial',
    modalContext: 'Business Logistics Free Trial',
  },
  couriers: {
    key: 'couriers',
    tabLabel: 'Couriers (Earn Money)',
    kicker: 'Flexible Partner Network',
    headline: 'Flexible hours, competitive pay, and fast onboarding for freelance drivers.',
    description:
      'Ride on your own schedule using an e-scooter, cargo bike, electric car, or hybrid van. Keep more of every drop with transparent per-route earnings and 24/7 roadside backup.',
    points: [
      'Choose your own shifts—no minimum weekly lock-in required',
      'Competitive base rates plus peak-hour and distance multipliers',
      'Weekly instant payouts with transparent trip earnings breakdown',
      '24/7 vehicle support, towing assistance, and EV charging perks',
    ],
    metricValue: '48 hrs',
    metricLabel: 'Average onboarding time from application to first active route',
    ctaLabel: 'Apply as a Courier',
    modalIntent: 'courier',
    modalContext: 'Courier Partner Onboarding',
  },
};

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<AudienceKey>('businesses');
  const [imgError, setImgError] = useState(false);

  const current = AUDIENCE_DATA[activeTab];

  return (
    <section id="audiences" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-block border-b-2 border-yellow-400 pb-0.5 text-xs font-bold tracking-wide text-slate-950">
              Built for Every Side of Urban Logistics
            </p>
            <h2
              className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Tailored workflows for individuals, enterprises, and independent couriers.
            </h2>
          </div>

          {/* Segmented Tab Controls */}
          <div
            role="tablist"
            aria-label="Audience solutions"
            className="inline-flex w-full flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1.5 sm:w-auto"
          >
            {(Object.keys(AUDIENCE_DATA) as AudienceKey[]).map((key) => {
              const item = AUDIENCE_DATA[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 whitespace-nowrap shrink-0 rounded-lg px-4 py-2.5 text-xs font-bold transition-all duration-150 sm:flex-initial sm:text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
                    isActive
                      ? 'bg-yellow-400 text-slate-950 shadow-xs'
                      : 'text-slate-700 hover:bg-white/80 hover:text-slate-950'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div
          role="tabpanel"
          className="mt-10 grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 lg:grid-cols-12"
        >
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
            <div>
              <p className="text-xs font-bold tracking-wide text-slate-600">
                {current.kicker}
              </p>
              <h3
                className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                {current.headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {current.description}
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {current.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-slate-950">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-6 border-t border-slate-200 pt-6">
              <div>
                <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">
                  {current.metricValue}
                </p>
                <p className="mt-0.5 max-w-xs text-xs text-slate-500">
                  {current.metricLabel}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal(current.modalIntent, current.modalContext)}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-xs transition-all duration-150 hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>{current.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[280px] border-t border-slate-200 bg-slate-950 lg:col-span-5 lg:border-t-0 lg:border-l">
            {!imgError ? (
              <img
                src={audienceFulfillmentImg}
                alt="Rapidmate dispatch counter with eco-friendly parcels and insulated grocery crates ready for electric courier pickup"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover object-center lg:h-full"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center text-white">
                <Package className="h-10 w-10 text-yellow-400" aria-hidden="true" />
                <p className="mt-3 font-display text-base font-semibold">
                  Rapidmate Fulfillment &amp; Dispatch
                </p>
              </div>
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-xs font-semibold text-yellow-400">
                {current.tabLabel} Network
              </p>
              <p className="mt-0.5 text-sm font-semibold">
                Automated dispatch · Cold-chain &amp; fragile-ready cargo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
