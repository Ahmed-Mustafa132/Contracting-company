import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./Projectes.module.css";
import { Link } from "react-router-dom";

export default function Projectes() {
  const [projectes, setProjectes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/projects/")
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

  return (
    <div className={style.contener}>
      {projectes.map((project) => (
        <Card sx={{ maxWidth: 400, minWidth: 300 }} key={project.id}>
          <CardMedia
            component="img"
            alt="صورة المشروع"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {project.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {project.type}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/projectes/${project._id}`}>
              <Button size="larg" color="#000">
                الق نظرة
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
