const WhyChooseUsSection = () => {
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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Why Choose neural AI?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're not just another AI company. We're your strategic partner in 
          <span className="text-primary font-medium"> intelligent transformation</span>.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <div key={index} className="neural-card reveal">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="neural-card reveal mt-12 text-center bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join hundreds of forward-thinking companies that have already embraced the future with neural AI.
          Let's discuss how we can revolutionize your operations.
        </p>
        <button 
          onClick={() => window.open('mailto:contact@neural-ai.com', '_blank')}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
        >
          Schedule Your AI Consultation
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;