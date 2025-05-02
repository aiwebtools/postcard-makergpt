
import React from "react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Elite Fitness Club",
    content: "The postcards we created with Postcard Maker GPT drove a 30% increase in redemption rates compared to our previous designs. The quality is incredible - our clients thought we hired an expensive design agency!",
    gradient: "from-cyber-neon-blue to-cyber-neon-purple"
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    company: "Chen's Family Restaurant",
    content: "As someone with zero design skills, I was amazed at how easy it was to create professional-looking postcards for our grand reopening. The AI understood exactly what we needed and delivered perfect results.",
    gradient: "from-cyber-neon-cyan to-cyber-neon-magenta"
  },
  {
    name: "Amanda Rodriguez",
    role: "Events Coordinator",
    company: "Sunset Beach Resort",
    content: "We use Postcard Maker GPT for all our seasonal promotions now. The hyperrealistic images capture the beauty of our resort perfectly, and the print-ready format saves us hours of back-and-forth with designers.",
    gradient: "from-cyber-neon-purple to-cyber-neon-blue"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-cyber-darker/50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="cyber-gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-2xl mx-auto">
            Businesses of all sizes are using Postcard Maker GPT to create professional marketing materials that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="cyber-card p-6 flex flex-col h-full">
              <div className={`h-1 w-20 bg-gradient-to-r ${testimonial.gradient} mb-6`}></div>
              
              <div className="mb-6 flex-grow">
                <p className="text-cyber-text-secondary italic">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-neon-cyan/30 to-cyber-neon-purple/30 flex items-center justify-center font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-cyber-text-muted text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
