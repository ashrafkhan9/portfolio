import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/ui/Cursor";
import Loader from "./components/ui/Loader";
import { useTheme } from "./context/ThemeContext";
import Experience from "./components/Experience";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <Cursor />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Experience isDarkMode={theme === "dark"} />
        <Skills />
        <Projects />
        <Contact isDarkMode={theme === "dark"} />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
