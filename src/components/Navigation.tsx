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
import { StrategyCallForm } from "@/components/StrategyCallForm";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/Screenshot_22-8-2025_21853_.jpeg" alt="neural AI logo" className="h-10" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors duration-200">Home</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors duration-200">Services</Link>
              <Link to="/why-choose-us" className="text-foreground hover:text-primary transition-colors duration-200">Why Choose Us</Link>
            </div>

            {/* Mobile Menu Trigger & CTA */}
            <div className="flex items-center gap-4">
               <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  <StrategyCallForm onSuccess={() => setIsDialogOpen(false)} />
                </DialogContent>
              </Dialog>
              <button
                className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto h-full flex flex-col items-start justify-center text-left p-6">
            <div className="flex flex-col items-start space-y-6">
                <Link to="/" onClick={closeMobileMenu} className="group text-3xl text-foreground transition-colors relative">
                    Home
                    <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/services" onClick={closeMobileMenu} className="group text-3xl text-foreground transition-colors relative">
                    Services
                    <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/why-choose-us" onClick={closeMobileMenu} className="group text-3xl text-foreground transition-colors relative">
                    Why Choose Us
                    <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
                </Link>
            </div>

            <div className="absolute bottom-10 flex items-center space-x-3">
                <img src="/Screenshot_22-8-2025_21853_.jpeg" alt="neural AI logo" className="h-10" />
                <div className="font-zen-dots text-2xl">
                    <span className="text-primary">neural</span>
                    <span className="text-white"> AI</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
