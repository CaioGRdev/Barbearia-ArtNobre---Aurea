import React, { useState, useEffect, useRef } from 'react';

// Importe as suas imagens do carrossel na pasta assets
import img1 from '../assets/chairs_barber.webp'; 
import img2 from '../assets/logo.webp'; // Substitua pelos nomes reais dos seus arquivos
import img3 from '../assets/logo.webp';

// Componente simples para animar o número subindo (MANTIDO INTACTO)
function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export function BarberAbout() {
  // Lógica do Carrossel de Imagens
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        
        {/* Lado Esquerdo: Carrossel + Badge */}
        <div className="about-image-wrapper animate-slide-right">
          
          <div className="about-carousel-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Ambiente Barbearia ${index + 1}`}
                className={`about-carousel-img ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
            
            {/* Setas discretas sem dependências externas */}
            <button className="about-arrow prev" onClick={prevSlide} type="button" aria-label="Imagem Anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="about-arrow next" onClick={nextSlide} type="button" aria-label="Próxima Imagem">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="experience-badge">
            <span className="badge-number">
              <Counter end={10} />
            </span>
            <span className="badge-text">ANOS DE<br />EXPERIÊNCIA</span>
          </div>
        </div>

        {/* Lado Direito: Textos + Cards de Números (MANTIDO INTACTO) */}
        <div className="about-content animate-slide-left">
          <span className="section-tagline">SOBRE NÓS</span>
          <h2 className="section-title">
            Uma barbearia construída com <span className="gold-text">paixão e precisão</span>
          </h2>

          <p className="about-description">
            Fundada em 2016, a Barbearia Art Nobre nasceu da vontade de criar um espaço onde cada cliente é tratado com atenção ao detalhe e respeito pelo seu estilo único.
            Espaço Art Nobre: sempre buscando a melhor estrutura pra te atender! Vem pra Art Nobre!!💈💪🏼
          </p>

          <p className="about-description">
            A nossa equipe de barbeiros certificados combina técnicas tradicionais com as últimas tendências.
          </p>

          {/* Cards Destacados com Números Animados */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">
                <Counter end={10} suffix="+" />
              </h3>
              <p className="stat-label">Anos de Experiência</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-number">
                <Counter end={3} suffix="K+" />
              </h3>
              <p className="stat-label">Clientes Satisfeitos</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-number">
                <Counter end={3} />
              </h3>
              <p className="stat-label">Barbeiros Especializados</p>
            </div>

            <div className="stat-card">
              <h3 className="stat-number">
                <Counter end={100} suffix="%" />
              </h3>
              <p className="stat-label">Satisfação Garantida</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BarberAbout;