import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router";

import Home from "./pages/Home";
import Error404 from "./components/Error404";
import AboutPage from "./pages/About";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";
import Location from "./pages/Location";
import Blog from "./pages/Blog";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  console.log(pathname);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/contact" element={<Location />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
