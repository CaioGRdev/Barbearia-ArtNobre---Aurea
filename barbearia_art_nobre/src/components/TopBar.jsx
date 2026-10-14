import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import SocialsLink from './SocialsLink';
import style from "./topBar.module.css";

export function TopBar() {
  return (
    <header className={style.root}>
      <address>
        <FaMapMarkerAlt className="map-icon" /> R. Ten-Cel. Cardoso, 703 - Pq California, Campos dos Goytacazes - RJ | (22) 99809-9294
      </address>

      <section>
        <Link to="/" className={style.mainLogoBox}>
          <img src="/logo-nobg.webp" alt="Logo" />
          <span>Barbearia</span>
          <strong>Art Nobre</strong>
        </Link>

        <nav className={style.navigation}>
          <Link to="/">Início</Link>
          <Link to="/precos">Preços</Link>
          <Link to="/espaco">Nosso Espaço</Link>
        </nav>

        <div className={style.socialIconsBox}>
          <a href="https://api.whatsapp.com/send/?phone=5522998099294&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/barbearia_artnobre/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        {/* <SocialsLink /> */}
      </section>
    </header>
  );
}

export default TopBar;