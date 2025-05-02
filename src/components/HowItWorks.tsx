
import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Provide Business Details",
    description: "Share your business name, promotional message, visual preferences, and any specific design elements you want to include."
  },
  {
    number: 2,
    title: "AI Generates Front Design",
    description: "Our AI creates a hyperrealistic 16:9 postcard front featuring your preferred visuals, business name, tagline, and logo."
  },
  {
    number: 3,
    title: "AI Creates Back Layout",
    description: "The AI designs a print-ready postcard back with your promotional text, address lines, and a stamp placement box."
  },
  {
    number: 4,
    title: "Download Ready-to-Print Files",
    description: "Get both front and back designs in high-resolution format, ready for professional printing or digital campaigns."
  }
];

const features = [
  "Hyperrealistic imagery in 16:9 aspect ratio",
  "Print-ready designs with proper formatting",
  "Professional marketing layouts",
  "Custom branding and promotional text",
  "Address lines and proper postal formatting",
  "High-quality downloadable files"
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="cyber-gradient-text">How It Works</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-2xl mx-auto">
            Create professional marketing postcards in minutes with our AI-powered design process. No design skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="cyber-card p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-cyber-neon-blue/10 flex items-center justify-center mb-4 relative">
                <span className="text-cyber-neon-cyan font-cyber text-xl">{step.number}</span>
                <div className="absolute inset-0 rounded-full border border-cyber-neon-cyan/30 animate-pulse"></div>
              </div>
              <h3 className="font-cyber text-white text-lg mb-2">{step.title}</h3>
              <p className="text-cyber-text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-cyber text-white mb-6">
              Everything You Need For Professional Postcard Design
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyber-neon-cyan flex-shrink-0" />
                  <span className="text-cyber-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="cyber-card p-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-cyber-text-muted">postcardmaker_gpt_process.log</div>
                </div>
                
                <div className="font-mono text-sm bg-cyber-darker p-4 rounded overflow-hidden">
                  <p className="text-cyber-neon-cyan">{">"} Initializing Postcard Maker GPT...</p>
                  <p className="text-cyber-text-muted">{">"} Loading design modules...</p>
                  <p className="text-cyber-text-muted">{">"} Gathering client requirements...</p>
                  <p className="text-cyber-text-muted">{">"} Business: Sample Resort & Spa</p>
                  <p className="text-cyber-text-muted">{">"} Message: "10% off spa services"</p>
                  <p className="text-cyber-text-muted">{">"} Visual: Therapeutic spa facial</p>
                  <p className="text-cyber-neon-purple">{">"} Generating front design...</p>
                  <p className="text-cyber-neon-purple">{">"} Generating back design...</p>
                  <p className="text-cyber-neon-cyan">{">"} Processing complete!</p>
                  <p className="text-white">{">"} Files ready for download:</p>
                  <p className="text-cyber-neon-cyan">{">"} POSTCARD_FRONT_SampleSpa.png</p>
                  <p className="text-cyber-neon-cyan">{">"} POSTCARD_BACK_SampleSpa.png</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
