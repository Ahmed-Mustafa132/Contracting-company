import { Link } from "react-router-dom";
import style from "./Error404.module.css";
export default function Error() {
  return (
    <div className={style.contner}>
      <div className={style.errorPage}>
        <div className={style.content}>
          <h1>404</h1>
          <h4>لم يتم العثور علي الصفحة !</h4>
          <p>
            نسف, الصفحة التي تبحث عنها ليست موجودة . <br /> اذا كنت تعتقد ان
            هناك مشكلة ابلغنا فورا
          </p>
          <div className={style.btns}>
            <Link to="">الرجوع للصفحة الرئيسية</Link>
            <Link to="mailto:Adahy000000@yahoo.com">ابلاغ عن مشكلة </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
