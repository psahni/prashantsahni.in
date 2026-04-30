import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkProcess from "./components/WorkProcess";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Newsletter from "./components/Newsletter";
import WorkTogether from "./components/WorkTogether";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkProcess />
        <Skills />
        <Portfolio />
        <Newsletter />
        <WorkTogether />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
