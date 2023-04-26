import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;