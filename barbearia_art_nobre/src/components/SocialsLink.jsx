import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import style from "./socialsLink.module.css";

export default function SocialsLink() {
  return (
    <div className={style.linkBox}>
      <a href="https://api.whatsapp.com/send/?phone=5522998099294&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="https://www.instagram.com/barbearia_artnobre/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div>
  );
}