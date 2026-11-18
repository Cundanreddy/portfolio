import { useEffect, useRef, type ReactNode } from 'react';
import CabinFrame from './CabinFrame';
import CenterConsole from './CenterConsole';
import CockpitDashboard from './CockpitDashboard';
import CompactControls from './CompactControls';
import InstrumentCluster from './InstrumentCluster';
import PaddleShifters from './PaddleShifters';
import ScreenSlot from './ScreenSlot';
import SteeringWheel from './SteeringWheel';
import Windshield from './Windshield';
import './cockpit.css';

interface CockpitStageProps {
  children: ReactNode;
}

export default function CockpitStage({ children }: CockpitStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!stage || reducedMotion.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches) return;
      const bounds = stage.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      stage.style.setProperty('--parallax-x', `${x * 10}px`);
      stage.style.setProperty('--parallax-y', `${y * 10}px`);
    };

    const resetParallax = () => {
      stage.style.setProperty('--parallax-x', '0px');
      stage.style.setProperty('--parallax-y', '0px');
    };

    stage.addEventListener('pointermove', handlePointerMove);
    stage.addEventListener('pointerleave', resetParallax);
    reducedMotion.addEventListener('change', resetParallax);

    return () => {
      stage.removeEventListener('pointermove', handlePointerMove);
      stage.removeEventListener('pointerleave', resetParallax);
      reducedMotion.removeEventListener('change', resetParallax);
    };
  }, []);

  return (
    <main className="cockpit-viewport">
      <div className="cockpit-stage" ref={stageRef}>
        <Windshield />
        <CabinFrame />
        <CockpitDashboard />
        <InstrumentCluster />
        <PaddleShifters />
        <SteeringWheel />
        <CenterConsole />
        <ScreenSlot>{children}</ScreenSlot>
        <CompactControls />
      </div>
    </main>
  );
}
