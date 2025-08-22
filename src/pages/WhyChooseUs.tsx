import Navigation from '@/components/Navigation';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <WhyChooseUsSection />
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

export default WhyChooseUs;
