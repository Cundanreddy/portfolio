export default function CabinFrame() {
  return (
    <svg
      className="cockpit-cabin-frame cockpit-parallax"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cabin-trim" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#354247" />
          <stop offset=".45" stopColor="#111719" />
          <stop offset="1" stopColor="#465258" />
        </linearGradient>
      </defs>
      <path d="M0 0h1920v68Q960 22 0 68Z" fill="#080c0e" />
      <path d="M0 0h240L520 510l-75 64Z" fill="url(#cabin-trim)" />
      <path d="M1920 0h-240l-280 510 75 64Z" fill="url(#cabin-trim)" />
      <path d="m215 0 17 2 295 514-13 9Z" fill="#839196" opacity=".18" />
      <path d="m1705 0-17 2-295 514 13 9Z" fill="#839196" opacity=".18" />
      <path d="M0 575q960-118 1920 0v86Q960 550 0 661Z" fill="#090d0f" />
      <path d="M0 575q960-118 1920 0" fill="none" stroke="#718086" strokeOpacity=".24" strokeWidth="5" />
    </svg>
  );
}
