import { useEffect, useRef, useState } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { reveal } from "../utils/animations";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink?: string;
  technologies: string[];
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isOdd = index % 2 !== 0;

  useEffect(() => {
    const element = cardRef.current;
    if (element) {
      reveal(element, isOdd ? "reveal-left" : "reveal-right");
    }
  }, [isOdd]);

  return (
    <div
      ref={cardRef}
      className={`relative grid md:grid-cols-12 gap-4 md:gap-8 items-center mb-24 reveal ${
        isOdd ? "reveal-left" : "reveal-right"
      }`}
    >
      {/* Project Image */}
      <div
        className={`md:col-span-7 relative z-10 ${
          isOdd ? "md:order-last" : ""
        }`}
      >
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[450px] object-cover transition-all duration-500 group-hover:scale-105 filter brightness-70 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      </div>

      {/* Project Info */}
      <div
        className={`md:col-span-5 relative z-20 ${
          isOdd ? "md:text-right" : "md:text-left"
        }`}
      >
        <p className="text-[var(--accent)] font-mono mb-1">Featured Project</p>
        <h3 className="text-2xl font-bold mb-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            {project.title}
          </a>
        </h3>

        <div className="bg-[var(--secondary)] p-6 rounded-lg shadow-lg mb-4">
          <p className="text-[var(--text-secondary)]">{project.description}</p>
        </div>

        <ul
          className={`flex flex-wrap gap-2 text-sm mb-4 md:mb-6 text-[var(--text-secondary)] ${
            isOdd ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.technologies.map((tech, i) => (
            <li key={i} className="bg-[var(--primary)]/80 px-3 py-1 rounded">
              {tech}
            </li>
          ))}
        </ul>

        <div
          className={`flex gap-4 ${
            isOdd ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub repository"
            >
              <GithubIcon size={20} />
            </a>
          )}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            aria-label="Live site"
          >
            <ExternalLinkIcon size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [projects] = useState<Project[]>([
    {
      id: 0,
      title: "E-commerce Website",
      description:
        "A complete e-commerce solution with product catalog, cart functionality, payment processing, and order management.",
      image:
        "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveLink: "https://rabbit-ecom-r9ur.vercel.app/",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS", "JWT"],
    },
    {
      id: 1,
      title: "Netflix Clone",
      description:
        "A full-featured Netflix clone with user authentication, personalized recommendations, and video streaming capabilities.",
      image:
        "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveLink: "https://netflix-clone-production-d282.up.railway.app/",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with product catalog, cart management, and secure payment processing.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveLink: "https://rabbit-ecom-r9ur.vercel.app/",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Spotify Clone",
      description:
        "A music streaming service with playlist creation, artist profiles, and customized user recommendations.",
      image:
        "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveLink: "https://spotify-clone-production-261e.up.railway.app/",
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebAudio API"],
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description:
        "An instant messaging platform with real-time message delivery, user presence indicators, and media sharing.",
      image:
        "https://images.pexels.com/photos/6690202/pexels-photo-6690202.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
      liveLink: "https://chat-app-master.up.railway.app/",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
    },
    {
      id: 5,
      title: "iPhone Animation",
      description:
        "An interactive 3D animation showcase of an iPhone with smooth transitions and engaging visual effects.",
      image:
        "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      liveLink: "https://iphone-gsap-black.vercel.app/",
      technologies: ["Three.js", "GSAP", "React", "Vite"],
    },
  ]);

  useEffect(() => {
    const titleElement = titleRef.current;
    const sectionElement = sectionRef.current;

    const revealElements = () => {
      if (titleElement) reveal(titleElement);
      if (sectionElement) reveal(sectionElement);
    };

    window.addEventListener("scroll", revealElements);
    revealElements(); // Check on initial load

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 reveal">
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">
          <span className="text-[var(--accent)]">03.</span> My Projects
        </h2>

        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
