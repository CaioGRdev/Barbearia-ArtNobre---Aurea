import { FaWhatsapp } from 'react-icons/fa';

export function BarberShopHero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
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

        <div className="scroll-indicator">
          <span>DESÇA E CONHEÇA</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
}

export default BarberShopHero;