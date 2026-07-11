import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FixedSocialRail from "@/components/FixedSocialRail";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <FixedSocialRail />
      <main>
        <Hero />
        {/* Right gutter so content clears the fixed social rail on large screens */}
        <div className="lg:pr-16 xl:pr-20">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
