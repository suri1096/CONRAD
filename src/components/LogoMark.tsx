type LogoMarkProps = {
  title?: string
  className?: string
}

export function LogoMark({ title = 'GrandGuardian', className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="gg-grad" x1="3" y1="3" x2="29" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-600)" />
          <stop offset="1" stopColor="var(--accent-500)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.6c5.7 0 11 4.2 12.6 10.2.3 1.1-.4 2.2-1.5 2.5-.9.3-1.8.7-2.6 1.3-.7.5-1 .9-1 1.3v7.2c0 1-.6 2-1.6 2.4-2 1-4.1 1.5-5.9 1.5s-3.9-.5-5.9-1.5c-1-.5-1.6-1.4-1.6-2.4V18c0-.4-.3-.9-1-1.3-.8-.6-1.7-1-2.6-1.3-1.1-.3-1.8-1.4-1.5-2.5C5 6.8 10.3 2.6 16 2.6Z"
        fill="url(#gg-grad)"
        opacity="0.92"
      />
      <path
        d="M12.2 18.9c.8 1.1 2.1 1.9 3.8 1.9 1.7 0 3-.7 3.8-1.9"
        fill="none"
        stroke="rgba(255,255,255,.9)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12.1" cy="15.1" r="1.2" fill="rgba(255,255,255,.92)" />
      <circle cx="19.9" cy="15.1" r="1.2" fill="rgba(255,255,255,.92)" />
    </svg>
  )
}


