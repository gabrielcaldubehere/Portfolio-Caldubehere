interface MonogramProps {
  className?: string;
}

export default function Monogram({ className = "h-9 w-9" }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="60" height="60" rx="16" stroke="currentColor" strokeWidth="3" opacity="0.9" />
      <path
        d="M18 44V22c0-1.1.9-2 2-2h2c.7 0 1.36.37 1.72.97L32 35.5l8.28-14.53A2 2 0 0 1 42 20h2c1.1 0 2 .9 2 2v22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M36 44h10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="18" r="2.5" fill="currentColor" />
    </svg>
  );
}
