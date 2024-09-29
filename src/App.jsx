import Navbar from "./components/Navber/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Projectes from "./pages/projects/Projectes";
import Error from "./pages/Error404/Error404";
import AboutUs from "./pages/Aboutus/AboutUs";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/project/Project";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="projectes" element={<Projectes />} />
          <Route path="projectes/:id" element={<Project />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
