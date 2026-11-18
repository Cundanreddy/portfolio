export default function InstrumentCluster() {
  return (
    <svg
      className="cockpit-instrument-cluster cockpit-parallax"
      viewBox="0 0 520 340"
      role="img"
      aria-label="Decorative instrument cluster placeholder"
    >
      <defs>
        <linearGradient id="cluster-glass" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#111a1d" />
          <stop offset="1" stopColor="#05090b" />
        </linearGradient>
      </defs>
      <path d="M18 275Q30 34 260 30t242 245l-40 40H58Z" fill="#090d0f" stroke="#39464a" strokeWidth="8" />
      <path d="M48 264Q66 66 260 62t212 202l-30 28H78Z" fill="url(#cluster-glass)" />
      <path d="M82 242a178 178 0 0 1 356 0" fill="none" stroke="#39515a" strokeWidth="9" />
      <path d="M102 240a158 158 0 0 1 316 0" fill="none" stroke="var(--accent)" strokeOpacity=".72" strokeWidth="3" />
      <path d="m260 231 78-99" stroke="#d7f8fa" strokeWidth="5" strokeLinecap="round" />
      <circle cx="260" cy="231" r="13" fill="#d7f8fa" />
      <rect x="194" y="249" width="132" height="42" rx="8" fill="#101b1e" stroke="#345057" strokeWidth="2" />
      <text x="260" y="278" fill="#80dceb" fontFamily="monospace" fontSize="22" textAnchor="middle">
        READY
      </text>
    </svg>
  );
}
