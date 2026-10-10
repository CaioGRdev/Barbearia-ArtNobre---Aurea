import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function BarberContactCTA() {
  return (
    <section className="contact-cta-section" id="contato">
      <div className="contact-container">
        
        {/* Chamada Principal */}
        <div className="cta-content">
          <span className="section-tagline">CONTACTE-NOS</span>
          <h2 className="cta-title">Pronto para o seu próximo corte?</h2>
          <p className="cta-description">
            Marque a sua consulta agora mesmo via WhatsApp ou venha visitar-nos.<br />
            Estamos abertos de Segunda a Sexta, das 8h às 19:40h, e Sábado das 8h às 16h.
          </p>

          <div className="cta-buttons">
            <a 
              href="https://wa.me/552299618404" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-whatsapp"
            >
              <FaWhatsapp /> WHATSAPP
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-instagram"
            >
              <FaInstagram /> INSTAGRAM
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Informações de Endereço, Horário e Contato */}
        <div className="footer-info-grid">
          <div className="info-column">
            <span className="info-title">LOCALIZAÇÃO</span>
            <p className="info-text">
              Rua Tenente Coronel Cardoso, 703 -<br />
              Campos dos Goytacazes, RJ - 28035-042
            </p>
          </div>

          <div className="info-column">
            <span className="info-title">HORÁRIO</span>
            <p className="info-text">Seg–Sex: 8h–19:40h</p>
            <p className="info-text">Sábado: 8h–16h</p>
          </div>

          <div className="info-column">
            <span className="info-title">CONTATO</span>
            <p className="info-text">+55 22 99618404</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BarberContactCTA;