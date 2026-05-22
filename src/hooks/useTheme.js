// src/hooks/useTheme.js
import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return { theme: 'dark' };
}
