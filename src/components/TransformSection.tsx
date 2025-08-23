import { useEffect } from 'react';

const TransformSection = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach(reveal => {
        const elementTop = (reveal as HTMLElement).getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          (reveal as HTMLElement).classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check

    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <section id="transform-business" className="py-20 px-6 bg-neural-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Go Beyond Automation.
              <br />
              <span className="text-primary">Transform Your Business.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We don't just implement AI; we architect intelligent ecosystems that learn, adapt, and drive unprecedented growth. Turn your vision into reality and build a more dynamic, resilient business with our bespoke solutions.
            </p>
            <a 
              href="services"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Solutions
            </a>
          </div>
          <div className="reveal">
            <div className="neural-card p-2">
                 <img 
                    src="/build-worlds.jpg" 
                    alt="AI generating 3D worlds" 
                    className="rounded-lg w-full h-auto"
                 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
