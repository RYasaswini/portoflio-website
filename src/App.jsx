import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Projects from "./pages/ProjectsPage/ProjectPage";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Skill from "./pages/Skills/Skill";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/portfolio-website"> {/* Set the basename here */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
