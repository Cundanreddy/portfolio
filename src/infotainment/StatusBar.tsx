import { useEffect, useState } from 'react';
import {
  FiBluetooth,
  FiActivity,
  FiMoon,
  FiSun,
  FiWifi,
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function getTimeLabel(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export default function StatusBar() {
  const [now, setNow] = useState(() => new Date());
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <header className="infotainment-statusbar">
      <span className="infotainment-clock" aria-label={`Time ${getTimeLabel(now)}`}>
        {getTimeLabel(now)}
      </span>
      <div className="infotainment-status-items">
        <span className="infotainment-temperature">--°</span>
        <FiActivity aria-hidden="true" />
        <FiWifi aria-hidden="true" />
        <FiBluetooth aria-hidden="true" />
        <button
          className="infotainment-icon-button"
          type="button"
          aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
          onClick={toggleTheme}
        >
          {theme === 'day' ? (
            <FiMoon aria-hidden="true" />
          ) : (
            <FiSun aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
