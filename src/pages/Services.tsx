import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our cutting-edge AI technologies can transform your operations, 
              reduce costs, and unlock unprecedented growth opportunities.
            </p>
          </div>
          <ServicesSection />
        </div>
      </main>
      <footer className="bg-neural-darker border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="neural-logo text-3xl mb-4">
            <span className="neural-text">neural</span>
            <span className="ai-text"> AI</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Transforming businesses with intelligent automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:contact@neural-ai.com" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              contact@neural-ai.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              © 2024 neural AI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
