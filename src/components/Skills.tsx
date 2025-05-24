import { useEffect, useRef } from "react";
import { reveal } from "../utils/animations";

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = skillRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.style.width = `${level}%`;
          element.classList.add("opacity-100");
        }, delay);
      }
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [level, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-[var(--accent)]">{level}%</span>
      </div>
      <div className="w-full bg-[var(--secondary)] rounded-full h-2.5">
        <div
          ref={skillRef}
          className="bg-[var(--accent)] h-2.5 rounded-full w-0 opacity-0 transition-all duration-1000 ease-out"
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (element) reveal(element);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-[var(--secondary)] p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 reveal ${className}`}
    >
      <div className="text-[var(--accent)] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

  const frontendSkills = [
    { name: "React.js", level: 90, delay: 100 },
    { name: "Next.js", level: 85, delay: 200 },
    { name: "HTML/CSS", level: 95, delay: 300 },
    { name: "JavaScript", level: 90, delay: 400 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, delay: 100 },
    { name: "Express", level: 80, delay: 200 },
    { name: "MongoDB", level: 75, delay: 300 },
    { name: "RESTful APIs", level: 90, delay: 400 },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-[var(--primary)] reveal"
    >
      <div className="container">
        <h2 ref={titleRef} className="section-title reveal">
          <span className="text-[var(--accent)]">02.</span> Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <SkillCard
            icon={
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent)]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            }
            title="Frontend Development"
            description="Creating responsive, interactive UIs with React, Next.js, and modern CSS frameworks like Tailwind."
            className="reveal-up"
          />

          <SkillCard
            icon={
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent)]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
            }
            title="Backend Development"
            description="Building robust server-side applications with Node.js, Express, and MongoDB for efficient data management."
            className="reveal-up delay-100"
          />

          <SkillCard
            icon={
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent)]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
            }
            title="Full Stack Integration"
            description="Connecting frontend and backend systems to create cohesive, efficient applications with optimal performance."
            className="reveal-up delay-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
