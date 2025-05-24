import React, { useRef, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
  isDarkMode: boolean;
}

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  duration: string;
  date: string;
  location: string;
  description: string[];
}

const Experience: React.FC<ExperienceProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences: WorkExperience[] = [
    {
      id: 1,
      company: "Micro Data Tech Solutions",
      role: "MERN Stack & Next.js Developer",
      duration: "1 year",
      date: "September 2024 - Present",
      location: "DHA Phase 6, Lahore",
      description: [
        "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Building server-side rendered applications with Next.js for improved performance and SEO",
        "Implementing responsive designs and ensuring cross-browser compatibility",
        "Collaborating with design and backend teams to create seamless user experiences",
      ],
    },
    {
      id: 2,
      company: "Zad Technology",
      role: "Web Development Intern",
      duration: "3 months",
      date: "June 2024 - August 2024",
      location: "Johar Town, Lahore",
      description: [
        "Assisted in developing responsive web applications using React.js",
        "Worked with senior developers to implement new features and fix bugs",
        "Participated in code reviews and team meetings to improve development processes",
        "Gained hands-on experience with the MERN stack in a professional environment",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      childElements?.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-[var(--primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Work <span className="text-[var(--accent)]">Experience</span>
          </h2>
          <div
            className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full animate-on-scroll opacity-0"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--accent)]"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative animate-on-scroll opacity-0 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                {/* Date bubble for mobile */}
                <div className="md:hidden mb-4 flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Calendar size={20} />
                  </div>
                  <span className="ml-3 font-medium text-[var(--text-primary)]">
                    {exp.date}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="p-6 rounded-lg shadow-lg bg-[var(--secondary)] h-full">
                    <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <h4 className="text-[var(--accent)] font-medium mb-2">
                      {exp.company}
                    </h4>

                    <div
                      className={`flex items-center mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <MapPin
                        size={16}
                        className="text-[var(--text-secondary)]"
                      />
                      <span className="ml-2 text-sm text-[var(--text-secondary)]">
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-[var(--accent)] font-bold">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center point and date for desktop */}
                <div className="hidden md:flex items-center justify-center w-full md:w-2/12">
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium text-[var(--text-primary)] mb-2 px-4 py-1 rounded-full bg-[var(--accent)]/10">
                      {exp.date}
                    </div>
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[var(--accent)] text-gray-500 z-10">
                      <Calendar size={20} />
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
