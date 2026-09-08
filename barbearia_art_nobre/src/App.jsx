import BarberHeader from './components/BarberHeader';
import BarberShopHero from './components/BarberShopHero';
import BarberAbout from './components/BarberAbout';
import BarberServices from './components/BarberServices';
import BarberTeam from './components/BarberTeam';
import BarberContactCTA from './components/BarberContactCTA'; // Novo componente
import BarberFooter from './components/BarberFooter'; // Seu rodapé já existente
import './App.css';

function App() {
  return (
    <div className="main-layout">
      <BarberHeader />
      <BarberShopHero />
      <BarberAbout />
      <BarberServices />
      <BarberTeam />
      <BarberContactCTA />
      <BarberFooter />
    </div>
  );
}

export default App;