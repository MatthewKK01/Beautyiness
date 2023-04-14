import React from "react";

import Banner from "../components/Banner";
import Features from "../components/Features";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Appointment from "../components/Appointment";
import Stories from "../components/Stories";

import bgCenter from "../images/bg-center.png";
import cucumber from "../images/Photo.jpg";
import faceMask from "../images/faceMask.jpg";

function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <ServicesSection
        leftPhoto={cucumber}
        bgCenter={bgCenter}
        rightPhoto={faceMask}
      />
      <Testimonials />
      <Benefits />
      <Appointment />
      <Stories />
    </div>
  );
}

export default Home;
