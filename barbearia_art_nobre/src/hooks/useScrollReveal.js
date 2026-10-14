import { useEffect, useRef } from 'react';

/**
 * Hook que observa quando o elemento entra na viewport e adiciona a classe 'visible',
 * disparando a animação CSS de reveal no momento certo do scroll.
 *
 * @param {Object} options
 * @param {number} options.threshold - Quanto do elemento precisa estar visível (0 a 1). Padrão: 0.15
 * @param {string} options.rootMargin - Margem do observer. Padrão: '0px'
 * @returns {React.RefObject} - Ref para anexar ao elemento que vai ser animado
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          // Para de observar após animar — evita re-trigger
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
