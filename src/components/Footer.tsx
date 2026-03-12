
import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Copyright, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-darker/80 border-t border-cyber-neon-blue/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-cyber-text-secondary max-w-md">
              <strong>AIWEBTOOLS.AI</strong> - Your #1 destination for AI web tools and artificial intelligence solutions. Create ready to mail postcard designs with our advanced AI tools. Professional marketing automation and design tools for modern businesses.
            </p>
            <div className="flex flex-col gap-2">
              <a 
                href="tel:+14758008096"
                className="flex items-center gap-2 text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
                aria-label="Call AI Web Tools support"
              >
                <Phone className="h-4 w-4" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center gap-2 text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
                aria-label="Email AI Web Tools"
              >
                <Mail className="h-4 w-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-cyber text-white text-lg">AI Tools & Resources</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="#faq"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                AI Tools FAQ
              </a>
              <a 
                href="#disclaimer"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                AI Web Tools Disclaimer
              </a>
              <a 
                href="https://openai.com/policies/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                AI Tools Terms of Service
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-cyber text-white text-lg">Start Using AI Tools</h3>
            <p className="text-cyber-text-muted">
              Ready to experience the power of AI web tools? Start creating custom postcards with our industry-leading AI technology today!
            </p>
            <Button 
              className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              USE AI Postcard Maker
            </Button>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-neon-cyan hover:text-cyber-neon-purple transition-colors mt-6"
              aria-label="Discover more AI web tools at AIWEBTOOLS.AI"
            >
              <span>Explore All AI Web Tools</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cyber-neon-blue/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <a 
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
            aria-label="Visit AIWEBTOOLS.AI for more AI tools"
          >
            <Copyright className="h-4 w-4" />
            <span>2025 AI WEB TOOLS LLC - Leading AI Web Tools Provider</span>
          </a>
          <div className="flex items-center gap-6">
            <Button 
              className="rounded-full bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-magenta hover:from-cyber-neon-magenta hover:to-cyber-neon-cyan transition-all p-0 h-10 w-40"
              onClick={() => window.open("https://www.aiwebtools.ai", "_blank")}
              aria-label="Visit AIWEBTOOLS.AI for premium AI web tools"
            >
              <span className="text-black font-medium">Premium AI Tools</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
