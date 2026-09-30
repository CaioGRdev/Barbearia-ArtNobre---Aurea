import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/fade.webp'; 
import service2 from '../assets/corte_maquina.webp';
import service3 from '../assets/fade_e_barba.webp';

export function BarberServices() {
  const services = [
    {
      id: 1,
      title: 'Fade & Degradê',
      description: 'Disfarçados perfeitos com máquina e tesoura, do skin fade ao mid fade.',
      price: 'A PARTIR DE R$ 45',
      image: service1,
    },
    {
      id: 2,
      title: 'Corte com Máquina',
      description: 'Precisão e velocidade com máquinas profissionais de alta qualidade.',
      price: 'A PARTIR DE R$ 35',
      image: service2,
    },
    {
      id: 3,
      title: 'Fade & Barba',
      description: 'Degradê perfeito com acabamento de barba, toalha quente e navalha.',
      price: 'A PARTIR DE R$ 75',
      image: service3,
    },
  ];

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
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.title} className="service-img" />
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <span className="service-price">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BarberServices;