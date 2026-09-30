import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BarberHeader from './components/BarberHeader';
import BarberShopHero from './components/BarberShopHero';
import BarberAbout from './components/BarberAbout';
import BarberServices from './components/BarberServices';
import BarberTeam from './components/BarberTeam';
import BarberContactCTA from './components/BarberContactCTA';
import BarberFooter from './components/BarberFooter';
import { SpacePage } from './components/SpacePage';

// A nova página que contém a tabela de preços completa
import { PricesPage } from './components/PricesPage';

import './App.css';

// Página Inicial (Landing Page completa com seus componentes)
function HomePage() {
  return (
    <>
      <BarberShopHero />
      <BarberAbout />
      <BarberServices />
      <BarberTeam />
      <BarberContactCTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="main-layout">
        <BarberHeader />
        
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