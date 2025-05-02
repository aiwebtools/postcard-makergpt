
import React, { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Postcard Maker GPT?",
    answer: "Postcard Maker GPT is an AI-powered tool that creates professional, hyperrealistic postcard designs for marketing purposes. It generates two separate images - one for the front and one for the back of a postcard, following precise layout standards for print-ready materials."
  },
  {
    question: "Do I need design skills to use Postcard Maker GPT?",
    answer: "No design skills required! The AI guides you through a simple question-and-answer process to gather your requirements, then automatically generates professional designs based on your input."
  },
  {
    question: "What format are the postcard designs delivered in?",
    answer: "The postcards are delivered as high-resolution PNG images with a 16:9 aspect ratio. Both front and back sides are designed for professional printing with no borders and proper formatting."
  },
  {
    question: "Can I include my company logo in the designs?",
    answer: "Yes! You can describe your logo to the AI, which will incorporate it into the design, or you can upload your logo image to be included in the final postcard design."
  },
  {
    question: "How do I print the postcards after generating the designs?",
    answer: "Once you've downloaded the front and back images, you can send them to any professional printing service that offers postcard printing. The images are formatted to meet standard printing requirements."
  },
  {
    question: "Is there a limit to how many postcards I can create?",
    answer: "Postcard Maker GPT is accessible through ChatGPT Plus, so you can create as many postcards as you need within your ChatGPT usage limits. There's no additional per-postcard fee."
  },
  {
    question: "Can I request revisions to my postcard designs?",
    answer: "Yes, if your initial design doesn't meet your needs, you can ask for revisions by providing specific feedback about what you'd like to change. The AI can generate new versions based on your updated requirements."
  },
  {
    question: "Are the postcards only for physical printing, or can I use them digitally?",
    answer: "While optimized for print, the high-quality images can also be used for digital marketing, including email campaigns, social media posts, and website banners."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="cyber-gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-2xl mx-auto">
            Everything you need to know about Postcard Maker GPT and how it can help your business create effective marketing materials.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="cyber-card border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white font-medium hover:text-cyber-neon-cyan">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-cyber-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
