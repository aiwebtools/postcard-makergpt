
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors"
            >
              USE Postcard Maker GPT
            </a>
            <a
              href="#faq"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors"
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors"
            >
              Disclaimer
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors"
            >
              More AI Tools
            </a>
            <Button 
              className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white"
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
          <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
            <a
              href="https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors py-2"
            >
              USE Postcard Maker GPT
            </a>
            <a
              href="#faq"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-cyber-neon-cyan transition-colors py-2"
            >
              More AI Tools
            </a>
            <Button 
              className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white w-full"
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
