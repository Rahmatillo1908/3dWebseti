import React from "react";
import { BrowserRouter } from "react-router-dom"
import About  from "./components/About";
import Hero  from "./components/Hero";
import Navbar  from "./components/Navbar";
import Experiens  from "./components/Experiens";
import Tech  from "./components/Tech";
import Works  from "./components/Works";
import Feedbacks  from "./components/Feedbacks";
import Contact  from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experiens />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0" >
          <Contact />
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
