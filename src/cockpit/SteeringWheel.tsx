export default function SteeringWheel() {
  return (
    <svg
      className="cockpit-steering-wheel cockpit-parallax"
      viewBox="0 0 600 600"
      role="img"
      aria-label="Decorative steering wheel placeholder"
    >
      <defs>
        <linearGradient id="wheel-leather" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#353d40" />
          <stop offset=".45" stopColor="#080b0c" />
          <stop offset="1" stopColor="#242b2e" />
        </linearGradient>
        <radialGradient id="wheel-hub">
          <stop stopColor="#394246" />
          <stop offset="1" stopColor="#111719" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="245" fill="none" stroke="#050708" strokeWidth="68" />
      <circle cx="300" cy="300" r="245" fill="none" stroke="url(#wheel-leather)" strokeWidth="48" />
      <circle cx="300" cy="300" r="217" fill="none" stroke="#889397" strokeOpacity=".24" strokeWidth="2" strokeDasharray="2 8" />
      <path d="m127 221 74 31 16 103-54 57Q108 326 127 221ZM473 221l-74 31-16 103 54 57q55-86 36-191ZM217 320h166l-29 86H246Z" fill="url(#wheel-leather)" stroke="#566166" strokeWidth="5" />
      <path d="M249 404h102l39 104q-91 46-180 0Z" fill="url(#wheel-hub)" stroke="#465156" strokeWidth="5" />
      <path d="M273 450h54" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="300" cy="467" r="19" fill="#151d20" stroke="#617078" strokeWidth="3" />
    </svg>
  );
}
