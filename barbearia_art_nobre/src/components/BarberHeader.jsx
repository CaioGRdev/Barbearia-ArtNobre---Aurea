import React from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
// Importa o logo da pasta assets. Se não tiver o arquivo, ele dará erro de compilação.
import logoImg from '../assets/logo-nobg.webp'; 

export function BarberHeader() {
  return (
    // Essa div wrapper é essencial para gerenciar os dois layouts
    <div className="header-wrapper">
      {/* 1. Faixa Topbar de Endereço */}
      <div className="topbar">
        <span>
          <FaMapMarkerAlt className="map-icon" /> R. Ten-Cel. Cardoso, 703 - Pq California, Campos dos Goytacazes - RJ | (22) 99809-9294
        </span>
      </div>

      {/* 2. Navegação Principal */}
      <header className="barber-header">
        {/* Lado Esquerdo: Logo e Nome */}
        <a href="#inicio" className="logo-container">
          {/* Se a imagem não carregar, remova esta tag img temporariamente */}
          <img src={logoImg} alt="Logo" className="header-logo-icon" />
          <div className="logo-text">
            <span className="logo-brand">BARBEARIA</span>
            <span className="logo-name">ART NOBRE</span>
          </div>
        </a>

        {/* Centro: Menu de Navegação */}
        <nav className="nav-menu">
          <a href="#inicio" className="nav-link active">INÍCIO</a>
          <a href="#precos" className="nav-link">PREÇOS</a>
          <a href="#equipe" className="nav-link">EQUIPE</a>
        </nav>

        {/* Lado Direito: Redes Sociais */}
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