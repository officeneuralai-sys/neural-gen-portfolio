import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StrategyCallForm } from "@/components/StrategyCallForm"; // Import the new component

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
          <Link to="/">
            <img src="/Screenshot_22-8-2025_21853_.jpeg" alt="neural AI logo" className="h-10" />
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
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
              >
                Book a Call
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Book a Strategy Call</DialogTitle>
                <DialogDescription>
                  Fill out the form below and our team will get back to you to schedule your call.
                </DialogDescription>
              </DialogHeader>
              <StrategyCallForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
