// Substitua pelas fotos reais dos barbeiros na pasta assets
// import barber1 from '../assets/hero-bg.webp'; 
// import barber2 from '../assets/hero-bg.webp';
// import barber3 from '../assets/hero-bg.webp';

import SectionTitle from "./SectionTitle";

export function BarberTeam() {
  const team = [
    {
      id: 1,
      name: 'Jesus Riter',
      role: 'Dono',
      image: "",
    },
    {
      id: 2,
      name: 'Greyson',
      role: 'Barbeiro',
      image: "",
    },
    {
      id: 3,
      name: 'Fernando',
      role: 'Barbeiro',
      image: "",
    },
  ];

  return (
    <section className="team-section" id="equipe">
      <div className="team-container">
        
        {/* Cabeçalho da Seção */}
        <div className="team-header">
          <div>
            <SectionTitle label="A Nossa Equipe">Os Barbeiros:</SectionTitle>
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