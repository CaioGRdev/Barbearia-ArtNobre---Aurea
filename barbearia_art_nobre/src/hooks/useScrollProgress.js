import { useEffect, useState } from 'react';

/**
 * Hook que rastreia o progresso de scroll da página (0% a 100%).
 * Usa requestAnimationFrame para não travar a thread principal.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollContainer =
      document.getElementById('root') ||
      document.scrollingElement ||
      document.documentElement;
    let rafId = null;

    const update = () => {
      const total = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const nextProgress =
        total > 0 ? (scrollContainer.scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    scrollContainer.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      scrollContainer.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return progress;
}
