import { useContext } from 'react';
import {
  InfotainmentContext,
  type InfotainmentContextValue,
} from './InfotainmentContext';

export function useInfotainment(): InfotainmentContextValue {
  const context = useContext(InfotainmentContext);
  if (!context) {
    throw new Error('useInfotainment must be used within InfotainmentProvider');
  }
  return context;
}
