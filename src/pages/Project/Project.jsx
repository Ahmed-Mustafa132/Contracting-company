import { useState, useEffect } from "react";
import axios from "axios";
export default function Projectes() {
  const [projectes, setProjectes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/projects/:id")
      .then((res) => {
        setProjectes(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);

        setError("حدث خطأ أثناء جلب البيانات");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>للاسف فشل تحميل المشاريع</div>;
  //   return <div></div>;
}
