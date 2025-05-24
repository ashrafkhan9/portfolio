import { useEffect, useState } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-20 left-10 w-56 h-56 rounded-full bg-[var(--accent)]/10 animate-float blur-3xl`}></div>
        <div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[var(--accent)]/5 animate-float delay-1000 blur-3xl`}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p 
            className={`text-[var(--accent)] mb-5 font-mono transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hi, my name is
          </p>
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Muhammad Ashraf.
          </h1>
          <h2 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-secondary)] mb-6 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I build things for the web.
          </h2>
          <p 
            className={`text-[var(--text-secondary)] text-lg mb-8 max-w-2xl transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using the MERN stack and Next.js.
          </p>
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a href="#projects" className="btn btn-primary has-custom-cursor">
              Check out my work
            </a>
            <a href="#contact" className="btn border border-[var(--text-secondary)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] has-custom-cursor">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 animate-bounce has-custom-cursor ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToNext}
      >
        <ArrowDownIcon className="text-[var(--accent)]" size={28} />
      </div>
    </section>
  );
};

export default Hero;