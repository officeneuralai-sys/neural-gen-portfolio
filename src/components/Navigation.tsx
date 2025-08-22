import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="neural-logo text-2xl">
            <span className="neural-text">neural</span>
            <span className="ai-text"> AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/services"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              to="/why-choose-us"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Choose Us
            </Link>
          </div>

          {/* CTA Button */}
          <Button 
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
            onClick={() => window.open('mailto:office@neuralai.in', '_blank')}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
