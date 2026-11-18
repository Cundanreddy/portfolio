import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { infotainmentApps } from './apps';
import { subscribeNav } from './nav';

export default function Launcher() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const tileRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const focusedIndexRef = useRef(0);
  const shouldFocus = useRef(false);

  useEffect(() => subscribeNav((action) => {
    if (action === 'next' || action === 'prev') {
      const direction = action === 'next' ? 1 : -1;
      const nextIndex =
        (focusedIndexRef.current + direction + infotainmentApps.length) %
        infotainmentApps.length;
      focusedIndexRef.current = nextIndex;
      shouldFocus.current = true;
      setFocusedIndex(nextIndex);
    } else if (action === 'select') {
      tileRefs.current[focusedIndexRef.current]?.click();
    }
  }), []);

  useEffect(() => {
    if (shouldFocus.current) {
      shouldFocus.current = false;
      tileRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <div className="infotainment-launcher">
      <section className="infotainment-hero" aria-labelledby="launcher-greeting">
        <p className="infotainment-eyebrow">WELCOME ABOARD</p>
        <h1 id="launcher-greeting">
          Hi, I&apos;m <span>{profile.name}</span>
        </h1>
        <p className="infotainment-hero-title">{profile.title}</p>
        <p className="infotainment-hero-tagline">{profile.tagline}</p>
        <Link className="infotainment-resume-button" to="/resume">
          View resume
        </Link>
      </section>

      <nav className="infotainment-app-grid" aria-label="Portfolio apps">
        {infotainmentApps.map(({ path, title, Icon }, index) => (
          <Link
            key={path}
            className="infotainment-app-tile"
            to={path}
            ref={(element) => {
              tileRefs.current[index] = element;
            }}
            onFocus={() => {
              focusedIndexRef.current = index;
              setFocusedIndex(index);
            }}
          >
            <Icon aria-hidden="true" />
            <span>{title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
