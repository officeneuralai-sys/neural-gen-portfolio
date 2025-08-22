import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

// This is a placeholder for your detailed service data.
// In a real application, you would fetch this from a CMS or an API.
const serviceDetails: { [key: string]: any } = {
  'ai-calling-agent': {
    title: "AI Calling Agent (Contact Center 2.0)",
    description: "Our AI Calling Agent provides intelligent, 24/7 voice automation for your customer service and sales operations, delivering natural, human-like conversations that enhance customer satisfaction and dramatically reduce operational costs.",
    features: [
      "Real-time, natural language conversations",
      "Integration with existing CRM and databases",
      "Advanced sentiment analysis to gauge customer mood",
      "Automated call logging and summarization",
      "Scales instantly to handle unlimited call volume",
      "Customizable voice cloning to match your brand's tone"
    ],
    caseStudy: {
      client: "Global E-commerce Leader",
      challenge: "High call volumes during peak seasons led to long wait times and customer churn. Scaling the human team was expensive and inefficient.",
      solution: "We deployed our AI Calling Agent to handle all Tier-1 support inquiries, such as order status, returns, and FAQs. The AI was trained on thousands of past call logs to understand and resolve issues with 99.9% accuracy.",
      results: [
        "Reduced average customer wait time from 15 minutes to instant.",
        "Decreased call handling costs by 60% within the first quarter.",
        "Increased customer satisfaction scores by 40%.",
        "Freed up human agents to focus on complex, high-value customer issues."
      ]
    }
  },
  // You can add details for other services here following the same structure.
  // 'basic-automation': { ... },
  // 'cctv-ai-monitoring': { ... },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
        <div className="min-h-screen bg-background text-center py-20">
            <h1 className="text-4xl text-primary">Service Not Found</h1>
            <p className="text-muted-foreground mt-4">The service you are looking for does not exist.</p>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Service Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{service.description}</p>
          </div>

          {/* Core Features */}
          <div className="bg-neural-dark p-8 rounded-xl border border-border mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Real-World Impact: A Case Study</h2>
            <p className="text-muted-foreground mb-6">Client: {service.caseStudy.client}</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-red-400 mb-2">The Challenge</h4>
                <p className="text-zinc-400">{service.caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-teal-300 mb-2">Our Solution</h4>
                <p className="text-zinc-300">{service.caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-primary mb-2">The Results</h4>
                <ul className="list-disc list-inside text-zinc-300 space-y-2">
                  {service.caseStudy.results.map((result: string, index: number) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
            
          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to implement this solution?</h3>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
              onClick={() => window.open('mailto:contact@neural-ai.com', '_blank')}
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
