import style from "./service.module.css";

export default function Service({fig, altTxt, children}) {
  return (
    <figure className={style.workView}>
      <img src={fig} alt={altTxt} />
      <figcaption>{children}</figcaption>
    </figure>
  );
}