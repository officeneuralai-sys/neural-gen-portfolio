const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "neural AI transformed our customer service. Our response times are down 80%, and customer satisfaction is at an all-time high. A true game-changer.",
      name: "Alex Johnson",
      title: "COO, Innovate Corp",
    },
    {
      quote: "The predictive analytics suite gave us insights we never thought possible. We've optimized our supply chain and saved millions. Highly recommended.",
      name: "Samantha Lee",
      title: "Head of Operations, Global Logistics",
    },
    {
      quote: "As a startup, we need to be efficient. The marketing automation platform has been like adding three extra people to our team. The ROI was almost immediate.",
      name: "David Chen",
      title: "Founder, TechStart Inc.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients have to say about the transformative impact of our AI solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="neural-card reveal flex flex-col">
              <div className="flex-grow">
                <blockquote className="text-lg text-foreground italic border-l-4 border-primary pl-4 mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
