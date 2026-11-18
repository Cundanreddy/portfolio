import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { infotainmentApps } from './apps';
import { navBack, navHome } from './nav';

interface DockProps {
  recentPaths: string[];
}

export default function Dock({ recentPaths }: DockProps) {
  const { pathname } = useLocation();
  const fallbackPaths = infotainmentApps.map(({ path }) => path);
  const paths = [...new Set([...recentPaths, ...fallbackPaths])].slice(0, 3);

  return (
    <nav className="infotainment-dock" aria-label="System navigation">
      <button
        type="button"
        className={`infotainment-dock-button${pathname === '/' ? ' is-active' : ''}`}
        aria-label="Home"
        onClick={navHome}
      >
        <FiHome aria-hidden="true" />
      </button>
      <button
        type="button"
        className="infotainment-dock-button"
        aria-label="Back"
        onClick={navBack}
      >
        <FiArrowLeft aria-hidden="true" />
      </button>
      <span className="infotainment-dock-divider" aria-hidden="true" />
      {paths.map((path) => {
        const app = infotainmentApps.find((item) => item.path === path);
        if (!app) return null;
        const Icon = app.Icon;
        return (
          <Link
            key={path}
            to={path}
            className={`infotainment-dock-button${pathname === path ? ' is-active' : ''}`}
            aria-label={`Open recent app: ${app.title}`}
            aria-current={pathname === path ? 'page' : undefined}
          >
            <Icon aria-hidden="true" />
          </Link>
        );
      })}
    </nav>
  );
}
