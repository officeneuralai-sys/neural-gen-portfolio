const BenefitsSection = () => {
  const benefits = [
    {
      title: "Efficiency Revolution",
      description: "Automate repetitive tasks and streamline complex workflows",
      metrics: "Save 40+ hours weekly per employee"
    },
    {
      title: "Cost Optimization",
      description: "Reduce operational expenses while maintaining quality",
      metrics: "Average 60% reduction in operational costs"
    },
    {
      title: "24/7 Operations",
      description: "AI systems that work around the clock without breaks",
      metrics: "100% uptime with continuous service"
    },
    {
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable business intelligence",
      metrics: "Make decisions 5x faster with AI analytics"
    },
    {
      title: "Scalable Solutions",
      description: "Systems that grow with your business needs",
      metrics: "Handle 10x workload without additional staff"
    },
    {
      title: "Error Elimination",
      description: "AI precision that eliminates human errors",
      metrics: "99.9% accuracy in automated processes"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => (
        <div key={index} className="neural-card reveal text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-primary rounded-full animate-pulse-glow"></div>
          </div>
          
          <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
          <p className="text-muted-foreground mb-4">{benefit.description}</p>
          
          <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
            <p className="text-sm font-medium text-primary">{benefit.metrics}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;