// Substitua pelas fotos reais dos barbeiros na pasta assets

import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function BarberTeam() {
  const refHeader = useScrollReveal({ threshold: 0.1 });

  const team = [
    {
      id: 1,
      name: 'Jesus Riter',
      role: 'Dono',
      image: "./../public/jesus.webp",
    },
    {
      id: 2,
      name: 'Gerson',
      role: 'Barbeiro',
      image: "./../public/gerson.webp",
    },
    {
      id: 3,
      name: 'Fernando',
      role: 'Barbeiro',
      image: "./../public/fernando.webp",
    },
  ];

  return (
    <section className="team-section" id="equipe">
      <div className="team-container">
        
        {/* Cabeçalho da Seção */}
        <div ref={refHeader} className="team-header reveal">
          <div>
            <SectionTitle label="A Nossa Equipe">Os Barbeiros:</SectionTitle>
          </div>
         
        </div>

        {/* Grid de Cards da Equipe — cada card anima individualmente */}
        <div className="team-grid">
          {team.map((barber, i) => (
            <TeamCard key={barber.id} barber={barber} delayClass={`reveal--delay-${i + 1}`} />
          ))}
        </div>

      </div>
    </section>
  );
}

/** Card com scroll reveal individual para efeito cascata */
function TeamCard({ barber, delayClass }) {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={`team-card reveal ${delayClass}`}>
      <div className="team-img-wrapper">
        <img src={barber.image} alt={barber.name} className="team-img" />
      </div>
      <div className="team-info">
        <h3 className="team-name">{barber.name}</h3>
        <span className="team-role">{barber.role}</span>
      </div>
    </div>
  );
}

export default BarberTeam;