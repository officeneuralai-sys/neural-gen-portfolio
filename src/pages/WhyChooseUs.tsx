import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { StrategyCallForm } from '@/components/StrategyCallForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WhyChooseUs = () => {
    
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

  const differentiators = [
    {
      title: "Unified Ecosystem",
      description: "One platform, infinite possibilities. Our integrated AI solutions work seamlessly together, creating synergies that amplify results across your entire business.",
      icon: "🔗"
    },
    {
      title: "Action-Oriented AI",
      description: "We don't just analyze – we act. Our AI systems are designed to take immediate, intelligent action based on real-time data and insights.",
      icon: "⚡"
    },
    {
      title: "Industry Expertise",
      description: "Deep domain knowledge across multiple industries allows us to deliver solutions that understand your specific challenges and opportunities.",
      icon: "🎯"
    },
    {
      title: "Rapid Deployment",
      description: "From concept to implementation in weeks, not months. Our proven frameworks and methodologies ensure quick time-to-value.",
      icon: "🚀"
    },
    {
      title: "Continuous Evolution",
      description: "Your AI solutions learn and improve constantly. We provide ongoing optimization to ensure peak performance and adaptation to changing needs.",
      icon: "🔄"
    },
    {
      title: "Premium Support",
      description: "White-glove service with dedicated AI specialists. Get expert guidance, priority support, and strategic consultation whenever you need it.",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 reveal">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose neural AI?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another AI company. We're your strategic partner in 
              <span className="text-primary font-medium"> intelligent transformation</span>.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {differentiators.map((item, index) => (
              <div key={index} className="neural-card reveal">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-neural-darker p-8 rounded-xl border border-border reveal">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Our Commitment to Your Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Partnership, Not a Project</h4>
                    <p className="text-muted-foreground">We work with you as a true partner, deeply invested in understanding your business and achieving your goals.</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Innovation at the Core</h4>
                    <p className="text-muted-foreground">We are constantly exploring the cutting edge of AI to bring you the most advanced and effective solutions available.</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Measurable Results</h4>
                    <p className="text-muted-foreground">We are obsessed with delivering tangible, measurable results that have a real impact on your bottom line.</p>
                </div>
            </div>
          </div>

          <div className="text-center mt-16 reveal">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to start your AI transformation?</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
                >
                  Book a Strategy Call
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
              href="mailto:office@neuralai.in" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              office@neuralai.in
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

export default WhyChooseUs;
