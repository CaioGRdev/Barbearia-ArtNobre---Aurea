import logoWebp from '/logo-nobg.webp'; // Import da sua imagem em webp
import style from "./barberFooter.module.css";
import SocialsLink from './SocialsLink';

export function BarberFooter() {
  return (
    <footer className={style.root}>
      {/* Logotipo e Redes Sociais */}
      <figure className={style.logo}>
        <img src={logoWebp} alt="Logo Art Nobre" />
        <figcaption>
          Oito anos a transformar estilos e a criar laços com os nossos clientes. Bem-vindos à nossa barbearia.
        </figcaption>
      </figure>
      <SocialsLink />

      {/* A maior parte do conteúdo relevante */}
      <section className={style.mainContent}>
        {/* Links Navegação */}
        <h3>Navegação</h3>
        <ul className={style.linkList}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#precos">Preços</a></li>
          <li><a href="#equipe">Equipe</a></li>
        </ul>

        {/* Coluna de Horários */}
        <h3>Horário</h3>
        <ul className={style.timeList}>
          <li>
            <h4>Segunda a Sexta</h4>
            <span>08:00 às 19:40</span>
          </li>
          <li>
            <h4>Sábado</h4>
            <span>08:00 às 16:00</span>
          </li>
          <li>
            <h4>Domingo</h4>
            <span>Fechado</span>
          </li>
        </ul>

        {/* Coluna de Contato e Mapa (by Google Maps) */}
        <h3>Contato & Localização</h3>
        <address className={style.map}>
          <p>
            Rua Tenente Coronel Cardoso, 703 - Campos dos Goytacazes, RJ
          </p>
          <iframe
            title="Google Maps - Barbearia Art Nobre"
            src="https://www.google.com/maps?q=Rua+Tenente+Coronel+Cardoso+703+Parque+California+Campos+dos+Goytacazes+RJ&output=embed"
            width="100%"
            height="110"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </address>
      </section>

      {/* Copyright inferior */}
      <aside className={style.copyright}>
        <p>© 2026 Barbearia Art Nobre. Todos os direitos reservados.</p>
        <p>Art Nobre · Barbearia de Confiança</p>
      </aside>
    </footer>
  );
}

export default BarberFooter;