// src/components/Header.jsx
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="barber-header">
      <div className="barber-logo">
        <span className="logo-line-1">ART NOBRE</span>
        <span className="logo-line-2">BARBEARIA • DESDE 2016</span>
      </div>
      
      <nav className="barber-nav">
        <a href="#inicio" className="active">INÍCIO</a>
        <a href="#precos">PREÇOS</a>
        <a href="#equipe">EQUIPE</a>
      </nav>
      
      <div className="barber-socials">
        {/* Usando emojis ou placeholders de texto por enquanto */}
        <a href="#whatsapp" className="social-icon">📞</a>
        <a href="#instagram" className="social-icon">📷</a>
      </div>
    </header>
  );
}