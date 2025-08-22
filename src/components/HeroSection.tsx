import NeuralBackground from './NeuralBackground';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <NeuralBackground />
      <div className="hero-content">
        <h1 className="font-zen-dots text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider leading-none">
            <span className="neural-text">neural</span><span className="text-white"> AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            Transform your business with cutting-edge AI automation.
            <br />
            <span className="text-primary font-medium">
              From intelligent calling agents to predictive analytics
            </span>
            <br />
            We deliver premium AI solutions that drive real results.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Explore Our Services
            </Link>
            <button 
              onClick={() => window.open('mailto:contact@neural-ai.com', '_blank')}
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
        </div>
      </div>
      <a href="#main-content" className="scroll-down">
          <svg className="scroll-down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
      </a>
    </section>
  );
};

export default HeroSection;
