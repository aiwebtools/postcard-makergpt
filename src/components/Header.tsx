
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, MessageSquare, HelpCircle, Shield, Wrench } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-cyber-darker/95 backdrop-blur-md shadow-lg shadow-cyber-neon-blue/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium text-xs lg:text-sm px-2 lg:px-3"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
              aria-label="Use AI Web Tools Postcard Maker GPT"
            >
              <MessageSquare className="mr-1 lg:mr-2 h-4 w-4 flex-shrink-0" />
              <span className="hidden lg:inline">USE AI Postcard Maker</span>
              <span className="lg:hidden">AI Postcard</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium text-xs lg:text-sm px-2 lg:px-3"
              onClick={() => scrollTo("faq")}
              aria-label="AI Tools FAQ"
            >
              <HelpCircle className="mr-1 lg:mr-2 h-4 w-4 flex-shrink-0" />
              <span className="hidden lg:inline">AI Tools FAQ</span>
              <span className="lg:hidden">FAQ</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium text-xs lg:text-sm px-2 lg:px-3"
              onClick={() => scrollTo("disclaimer")}
              aria-label="AI Web Tools Disclaimer"
            >
              <Shield className="mr-1 lg:mr-2 h-4 w-4 flex-shrink-0" />
              <span className="hidden lg:inline">AI Tools Info</span>
              <span className="lg:hidden">Info</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 transition-colors font-medium text-xs lg:text-sm px-2 lg:px-3"
              onClick={() => window.open("https://aiwebtools.lovable.app/?via=aiwebtools", "_blank")}
              aria-label="Explore all AI Web Tools at AIWEBTOOLS.AI"
            >
              <Wrench className="mr-1 lg:mr-2 h-4 w-4 flex-shrink-0" />
              <span className="hidden lg:inline">All AI Web Tools</span>
              <span className="lg:hidden">More Tools</span>
            </Button>
            <Button
              size="sm"
              className="ml-1 lg:ml-2 cyber-button bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-cyan border-none text-white hover:text-white text-xs lg:text-sm"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
              aria-label="Try AI Web Tools now"
            >
              Try AI Tools
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - full screen overlay */}
        <div
          className={`md:hidden fixed inset-x-0 top-[56px] bottom-0 bg-cyber-darker/98 backdrop-blur-lg transition-all duration-200 ease-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-2 p-4 pt-6 overflow-y-auto max-h-full">
            <Button
              variant="ghost"
              size="lg"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 h-12 text-base touch-manipulation"
              onClick={() => {
                window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank");
                closeMobileMenu();
              }}
            >
              <MessageSquare className="mr-3 h-5 w-5 flex-shrink-0" />
              USE Postcard Maker GPT
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 h-12 text-base touch-manipulation"
              onClick={() => scrollTo("faq")}
            >
              <HelpCircle className="mr-3 h-5 w-5 flex-shrink-0" />
              FAQ
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 h-12 text-base touch-manipulation"
              onClick={() => scrollTo("disclaimer")}
            >
              <Shield className="mr-3 h-5 w-5 flex-shrink-0" />
              Disclaimer
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="justify-start text-white hover:text-cyber-neon-cyan hover:bg-cyber-neon-blue/10 h-12 text-base touch-manipulation"
              onClick={() => {
                window.open("https://aiwebtools.lovable.app/?via=aiwebtools", "_blank");
                closeMobileMenu();
              }}
            >
              <Wrench className="mr-3 h-5 w-5 flex-shrink-0" />
              More AI Tools
            </Button>
            <Button
              size="lg"
              className="mt-4 cyber-button bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-cyan border-none text-white hover:text-white w-full h-12 text-base touch-manipulation"
              onClick={() => {
                window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank");
                closeMobileMenu();
              }}
            >
              Try Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
