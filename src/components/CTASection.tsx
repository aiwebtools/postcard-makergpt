
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyber-neon-blue/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyber-neon-magenta/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="cyber-card p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon-cyan via-cyber-neon-blue to-cyber-neon-purple"></div>
          
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
            Ready to Create Professional Postcards with AI?
          </h2>
          
          <p className="text-cyber-text-secondary max-w-2xl mx-auto mb-8">
            Start designing hyperrealistic promotional postcards in minutes. No design skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              Try Postcard Maker GPT
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="cyber-button border-cyber-neon-purple text-cyber-neon-purple hover:text-white"
              onClick={() => window.open("https://www.aiwebtools.ai", "_blank")}
            >
              Explore More AI Tools
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
