export const reveal = (element: HTMLElement, className: string = '') => {
  // IntersectionObserver to reveal element when in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (className) element.classList.add(className);
        element.classList.add('active');
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(element);
};