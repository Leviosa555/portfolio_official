import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { Certificates } from './sections/Certificates';
import { Projects } from './sections/Projects';
import { Internship } from './sections/Internship';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#E1E0CC] overflow-x-hidden">
      {/* Cinematic layout */}
      <Hero />
      <About />
      <Expertise />
      <Certificates />
      <Projects />
      <Internship />
      <Contact />
    </div>
  );
}

export default App;
