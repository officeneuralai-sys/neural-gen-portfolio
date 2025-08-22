const TechnologySection = () => {
  const technologies = [
    {
      title: "Generative AI & LLMs",
      description: "Advanced language models for natural conversation, content creation, and intelligent automation",
      features: ["GPT-4 Integration", "Custom Fine-tuning", "Multi-modal Processing", "Real-time Inference"]
    },
    {
      title: "Computer Vision",
      description: "State-of-the-art visual AI for monitoring, analysis, and automated decision making",
      features: ["Object Detection", "Facial Recognition", "Anomaly Detection", "Real-time Processing"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends, optimize operations, and predict outcomes",
      features: ["Time Series Analysis", "Behavioral Prediction", "Risk Assessment", "Performance Optimization"]
    }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {technologies.map((tech, index) => (
        <div key={index} className="neural-card reveal">
          {/* Abstract SVG Background */}
          <div className="mb-6 relative h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            {index === 0 && (
              <svg className="w-16 h-16 text-primary" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="25" r="8" fill="currentColor" opacity="0.8"/>
                <circle cx="25" cy="50" r="6" fill="currentColor" opacity="0.6"/>
                <circle cx="75" cy="50" r="6" fill="currentColor" opacity="0.6"/>
                <circle cx="50" cy="75" r="8" fill="currentColor" opacity="0.8"/>
                <path d="M50 25L25 50M50 25L75 50M25 50L50 75M75 50L50 75" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
              </svg>
            )}
            {index === 1 && (
              <svg className="w-16 h-16 text-primary" viewBox="0 0 100 100" fill="none">
                <rect x="20" y="20" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="35" cy="35" r="3" fill="currentColor"/>
                <circle cx="50" cy="35" r="3" fill="currentColor"/>
                <circle cx="65" cy="35" r="3" fill="currentColor"/>
                <path d="M25 70L75 70M30 75L70 75M35 80L65 80" stroke="currentColor" strokeWidth="2"/>
              </svg>
            )}
            {index === 2 && (
              <svg className="w-16 h-16 text-primary" viewBox="0 0 100 100" fill="none">
                <path d="M20 80L30 60L40 70L50 45L60 55L70 30L80 40" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="30" cy="60" r="3" fill="currentColor"/>
                <circle cx="50" cy="45" r="3" fill="currentColor"/>
                <circle cx="70" cy="30" r="3" fill="currentColor"/>
              </svg>
            )}
          </div>

          <h3 className="text-xl font-semibold text-primary mb-3">{tech.title}</h3>
          <p className="text-muted-foreground mb-6">{tech.description}</p>
          
          <div className="space-y-2">
            {tech.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologySection;