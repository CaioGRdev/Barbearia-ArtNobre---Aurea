import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo-nobg.webp'; 

export function BarberHeader() {
  return (
    <div className="header-wrapper">
      <div className="topbar">
        <span>
          <FaMapMarkerAlt className="map-icon" /> R. Ten-Cel. Cardoso, 703 - Pq California, Campos dos Goytacazes - RJ | (22) 99809-9294
        </span>
      </div>

      <header className="barber-header">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="Logo" className="header-logo-icon" />
          <div className="logo-text">
            <span className="logo-brand">BARBEARIA</span>
            <span className="logo-name">ART NOBRE</span>
          </div>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">INÍCIO</Link>
          {/* Redireciona para a pagina da tabela de preços */}
          <Link to="/precos" className="nav-link">PREÇOS</Link>
          <a href="/espaco" className="nav-link">NOSSO ESPAÇO</a>
        </nav>

        <div className="social-links">
          <a href="https://wa.me/5522998099294" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </header>
    </div>
  );
}

export default BarberHeader;