import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Weather from "./components/Weather"
import Contact from "./components/Contact";
import News from "./components/News";

const App = () => {
  return(
    <div className="overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300
    selction:text-cycn-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Weather />
      <Contact />
      <News />
      </div>
    </div>
  )
}

export default App