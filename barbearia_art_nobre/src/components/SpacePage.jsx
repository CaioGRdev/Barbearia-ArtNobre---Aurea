// src/pages/SpacePage.jsx

import { cuts } from "../data/spacePage.js";
import Service from "./Service";
import SectionTitle from "./SectionTitle";
import BarberContactCTA from "./BarberContactCTA";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ── Sub-componente: card de corte com reveal próprio ──
   Extraído para que cada card tenha seu próprio IntersectionObserver,
   permitindo o efeito cascata individual igual à seção de Equipe. */
function CutCard({ img, altTxt, goldLabel, title, desc, delayClass }) {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <div ref={ref} className={`reveal ${delayClass}`}>
      <Service fig={img} alt={altTxt}>
        <span className="cut-tag">{goldLabel}</span>
        <h3 className="cut-title">{title}</h3>
        <p className="cut-desc">{desc}</p>
      </Service>
    </div>
  );
}

export function SpacePage() {
  const topGridItems = [
    { image: '/barbearia_itens.webp', alt: 'Produtos e ferramentas de barbearia' },
    { image: '/barbearia_itens2.webp', alt: 'Letreiro da Barbearia Art Nobre' },
    { image: '/barbearia_itens3.webp', alt: 'Fachada e poste de barbearia na rua' },
    { image: '/barbearia_itens4.webp', alt: 'Entrada da Barbearia Art Nobre' },
    { image: '/barbearia_itens5.webp', alt: 'Quadros decorativos no interior da barbearia' },
    { image: '/barbearia_itens6.webp', alt: 'Produtos para cabelo e barba' },
    { image: '/barbearia_itens7.webp', alt: 'Mesa de sinuca na sala de jogos' },
  ];

  // ── Seção 1: Página Hero ──
  const refHeroTitle  = useScrollReveal({ threshold: 0.1 });
  const refHeroDesc   = useScrollReveal({ threshold: 0.1 });
  const refPhotoGrid  = useScrollReveal({ threshold: 0.05 });

  // ── Seção 2: Detalhes do Espaço ──
  const refDetailImg  = useScrollReveal({ threshold: 0.1 });
  const refDetailText = useScrollReveal({ threshold: 0.1 });

  // ── Seção 3: Cortes ──
  const refCutsHeader    = useScrollReveal({ threshold: 0.1 });
  const refPhilosophy    = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      <div className="space-page-container">

        {/* ══ SEÇÃO 1: CABEÇALHO DA PÁGINA ══ */}
        <section className="space-hero-section">

          {/* Título revela subindo */}
          <div ref={refHeroTitle} className="reveal">
            <SectionTitle label="Ambiente & Experiência">
              Mais que uma barbearia, um <strong>refúgio</strong> para o seu tempo!
            </SectionTitle>
          </div>

          {/* Descrição revela com delay */}
          <p ref={refHeroDesc} className="space-hero-description reveal reveal--delay-1">
            Estruturada estrategicamente no coração de Campos dos Goytacazes para oferecer
            descompressão, sofisticação e cerca de dez bancadas e poltronas clássicas com áudio impecável.
          </p>

          {/* Grid de fotos revela em bloco */}
          <div ref={refPhotoGrid} className="space-top-grid reveal reveal--delay-2">
            <div className="space-top-grid-track">
              {[false, true].map((isDuplicate) => (
                <div
                  className="space-top-grid-group"
                  key={isDuplicate ? 'duplicate' : 'original'}
                  aria-hidden={isDuplicate}
                >
                  {topGridItems.map(({ image, alt }) => (
                    <div className="top-grid-item" key={image}>
                      <img src={image} alt={isDuplicate ? '' : alt} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ══ SEÇÃO 2: DETALHES DO ESPAÇO ══ */}
        <section className="space-details-section">

          {/* Imagem entra pela esquerda */}
          <div ref={refDetailImg} className="details-image-container reveal reveal--left">
            <img src="/corte-kids.webp" alt="Ambiente aconchegante da barbearia" />
            <div className="experience-badge">
              <span className="years-number">10</span>
              <span className="years-text">ANOS DE<br />EXPERIÊNCIA</span>
            </div>
          </div>

          {/* Texto entra pela direita */}
          <div ref={refDetailText} className="details-content reveal reveal--right">
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

        {/* ══ SEÇÃO 3: ALGUNS DOS NOSSOS CORTES ══ */}
        <section className="space-cuts-section">

          {/* Cabeçalho revela subindo */}
          <div ref={refCutsHeader} className="cuts-header reveal">
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

          {/* Grid de cortes: cada card tem reveal próprio com cascata */}
          <div className="cuts-grid">
            {cuts.map(({ img, altTxt, goldLabel, title, desc }, i) => (
              <CutCard
                key={title}
                img={img}
                altTxt={altTxt}
                goldLabel={goldLabel}
                title={title}
                desc={desc}
                delayClass={`reveal--delay-${(i % 3) + 1}`}
              />
            ))}

            {/* Card Filosofia com reveal próprio */}
            <div ref={refPhilosophy} className="philosophy-card reveal reveal--delay-1">
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

      {/* ══ SEÇÃO 4: CTA — componente reutilizado da Home ══ */}
      <BarberContactCTA />
    </>
  );
}