import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import ContentPage from "./Components/Home/ContentPage";
import Navbar from "./Components/Home/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <ContentPage id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Contact id="contact" />
    </>
  );
}

export default App;
