import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import SocialsLink from './SocialsLink';
import style from "./topBar.module.css";

export function TopBar() {
  return (
    <header className={style.root}>
      <address>
        <FaMapMarkerAlt className="map-icon" /> R. Ten-Cel. Cardoso, 703 - Pq California, Campos dos Goytacazes - RJ | (22) 99809-9294
      </address>

      <section>
        <Link to="/" className={style.mainLogoBox}>
          <img src="/src/assets/logo-nobg.webp" alt="Logo" />
          <span>Barbearia</span>
          <strong>Art Nobre</strong>
        </Link>

        <nav className={style.navigation}>
          <Link to="/">Início</Link>
          <Link to="/precos">Preços</Link>
          <Link to="/espaco">Nosso Espaço</Link>
        </nav>

        <SocialsLink />
      </section>
    </header>
  );
}

export default TopBar;