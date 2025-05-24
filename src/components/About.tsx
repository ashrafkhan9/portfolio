import { useEffect, useRef } from "react";
import { reveal } from "../utils/animations";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const imgElement = imgRef.current;
    const textElement = textRef.current;

    const revealSection = () => {
      if (sectionElement) reveal(sectionElement);
      if (imgElement) reveal(imgElement, "reveal-left");
      if (textElement) reveal(textElement, "reveal-right");
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Check on initial load

    return () => window.removeEventListener("scroll", revealSection);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 reveal">
      <div className="container">
        <h2 className="section-title">
          <span className="text-[var(--accent)]">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div ref={textRef} className="reveal reveal-right">
            <p className="text-[var(--text-secondary)] mb-4">
              Hello! I'm Muhammad Ashraf, a passionate full-stack developer with
              2 years of experience in building web applications using the MERN
              stack and Next.js.
            </p>
            <p className="text-[var(--text-secondary)] mb-4">
              My journey in web development began with a curiosity about how
              websites work, which quickly evolved into a passion for creating
              intuitive, efficient, and visually appealing digital experiences.
            </p>
            <p className="text-[var(--text-secondary)] mb-6">
              I specialize in building responsive and dynamic web applications,
              with a focus on clean code and user-centered design. When I'm not
              coding, I enjoy exploring new technologies and contributing to
              open-source projects.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">
                My tech stack includes:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <ul className="space-y-2">
                  {["JavaScript (ES6+)", "React", "Node.js", "Express"].map(
                    (tech, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-[var(--accent)] mr-2">▹</span>{" "}
                        {tech}
                      </li>
                    )
                  )}
                </ul>
                <ul className="space-y-2">
                  {["MongoDB", "Next.js", "Tailwind CSS", "TypeScript"].map(
                    (tech, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-[var(--accent)] mr-2">▹</span>{" "}
                        {tech}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div ref={imgRef} className="relative group reveal reveal-left">
            <div className="relative rounded-md overflow-hidden aspect-square w-3/4 mx-auto md:ml-auto before:content-[''] before:absolute before:inset-0 before:bg-[var(--accent)]/20 before:opacity-0 before:transition-opacity group-hover:before:opacity-100">
              {/* Use a placeholder image - in a real portfolio, replace with your photo */}
              <img
                src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Muhammad Ashraf"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-[var(--accent)] rounded-md translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
