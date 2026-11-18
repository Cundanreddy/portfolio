import { createContext, type Dispatch, type SetStateAction } from 'react';

export interface InfotainmentContextValue {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export const InfotainmentContext =
  createContext<InfotainmentContextValue | null>(null);
