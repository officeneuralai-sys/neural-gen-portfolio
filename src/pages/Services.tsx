import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import { Link } from 'react-router-dom';

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

  const services = [
    { id: 'ai-calling-agent', title: 'AI Calling Agent' },
    { id: 'basic-automation', title: 'Basic Automation' },
    { id: 'cctv-ai-monitoring', title: 'CCTV AI Monitoring' },
    { id: 'business-analytics', title: 'Business Analytics' },
    { id: 'restaurant-automation', title: 'Restaurant Automation' },
    { id: 'marketing-automation', title: 'Marketing Automation' },
    { id: 'real-estate-ai-suite', title: 'Real Estate AI Suite' },
    { id: 'full-stack-development', title: 'Full Stack Development' },
    { id: 'ai-social-media-content', title: 'AI Social Media Content' },
  ];

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
      <footer className="bg-neural-darker border-t border-border py-16 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="neural-logo text-3xl mb-4">
              <span className="neural-text">neural</span>
              <span className="ai-text"> AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A company by IIT Madras Undergrads, engineering the future of AI automation to transform businesses with intelligent solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-semibold text-lg text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-semibold text-lg text-primary mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          © 2025 neural AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Services;
