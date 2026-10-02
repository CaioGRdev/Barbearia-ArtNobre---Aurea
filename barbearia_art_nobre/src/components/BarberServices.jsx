import { Link } from 'react-router-dom';
import { services } from '../data/homePage';
import Service from './Service';

export function BarberServices() {
  return (
    <section className="services-section" id="precos">
      <div className="services-container">
        
        <div className="services-header">
          <div>
            <span className="section-tagline">OS NOSSOS SERVIÇOS</span>
            <h2 className="section-title">O que fazemos</h2>
          </div>
          {/* Troca aqui: redireciona para a tabela completa em /precos */}
          <Link to="/precos" className="btn-secondary">
            VER TODOS OS PREÇOS &rarr;
          </Link>
        </div>

        <div className="services-grid">
          {services.map(({title, desc, price, image}) => (
            <Service key={title} fig={image} altTxt={title}>
              <h3 className="service-title">{title}</h3>
              <p className="service-description">{desc}</p>
              <span className="service-price">{price}</span>
            </Service>
            
            // <div className="service-card" key={title}>
            //   <div className="service-img-wrapper">
            //     <img src={image} alt={title} className="service-img" />
            //   </div>
            //   <div className="service-info">
            //     <h3 className="service-title">{title}</h3>
            //     <p className="service-description">{desc}</p>
            //     <span className="service-price">{price}</span>
            //   </div>
            // </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BarberServices;