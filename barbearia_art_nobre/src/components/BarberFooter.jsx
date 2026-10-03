import logoWebp from '../assets/logo-nobg.webp'; // Import da sua imagem em webp

import SocialsLink from './SocialsLink';

export function BarberFooter() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Coluna 1: Logo & Redes */}
        <div className="footer-col brand-col">
          <img src={logoWebp} alt="Logo Art Nobre" className="footer-logo-img" />
          <p className="footer-description">
            Oito anos a transformar estilos e a criar laços com os nossos clientes. Bem-vindos à nossa barbearia.
          </p>

          <SocialsLink />
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-col">
          <h4 className="footer-heading">NAVEGAÇÃO</h4>
          <ul className="footer-nav">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#precos">Preços</a></li>
            <li><a href="#equipe">Equipe</a></li>
          </ul>
        </div>

        {/* Coluna 3: Horário */}
        <div className="footer-col">
          <h4 className="footer-heading">HORÁRIO</h4>
          <div className="info-block">
            <span className="info-txt-muted">Segunda–Sexta</span>
            <span className="info-txt-white">8h – 19:40h</span>
          </div>
          <div className="info-block">
            <span className="info-txt-muted">Sábado</span>
            <span className="info-txt-white">8h – 16h</span>
          </div>
          <div className="info-block">
            <span className="info-txt-muted">Domingo</span>
            <span className="info-txt-white">Fechado</span>
          </div>
        </div>

        {/* Coluna 4: Contato & Mapa com Pino Vermelho */}
        <div className="footer-col map-col">
          <h4 className="footer-heading">CONTATO & LOCAL</h4>
          <div className="info-block">
            <span className="contact-sublabel">LOCALIZAÇÃO</span>
            <p className="info-txt-muted">
              Rua Tenente Coronel Cardoso, 703 - Campos dos Goytacazes, RJ
            </p>
          </div>
          
          <div className="dark-map-container">
            <iframe
              title="Google Maps - Barbearia Art Nobre"
              src="https://www.google.com/maps?q=Rua+Tenente+Coronel+Cardoso+703+Parque+California+Campos+dos+Goytacazes+RJ&output=embed"
              width="100%"
              height="110"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>© 2026 Barbearia Art Nobre. Todos os direitos reservados.</p>
        <p>Art Nobre · Barbearia de Confiança</p>
      </div>
    </footer>
  );
}

export default BarberFooter;