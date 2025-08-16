import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Extracurricular from "@/components/Extracurricular";
//import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="pt-22 pb-22"> <Navbar/> <Hero /> <About /> <Education /> <Skills /> <Projects /> <Extracurricular /> <Footer/> </main>
  );
}
