import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      .project-card{
        transition: transform 0.3s;
      }

      .project-card:hover{
        transform: translateY(-10px);
      }
    `;

    document.head.appendChild(style);

  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;