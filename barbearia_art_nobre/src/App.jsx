import { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import TopBar from './components/TopBar';
import BarberShopHero from './components/BarberShopHero';
import BarberAbout from './components/BarberAbout';
import BarberServices from './components/BarberServices';
import BarberTeam from './components/BarberTeam';
import BarberTestimonials from './components/BarberTestimonials';
import BarberContactCTA from './components/BarberContactCTA';
import BarberFooter from './components/BarberFooter';
import ScrollProgressBar from './components/ScrollProgressBar';
import { SpacePage } from './components/SpacePage';

// A nova página que contém a tabela de preços completa
import { PricesPage } from './pages/PricesPage';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }, [pathname]);

  return null;
}

// Página Inicial (Landing Page completa com seus componentes)
function HomePage() {
  return (
    <>
      <BarberShopHero />
      <BarberAbout />
      <BarberServices />
      <BarberTeam />
      <BarberTestimonials />
      <BarberContactCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Barra de progresso de scroll — fica acima de tudo, inclusive do TopBar */}
      <ScrollProgressBar />

      <div className="main-layout">
        <TopBar />
        
        <Routes>
          {/* Rota da Página Inicial */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rota da Tabela Completa de Preços */}
          <Route path="/precos" element={<PricesPage />} />

          <Route path="/espaco" element={<SpacePage />} />
        </Routes>

        <BarberFooter />
      </div>
    </Router>
  );
}

export default App;