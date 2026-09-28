// src/pages/SpacePage.jsx
import React from "react";

// SUBSTITUA OS NOMES ABAIXO PELOS ARQUIVOS REAIS DA SUA PASTA ASSETS:
import heroImg from "../assets/hero.png"; 
import detailsImg from "../assets/hero.png";
import corte1 from "../assets/hero.png";
import corte2 from "../assets/hero.png";

export function SpacePage() {
  return (
    <div className="space-page-container">
      {/* SEÇÃO 1: CABEÇALHO DA PÁGINA */}
      <section className="space-hero-section">
        <span className="space-section-tagline">AMBIENTE & EXPERIÊNCIA</span>
        <h1 className="space-hero-title">
          Mais que uma barbearia, um <em>refúgio</em> para o seu tempo.
        </h1>
        <p className="space-hero-description">
          Estruturada estrategicamente no coração de Campos dos Goytacazes para oferecer
          descompressão, sofisticação e cerca de dez bancadas e poltronas clássicas com áudio impecável.
        </p>

        {/* Grid Superior de 3 fotos estilo banner */}
        <div className="space-top-grid">
          <div className="top-grid-item">
            <img src={heroImg} alt="Boutique e Lounge" />
            <span className="grid-label">BOUTIQUE & WHISKY LOUNGE</span>
          </div>
          <div className="top-grid-item">
            <img src={heroImg} alt="Localização Espaço" />
            <span className="grid-label">RUA TEN. COL. CARDOSO, 703</span>
          </div>
          <div className="top-grid-item">
            <img src={heroImg} alt="Ambiente Climatizado" />
            <span className="grid-label">AMBIENTE CLIMATIZADO & ACÚSTICA EXCLUSIVA</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: DETALHES DO ESPAÇO */}
      <section className="space-details-section">
        <div className="details-image-container">
          <img src={detailsImg} alt="Ambiente aconchegante da barbearia" />
          <div className="experience-badge">
            <span className="years-number">10</span>
            <span className="years-text">ANOS DE<br />EXPERIÊNCIA</span>
          </div>
        </div>

        <div className="details-content">
          <span className="space-section-tagline">DETALHES DO ESPAÇO</span>
          <h2 className="space-section-title">
            Conforto autêntico e atenção a <em>cada detalhe</em>
          </h2>
          <p className="details-description">
            Desde 2016 unimos o visual clássico da barbearia com conveniências
            contemporâneas. Aqui, o seu momento de corte ou barba é acompanhado por uma
            boa conversa, café fresquinho feito na hora e respeito ao seu tempo.
          </p>

          <div className="space-features-grid">
            <div className="feature-card">
              <h4>Lounge & Café</h4>
              <p>Café moído na hora, bebidas geladas e um ambiente seguro e reservado.</p>
            </div>
            <div className="feature-card">
              <h4>Cadeiras Clássicas</h4>
              <p>Estofamento vintage reclinável e apoio para pernas para descanso máximo durante o serviço.</p>
            </div>
            <div className="feature-card">
              <h4>Precisão Artesanal</h4>
              <p>Tesouras afiadas e navalhetes descartáveis garantem a higiene e a linha impecável.</p>
            </div>
            <div className="feature-card">
              <h4>100% Satisfação</h4>
              <p>Atendimento pontual e consultoria pré-serviço para você obter o resultado desejado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: ALGUNS DOS NOSSOS CORTES */}
      <section className="space-cuts-section">
        <div className="cuts-header">
          <div>
            <span className="space-section-tagline">NOSSO TRABALHO</span>
            <h2 className="space-section-title">Alguns dos nossos cortes</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            VER MAIS NO INSTAGRAM ↗
          </a>
        </div>

        <div className="cuts-grid">
          <div className="cut-card">
            <img src={corte1} alt="Fade Alinhado" />
            <div className="cut-info">
              <span className="cut-tag">ACABAMENTO & VISAGISMO</span>
              <h3>Fade Alinhado & Navalha Clássica</h3>
              <p>Sombreamento natural com contorno limpo feito na navalha.</p>
            </div>
          </div>

          <div className="cut-card">
            <img src={corte2} alt="Crop Texturizado" />
            <div className="cut-info">
              <span className="cut-tag">DESIGN DE BARBA & TEXTURA</span>
              <h3>Crop Texturizado & Beard Shaping</h3>
              <p>Modelagem da barba acompanhando as linhas naturais do rosto.</p>
            </div>
          </div>

          {/* Card Filosofia / Destaque Institucional */}
          <div className="philosophy-card">
            <span className="philosophy-icon">⚔</span>
            <span className="space-section-tagline">A FILOSOFIA ART NOBRE</span>
            <h3>Técnica personalizada para a identidade de cada homem.</h3>
            <p>
              Não replicamos padrões em série. Cada fisionomia exige sensibilidade nas formas,
              respeitando a textura natural do cabelo e a estrutura facial de cada cliente.
            </p>
            <div className="philosophy-footer">
              <span>@artnobrebarbearia</span>
              <span>EST. 2016</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: CALL TO ACTION (CTA) */}
      <section className="space-cta-section">
        <span className="space-section-tagline">ATENDIMENTO EXCLUSIVO</span>
        <h2>Pronto para renovar seu visual?</h2>
        <p>
          Reserve seu horário diretamente com a nossa recepção e vivencie a experiência da
          Barbearia Art Nobre sem fila.
        </p>
        <a
          href="https://wa.me/5522998099294"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta-btn"
        >
          💬 AGENDAR PELO WHATSAPP — (22) 99809-9294
        </a>
      </section>
    </div>
  );
}