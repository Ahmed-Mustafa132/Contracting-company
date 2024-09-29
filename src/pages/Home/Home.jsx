import style from "./Home.module.css";
import { Link } from "react-router-dom";
import engineering from "./img/engineering.svg";
import road from "./img/road.svg";
import infrastructure from "./img/infrastructure.svg";
import homeConstruction from "./img/home-construction.svg";
export default function Footer() {
  return (
    <div dir="rtl">
      <header>
        <div className={style.headerText}>
          <h1>
            فولاذ <br /> ابراج الخليج
          </h1>
          <p>
            العمل يدا بيد مع شركائنا من أجل تقديم أفضل خدمات المقاولات العامة
            مؤملين بعد الله على فريق العمل لدينا من المهندسين والفنيين أصحاب
            الخبرة والكفاءة التي تمكنا من تلبية متطلبات عملائنا بكل فخر واعتزاز
          </p>
        </div>
      </header>
      <section className={style.sosialMedia}>
        <Link to={"facebook"}></Link>
      </section>
      <section className={style.aboutUsSection}>
        <div className={style.aboutUsSectionText}>
          <div>
            <h2 className={style.aboutUsSectionHeader}>نبذة عن الشركة</h2>
            <p className={style.aboutUsSectionP}>
              الرواد في قطاع المقاولات والبناء
            </p>
          </div>
          <div>
            <h2 className={style.aboutUsSectionHeader}>رؤيتنا</h2>
            <p className={style.aboutUsSectionP}>
              نتطلع إلى المشاركة بفعالية في أعمالنا بالمملكة العربية السعودية
              بجميع مناطقها والمساهمة بأعلى مستويات الجودة لمواكبة رؤية الدولة
              (2035 (للإرتقاء في مجال المقاولات وأعمال البناء التحتية
              والتكنولوجيا والطاقة البديلة والإطفاء والتكييف والأنظمه الأمنيه
              والبيوت الذكيه والطاقه وتصريف الامطار والسيول و مشاركة عملائنا
              وباقي الشركات لنصل إلى أعلى مستويات الجودة و الاحترافية لنصل بعد
              الله لتحقيق غاية وذائقة عملتنا المميزون
            </p>
          </div>
          <div>
            <h2 className={style.aboutUsSectionHeader}>رسالتنا</h2>
            <p className={style.aboutUsSectionP}>
              العمل يدا بيد مع شركائنا من أجل تقديم أفضل خدمات المقاولات العامة
              مؤملين بعد الله على فريق العمل لدينا من المهندسين والفنيين أصحاب
              الخبرة والكفاءة التي تمكنا من تلبية متطلبات عملائنا بكل فخر
              واعتزاز
            </p>
          </div>
          <div>
            <h2 className={style.aboutUsSectionHeader}>اهدافنا</h2>
            <p className={style.aboutUsSectionP}>
              بناء مشاريع فائقة الجوده والأمان والتقيد بالكود السعودي ومواكبة
              التطور لتقديم الحلول الذكيه لنفديم أهلى مستويات البناء والتشييد{" "}
            </p>
          </div>
        </div>
      </section>
      <section className={style.doSection}>
        <span>هل تبحث عن شركة مقاولات متخصصة و ذات جودة عاليه لمشروعك ؟</span>
        <a href="mailto:Adahy000000@yahoo.com">
          <button> اتصل بنا </button>
        </a>
      </section>
      <section className={style.servicesSection}>
        <div className={style.servicesSectionHead}>
          <h2> خدماتنا </h2>
          <p> ما نقدمه </p>
        </div>
      </section>
      <div className={style.OurServices}>
        <div className={style.services}>
          <img src={engineering} alt="img" />
          <div className={style.head}> هندسة </div>
          <div>
            دراسة التحليلات النظرية والتصاميم لكافة أنواع المنشآت وتطبيقاتها
            آخذين بنظر الاعتبار كافة التأثيرات الاستاتيكية والديناميكة وعلاقتها
            بالبيئة.
          </div>
        </div>
        <div className={style.services}>
          <img src={road} alt="img" />
          <div className={style.head}> أعمال الطرق </div>
          <div>
            أكثر الطرق أهمية تلك التي تستوعب أكبر عدد من السيارات وعربات النقل
            والخدمات، إذ إنها تربط المجتمعات السكانية الكبيرة بعضها ببعض.{" "}
          </div>
        </div>
        <div className={style.services}>
          <img src={infrastructure} alt="img" />
          <div className={style.head}> البنية التحتية </div>
          <div>
            البنى المادية والتنظيمية الأساسية اللازمة لتشغيل المجتمع أو الأعمال،
            مثل شبكات المياة والصرف الصحي ومحطات المعالجة والمطارات والسكك
            الحديدية.
          </div>
        </div>
        <div className={style.services}>
          <img src={homeConstruction} alt="img" />
          <div className={style.head}> الإنشاءات </div>
          <div>
            نقوم بتحويل الخرائط والرسومات إلى واقع حقيقي يلمسه العميل ويسعد به،
            وننفذ أعمال المقاولات للمباني السكنية والتجارية والصناعية .
          </div>
        </div>
      </div>
      {/*
       */}
    </div>
  );
}
