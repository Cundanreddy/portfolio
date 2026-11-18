import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { FiArrowLeft, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useInfotainment } from './useInfotainment';
import { subscribeNav } from './nav';

interface AppWindowProps {
  title: string;
  children: ReactNode;
}

export default function AppWindow({ title, children }: AppWindowProps) {
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const closeTimer = useRef<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { expanded, setExpanded } = useInfotainment();

  const closeApp = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 0
      : 200;
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      setExpanded(false);
      navigate('/');
    }, delay);
  }, [navigate, setExpanded]);

  useEffect(() => subscribeNav((action) => {
    if (action === 'back') closeApp();
    if (action === 'home') {
      closeApp();
    }
  }), [closeApp, navigate, setExpanded]);

  useEffect(() => {
    closingRef.current = false;
    setClosing(false);
    return () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, [location.pathname]);

  return (
    <section
      className={`infotainment-app-window${closing ? ' is-closing' : ''}`}
      aria-labelledby="app-window-title"
    >
      <header className="infotainment-app-titlebar">
        <button
          className="infotainment-icon-button infotainment-back-button"
          type="button"
          aria-label={`Back from ${title}`}
          onClick={closeApp}
        >
          <FiArrowLeft aria-hidden="true" />
        </button>
        <h1 id="app-window-title">{title}</h1>
        <button
          className="infotainment-icon-button infotainment-expand-button"
          type="button"
          aria-label={expanded ? 'Collapse infotainment screen' : 'Expand infotainment screen'}
          aria-pressed={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <FiMinimize2 aria-hidden="true" />
          ) : (
            <FiMaximize2 aria-hidden="true" />
          )}
        </button>
      </header>
      <div className="infotainment-app-body">{children}</div>
    </section>
  );
}
