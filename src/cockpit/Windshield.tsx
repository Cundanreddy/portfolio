export default function Windshield() {
  return (
    <svg
      className="cockpit-windshield cockpit-parallax"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="windshield-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#102735" />
          <stop offset=".62" stopColor="#31515c" />
          <stop offset="1" stopColor="#74817c" />
        </linearGradient>
        <linearGradient id="windshield-road" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#202d32" />
          <stop offset="1" stopColor="#101619" />
        </linearGradient>
        <linearGradient id="windshield-haze" x1="0" x2="1">
          <stop stopColor="#a4c7c8" stopOpacity=".04" />
          <stop offset=".5" stopColor="#d5ddcf" stopOpacity=".3" />
          <stop offset="1" stopColor="#a4c7c8" stopOpacity=".04" />
        </linearGradient>
      </defs>
      <path d="M0 0h1920v505Q960 440 0 505Z" fill="url(#windshield-sky)" />
      <path
        d="M0 485q150-70 295-22 115-86 262-28 151-93 310-20 142-72 284-8 131-67 258 1 173-78 301 8 103-45 210 11v144H0Z"
        fill="#293d3f"
        opacity=".66"
      />
      <path d="M0 512q960-119 1920 0L1250 694H670Z" fill="url(#windshield-road)" />
      <path d="M938 526h44l80 168h-28Z" fill="#c4c6a9" opacity=".18" />
      <path d="M0 500h1920v42H0Z" fill="url(#windshield-haze)" />
    </svg>
  );
}
