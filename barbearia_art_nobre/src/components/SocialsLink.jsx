import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import style from "./socialsLink.module.css";

export default function SocialsLink() {
  return (
    <div className={style.linkBox}>
      <a href="https://wa.me/5522998099294" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
}