import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact_1";
import Project from "./components/Project";
import Footer from './components/Footer';



function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Sidenav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
