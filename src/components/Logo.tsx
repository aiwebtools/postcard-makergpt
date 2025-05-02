
import React from "react";
import { Mail } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-cyber-neon-cyan to-cyber-neon-blue p-[2px]">
        <div className="absolute inset-0 rounded-full animate-glow opacity-50"></div>
        <div className="bg-cyber-darker rounded-full h-full w-full flex items-center justify-center">
          <Mail className="h-5 w-5 text-cyber-neon-cyan" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-cyber text-lg font-bold text-white leading-tight">
          Postcard Maker <span className="text-cyber-neon-cyan">GPT</span>
        </h1>
        <p className="text-cyber-text-muted text-xs">Presented by AiWebTools.Ai</p>
      </div>
    </div>
  );
};

export default Logo;
