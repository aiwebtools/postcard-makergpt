
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

const ConsentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    const hasConsented = localStorage.getItem("postcard-maker-consent");
    
    if (!hasConsented) {
      // Show the consent popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("postcard-maker-consent", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="cyber-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="cyber-text">Important Disclaimer</DialogTitle>
          <DialogDescription className="text-cyber-text-secondary">
            By using Postcard Maker GPT, you agree to our terms and conditions.
          </DialogDescription>
        </DialogHeader>
        
        <div className="text-cyber-text-secondary text-sm space-y-2">
          <p>
            This tool generates AI-created postcard designs for marketing purposes. 
            You are responsible for ensuring the content you create complies with 
            all applicable laws and regulations.
          </p>
          <p>
            AI WEB TOOLS LLC is not responsible for any misuse of the generated
            content or for any outcomes resulting from its use in marketing campaigns.
          </p>
          <p>
            Please review our full legal disclaimer for comprehensive information about
            using this service.
          </p>
        </div>
        
        <DialogFooter className="sm:justify-center">
          <Button 
            className="cyber-button border-cyber-neon-cyan text-cyber-neon-cyan hover:text-white w-full"
            onClick={handleAccept}
          >
            I Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentPopup;
