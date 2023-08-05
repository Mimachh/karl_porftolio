import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Techno } from './components';
import { Toaster } from "react-hot-toast";


const App = () => {

  const sections = ['hero', 'about', 'projects', 'contact']; // Liste des ID de vos sections
  const [section, setSection] = useState('');
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // L'élément entre dans la vue
        // console.log('Section visible:', entry.target.id);
        setSection(entry.target.id)
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1, // Ajustez cette valeur pour définir à quel point la section doit être visible pour déclencher l'intersection
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sectionId) => {
      const target = document.getElementById(sectionId);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect(); // Nettoyage de l'observateur lors du démontage du composant
    };
  }, []);
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" id='hero'>
          <Navbar 
          section={section}
          />
          <Toaster/>
          <Hero />
        </div>
        <div id="about">
          <About />
          {/* <Experience /> */}
          <Techno />
        </div>
        <div id="projects" className='py-32'>
          <Works />
        </div>
        <div className="relative z-0" id="contact">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
