import stylePage from "./pricesPage.module.css";

import PriceTable from "../components/PriceTable";
import ItemPrice from "../components/ItemPrice";

import { servicesData } from "../data/pricesPage";

export function PricesPage() {
  return (
    <div className="full-prices-page">
      <div className="services-header-bg">
        <div className="services-header-overlay">
          <span className="services-tagline">BARBEARIA ART NOBRE</span>
          <h1 className="services-title">Preços & Serviços</h1>
          <p className="services-subtitle">
            Qualidade premium a preços justos. Todos os serviços incluem consulta prévia.
          </p>
        </div>
      </div>

      <section className={stylePage.pricesSection}>
        {servicesData.map(({ico, tag, items}) => (

          <PriceTable key={tag} icon={ico} name={tag}>
            {items.map(({tag, desc, value}) => (

              <ItemPrice key={tag} item={tag} price={value}>
                {desc}
              </ItemPrice>

            ))}
          </PriceTable>
          
        ))}
      </section>
    </div>
  );
}