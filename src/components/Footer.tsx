
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
            <p className="text-cyber-text-muted max-w-md">
              Create ready to mail postcard designs with the power of AI. Generate hyperrealistic, print-ready promotional postcards with precise formatting for your marketing needs.
            </p>
            <div className="flex flex-col gap-2">
              <a 
                href="tel:+14758008096"
                className="flex items-center gap-2 text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center gap-2 text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-cyber text-white text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="#faq"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                FAQ
              </a>
              <a 
                href="#disclaimer"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                Disclaimer
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
                href="https://aiwebtools.ai/terms-of-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-text-muted hover:text-cyber-neon-cyan transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-cyber text-white text-lg">Get Started</h3>
            <p className="text-cyber-text-muted">
              Ready to create custom postcards? Start using our AI tool today!
            </p>
            <Button 
              className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white"
              onClick={() => window.open("https://chatgpt.com/g/g-6814dcbdbc548191ad602de22e072917-postcard-maker-gpt", "_blank")}
            >
              USE Postcard Maker GPT
            </Button>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyber-neon-cyan hover:text-cyber-neon-purple transition-colors mt-6"
            >
              <span>More AI Tools</span>
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
          >
            <Copyright className="h-4 w-4" />
            <span>2025 AI WEB TOOLS LLC All rights reserved.</span>
          </a>
          <div className="flex items-center gap-6">
            <Button 
              className="rounded-full bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-magenta hover:from-cyber-neon-magenta hover:to-cyber-neon-cyan transition-all p-0 h-10 w-32"
              onClick={() => window.open("https://www.aiwebtools.ai", "_blank")}
            >
              <span className="text-black font-medium">More AI Tools</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
