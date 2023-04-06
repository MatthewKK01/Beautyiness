import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Error404 from "./components/Error404";
import AboutPage from "./pages/About";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
