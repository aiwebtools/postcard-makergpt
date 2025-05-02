
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageSquare, HelpCircle, Shield, Tool } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-darker/80 backdrop-blur-md shadow-lg shadow-cyber-neon-blue/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              USE Postcard Maker GPT
            </Button>
            <Button
              variant="ghost"
              size="sm" 
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium"
              onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})}
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQ
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium"
              onClick={() => document.getElementById('disclaimer')?.scrollIntoView({behavior: 'smooth'})}
            >
              <Shield className="mr-2 h-4 w-4" />
              Disclaimer
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium"
              onClick={() => window.open("https://www.aiwebtools.ai", "_blank")}
            >
              <Tool className="mr-2 h-4 w-4" />
              More AI Tools
            </Button>
            <Button 
              size="sm"
              className="ml-2 cyber-button bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-cyan border-none text-white hover:text-white"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              Try Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-3 animate-fade-in">
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10"
              onClick={() => {
                window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              USE Postcard Maker GPT
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10"
              onClick={() => {
                document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'});
                setIsMobileMenuOpen(false);
              }}
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10"
              onClick={() => {
                document.getElementById('disclaimer')?.scrollIntoView({behavior: 'smooth'});
                setIsMobileMenuOpen(false);
              }}
            >
              <Shield className="mr-2 h-4 w-4" />
              Disclaimer
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10"
              onClick={() => {
                window.open("https://www.aiwebtools.ai", "_blank");
                setIsMobileMenuOpen(false);
              }}
            >
              <Tool className="mr-2 h-4 w-4" />
              More AI Tools
            </Button>
            <Button 
              className="mt-2 cyber-button bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-cyan border-none text-white hover:text-white w-full"
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
