import React, { useRef, useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import emailjs from "@emailjs/browser";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  useEffect(() => {
    // Set initial visibility
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Add margin to trigger animation earlier
      }
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
      id="contact"
      ref={sectionRef}
      className={`py-20 transition-all duration-500 bg-[var(--primary)] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Contact <span className="text-[var(--accent)]">Me</span>
          </h2>
          <div
            className={`w-24 h-1 bg-[var(--accent)] mx-auto rounded-full transition-all duration-500 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          ></div>
          <p
            className={`mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            Let's work together! Feel free to reach out using the form or
            contact information below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--accent)]/20 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--accent)]/20 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--accent)]/20 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-[var(--text-primary)]"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--secondary)] border border-[var(--accent)]/20 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-colors duration-300 resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  color: "var(--accent)",
                }}
                className="px-6 py-3 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center transform hover:scale-105"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="rounded-lg p-8 bg-[var(--secondary)] h-full">
              <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@muhammadashraf.dev"
                      className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                      contact@muhammadashraf.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+923000000000"
                      className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                    >
                      +92 300 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">
                      Location
                    </p>
                    <p className="text-lg font-medium text-[var(--text-primary)]">
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
