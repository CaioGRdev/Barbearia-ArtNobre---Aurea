import style from "./itemPrice.module.css";

export default function ItemPrice({item, price, children}) {
  return (
    <li className={style.item}>
      <h3>{item}</h3>
      <p>{children}</p>
      <div className={style.priceBox}> {/* Para centralizar o texto horizontal e verticalmente. */}
        <mark>R${price}</mark>
      </div>
    </li>
  );
}