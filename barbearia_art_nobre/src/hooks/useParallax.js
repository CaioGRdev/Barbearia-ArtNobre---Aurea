import { useEffect, useRef } from 'react';

/**
 * Hook que aplica efeito parallax num elemento usando transform: translateY.
 * Funciona em todos os browsers incluindo iOS Safari (ao contrário de
 * background-attachment: fixed que quebra no mobile).
 *
 * @param {number} speed - Velocidade do parallax: 0 = sem efeito, 0.5 = metade da velocidade do scroll.
 * @returns {React.RefObject} - Ref para o elemento que vai se mover
 */
export function useParallax(speed = 0.4) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const scrollY = window.scrollY;
      const rect = el.parentElement?.getBoundingClientRect();

      // Só anima se o elemento estiver visível na viewport
      if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
        el.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // posição inicial

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return ref;
}
