import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon, GithubIcon, LinkedinIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");

      if (
        isOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Close mobile menu when pressing escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.querySelectorAll("#mobile-menu a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--primary)]/75 backdrop-blur-sm py-5 shadow-lg"
          : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[var(--accent)]">
          MA<span className="text-[var(--text-primary)]">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="has-custom-cursor text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--accent)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  <span className="text-[var(--accent)] mr-1">
                    0{index + 1}.
                  </span>{" "}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ashrafkhan9/"
              target="_blank"
              rel="noopener noreferrer"
              className="has-custom-cursor text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ashraf-m1/"
              target="_blank"
              rel="noopener noreferrer"
              className="has-custom-cursor text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="has-custom-cursor text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          id="menu-button"
          className="md:hidden text-[var(--text-primary)] p-2 hover:bg-[var(--secondary)] rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-[var(--primary)]/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--accent)] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[var(--accent)] mr-1">
                    0{index + 1}.
                  </span>{" "}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-6 mt-6">
            <a
              href="https://github.com/ashrafkhan9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-2 hover:bg-[var(--secondary)] rounded-lg"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ashraf-m1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-2 hover:bg-[var(--secondary)] rounded-lg"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <button
              onClick={toggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors p-2 hover:bg-[var(--secondary)] rounded-lg"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
