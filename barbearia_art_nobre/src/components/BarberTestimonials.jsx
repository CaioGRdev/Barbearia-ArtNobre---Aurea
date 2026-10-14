import { FaStar, FaGoogle } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── Dados dos depoimentos ── */
const testimonials = [
  {
    id: 1,
    name: 'Marllon Nunes',
    avatar: 'MN',
    rating: 5,
    date: '',
    text: 'Recomendo para todos! Ambiente super aconchegante, atendimento impecável, barbeiros sempre pontuais e um respeito enorme com cada cliente. Dá gosto de voltar!',
  },
  {
    id: 2,
    name: 'Eduardo de Abreu',
    avatar: 'EA',
    rating: 5,
    date: 'há 8 meses',
    text: 'Experiência maravilhosa, profissional nota 1000, Jesus me deu dicas sobre minha barba. Super recomendado!',
  },
  {
    id: 3,
    name: 'Marcos Gonçalves',
    avatar: 'MG',
    rating: 5,
    date: 'há 8 meses',
    text: 'Atendimento excelente nota 1000! Gleason, que cortou meu cabelo, é nota 10. Ambiente confortável! Não sou da cidade, mas se morasse aqui seria um cliente fiel com toda certeza!',
  },
  {
    id: 4,
    name: 'Heitor Felix',
    avatar: 'HF',
    rating: 5,
    date: 'há 3 meses',
    text: 'Frequento há mais de 10 anos. Excelentes profissionais e serviços.',
  },
  {
    id: 5,
    name: 'Brayan Rabello',
    avatar: 'BR',
    rating: 5,
    date: 'há 6 meses',
    text: 'Um atendimento de excelência, ambiente familiar e super receptivo, ótimos profissionais, parabéns pelo trabalho!',
  },
  {
    id: 6,
    name: 'Armando Aguiar',
    avatar: 'AA',
    rating: 5,
    date: 'há 8 meses',
    text: 'Meu novo amigo, Jesus! Obrigado pelo ótimo serviço, pela conversa. Parabéns pelo salão bem localizado e organizado. Abraços!',
  },
  {
    id: 7,
    name: 'Daniel Soares',
    avatar: 'DS',
    rating: 5,
    date: 'há 8 meses',
    text: 'Espaço limpo e confortável. Foi a primeira vez que fui até lá. Fui atendido pelo barbeiro Jesus. Meu cabelo está em fase de crescimento e ele entendeu o que pedi e fez exatamente o corte que precisava, aparando somente as pontas. Jesus me explicou tudo sobre meu cabelo, deu dicas e foi bastante cordial. Parabéns para ele e toda a equipe!',
  },
  {
    id: 8,
    name: 'Emerson Vieira',
    avatar: 'EV',
    rating: 5,
    date: 'há 6 meses',
    text: 'Barbearia top demais! Equipe boa demais. Cortei com o Greyson, super indico.',
  },
  {
    id: 9,
    name: 'F.F. Leal',
    avatar: 'FL',
    rating: 5,
    date: 'há 9 meses',
    text: 'Os barbeiros são excelentes profissionais. O ambiente é muito organizado, limpo e agradável. Há anos frequento a Barbearia Art Nobre.',
  },
];

/* ── Sub-componente: estrelas ── */
function StarRating({ count = 5 }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );
}

/* ── Sub-componente: card individual com reveal próprio ── */
function TestimonialCard({ testimonial, delayClass }) {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={`testimonial-card reveal ${delayClass}`}>
      <div className="testimonial-header">
        <div className="testimonial-avatar">{testimonial.avatar}</div>
        <div className="testimonial-meta">
          <span className="testimonial-name">{testimonial.name}</span>
          {testimonial.date && (
            <span className="testimonial-date">{testimonial.date}</span>
          )}
        </div>
        <FaGoogle className="testimonial-google-icon" aria-label="Google Review" />
      </div>

      <StarRating count={testimonial.rating} />

      <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
    </div>
  );
}

/* ── Componente principal ── */
export function BarberTestimonials() {
  const refHeader = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="testimonials-section" id="depoimentos">
      <div className="testimonials-container">

        {/* Cabeçalho */}
        <div ref={refHeader} className="testimonials-header reveal">
          <span className="testimonials-tagline">O QUE DIZEM SOBRE NÓS</span>
          <h2 className="testimonials-title">
            Avaliações dos <span className="gold-text">Nossos Clientes</span>
          </h2>
          <div className="testimonials-rating-summary">
            <StarRating count={5} />
            <span className="testimonials-score">4.9</span>
            <span className="testimonials-count">· Baseado em avaliações Google</span>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              delayClass={`reveal--delay-${(i % 3) + 1}`}
            />
          ))}
        </div>

        {/* CTA para ver mais */}
        <div className="testimonials-cta">
          <a
            href="https://www.google.com/search?kgmid=/g/11vdjqtpvp&hl=pt-BR&q=Barbearia+Art+Nobre&shem=epsd1,esd2e,ltae,rimspwouoe,sdpie&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=a703c1f5deb6c9f6&utm_source=epsd1,esd2e,ltae,rimspwouoe,sdpie,sh/x/loc/osrp/m5/1#lrd=0xbdd59c01029241:0x710d3a517dce4888,1,,,," /* Substitua pelo link real do Google */
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            VER TODAS NO GOOGLE &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

export default BarberTestimonials;
