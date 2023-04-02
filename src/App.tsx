import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Benefits />
    </div>
  );
}

export default App;
