import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="neural-logo text-2xl">
            <span className="neural-text">neural</span>
            <span className="ai-text"> AI</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Choose Us
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
            onClick={() => window.open('mailto:contact@neural-ai.com', '_blank')}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;