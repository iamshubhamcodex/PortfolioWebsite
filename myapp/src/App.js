import "./App.css";
import About from "./Components/About/About";
import ContentPage from "./Components/Home/ContentPage";
import Navbar from "./Components/Home/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ContentPage id="home" />
      <About />
    </>
  );
}

export default App;
