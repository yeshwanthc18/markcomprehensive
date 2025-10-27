'use client';

import { ReactNode } from 'react';
import { useLenis } from '@/hooks/use-lenis';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useLenis();
  
  return <>{children}</>;
}