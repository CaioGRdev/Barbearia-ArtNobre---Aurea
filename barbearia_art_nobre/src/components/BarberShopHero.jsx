import { FaWhatsapp } from 'react-icons/fa';
import { useParallax } from '../hooks/useParallax';

export function BarberShopHero() {
  // O fundo é um elemento absoluto separado que se move mais devagar que o conteúdo
  const parallaxRef = useParallax(0.35);

  return (
    <section className="hero-section" id="inicio">

      {/* ── Fundo com Parallax ── */}
      {/* O container tem overflow: hidden para cortar a imagem que vai além da seção */}
      <div className="hero-parallax-bg" ref={parallaxRef} />

      {/* ── Overlay escuro em cima do parallax ── */}
      <div className="hero-overlay" />

      {/* ── Conteúdo da Hero (estático, não se move) ── */}
      <div className="hero-content animar-aparecer">
        <span className="hero-tagline">BARBEARIA PREMIUM • DESDE 2016</span>
        
        <h1 className="hero-title">
          <span className="hero-title-main">BARBEARIA</span>
          <span className="gold-text">ART NOBRE</span>
        </h1>

        <p className="hero-subtitle">
          Onde a tradição encontra o estilo moderno
        </p>

        <div className="hero-buttons">
          <a href="https://wa.me/5522998099294" target="_blank" rel="noreferrer" className="btn-primary">
            <FaWhatsapp /> MARCAR CONSULTA
          </a>
          <a href="#precos" className="btn-secondary">
            VER PREÇOS
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>DESÇA E CONHEÇA</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default BarberShopHero;