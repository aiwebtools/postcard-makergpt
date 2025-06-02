
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageSquare, HelpCircle, Shield, Wrench } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cyber-darker/90 backdrop-blur-xl shadow-2xl shadow-cyber-neon-blue/10"
          : "bg-cyber-darker/60 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 transition-all duration-300 font-medium text-base"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              USE Postcard Maker GPT
            </Button>
            <Button
              variant="ghost"
              size="sm" 
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 transition-all duration-300 font-medium text-base"
              onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})}
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              FAQ
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 transition-all duration-300 font-medium text-base"
              onClick={() => document.getElementById('disclaimer')?.scrollIntoView({behavior: 'smooth'})}
            >
              <Shield className="mr-2 h-5 w-5" />
              Disclaimer
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 transition-all duration-300 font-medium text-base"
              onClick={() => window.open("https://www.aiwebtools.ai", "_blank")}
            >
              <Wrench className="mr-2 h-5 w-5" />
              More AI Tools
            </Button>
            <Button 
              size="sm"
              className="ml-4 cyber-button bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-cyan border-none text-white hover:text-white px-6 py-3 text-base font-bold"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              Try Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-cyber-neon-blue/20 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in border-t border-cyber-neon-blue/20 mt-6">
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 text-base py-3"
              onClick={() => {
                window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              USE Postcard Maker GPT
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 text-base py-3"
              onClick={() => {
                document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'});
                setIsMobileMenuOpen(false);
              }}
            >
              <HelpCircle className="mr-3 h-5 w-5" />
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 text-base py-3"
              onClick={() => {
                document.getElementById('disclaimer')?.scrollIntoView({behavior: 'smooth'});
                setIsMobileMenuOpen(false);
              }}
            >
              <Shield className="mr-3 h-5 w-5" />
              Disclaimer
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/20 text-base py-3"
              onClick={() => {
                window.open("https://www.aiwebtools.ai", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <Wrench className="mr-3 h-5 w-5" />
              More AI Tools
            </Button>
            <Button 
              className="mt-4 cyber-button bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-cyan border-none text-white hover:text-white w-full py-3 text-base font-bold"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              Try Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
