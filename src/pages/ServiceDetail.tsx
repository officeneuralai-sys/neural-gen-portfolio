import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

// 1. Define the form schema with Zod for validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  workEmail: z.string().email({ message: "Please enter a valid email address." }),
  companyDomain: z.string().min(2, { message: "Please enter a valid domain." }),
  serviceOfInterest: z.string(),
  challenge: z.string().min(10, { message: "Please describe your challenge in at least 10 characters." }),
});

// 2. Create the Strategy Call Form Component
const StrategyCallForm = ({ serviceTitle }: { serviceTitle: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyDomain: "",
      serviceOfInterest: serviceTitle,
      challenge: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log("Strategy Call Request:", values);
    toast({
      title: "Request Sent!",
      description: "Our team will review your information and get back to you shortly.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyDomain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Domain</FormLabel>
              <FormControl>
                <Input placeholder="company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceOfInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service of Interest</FormLabel>
              <FormControl>
                <Input {...field} readOnly className="bg-muted" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your project or challenge</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., We're looking to reduce customer support costs while improving response times."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit Request</Button>
      </form>
    </Form>
  );
};


// This is a placeholder for your detailed service data.
// In a real application, you would fetch this from a CMS or an API.
const serviceDetails: { [key: string]: any } = {
  'ai-calling-agent': {
    title: "AI Calling Agent (Contact Center 2.0)",
    description: "Our AI Calling Agent provides intelligent, 24/7 voice automation for your customer service and sales operations, delivering natural, human-like conversations that enhance customer satisfaction and dramatically reduce operational costs.",
    keyMetrics: [
        { value: "60%", label: "Reduction in Call Handling Costs" },
        { value: "40%", label: "Increase in Customer Satisfaction" },
        { value: "24/7", label: "Operational Availability" }
    ],
    implementationRoadmap: [
        { week: "1", title: "Discovery & Voice Cloning", description: "We analyze your existing call logs and clone your brand's voice from a 30-second audio sample." },
        { week: "2-3", title: "AI Training & Integration", description: "The AI agent is trained on your specific use cases and integrated with your CRM and databases." },
        { week: "4", title: "Pilot Program & Launch", description: "We launch a pilot program to handle a portion of your calls, gather data, and make final optimizations before a full rollout." }
    ],
    clientPerspective: {
      title: "For the Business Leader: A 24/7, Superhuman Support Team",
      points: [
        "**Slash Operational Costs:** Reduce overhead by automating up to 80% of inbound and outbound calls, freeing up human agents for high-value interactions.",
        "**Boost Sales & Lead Conversion:** Qualify leads, book appointments, and even close sales around the clock, ensuring you never miss an opportunity.",
        "**Enhance Customer Satisfaction:** Eliminate wait times and provide instant, consistent, and accurate support in any language, at any time.",
        "**Gain Actionable Insights:** Turn every conversation into data. Our AI analyzes sentiment, identifies trends, and provides you with a real-time pulse on your customer base."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: The Architecture of Conversation",
      points: [
        "**Core Technology:** Built on a foundation of fine-tuned Large Language Models (LLMs) like GPT-4, combined with proprietary speech-to-text and text-to-speech engines for ultra-low latency.",
        "**Voice Cloning & TTS:** We utilize advanced text-to-speech (TTS) models that can be cloned from a 30-second audio sample to perfectly match your brand's voice.",
        "**Real-time Interruption Handling:** Our system is designed to handle natural conversation flow, allowing users to interrupt, ask questions, and change topics without breaking the experience.",
        "**Seamless API Integration:** The agent integrates directly with your existing CRM (like Salesforce, HubSpot) and internal databases via REST APIs to pull customer data and push call logs and outcomes automatically."
      ]
    },
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
    'basic-automation': {
    title: "Basic Automation Services",
    description: "Streamline your repetitive back-office tasks and workflows with our intelligent Robotic Process Automation (RPA) solutions. We turn manual, error-prone processes into efficient, automated systems.",
    keyMetrics: [
        { value: "99%", label: "Reduction in Manual Errors" },
        { value: "15+", label: "Hours Saved Weekly Per Employee" },
        { value: "10x", label: "Scalability of Operations" }
    ],
    implementationRoadmap: [
        { week: "1", title: "Process Audit", description: "Our team works with you to identify the most impactful and feasible processes for automation." },
        { week: "2-3", title: "Bot Development", description: "We develop, test, and refine the custom RPA bots for your specific workflows." },
        { week: "4", title: "Deployment & Training", description: "We deploy the bots into your live environment and train your team on how to manage and monitor them." }
    ],
    clientPerspective: {
      title: "For the Business Leader: Reclaim Your Team's Time",
      points: [
        "**Boost Productivity:** Liberate your employees from tedious tasks like data entry, report generation, and invoice processing. We've found that our solutions save an average of 15+ hours per employee, per week.",
        "**Eliminate Human Error:** Achieve near-100% accuracy in your processes, reducing costly mistakes and ensuring data integrity.",
        "**Improve Scalability:** Handle a 10x workload without a corresponding increase in headcount. Our AI bots work 24/7 without fatigue.",
        "**Enhance Compliance:** Automate regulatory checks and audit trails to ensure your business operations are always compliant."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: Building Your Digital Workforce",
      points: [
        "**Core Technology:** We utilize a combination of established RPA platforms and custom Python scripts to create resilient and efficient bots.",
        "**Intelligent Document Processing (IDP):** Our bots can read and understand unstructured documents like invoices and contracts using Optical Character Recognition (OCR) and Natural Language Processing (NLP).",
        "**API & UI Integration:** We build automations that can interact with applications at both the API level (for speed and stability) and the UI level (for legacy systems).",
        "**No-Code Workflow Builder:** We provide a user-friendly, no-code interface that allows your team to design and deploy their own simple automations without technical expertise."
      ]
    },
    caseStudy: {
      client: "Regional Accounting Firm",
      challenge: "The firm was spending hundreds of hours per month manually transferring data from client bookkeeping software to their internal tax preparation systems.",
      solution: "We developed a suite of RPA bots that could securely log into various client systems, extract the necessary financial data, and accurately populate the firm's tax software.",
      results: [
        "Reduced manual data entry time by 95%.",
        "Eliminated data transfer errors, saving significant time during tax season.",
        "Allowed accountants to focus on high-value advisory services instead of data entry.",
        "Improved employee satisfaction and reduced burnout."
      ]
    }
  },
  'cctv-ai-monitoring': {
    title: "CCTV AI Monitoring",
    description: "Transform your standard surveillance system into a proactive, intelligent security and operations tool. Our AI analyzes your camera feeds in real-time to detect threats, monitor compliance, and provide valuable business insights.",
    keyMetrics: [
        { value: "300%", label: "Faster Threat Detection" },
        { value: "70%", label: "Reduction in Security Incidents" },
        { value: "24/7", label: "Automated Monitoring" }
    ],
    implementationRoadmap: [
        { week: "1", title: "System Integration", description: "We integrate our AI platform with your existing CCTV infrastructure, whether on-premise or cloud-based." },
        { week: "2-3", title: "Custom Model Training", description: "We fine-tune our computer vision models to recognize the specific objects, behaviors, and compliance rules relevant to your business." },
        { week: "4", title: "Dashboard & Alert Setup", description: "We configure your custom dashboard for analytics and set up the real-time alerting system for your security team." }
    ],
    clientPerspective: {
      title: "For the Business Leader: Eyes Everywhere, All the Time",
      points: [
        "**Proactive Threat Detection:** Receive instant alerts for security events like unauthorized access, theft, or unusual behavior, allowing you to act before it's too late.",
        "**Automated Compliance:** Ensure safety and operational protocols are being followed, from verifying hard-hat usage on a construction site to monitoring hand-washing in a restaurant.",
        "**Optimize Your Space:** Use heatmap and foot-traffic analysis to understand customer behavior, optimize store layouts, and improve product placement.",
        "**Reduce Monitoring Costs:** Drastically reduce the need for human security personnel to constantly watch live feeds, while increasing the effectiveness of your surveillance."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: Seeing the World in Data",
      points: [
        "**Core Technology:** We use state-of-the-art Convolutional Neural Networks (CNNs), specifically models like YOLO (You Only Look Once) for real-time object detection and classification.",
        "**Emotion & Behavior Analysis:** Our system can be trained to recognize specific actions or even gauge crowd sentiment by analyzing facial expressions and body language.",
        "**Edge & Cloud Processing:** Depending on your needs, we can deploy models directly on-site (on the edge) for low-latency alerts or process feeds in the cloud for more complex, large-scale analysis.",
        "**Custom Model Training:** We can fine-tune our models on your specific data to recognize unique objects, actions, or compliance requirements relevant to your business."
      ]
    },
    caseStudy: {
      client: "A Chain of Retail Stores",
      challenge: "The client was experiencing significant losses due to shoplifting and was struggling to optimize the layout of their new stores.",
      solution: "We integrated our AI Monitoring system with their existing CCTV network. The AI was trained to detect suspicious behavior patterns and generate real-time alerts for staff. It also provided detailed heatmap analytics of customer movement.",
      results: [
        "Reduced shoplifting incidents by 70% in the first six months.",
        "Increased sales by 15% in redesigned stores based on heatmap data.",
        "Identified and resolved a recurring safety hazard by detecting non-compliance with a storage protocol.",
        "Reduced the need for a dedicated, round-the-clock security monitoring team."
      ]
    }
  },
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
          
          {/* Key Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            {service.keyMetrics.map((metric: any, index: number) => (
                <div key={index} className="bg-card border border-border p-6 rounded-lg">
                    <p className="text-5xl font-bold text-primary">{metric.value}</p>
                    <p className="text-muted-foreground mt-2">{metric.label}</p>
                </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Client Perspective */}
            <div className="bg-neural-dark p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold text-white mb-6">{service.clientPerspective.title}</h2>
              <div className="space-y-4">
                {service.clientPerspective.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-zinc-300" dangerouslySetInnerHTML={{ __html: point }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Teacher Perspective */}
            <div className="bg-neural-dark p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold text-white mb-6">{service.teacherPerspective.title}</h2>
              <div className="space-y-4">
                {service.teacherPerspective.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                     <p className="text-lg text-zinc-300" dangerouslySetInnerHTML={{ __html: point }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
            
          {/* Implementation Roadmap */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Your Path to Implementation</h2>
            <div className="relative">
                {/* Dotted Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-0.5 bg-border border-l-2 border-dashed border-zinc-700"></div>

                <div className="space-y-12">
                {service.implementationRoadmap.map((step: any, index: number) => (
                    <div key={index} className="flex items-center justify-center relative">
                        <div className="w-1/2 flex justify-end pr-8 text-right">
                           {index % 2 === 0 && (
                                <div className="bg-card border border-border p-6 rounded-lg max-w-sm">
                                    <h4 className="font-bold text-primary text-xl mb-2">Week {step.week}</h4>
                                    <h5 className="font-semibold text-white mb-2">{step.title}</h5>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                           )}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 text-primary-foreground font-bold text-lg">
                           {index + 1}
                        </div>
                        <div className="w-1/2 flex justify-start pl-8">
                           {index % 2 !== 0 && (
                               <div className="bg-card border border-border p-6 rounded-lg max-w-sm">
                                    <h4 className="font-bold text-primary text-xl mb-2">Week {step.week}</h4>
                                    <h5 className="font-semibold text-white mb-2">{step.title}</h5>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                           )}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>


          {/* Case Study Section */}
          <div className="bg-card border border-border rounded-xl p-8 mt-16">
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
            <h3 className="text-2xl font-bold text-white mb-6">Ready to implement this solution?</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
                >
                  Book a Strategy Call
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book a Strategy Call</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and our team will get back to you to schedule your call.
                  </DialogDescription>
                </DialogHeader>
                <StrategyCallForm serviceTitle={service.title} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
