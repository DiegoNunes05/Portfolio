import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Services} from "./components/Services";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import { Experience } from "./components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col transition-300">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
