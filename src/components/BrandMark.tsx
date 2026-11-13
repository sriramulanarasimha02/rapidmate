import React, { useId } from 'react';

interface BrandMarkProps {
  inverted?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ inverted = false }) => {
  const gradientId = useId();

  return (
    <span className="inline-flex flex-col items-center justify-center gap-0.5 whitespace-nowrap shrink-0 leading-none">
      {/* Pink map-pin + delivery-cap icon positioned above the bold black Rapidmate wordmark */}
      <svg
        width="26"
        height="30"
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="6" y1="2" x2="30" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="55%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
        </defs>
        <path
          d="M18 1.5C9.44 1.5 2.5 8.44 2.5 17C2.5 27.6 15.65 39.02 17.16 40.3C17.64 40.71 18.36 40.71 18.84 40.3C20.35 39.02 33.5 27.6 33.5 17C33.5 8.44 26.56 1.5 18 1.5Z"
          fill={`url(#${gradientId})`}
        />
        <circle cx="18" cy="16.5" r="10.2" fill="#FFFFFF" />
        {/* Courier delivery cap silhouette */}
        <path
          d="M11.6 17.5C11.6 14.05 14.3 11.4 17.75 11.4C20.8 11.4 23.15 13.5 23.6 16.45L26.2 17.35C26.62 17.5 26.8 17.98 26.58 18.36C26.44 18.6 26.18 18.74 25.9 18.74H11.95C11.74 18.74 11.6 18.58 11.6 18.37V17.5Z"
          fill="#DB2777"
        />
        <path
          d="M11.6 17.8H23.75"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="17.6" cy="14.6" r="1.35" fill="#FFFFFF" />
      </svg>

      <span
        className={`font-display text-[15px] font-extrabold tracking-tight leading-none ${
          inverted ? 'text-white' : 'text-slate-950'
        }`}
      >
        Rapidmate
      </span>
    </span>
  );
};
