import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { ModalIntent } from './Navbar';
import appPreviewImg from '../assets/images/app_preview_yellow_1794585221865.jpg';

interface AppDownloadBannerProps {
  onOpenModal: (intent: ModalIntent, contextLabel?: string) => void;
}

export const AppDownloadBanner: React.FC<AppDownloadBannerProps> = ({ onOpenModal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-yellow-500/50 bg-yellow-400">
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            <div className="flex flex-col justify-center p-8 text-slate-950 sm:p-12 lg:col-span-6">
              <p className="inline-block w-fit border-b-2 border-slate-950 pb-0.5 text-xs font-bold tracking-wide text-slate-950">
                iOS &amp; Android Mobile Companion
              </p>

              <h2
                className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Rapidmate at your fingertips!
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-900">
                Schedule pickups in seconds, follow your electric courier live on the city map,
                receive instant handover photos, or manage your courier shifts right from your
                pocket.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenModal('app', 'Download for iOS (App Store)')}
                  className="inline-flex min-h-[52px] items-center gap-3 whitespace-nowrap shrink-0 rounded-xl bg-slate-950 px-5 py-2.5 text-left text-white shadow-sm transition-all duration-150 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-400 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.68-.83 1.14-1.98 1.01-3.13-.98.04-2.17.65-2.87 1.48-.62.72-1.17 1.9-1.02 3.02 1.1.08 2.21-.55 2.88-1.37Z" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11px] font-normal text-slate-300">Download on the</span>
                    <span className="font-display text-sm font-semibold">App Store</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenModal('app', 'Download for Android (Google Play)')}
                  className="inline-flex min-h-[52px] items-center gap-3 whitespace-nowrap shrink-0 rounded-xl border border-slate-950/20 bg-white px-5 py-2.5 text-left text-slate-950 shadow-sm transition-all duration-150 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-400 cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M4.5 3.6L14.2 12L4.5 20.4C4.2 20.1 4 19.7 4 19.2V4.8C4 4.3 4.2 3.9 4.5 3.6Z" fill="#EAB308" />
                    <path d="M17.4 9.2L14.2 12L4.5 3.6C4.9 3.2 5.6 3.1 6.2 3.4L17.4 9.2Z" fill="#0F172A" />
                    <path d="M17.4 14.8L6.2 20.6C5.6 20.9 4.9 20.8 4.5 20.4L14.2 12L17.4 14.8Z" fill="#334155" />
                    <path d="M20 12C20 12.6 19.7 13.1 19.1 13.4L17.4 14.8L14.2 12L17.4 9.2L19.1 10.6C19.7 10.9 20 11.4 20 12Z" fill="#FACC15" />
                  </svg>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[11px] font-normal text-slate-600">Get it on</span>
                    <span className="font-display text-sm font-semibold">Google Play</span>
                  </span>
                </button>
              </div>

              <p className="mt-6 text-xs font-medium text-slate-900/85">
                Available for sender accounts, business dispatchers, and partner couriers.
              </p>
            </div>

            <div className="relative min-h-[280px] border-t border-slate-950/10 bg-slate-200 lg:col-span-6 lg:border-t-0 lg:border-l">
              {!imgError ? (
                <img
                  src={appPreviewImg}
                  alt="Rapidmate mobile app displaying live yellow delivery route tracking on a smartphone"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center lg:h-full"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center bg-slate-900 p-8 text-center text-white">
                  <Smartphone className="h-10 w-10 text-yellow-400" aria-hidden="true" />
                  <p className="mt-3 font-display text-base font-semibold">
                    Rapidmate Mobile App
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
