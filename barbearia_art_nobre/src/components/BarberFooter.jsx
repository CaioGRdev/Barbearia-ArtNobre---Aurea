import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import style from "./barberFooter.module.css";

export function BarberFooter() {
  return (
    <footer className={style.root}>
      <section className={style.figureSection}>
        <figure className={style.barberFigure}>
          <img src="/logo-nobg.webp" alt="Logo da Barbearia" />
          <figcaption>
            Há oito anos transformando estilos e criando laços com os nossos clientes.
            Bem-vindos à nossa barbearia!
          </figcaption>
        </figure>

        <div className={style.linksSocial}>
          <a href="https://wa.me/5522998099294" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </section>

      <section className={style.linkSection}>
        <h3>Navegação</h3>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#precos">Preços</a></li>
          <li><a href="#equipe">Equipe</a></li>
        </ul>
      </section>

      <section className={style.timeSection}>
        <h3>Horário</h3>
        <ul className={style.timeList}>
          <li>
            <h4>Segunda a Sexta</h4>
            <span>08:00 às 19:40</span>
          </li>
          <li>
            <h4>Sábado</h4>
            <span>08:00 às 16:00</span>
          </li>
          <li>
            <h4>Domingo</h4>
            <span>Fechado</span>
          </li>
        </ul>
      </section>

      <section className={style.mapSection}>
        <h3>Contato & Localização</h3>
        <address className={style.aboutLocal}>
          Rua Tenente Coronel Cardoso, 703 - Campos dos Goytacazes, RJ
        </address>
        <iframe
          title="Google Maps - Barbearia Art Nobre"
          src="https://www.google.com/maps?q=Rua+Tenente+Coronel+Cardoso+703+Parque+California+Campos+dos+Goytacazes+RJ&output=embed"
          width="100%"
          height="110"
          className={style.map}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Copyright inferior */}
      <aside className={style.copyright}>
        <p>© 2026 Barbearia Art Nobre. Todos os direitos reservados.</p>
        <p>Art Nobre · Barbearia de Confiança</p>
      </aside>
    </footer>
  );
}

export default BarberFooter;