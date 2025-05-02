
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Hyperrealistic Imagery",
      description: "Generate stunning, photorealistic visuals that make your promotional postcards stand out.",
      color: "from-cyber-neon-blue to-cyber-neon-purple"
    },
    {
      title: "Print-Ready Format",
      description: "Perfect 16:9 aspect ratio for both front and back sides, ready for professional printing.",
      color: "from-cyber-neon-cyan to-cyber-neon-blue"
    },
    {
      title: "Marketing Optimization",
      description: "Professionally designed layouts that maximize promotional impact and response rates.",
      color: "from-cyber-neon-magenta to-cyber-neon-purple"
    },
    {
      title: "Postal Standards Compliant",
      description: "Properly formatted address lines and stamp box that meet postal regulations.",
      color: "from-cyber-neon-cyan to-cyber-neon-magenta"
    },
    {
      title: "Custom Branding",
      description: "Incorporate your business name, logo, and brand colors into every design.",
      color: "from-cyber-neon-blue to-cyber-neon-cyan"
    },
    {
      title: "Easy to Use",
      description: "Simple step-by-step process with AI guidance to create professional designs in minutes.",
      color: "from-cyber-neon-purple to-cyber-neon-magenta"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-cyber-neon-purple/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyber-neon-cyan/5 rounded-full filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="cyber-gradient-text">Powerful AI-Driven Features</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-2xl mx-auto">
            Our AI postcard maker combines cutting-edge technology with marketing expertise to create professional designs that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="cyber-card overflow-hidden backdrop-blur-sm group h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} mb-6 group-hover:w-full transition-all duration-300`}></div>
                <h3 className="font-cyber text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-cyber-text-secondary mb-6 flex-grow">{feature.description}</p>
                <div className="flex items-center text-sm text-cyber-neon-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
