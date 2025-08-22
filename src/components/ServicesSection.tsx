const ServicesSection = () => {
  const services = [
    {
      title: "AI Calling Agent",
      description: "Intelligent voice automation for customer service and sales",
      traditional: "Manual call handling, long wait times, inconsistent service quality",
      aiSolution: "24/7 AI agent with natural conversation, instant responses, perfect consistency",
      impact: "Reduce call handling costs by 60% • Increase customer satisfaction by 40%"
    },
    {
      title: "Basic Automation",
      description: "Streamline repetitive tasks and workflows",
      traditional: "Manual data entry, repetitive tasks, human errors, time waste",
      aiSolution: "Automated workflows, error-free processing, instant task completion",
      impact: "Save 15+ hours weekly • Eliminate 99% of manual errors"
    },
    {
      title: "CCTV AI Monitoring",
      description: "Intelligent surveillance with real-time threat detection",
      traditional: "Human monitors, missed incidents, delayed responses, fatigue errors",
      aiSolution: "24/7 AI monitoring, instant threat detection, automated alerts",
      impact: "Detect threats 300% faster • Reduce security incidents by 70%"
    },
    {
      title: "Business Analytics",
      description: "AI-powered insights and predictive analytics",
      traditional: "Manual reporting, delayed insights, guesswork decisions",
      aiSolution: "Real-time analytics, predictive insights, automated reporting",
      impact: "Make data-driven decisions 80% faster • Improve forecast accuracy by 45%"
    },
    {
      title: "Restaurant Automation",
      description: "Complete AI solution for restaurant operations",
      traditional: "Manual orders, kitchen delays, inventory guesswork, poor coordination",
      aiSolution: "AI ordering, optimized kitchen flow, smart inventory, seamless operations",
      impact: "Increase order accuracy by 95% • Reduce wait times by 50%"
    },
    {
      title: "Marketing Automation",
      description: "AI-driven marketing campaigns and lead generation",
      traditional: "Generic campaigns, manual targeting, poor ROI tracking",
      aiSolution: "Personalized campaigns, smart targeting, real-time optimization",
      impact: "Increase conversion rates by 65% • Reduce marketing costs by 40%"
    },
    {
      title: "Real Estate AI Suite",
      description: "Complete AI solution for real estate professionals",
      traditional: "Manual lead qualification, generic property matching, slow responses",
      aiSolution: "AI lead scoring, smart property matching, instant client responses",
      impact: "Qualify leads 85% faster • Increase closing rates by 30%"
    },
    {
      title: "Full Stack Development",
      description: "AI-enhanced development with modern frameworks",
      traditional: "Slow development cycles, manual coding, frequent bugs",
      aiSolution: "AI-assisted coding, automated testing, rapid deployment",
      impact: "Accelerate development by 70% • Reduce bugs by 80%"
    },
    {
      title: "AI Social Media Content",
      description: "Automated content creation and social media management",
      traditional: "Manual content creation, inconsistent posting, poor engagement",
      aiSolution: "AI-generated content, automated scheduling, engagement optimization",
      impact: "Increase engagement by 120% • Save 20+ hours weekly"
    }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="neural-card reveal">
          <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
          <p className="text-muted-foreground mb-6">{service.description}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-destructive mb-2">Traditional Approach:</h4>
              <p className="text-sm text-muted-foreground">{service.traditional}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-primary mb-2">AI Solution:</h4>
              <p className="text-sm text-foreground">{service.aiSolution}</p>
            </div>
            
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              <h4 className="text-sm font-medium text-primary mb-1">Impact Snapshot:</h4>
              <p className="text-sm text-foreground">{service.impact}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;