import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import WorkProcess from "./components/WorkProcess";
import ProductSprint from "./components/ProductSprint";
import Skills from "./components/Skills";
import ProductOptimization from "./components/ProductOptimization";
import Outcomes from "./components/Outcomes";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <WhatIDo />
        <WorkProcess />
        <ProductSprint />
        <Skills />
        <ProductOptimization />
        <Outcomes />
        <Portfolio />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

