import { useScrollProgress } from '../hooks/useScrollProgress';

/**
 * Barra fina dourada fixada no topo da página que avança conforme o usuário scrolla.
 * Z-index 9999 para ficar sempre acima de tudo, inclusive do TopBar.
 */
export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura da página"
    />
  );
}

export default ScrollProgressBar;
