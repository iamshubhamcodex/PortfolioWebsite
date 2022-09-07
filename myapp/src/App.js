import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ContentPage from "./Components/Home/ContentPage";
import Navbar from "./Components/Home/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ContentPage id="home" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}

export default App;
