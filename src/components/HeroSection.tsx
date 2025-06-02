
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 divine-section overflow-hidden">
      {/* Divine Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-cyber-neon-cyan/10 to-cyber-neon-blue/10 rounded-full filter blur-[120px] animate-divine-wave"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-cyber-neon-magenta/10 to-cyber-neon-purple/10 rounded-full filter blur-[140px] animate-divine-wave" style={{ animationDelay: "-3s" }}></div>
        <div className="absolute top-1/2 right-1/6 w-80 h-80 bg-gradient-to-r from-cyber-neon-purple/8 to-cyber-neon-cyan/8 rounded-full filter blur-[100px] animate-divine-wave" style={{ animationDelay: "-6s" }}></div>
        <div className="absolute top-1/6 left-1/2 w-64 h-64 bg-gradient-to-r from-cyber-neon-divine/15 to-cyber-neon-holy/10 rounded-full filter blur-[80px] animate-divine-pulse"></div>
      </div>
      
      <div className="divine-container z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
          <div className="lg:w-1/2 space-y-12 text-center lg:text-left">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cyber font-black leading-tight">
                <span className="cyber-gradient-text animate-divine-glow divine-shimmer block mb-4">Postcard Maker</span>
                <span className="text-white cyber-text block text-6xl md:text-7xl lg:text-8xl xl:text-9xl">GPT</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-cyber text-cyber-text-secondary divine-glow-text font-semibold tracking-wide leading-relaxed">
                CREATE READY TO MAIL POSTCARD DESIGNS WITH THE POWER OF AI
              </h2>
            </div>
            
            <p className="text-cyber-text-secondary max-w-2xl text-lg md:text-xl xl:text-2xl leading-relaxed">
              Generate hyperrealistic, print-ready promotional postcards instantly. Our AI creates perfect 16:9 aspect ratio images for both front and back sides, following precise layout rules for professional marketing materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-6">
              <Button 
                size="lg"
                className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white text-xl px-10 py-6 font-bold animate-divine-pulse"
                onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
              >
                Try Now Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-button border-cyber-neon-purple text-cyber-neon-purple hover:text-white text-xl px-10 py-6 font-bold"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn How It Works
              </Button>
            </div>
            
            <div className="pt-8 text-cyber-text-muted text-lg md:text-xl">
              No login required. Powered by OpenAI's GPT technology.
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto perspective-1000">
              {/* Divine Postcard Front */}
              <div className="absolute inset-0 cyber-card transform rotate-3 translate-y-6 transition-all duration-700 hover:translate-y-2 hover:rotate-6 hover:scale-105 animate-divine-float">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-blue/30 to-cyber-neon-purple/30 divine-shimmer"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-neon-blue via-cyber-neon-cyan to-cyber-neon-purple animate-divine-shimmer"></div>
                <div className="p-6 h-full flex flex-col">
                  <div className="text-sm mb-4 font-cyber text-cyber-neon-cyan divine-glow-text font-bold tracking-wider">POSTCARD_FRONT_Sample.png</div>
                  <div className="flex-1 relative rounded-lg overflow-hidden cyber-border">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-cyan/20 via-transparent to-cyber-neon-magenta/20 animate-divine-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <h3 className="font-cyber text-2xl text-white divine-glow-text font-bold">SAMPLE SPA & RESORT</h3>
                        <p className="text-cyber-text-secondary text-lg">Therapeutic Spa Facial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divine Postcard Back */}
              <div className="absolute inset-0 cyber-card transform -rotate-3 -translate-y-6 transition-all duration-700 hover:-translate-y-2 hover:-rotate-6 hover:scale-105 z-10 animate-divine-float" style={{ animationDelay: "-3s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-purple/30 to-cyber-neon-cyan/30 divine-shimmer"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-magenta to-cyber-neon-cyan animate-divine-shimmer"></div>
                <div className="p-6 h-full flex flex-col">
                  <div className="text-sm mb-4 font-cyber text-cyber-neon-magenta divine-glow-text font-bold tracking-wider">POSTCARD_BACK_Sample.png</div>
                  <div className="flex-1 bg-white/95 rounded-lg overflow-hidden grid grid-cols-2 gap-3 p-3 cyber-border">
                    <div className="flex flex-col justify-center">
                      <p className="text-xs text-black font-medium leading-relaxed">Present this postcard at checkout and receive 10% off one full priced spa service. Offer expires July 30, 2025.</p>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <div className="border-2 border-black/40 p-2 text-xs text-center text-black w-18 self-end font-bold">PLACE<br />STAMP<br />HERE</div>
                      <div className="flex-1 flex flex-col justify-end space-y-2">
                        <div className="border-b-2 border-black/30"></div>
                        <div className="border-b-2 border-black/30"></div>
                        <div className="border-b-2 border-black/30"></div>
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
