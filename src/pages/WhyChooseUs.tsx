import { useEffect } from 'react';
import Navigation from '@/components/Navigation';

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
      description: "Our integrated AI solutions work seamlessly together, creating synergies that amplify results across your entire business.",
      icon: (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <svg className="w-7 h-7 icon-unified" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M18 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </div>
      )
    },
    {
      title: "Action-Oriented AI",
      description: "We don't just analyze – we act. Our AI systems are designed to take immediate, intelligent action based on real-time data.",
      icon: (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <svg className="w-7 h-7 icon-action" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      )
    },
    {
      title: "Industry Expertise",
      description: "Deep domain knowledge allows us to deliver solutions that understand your specific challenges and opportunities.",
      icon: (
         <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <svg className="w-7 h-7 icon-expertise" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
        </div>
      )
    },
    {
      title: "Rapid Deployment",
      description: "From concept to implementation in weeks, not months. Our proven frameworks ensure quick time-to-value.",
      icon: (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <svg className="w-7 h-7 icon-deployment" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15.5C4 15.5 5.5 12 12 12C18.5 12 20 15.5 20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 5L12 2L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      )
    },
    {
      title: "Continuous Evolution",
      description: "Your AI solutions learn and improve constantly. We provide ongoing optimization to ensure peak performance.",
      icon: (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <svg className="w-7 h-7 icon-evolution" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 2v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 22v-6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 11.5a10 10 0 0 1 18.2-3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12.5a10 10 0 0 1-18.2 3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      )
    },
    {
      title: "Premium Support",
      description: "White-glove service with dedicated AI specialists. Get expert guidance, priority support, and strategic consultation.",
      icon: (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            <svg className="w-7 h-7 icon-support" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.08984 15.14L15.3498 8.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.3498 15.14L9.08984 8.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 reveal">
            <h1 className="font-zen-dots text-4xl sm:text-5xl md:text-6xl tracking-wider leading-none mb-6">
              <span className="neural-text">Why Choose </span><span className="text-white">neural AI?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another AI company. We're your strategic partner in 
              <span className="text-primary font-medium"> intelligent transformation</span>.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {differentiators.map((item, index) => (
              <div key={index} className="neural-card reveal">
                {item.icon}
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                At neural AI, we believe that artificial intelligence should be a force multiplier for human potential. Our approach is grounded in three core principles that guide every solution we build and every partnership we form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="bg-neural-darker p-8 rounded-xl border border-border reveal">
                <h4 className="text-xl font-semibold text-primary mb-2">Partnership, Not a Project</h4>
                <p className="text-muted-foreground">We work with you as a true partner, deeply invested in understanding your business and achieving your goals.</p>
            </div>
            <div className="bg-neural-darker p-8 rounded-xl border border-border reveal">
                <h4 className="text-xl font-semibold text-primary mb-2">Innovation at the Core</h4>
                <p className="text-muted-foreground">We are constantly exploring the cutting edge of AI to bring you the most advanced and effective solutions available.</p>
            </div>
            <div className="bg-neural-darker p-8 rounded-xl border border-border reveal">
                <h4 className="text-xl font-semibold text-primary mb-2">Measurable Results</h4>
                <p className="text-muted-foreground">We are obsessed with delivering tangible, measurable results that have a real impact on your bottom line.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-neural-darker border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="font-zen-dots text-3xl mb-4">
            <span className="neural-text">neural</span>
            <span className="ai-text"> AI</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Engineering the Future of AI automation
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
