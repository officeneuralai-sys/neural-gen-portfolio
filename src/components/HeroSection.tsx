import NeuralBackground from './NeuralBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralBackground />
      
      <div className="relative z-10 text-center px-6">
        <div className="hero-float">
          <h1 className="neural-logo hero-glow mb-8">
            <span className="neural-text">neural</span>
            <span className="ai-text"> AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI automation.
            <br />
            <span className="text-primary font-medium">
              From intelligent calling agents to predictive analytics
            </span>
            <br />
            We deliver premium AI solutions that drive real results.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </button>
            <button 
              onClick={() => window.open('mailto:contact@neural-ai.com', '_blank')}
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;