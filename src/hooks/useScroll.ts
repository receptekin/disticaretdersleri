import { useCallback, useEffect, useRef } from 'react';

export const useScroll = (callback: () => void, delay: number = 16) => {
  const timeoutRef = useRef<number | null>(null);

  const throttledScroll = useCallback(() => {
    if (timeoutRef.current === null) {
      timeoutRef.current = window.setTimeout(() => {
        callback();
        timeoutRef.current = null;
      }, delay);
    }
  }, [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [throttledScroll]);
};