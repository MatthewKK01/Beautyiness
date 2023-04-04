import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import Appointment from "./components/Appointment";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
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
      <Appointment />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
