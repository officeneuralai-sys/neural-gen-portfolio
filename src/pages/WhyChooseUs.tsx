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
      description: "One platform, infinite possibilities. Our integrated AI solutions work seamlessly together, creating synergies that amplify results across your entire business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
      )
    },
    {
      title: "Action-Oriented AI",
      description: "We don't just analyze – we act. Our AI systems are designed to take immediate, intelligent action based on real-time data and insights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      )
    },
    {
      title: "Industry Expertise",
      description: "Deep domain knowledge across multiple industries allows us to deliver solutions that understand your specific challenges and opportunities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      )
    },
    {
      title: "Rapid Deployment",
      description: "From concept to implementation in weeks, not months. Our proven frameworks and methodologies ensure quick time-to-value.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.66-1.03 1.11-2.24 1.11-3.49a7 7 0 0 0-14 0c0 1.25.45 2.46 1.11 3.49-.65.81-.66 2.27.05 3.11Z"/><path d="m12 15-3-3a9 9 0 0 0-3 13.5 9 9 0 0 0 13.5-3l-3-3Z"/></svg>
      )
    },
    {
      title: "Continuous Evolution",
      description: "Your AI solutions learn and improve constantly. We provide ongoing optimization to ensure peak performance and adaptation to changing needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M21 21v-5h-5"/></svg>
      )
    },
    {
      title: "Premium Support",
      description: "White-glove service with dedicated AI specialists. Get expert guidance, priority support, and strategic consultation whenever you need it.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 12v-2a2 2 0 0 1 2-2h2"/></svg>
      )
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {differentiators.map((item, index) => (
              <div key={index} className="neural-card reveal">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
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
