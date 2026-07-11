import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Experience} from "./components/experience";
import {Skills} from "./components/Skills";
import {Services} from "./components/Services";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
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
