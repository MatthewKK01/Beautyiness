import React from "react";

import Banner from "../components/Banner";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Appointment from "../components/Appointment";
import Stories from "../components/Stories";

function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Benefits />
      <Appointment />
      <Stories />
    </div>
  );
}

export default Home;
