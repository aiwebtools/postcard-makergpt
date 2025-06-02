
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyber-neon-cyan/5 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-cyber-neon-magenta/5 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "-2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-cyber-neon-blue/5 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: "-4s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold leading-tight">
                <span className="text-cyber-neon-cyan animate-glow">Postcard Maker</span>{" "}
                <span className="text-white">GPT</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-cyber text-cyber-text-secondary">
                CREATE READY TO MAIL POSTCARD DESIGNS WITH THE POWER OF AI
              </h2>
            </div>
            
            <p className="text-cyber-text-secondary max-w-lg">
              Generate hyperrealistic, print-ready promotional postcards instantly. Our AI creates perfect 16:9 aspect ratio images for both front and back sides, following precise layout rules for professional marketing materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white"
                onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
              >
                Try Now Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-button border-cyber-neon-purple text-cyber-neon-purple hover:text-white"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn How It Works
              </Button>
            </div>
            
            <div className="pt-4 text-cyber-text-muted text-sm">
              No login required. Powered by OpenAI's GPT technology.
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[16/9] w-full max-w-xl mx-auto perspective-1000">
              {/* Postcard Front */}
              <div className="absolute inset-0 cyber-card transform rotate-3 translate-y-4 transition-transform hover:translate-y-1 hover:rotate-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-blue/20 to-cyber-neon-purple/20"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple"></div>
                <div className="p-4 h-full flex flex-col">
                  <div className="text-sm mb-2 font-cyber text-cyber-neon-cyan">POSTCARD_FRONT_Sample.png</div>
                  <div className="flex-1 relative rounded overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-cyan/10 via-transparent to-cyber-neon-magenta/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <h3 className="font-cyber text-xl text-white">SAMPLE SPA & RESORT</h3>
                        <p className="text-cyber-text-secondary">Therapeutic Spa Facial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Postcard Back */}
              <div className="absolute inset-0 cyber-card transform -rotate-3 -translate-y-4 transition-transform hover:-translate-y-1 hover:-rotate-6 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-purple/20 to-cyber-neon-cyan/20"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-cyan"></div>
                <div className="p-4 h-full flex flex-col">
                  <div className="text-sm mb-2 font-cyber text-cyber-neon-magenta">POSTCARD_BACK_Sample.png</div>
                  <div className="flex-1 bg-white/90 rounded overflow-hidden grid grid-cols-2 gap-2 p-2">
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-black">Present this postcard at checkout and receive 10% off one full priced spa service. Offer expires July 30, 2025.</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="border border-black/30 p-1 text-xs text-center text-black w-16 self-end">PLACE<br />STAMP<br />HERE</div>
                      <div className="flex-1 flex flex-col justify-end">
                        <div className="border-b border-black/20 mb-1"></div>
                        <div className="border-b border-black/20 mb-1"></div>
                        <div className="border-b border-black/20 mb-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
