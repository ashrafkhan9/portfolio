import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-[var(--secondary)]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-[var(--accent)]">
              MA<span className="text-[var(--text-primary)]">.</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon size={20} />
            </a>
          </div>
          
          <p className="text-[var(--text-secondary)] text-sm">
            © {new Date().getFullYear()} Muhammad Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;