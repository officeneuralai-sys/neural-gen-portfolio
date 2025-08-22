import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

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
  'business-analytics': {
    title: "Business Analytics",
    description: "AI-powered insights and predictive analytics",
    keyMetrics: [
        { value: "80%", label: "Faster Data-Driven Decisions" },
        { value: "45%", label: "Improved Forecast Accuracy" },
        { value: "24/7", label: "Real-Time Insights" }
    ],
    implementationRoadmap: [
        { week: "1", title: "Data Integration", description: "Connect all your data sources into a single, unified platform." },
        { week: "2-3", title: "Model Training", description: "Our AI models are trained on your historical data to learn your business patterns." },
        { week: "4", title: "Dashboard & Insights", description: "Launch of your real-time analytics dashboard with predictive insights." }
    ],
    clientPerspective: {
      title: "For the Business Leader: Your AI Co-Pilot",
      points: [
        "**Predictive Forecasting:** Move beyond historical data and start predicting future trends, from sales to customer behavior.",
        "**Actionable Insights:** Get clear, actionable recommendations to improve efficiency, reduce costs, and drive growth.",
        "**Automated Reporting:** Eliminate manual report generation with automated, real-time dashboards.",
        "**Enhanced Decision Making:** Make faster, more informed decisions based on comprehensive data analysis."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: The Data Science Engine",
      points: [
        "**Core Technology:** We use a combination of machine learning models, including time-series analysis, regression, and classification algorithms.",
        "**Data Integration:** Our platform can connect to a wide range of data sources, including databases, APIs, and flat files.",
        "**Real-time Processing:** We use a streaming data architecture to provide real-time analytics and insights.",
        "**Customizable Dashboards:** Our dashboards are built with modern data visualization libraries and can be fully customized to your needs."
      ]
    },
    caseStudy: {
      client: "A Logistics Company",
      challenge: "The company was struggling with inefficient routing and scheduling, leading to high fuel costs and delivery delays.",
      solution: "We implemented an AI-powered analytics system that analyzed traffic patterns, weather conditions, and delivery schedules to optimize routes in real-time.",
      results: [
        "Reduced fuel costs by 20%.",
        "Improved on-time delivery rates by 30%.",
        "Increased the number of deliveries per driver by 15%.",
        "Provided valuable insights into their supply chain, leading to further optimizations."
      ]
    }
  },
  'restaurant-automation': {
    title: "Restaurant Automation",
    description: "A complete AI-powered solution to streamline every aspect of your restaurant's operations, from ordering to inventory.",
    keyMetrics: [
        { value: "95%", label: "Increase in Order Accuracy" },
        { value: "50%", label: "Reduction in Wait Times" },
        { value: "30%", label: "Reduction in Food Waste" }
    ],
    implementationRoadmap: [
        { week: "1", title: "On-site Assessment", description: "We analyze your current kitchen workflow, ordering process, and inventory management." },
        { week: "2-3", title: "System Configuration", description: "We configure our AI platform to your specific menu, layout, and operational needs." },
        { week: "4", title: "Staff Training & Go-Live", description: "We train your staff on the new system and oversee a smooth transition to your new AI-powered operation." }
    ],
    clientPerspective: {
      title: "For the Restaurant Owner: The Perfectly Run Restaurant",
      points: [
        "**Streamlined Ordering:** Implement AI-powered ordering through QR codes, voice, or digital menus to eliminate errors and speed up service.",
        "**Optimized Kitchen Flow:** Our system intelligently routes orders to the correct stations, ensuring food is prepared efficiently and delivered hot.",
        "**Smart Inventory Management:** Reduce food waste and never run out of a key ingredient again with predictive inventory tracking and automated ordering.",
        "**Enhanced Customer Experience:** Reduce wait times, improve order accuracy, and gather valuable feedback to keep your customers coming back."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: The Smart Restaurant Stack",
      points: [
        "**Core Technology:** A suite of integrated AI models for order processing (NLP), kitchen workflow optimization (reinforcement learning), and inventory forecasting (time-series analysis).",
        "**POS Integration:** Seamlessly integrates with your existing Point of Sale (POS) system for a unified data stream.",
        "**Real-time Dashboard:** A centralized dashboard provides a real-time overview of all restaurant operations, from order status to inventory levels.",
        "**Customizable Modules:** Our platform is modular, allowing you to start with one aspect (like ordering) and add more capabilities as your needs grow."
      ]
    },
    caseStudy: {
      client: "A Fast-Casual Restaurant Chain",
      challenge: "The chain was struggling with inconsistent service, high food waste, and long wait times during peak hours.",
      solution: "We deployed our complete Restaurant Automation suite, including AI-powered ordering, a smart kitchen display system, and predictive inventory management.",
      results: [
        "Increased order accuracy to 99.5%.",
        "Reduced average customer wait time by 50%.",
        "Lowered food waste by 30%, significantly improving profit margins.",
        "Improved staff efficiency and reduced stress in the kitchen."
      ]
    }
  },
  'marketing-automation': {
    title: "Marketing Automation",
    description: "AI-driven marketing campaigns and lead generation that deliver personalized experiences and maximize your ROI.",
    keyMetrics: [
        { value: "65%", label: "Increase in Conversion Rates" },
        { value: "40%", label: "Reduction in Marketing Costs" },
        { value: "24/7", label: "Lead Nurturing" }
    ],
    implementationRoadmap: [
        { week: "1", title: "Strategy & Integration", description: "We define your target audience and integrate our platform with your existing marketing tools and CRM." },
        { week: "2-3", title: "Campaign Setup & AI Training", description: "We set up your initial campaigns and train our AI on your brand voice and customer data." },
        { week: "4", title: "Launch & Optimization", description: "We launch your first AI-powered campaigns and begin the continuous process of real-time optimization." }
    ],
    clientPerspective: {
      title: "For the Marketer: Your Unfair Advantage",
      points: [
        "**Hyper-Personalization at Scale:** Deliver unique, personalized messages and offers to every single lead, automatically.",
        "**Intelligent Lead Scoring:** Our AI analyzes lead behavior to identify your hottest prospects, so your sales team can focus on closing deals.",
        "**Automated Content Creation:** Generate high-quality, on-brand marketing copy, social media posts, and ad variations in seconds.",
        "**Predictive Campaign Optimization:** Our platform automatically adjusts your campaigns in real-time to maximize performance and ROI."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: The Modern Marketing Stack",
      points: [
        "**Core Technology:** A combination of Generative AI for content creation, predictive analytics for lead scoring, and reinforcement learning for campaign optimization.",
        "**CRM & Ad Platform Integration:** Seamlessly integrates with major CRMs (Salesforce, HubSpot) and ad platforms (Google, Facebook) via their APIs.",
        "**Real-time Data Processing:** Our system processes user interactions in real-time to update lead scores and adjust campaign parameters on the fly.",
        "**A/B/n Testing:** Go beyond simple A/B testing. Our AI can test thousands of variations of a campaign simultaneously to find the optimal combination."
      ]
    },
    caseStudy: {
      client: "A B2B Software Company",
      challenge: "The company was generating a high volume of leads, but their sales team was struggling to identify the most promising ones, leading to wasted effort and missed opportunities.",
      solution: "We implemented our Marketing Automation platform with a focus on AI-powered lead scoring and personalized email nurturing campaigns.",
      results: [
        "Increased sales-qualified leads by 50%.",
        "Reduced the sales cycle by 30%.",
        "Increased email open rates by 40% due to hyper-personalization.",
        "Allowed the sales team to focus on a smaller, more qualified pool of leads, leading to a higher closing rate."
      ]
    }
  },
  'real-estate-ai-suite': {
    title: "Real Estate AI Suite",
    description: "A comprehensive AI-powered platform designed to help real estate professionals close more deals, faster.",
    keyMetrics: [
        { value: "85%", label: "Faster Lead Qualification" },
        { value: "30%", label: "Increase in Closing Rates" },
        { value: "24/7", label: "Client Communication" }
    ],
    implementationRoadmap: [
        { week: "1", title: "Integration & Data Sync", description: "We connect our platform to your MLS, CRM, and website to create a unified data source." },
        { week: "2-3", title: "AI Agent Training", description: "We train your custom AI agent on your listings, local market data, and your unique communication style." },
        { week: "4", title: "Launch & Go-Live", description: "We launch your AI agent on your website and begin automating your lead follow-up and qualification process." }
    ],
    clientPerspective: {
      title: "For the Real Estate Professional: Your AI Assistant",
      points: [
        "**Automated Lead Qualification:** Our AI agent engages with every new lead 24/7, asks qualifying questions, and schedules appointments, so you only spend time on serious buyers and sellers.",
        "**Smart Property Matching:** Go beyond basic filters. Our AI understands lifestyle needs and preferences to suggest the perfect properties to your clients.",
        "**AI-Powered Marketing:** Automatically generate compelling property descriptions, social media posts, and ad copy for your listings.",
        "**Predictive Market Analysis:** Get AI-powered insights into market trends and pricing to better advise your clients and close deals faster."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: The Smart Real Estate Platform",
      points: [
        "**Core Technology:** A suite of AI models including a conversational AI for lead engagement, a recommendation engine for property matching, and a predictive analytics model for market analysis.",
        "**MLS & CRM Integration:** We have pre-built integrations with major MLS and CRM platforms to ensure a seamless flow of data.",
        "**Natural Language Processing (NLP):** Our AI can understand and respond to complex, conversational inquiries from potential clients.",
        "**Data-Driven Insights:** We leverage a wide range of data sources, including property data, market trends, and demographic information, to power our AI models."
      ]
    },
    caseStudy: {
      client: "A High-Producing Real Estate Team",
      challenge: "The team was overwhelmed with inbound leads and was struggling to respond to them all in a timely manner, leading to missed opportunities.",
      solution: "We implemented our Real Estate AI Suite, with a focus on the AI-powered lead qualification and appointment setting features.",
      results: [
        "Automated the initial follow-up for 100% of new leads.",
        "Increased the number of qualified appointments set by 40%.",
        "Reduced the time agents spent on lead qualification by 85%.",
        "Freed up the team to focus on high-value activities like negotiations and client relationships, leading to a 30% increase in closed deals."
      ]
    }
  },
  'full-stack-development': {
    title: "AI-Native Full Stack Development",
    description: "We don't just build websites and applications; we build intelligent, AI-powered digital experiences that are designed to evolve and adapt.",
    keyMetrics: [
        { value: "70%", label: "Faster Development Cycles" },
        { value: "80%", label: "Reduction in Bugs" },
        { value: "100%", label: "AI-Ready Architecture" }
    ],
    implementationRoadmap: [
        { week: "1-2", title: "Discovery & Architecture", description: "We work with you to define your product vision and design an AI-native architecture that is scalable and future-proof." },
        { week: "3-6", title: "Agile Development Sprints", description: "Our team builds your application in two-week sprints, with a focus on rapid iteration and continuous feedback." },
        { week: "7-8", title: "AI Integration & Deployment", description: "We integrate the core AI features and deploy your application to a scalable, cloud-native environment." }
    ],
    clientPerspective: {
      title: "For the Visionary: Your Product, Supercharged",
      points: [
        "**AI at the Core:** We build your application with AI in mind from day one, enabling features like personalization, recommendation engines, and intelligent automation.",
        "**Faster Time to Market:** Our AI-assisted development process and modern tech stack allow us to build and launch your product up to 70% faster than traditional agencies.",
        "**Scalable & Future-Proof:** We build on a modern, serverless architecture that can scale to millions of users without compromising performance.",
        "**A True Technology Partner:** We don't just build and leave. We provide ongoing support and strategic guidance to ensure your product continues to evolve and succeed."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: A Modern, AI-First Stack",
      points: [
        "**Core Technology:** We leverage the latest frameworks and technologies, including React/Next.js for the frontend, Node.js/Python for the backend, and a serverless architecture.",
        "**AI-Assisted Development:** Our developers use AI-powered tools for code generation, bug detection, and automated testing, dramatically accelerating the development process.",
        "**Scalable Backend:** We build on serverless platforms like Supabase and Vercel, ensuring your application is scalable, secure, and cost-effective.",
        "**Continuous Integration & Deployment (CI/CD):** We implement a robust CI/CD pipeline to automate the testing and deployment process, ensuring rapid and reliable releases."
      ]
    },
    caseStudy: {
      client: "A Tech Startup",
      challenge: "The startup had a brilliant idea for an AI-powered platform but lacked the technical expertise to build it.",
      solution: "We served as their end-to-end development partner, taking their concept from idea to a fully functional, scalable product in just eight weeks.",
      results: [
        "Launched their MVP 70% faster than their initial projections.",
        "Built a secure and scalable platform that could handle their rapid user growth.",
        "Provided the technical credibility they needed to secure their first round of funding.",
        "Continue to serve as their long-term technology partner, providing ongoing development and support."
      ]
    }
  },
  'ai-social-media-content': {
    title: "AI Social Media Content",
    description: "Automated content creation and social media management",
    keyMetrics: [
        { value: "120%", label: "Increase in Engagement" },
        { value: "20+", label: "Hours Saved Weekly" },
        { value: "100%", label: "Brand Voice Consistency" }
    ],
    implementationRoadmap: [
        { week: "1", title: "Brand Voice Analysis", description: "Our AI analyzes your existing content to learn your unique brand voice, tone, and style." },
        { week: "2", title: "Content Strategy & Setup", description: "We work with you to develop a content strategy and set up your automated posting schedule." },
        { week: "3", title: "Content Generation & Launch", description: "Our AI begins generating and scheduling high-quality, on-brand content for your social media channels." }
    ],
    clientPerspective: {
      title: "For the Brand Builder: Your Never-Ending Content Machine",
      points: [
        "**Consistent, High-Quality Content:** Never worry about what to post again. Our AI generates a steady stream of engaging, on-brand content for your social media channels.",
        "**Save Time & Resources:** Free up your team from the time-consuming task of content creation and focus on higher-level strategy.",
        "**Boost Engagement:** Our AI analyzes what content resonates with your audience and automatically creates more of it, leading to a significant increase in likes, comments, and shares.",
        "**Maintain a Cohesive Brand Voice:** Ensure every post is perfectly aligned with your brand's tone and style, no matter who is managing your social media."
      ]
    },
    teacherPerspective: {
      title: "For the Technologist: The Content Generation Engine",
      points: [
        "**Core Technology:** We use a fine-tuned Generative AI model that has been trained on a massive dataset of high-performing social media content.",
        "**Brand Voice Cloning:** Our platform can learn and replicate your unique brand voice from just a few examples of your existing content.",
        "**Platform-Specific Optimization:** The AI automatically adapts the content for each social media platform, ensuring it is optimized for the unique format and audience of each.",
        "**Engagement Analytics:** We track the performance of every post and use that data to continuously improve the AI's content generation capabilities."
      ]
    },
    caseStudy: {
      client: "A Fast-Growing D2C Brand",
      challenge: "The brand was struggling to keep up with the demands of social media and their content was inconsistent and not driving engagement.",
      solution: "We implemented our AI Social Media Content platform, training the AI on their brand guidelines and top-performing posts.",
      results: [
        "Increased their social media engagement by 120% in the first three months.",
        "Saved their marketing team over 20 hours per week on content creation.",
        "Established a consistent and recognizable brand voice across all their social media channels.",
        "Grew their follower count by 40% in six months due to the consistent, high-quality content."
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
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
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
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
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
            <div className="flex justify-center items-center gap-4">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
                  onClick={() => window.open('mailto:contact@neural-ai.com', '_blank')}
                >
                  Book a Strategy Call
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                >
                  See a Live Demo
                </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
