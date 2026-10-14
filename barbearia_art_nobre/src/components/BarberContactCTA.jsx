import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function BarberContactCTA() {
  const refHeader = useScrollReveal({ threshold: 0.1 });
  const refCards  = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="cta-v2-section" id="contato">
      {/* ══ Parte Inferior — Três cards de informação ══ */}
      <div ref={refCards} className="cta-v2-cards reveal">

        {/* Card 1: Endereço */}
        <div className="cta-v2-card">
          <div className="cta-v2-card-icon" aria-hidden="true">
            <FaMapMarkerAlt />
          </div>
          <span className="cta-v2-card-label">ENDEREÇO</span>
          <h3 className="cta-v2-card-title">Localização</h3>
          <p className="cta-v2-card-text">
            Rua Tenente Coronel Cardoso, 703<br />
            Pq. California, Campos dos Goytacazes - RJ<br />
            CEP: 28035-042
          </p>
          <a
            href="https://maps.google.com/?q=Rua+Tenente+Coronel+Cardoso+703+Campos+dos+Goytacazes"
            target="_blank"
            rel="noreferrer"
            className="cta-v2-card-link"
          >
            Ver no Google Maps →
          </a>
        </div>

        {/* Card 2: Horários */}
        <div className="cta-v2-card">
          <div className="cta-v2-card-icon" aria-hidden="true">
            <FaClock />
          </div>
          <span className="cta-v2-card-label">DISPONIBILIDADE</span>
          <div className="cta-v2-title-badge-row">
            <h3 className="cta-v2-card-title">Horário Nobre</h3>
            <span className="cta-v2-badge-open">● Aberto Hoje</span>
          </div>

          <div className="cta-v2-schedule">
            <div className="cta-v2-schedule-row">
              <span>Segunda a Sexta</span>
              <span>08:00 — 19:40</span>
            </div>
            <div className="cta-v2-schedule-row">
              <span>Sábado</span>
              <span>08:00 — 16:00</span>
            </div>
          </div>

          <p className="cta-v2-card-note">
            ✓ Sem filas: Atendimento pontual agendado
          </p>
        </div>

        {/* Card 3: Contato */}
        <div className="cta-v2-card">
          <div className="cta-v2-card-icon" aria-hidden="true">
            <FaPhone />
          </div>
          <span className="cta-v2-card-label">CANAIS DIRETOS</span>
          <h3 className="cta-v2-card-title">Contato &amp; Dúvidas</h3>
          <p className="cta-v2-card-phone">+55 (22) 99809-9294</p>
          <p className="cta-v2-card-text">
            Fale conosco para orçamentos de dia do noivo, eventos corporativos ou agendamento prioritário.
          </p>
          <a href="tel:+5522998099294" className="cta-v2-card-link">
            Fazer ligação direta →
          </a>
        </div>

      </div>

      {/* ══ Parte Superior — CTA com fundo texturizado ══ */}
      <div className="cta-v2-top">
        <div ref={refHeader} className="cta-v2-header reveal">

          {/* Tagline com linhas decorativas */}
          <div className="cta-v2-tagline-row">
            <span className="cta-v2-deco-line" />
            <span className="cta-v2-tagline">EXPERIÊNCIA EXCLUSIVA • AGENDAMENTO</span>
            <span className="cta-v2-deco-line" />
          </div>

          {/* Título */}
          <h2 className="cta-v2-title">
            Pronto para elevar o seu estilo no
            <em className="cta-v2-title-em">próximo corte?</em>
          </h2>

          {/* Descrição */}
          <p className="cta-v2-desc">
            <mark>Garanta</mark> o seu horário na{' '}
            <b className="cta-v2-brand">Barbearia Art Nobre</b>. Cuidamos de cada
            detalhe com técnicas tradicionais de navalha e a precisão do design contemporâneo.
          </p>

          {/* Botões */}
          <div className="cta-v2-buttons">
            <a
              href="https://api.whatsapp.com/send/?phone=5522998099294&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="cta-v2-btn-whatsapp"
            >
              <FaWhatsapp />
              AGENDAR PELO WHATSAPP
              <span className="cta-v2-btn-badge" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/barbearia_artnobre/"
              target="_blank"
              rel="noreferrer"
              className="cta-v2-btn-instagram"
            >
              <FaInstagram />
              SEGUIR NO INSTAGRAM
            </a>
          </div>

          {/* Nota abaixo dos botões */}
          <p className="cta-v2-note">
            <span className="cta-v2-green-dot" aria-hidden="true" />
            Atendimento ágil &amp; confirmação imediata
          </p>

        </div>
      </div>

      
    </section>
  );
}

export default BarberContactCTA;