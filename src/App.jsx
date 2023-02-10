import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <div className="content">

        </div> */}
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
{
  /* <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes> */
}
