import { useState, useEffect } from 'react';
import ServicesSection from './ServicesSection';
import TechnologySection from './TechnologySection';
import BenefitsSection from './BenefitsSection';
import WhyChooseUsSection from './WhyChooseUsSection';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Our Services' },
    { id: 'technology', label: 'Our Technology' },
    { id: 'benefits', label: 'Key Benefits' },
    { id: 'why-choose', label: 'Why Choose Us' }
  ];

  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check

    return () => window.removeEventListener('scroll', revealElements);
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'services':
        return <ServicesSection />;
      case 'technology':
        return <TechnologySection />;
      case 'benefits':
        return <BenefitsSection />;
      case 'why-choose':
        return <WhyChooseUsSection />;
      default:
        return <ServicesSection />;
    }
  };

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Intelligent Solutions for Modern Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our cutting-edge AI technologies can transform your operations, 
            reduce costs, and unlock unprecedented growth opportunities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-2 font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'tab-active' 
                  : 'tab-inactive'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default MainContent;