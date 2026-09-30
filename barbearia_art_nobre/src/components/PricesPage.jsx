// src/pages/PricesPage.jsx

export function PricesPage() {
  return (
    <div className="full-prices-page">
      <div className="services-header-bg">
        <div className="services-header-overlay">
          <span className="services-tagline">BARBEARIA ART NOBRE</span>
          <h1 className="services-title">Preços & Serviços</h1>
          <p className="services-subtitle">
            Qualidade premium a preços justos. Todos os serviços incluem consulta prévia.
          </p>
        </div>
      </div>

      <div className="prices-container-wrapper">
        <div className="services-grid-page">
          {/* Categoria Cabelo */}
          <div className="service-category">
            <h2 className="category-title">
              <span className="category-icon">✂</span> Cortes de Cabelo
            </h2>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-info">
                  <span className="service-name">Corte Clássico (Tesoura)</span>
                  <span className="service-desc">
                    Acabamento com tesoura, lavagem e styling incluídos
                  </span>
                </div>
                <span className="service-price">R$ 45</span>
              </li>
              <li className="service-item">
                <div className="service-info">
                  <span className="service-name">Corte com Máquina</span>
                  <span className="service-desc">
                    Corte rápido com máquina em todos os comprimentos
                  </span>
                </div>
                <span className="service-price">R$ 35</span>
              </li>
              <li className="service-item">
                <div className="service-info">
                  <span className="service-name">Fade / Degradê</span>
                  <span className="service-desc">
                    Skin fade, low fade, mid fade ou high fade
                  </span>
                </div>
                <span className="service-price">R$ 55</span>
              </li>
            </ul>
          </div>

          {/* Categoria Barba */}
          <div className="service-category">
            <h2 className="category-title">
              <span className="category-icon">🪒</span> Barba
            </h2>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-info">
                  <span className="service-name">Aparar a Barba</span>
                  <span className="service-desc">
                    Definição e nivelamento de barba com máquina
                  </span>
                </div>
                <span className="service-price">R$ 25</span>
              </li>
              <li className="service-item">
                <div className="service-info">
                  <span className="service-name">Barba Completa</span>
                  <span className="service-desc">
                    Aparar, definir linhas e hidratação com produtos premium
                  </span>
                </div>
                <span className="service-price">R$ 40</span>
              </li>
              <li className="service-item">
                <div className="service-info">
                  <span className="service-name">Barba com Navalha</span>
                  <span className="service-desc">
                    Barbear clássico com navalha e toalha quente
                  </span>
                </div>
                <span className="service-price">R$ 45</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}