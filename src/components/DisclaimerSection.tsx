
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DisclaimerSection: React.FC = () => {
  return (
    <section id="disclaimer" className="py-24 relative overflow-hidden bg-cyber-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="cyber-gradient-text">Legal Disclaimer</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-2xl mx-auto">
            Important information about using Postcard Maker GPT and its generated content.
          </p>
        </div>

        <Card className="cyber-card overflow-hidden max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6 text-cyber-text-secondary">
              <p>
                <strong className="text-white">Usage Disclaimer:</strong> Postcard Maker GPT is an AI tool designed to assist in creating promotional postcard designs. The quality, accuracy, and appropriateness of the generated content depend on the input provided. AI WEB TOOLS LLC does not guarantee that the output will be error-free or suitable for any specific marketing purpose.
              </p>
              
              <p>
                <strong className="text-white">Copyright and Ownership:</strong> Users retain ownership of the specific content they provide (such as business names, logos, and promotional text). However, the AI-generated visual elements are subject to OpenAI's usage policies. Users are responsible for ensuring they have the right to use all elements included in their requests, including trademarks, brand names, and visual concepts.
              </p>
              
              <p>
                <strong className="text-white">No Legal or Professional Advice:</strong> The tool does not provide legal, marketing, or professional advice. Users are responsible for ensuring that their promotional materials comply with all applicable laws, including but not limited to advertising regulations, postal regulations, and consumer protection laws.
              </p>
              
              <p>
                <strong className="text-white">Third-Party Printing:</strong> AI WEB TOOLS LLC is not affiliated with any printing services and makes no representations regarding the print quality, costs, or services of any third-party printer. Users assume full responsibility for the printing process and results.
              </p>
              
              <p>
                <strong className="text-white">Commercial Use:</strong> While postcards created with this tool may be used for commercial purposes, users are responsible for conducting their own due diligence regarding the commercial viability and legal compliance of their marketing campaigns.
              </p>
              
              <p>
                <strong className="text-white">Limitation of Liability:</strong> To the maximum extent permitted by applicable law, AI WEB TOOLS LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (a) your use of or inability to use Postcard Maker GPT; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any errors or omissions in the tool's operation or output.
              </p>
              
              <p>
                <strong className="text-white">Service Changes:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, or discontinue Postcard Maker GPT at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the service.
              </p>
              
              <p>
                By using Postcard Maker GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DisclaimerSection;
