import type { ReactNode } from 'react';
import { useInfotainment } from '../infotainment/useInfotainment';

interface ScreenSlotProps {
  children: ReactNode;
}

export default function ScreenSlot({ children }: ScreenSlotProps) {
  const { expanded } = useInfotainment();

  return (
    <section
      className={`cockpit-screen${expanded ? ' cockpit-screen-expanded' : ''}`}
      aria-label="Infotainment screen"
    >
      <div className="cockpit-screen-bezel">
        <div className="cockpit-screen-glass">
          <div className="cockpit-screen-content">
            {children}
          </div>
        </div>
        <div className="cockpit-screen-status" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
