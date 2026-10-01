import style from "./priceTable.module.css";

export default function PriceTable({icon, name, children}) {
  return (
    <article className={style.cardPrice}>
      <h2>
        <span className={style.icon}>{icon}</span> {name}
      </h2>
      <ul>
        {children}
      </ul>
    </article>
  );
}