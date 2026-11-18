import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StatusBar from './StatusBar';
import BootSequence from './BootSequence';
import Dock from './Dock';
import { infotainmentApps } from './apps';
import { useInfotainment } from './useInfotainment';
import {
  navBack,
  navHome,
  navNext,
  navPrev,
  navSelect,
  subscribeNav,
} from './nav';
import './infotainment.css';

interface InfotainmentShellProps {
  children: ReactNode;
}

export default function InfotainmentShell({
  children,
}: InfotainmentShellProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { expanded, setExpanded } = useInfotainment();
  const [recentPaths, setRecentPaths] = useState<string[]>([]);
  const [bootComplete, setBootComplete] = useState(false);
  const isHome = location.pathname === '/';
  const ignited = true;
  const completeBoot = useCallback(() => setBootComplete(true), []);

  useEffect(() => {
    if (isHome) return;
    setRecentPaths((current) => [
      location.pathname,
      ...current.filter((path) => path !== location.pathname),
    ]);
  }, [isHome, location.pathname]);

  useEffect(
    () =>
      subscribeNav((action) => {
        if (action === 'home' && isHome) {
          setExpanded(false);
        }
        if (action === 'home' && !isHome && !bootComplete) {
          setExpanded(false);
          navigate('/');
        }
        if (action === 'back' && isHome && expanded) {
          setExpanded(false);
        }
      }),
    [bootComplete, expanded, isHome, navigate, setExpanded],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          if (isHome) {
            event.preventDefault();
            navNext();
          }
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          if (isHome) {
            event.preventDefault();
            navPrev();
          }
          break;
        case 'Enter':
          if (isHome && !(event.target instanceof HTMLAnchorElement)) {
            event.preventDefault();
            navSelect();
          }
          break;
        case 'Escape':
          event.preventDefault();
          if (expanded) {
            setExpanded(false);
          } else {
            navBack();
          }
          break;
        case 'Home':
          if (!isHome) {
            event.preventDefault();
            navHome();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expanded, isHome, setExpanded]);

  return (
    <div className="infotainment-shell">
      <StatusBar />
      <div className="infotainment-content">
        {ignited && !bootComplete ? (
          <BootSequence ignited={ignited} onComplete={completeBoot} />
        ) : (
          children
        )}
      </div>
      <Dock recentPaths={recentPaths.slice(0, infotainmentApps.length)} />
    </div>
  );
}
