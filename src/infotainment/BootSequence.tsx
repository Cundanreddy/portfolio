import { useEffect, useState } from 'react';

interface BootSequenceProps {
  ignited: boolean;
  onComplete: () => void;
}

export default function BootSequence({
  ignited,
  onComplete,
}: BootSequenceProps) {
  const [visible, setVisible] = useState(ignited);

  useEffect(() => {
    if (!ignited || !visible) return;

    const timeout = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [ignited, onComplete, visible]);

  if (!visible || !ignited) return null;

  const skipBoot = () => {
    setVisible(false);
    onComplete();
  };

  return (
    <button
      className="infotainment-boot"
      type="button"
      aria-label="Skip Cundan OS startup"
      onClick={skipBoot}
    >
      <span className="infotainment-boot-mark" aria-hidden="true">
        C
      </span>
      <span className="infotainment-boot-title">Cundan OS</span>
      <span className="infotainment-boot-caption">SYSTEM STARTING</span>
      <span className="infotainment-boot-progress" aria-hidden="true" />
    </button>
  );
}
