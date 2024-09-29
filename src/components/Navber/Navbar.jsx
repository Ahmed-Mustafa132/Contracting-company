import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav>
      <ul className={style.navUl}>
        <Link to="">
          <li>الرئيسية</li>
        </Link>
        <Link to="aboutus">
          <li>نبذة عنا</li>
        </Link>

        <Link to="projectes">
          <li>المشاريع</li>
        </Link>
        <Link to="contact">
          <li>تواصل معنا</li>
        </Link>
        <Link to="https://drive.google.com/file/d/1_O5Jz7KbenzTXkBMB20zM11eETjqKwIZ/view?usp=sharing">
          <li>البروفيل</li>
        </Link>
      </ul>
      <div>
        <img src={logo} alt="img" width={"70px"} height={"70px"} />
      </div>
    </nav>
  );
}
