import React from 'react';
// Substitua pelas fotos reais dos barbeiros na pasta assets
import barber1 from '../assets/hero-bg.webp'; 
import barber2 from '../assets/hero-bg.webp';
import barber3 from '../assets/hero-bg.webp';

export function BarberTeam() {
  const team = [
    {
      id: 1,
      name: 'Ricardo Mendes',
      role: 'MASTER BARBER',
      image: barber1,
    },
    {
      id: 2,
      name: 'André Costa',
      role: 'BARBER ESPECIALISTA',
      image: barber2,
    },
    {
      id: 3,
      name: 'Miguel Santos',
      role: 'BARBER & COLORISTA',
      image: barber3,
    },
  ];

  return (
    <section className="team-section" id="equipe">
      <div className="team-container">
        
        {/* Cabeçalho da Seção */}
        <div className="team-header">
          <div>
            <span className="section-tagline">A NOSSA EQUIPE</span>
            <h2 className="section-title">Os Barbeiros</h2>
          </div>
          <a href="https://wa.me/5522998099294" target="_blank" rel="noreferrer" className="btn-secondary">
            VER EQUIPE COMPLETA &rarr;
          </a>
        </div>

        {/* Grid de Cards da Equipe */}
        <div className="team-grid">
          {team.map((barber) => (
            <div className="team-card" key={barber.id}>
              <div className="team-img-wrapper">
                <img src={barber.image} alt={barber.name} className="team-img" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{barber.name}</h3>
                <span className="team-role">{barber.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BarberTeam;