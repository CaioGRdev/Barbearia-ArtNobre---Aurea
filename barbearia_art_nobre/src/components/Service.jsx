import style from "./service.module.css";

export default function Service({fig, altTxt, children}) {
  return (
    <figure className={`${style.workView} animar-aparecer`}>
      <img src={fig} alt={altTxt} />
      <figcaption>{children}</figcaption>
    </figure>
  );
}