import { createContext, useContext } from 'react';

interface HyperspeedContextType {
  speedUp: (ev?: any) => void;
  slowDown: (ev?: any) => void;
}

export const HyperspeedContext = createContext<HyperspeedContextType | null>(null);

export const useHyperspeed = () => {
  const context = useContext(HyperspeedContext);
  if (!context) {
    throw new Error('useHyperspeed must be used within a HyperspeedProvider');
  }
  return context;
};
