// src/pages/SpacePage.jsx

import { cuts } from "../data/spacePage.js";
import Service from "./Service";
import SectionTitle from "./SectionTitle";
import BarberContactCTA from "./BarberContactCTA";

export function SpacePage() {
  return (
    <>
      <div className="space-page-container">

        {/* SEÇÃO 1: CABEÇALHO DA PÁGINA */}
        <section className="space-hero-section">
          <SectionTitle label="Ambiente & Experiência">
            Mais que uma barbearia, um <strong>refúgio</strong> para o seu tempo!
          </SectionTitle>

          <p className="space-hero-description">
            Estruturada estrategicamente no coração de Campos dos Goytacazes para oferecer
            descompressão, sofisticação e cerca de dez bancadas e poltronas clássicas com áudio impecável.
          </p>

          {/* Grid Superior de 3 fotos estilo banner */}
          <div className="space-top-grid">
            <div className="top-grid-item">
              <img src="/game-space-2.webp" alt="Sala de Jogos" />
              <span className="grid-label">SALA DE JOGOS</span>
            </div>
            <div className="top-grid-item">
              <img src="/game-space.webp" alt="Localização Espaço" />
              <span className="grid-label">RUA TEN. COL. CARDOSO, 703</span>
            </div>
            <div className="top-grid-item">
              <img src="/barber-space.webp" alt="Ambiente Climatizado" />
              <span className="grid-label">AMBIENTE CLIMATIZADO & ACÚSTICA EXCLUSIVA</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: DETALHES DO ESPAÇO */}
        <section className="space-details-section">
          <div className="details-image-container">
            <img src="/corte-kids.webp" alt="Ambiente aconchegante da barbearia" />
            <div className="experience-badge">
              <span className="years-number">10</span>
              <span className="years-text">ANOS DE<br />EXPERIÊNCIA</span>
            </div>
          </div>

          <div className="details-content">
            <SectionTitle label="Detalhes do Espaço">
              Conforto autêntico e atenção a <strong>cada detalhe</strong>!
            </SectionTitle>

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
              <SectionTitle label="Nosso Trabalho">
                Alguns Dos Nossos Cortes:
              </SectionTitle>
            </div>
            <a
              href="https://www.instagram.com/barbearia_artnobre/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn"
            >
              VER MAIS NO INSTAGRAM ↗
            </a>
          </div>

          <div className="cuts-grid">
            {cuts.map(({ img, altTxt, goldLabel, title, desc }) => (
              <Service key={title} fig={img} alt={altTxt}>
                <span className="cut-tag">{goldLabel}</span>
                <h3 className="cut-title">{title}</h3>
                <p className="cut-desc">{desc}</p>
              </Service>
            ))}

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

      </div>

      {/* SEÇÃO 4: CTA — reutiliza o mesmo componente da Home */}
      <BarberContactCTA />
    </>
  );
}