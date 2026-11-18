import type { ReactNode } from 'react';

interface ScreenSlotProps {
  children?: ReactNode;
}

export default function ScreenSlot({ children }: ScreenSlotProps) {
  return (
    <section className="cockpit-screen" aria-label="Infotainment screen">
      <div className="cockpit-screen-bezel">
        <div className="cockpit-screen-glass">
          <div className="cockpit-screen-content">
            {children ?? <p>Infotainment goes here</p>}
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
