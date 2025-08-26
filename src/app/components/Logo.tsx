"use client";
import * as React from "react";
import clsx from "clsx";

/**
 * Hajj & Umrah Brand Logo
 * - Variant "full": icon + text lockup
 * - Variant "mark": icon only (for navbar/avatars)
 *
 * Props:
 * - variant: "full" | "mark"
 * - size: pixel size for the icon (full variant uses this for icon height)
 * - className: wrapper class
 * - title: accessible title for the SVG
 * - titleClassName: class for the text title (apply Merienda here if you want)
 * - subtitleClassName: class for the subtitle
 */
type LogoProps = {
  variant?: "full" | "mark";
  size?: number;
  className?: string;
  title?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function Logo({
  variant = "full",
  size = 40,
  className,
  title = "Hajj & Umrah — Makkah & Madinah",
  titleClassName,
  subtitleClassName,
}: LogoProps) {
  const Icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <title>{title}</title>

      {/* Ground / Base */}
      <path
        d="M15 150c30 22 140 22 170 0"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* --- Kaaba (left) --- */}
      {/* Side face */}
      <path d="M30 70l55 -18 0 68 -55 18z" fill="#1f2937" /> {/* slate-800 */}
      {/* Front face */}
      <rect x="85" y="52" width="60" height="70" fill="#0b0b0b" rx="6" /> {/* near-black */}
      {/* Kiswa band */}
      <rect x="85" y="60" width="60" height="12" fill="#d4a017" /> {/* gold */}
      {/* Kiswa motifs (small squares) */}
      <g fill="#e8c65a" opacity="0.85">
        <rect x="90" y="63" width="6" height="6" rx="1" />
        <rect x="102" y="63" width="6" height="6" rx="1" />
        <rect x="114" y="63" width="6" height="6" rx="1" />
        <rect x="126" y="63" width="6" height="6" rx="1" />
        <rect x="138" y="63" width="6" height="6" rx="1" />
      </g>
      {/* Door */}
      <rect x="112" y="86" width="18" height="28" rx="2" fill="#d4a017" />
      <rect x="112" y="86" width="18" height="28" rx="2" fill="url(#doorGlow)" opacity="0.35" />
      {/* subtle top edge */}
      <rect x="85" y="52" width="60" height="4" fill="#111827" />

      {/* --- Green Dome (right) --- */}
      {/* Dome base (white colonnade) */}
      <rect x="138" y="100" width="45" height="18" rx="3" fill="#ffffff" opacity="0.9" />
      {/* Simple columns */}
      <g fill="#e5e7eb">
        <rect x="142" y="103" width="4" height="12" rx="1" />
        <rect x="151" y="103" width="4" height="12" rx="1" />
        <rect x="160" y="103" width="4" height="12" rx="1" />
        <rect x="169" y="103" width="4" height="12" rx="1" />
        <rect x="178" y="103" width="4" height="12" rx="1" />
      </g>

      {/* Dome shape */}
      <path
        d="M160 55c-20 8-32 27-32 45 0 16 12 24 32 24s32-8 32-24c0-18-12-37-32-45Z"
        fill="#16a34a"
      />
      {/* Dome gradient overlay */}
      <defs>
        <linearGradient id="domeGrad" x1="128" y1="55" x2="192" y2="124" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#15803d" />
        </linearGradient>
        <radialGradient id="doorGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(121 100) rotate(90) scale(22 12)">
          <stop stopColor="#fff799" />
          <stop offset="1" stopColor="#fff799" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M160 55c-20 8-32 27-32 45 0 16 12 24 32 24s32-8 32-24c0-18-12-37-32-45Z"
        fill="url(#domeGrad)"
        opacity="0.9"
      />

      {/* Crescents / finial */}
      <g transform="translate(160,45)">
        {/* mast */}
        <rect x="-1" y="-10" width="2" height="12" rx="1" fill="#d4a017" />
        {/* small crescent */}
        <path
          d="M0,-12c3,0 5,2.5 5,5.5c0,2.8-1.8,5.1-4.2,5.9c2-2.1 2-6.8-0.8-9.2Z"
          fill="#d4a017"
        />
      </g>
    </svg>
  );

  if (variant === "mark") {
    return <div className={clsx("inline-flex items-center", className)}>{Icon}</div>;
  }

  return (
    <div className={clsx("inline-flex items-center gap-3", className)}>
      {Icon}
      <div className="flex flex-col leading-tight">
        <span
          className={clsx(
            "text-xl sm:text-2xl font-extrabold tracking-wide text-white",
            titleClassName
          )}
          // Tip: apply Merienda on a parent or pass it via titleClassName
        >
          Hajj <span className="text-amber-400">&</span> Umrah
        </span>
        <span
          className={clsx(
            "text-[11px] sm:text-xs text-white/80 tracking-wide",
            subtitleClassName
          )}
        >
          Makkah • Madinah
        </span>
      </div>
    </div>
  );
}
