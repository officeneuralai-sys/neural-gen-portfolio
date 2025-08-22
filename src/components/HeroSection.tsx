import NeuralBackground from './NeuralBackground';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <NeuralBackground />
      <div className="hero-content">
        <h1 className="font-zen-dots text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider leading-none">
            <span className="neural-text">neural</span><span className="text-white"> AI</span>
        </h1>
      </div>
      <a href="#services" className="scroll-down">
          <svg className="scroll-down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
      </a>
    </section>
  );
};

export default HeroSection;
