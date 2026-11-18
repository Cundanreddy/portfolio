import { useMemo, useState, type ReactNode } from 'react';
import { InfotainmentContext } from './InfotainmentContext';

export function InfotainmentProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const value = useMemo(() => ({ expanded, setExpanded }), [expanded]);

  return (
    <InfotainmentContext.Provider value={value}>
      {children}
    </InfotainmentContext.Provider>
  );
}
