import { Link } from "react-router-dom";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.footerContact}>
          <ul>
            <li> فولاز ابراج الخليح </li>
            <li>المملكة العربية السعوديه </li>
            <li>gulf_steel@yahoo.com </li>
            <li>0557202672</li>
            <li>0555915065</li>
          </ul>
        </div>
        <div className={style.footerSocial}></div>
        <div className={style.footerLinks}>
          <ul>
            <Link to="aboutus">
              <li>نبذة عنا</li>
            </Link>
            <Link to="services">
              <li>خدماتنا</li>
            </Link>
            <Link to="projects">
              <li>المشاريع</li>
            </Link>
            <Link to="contactUs">
              <li>تواصل معنا</li>
            </Link>
            <Link to="">
              <li>البروفيل</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
