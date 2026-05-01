import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LeadBanner from "./components/LeadBanner";
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
        <LeadBanner
          line1="You don't need a dev."
          line2="You need a builder who leads."
          highlight="builder who leads."
          subtext={"I don't work for founders. I build alongside them.\nPart engineering leader, part hands-on dev — whatever your stage needs."}
          ctaText="Let's Build Together"
          ctaHref="#contact"
        />
        <About />
        <WorkProcess />
        <LeadBanner
          line1="Got a product problem? Let's solve it, fix it, and build what's next."
          highlight="build what's next."
        />
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
