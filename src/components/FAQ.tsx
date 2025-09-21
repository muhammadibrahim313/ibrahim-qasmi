import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How much do your mentorship sessions cost?",
      answer: "I offer a FREE 15-minute introductory call to understand your goals. My regular 1-on-1 sessions are competitively priced and you can check current rates on my Topmate profile. I also offer package deals for multiple sessions."
    },
    {
      question: "What can I expect from a mentorship session?",
      answer: "Each session is tailored to your needs. We can cover Kaggle competition strategies, ML project development, career guidance, technical interviews prep, or code reviews. You'll get actionable advice, resources, and a follow-up plan."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most of my mentees see immediate improvements in their approach and get their first Kaggle medal within 2-3 months. For career guidance, many have landed AI roles within 6 months of our sessions."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! After each session, I provide follow-up resources and you can always reach out with quick questions via email. I'm invested in your long-term success."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! I love working with beginners. I'll create a customized learning path for you, starting with fundamentals and gradually building up to advanced topics. No prior experience needed."
    },
    {
      question: "Are sessions conducted online?",
      answer: "Yes, all sessions are conducted via video call (Google Meet/Zoom). This allows us to share screens, review code together, and I can provide real-time guidance regardless of your location."
    },
    {
      question: "Can you help with specific projects?",
      answer: "Absolutely! I can help with ML project architecture, debugging, optimization, and best practices. Whether it's a Kaggle competition, work project, or personal learning project, I'm here to help."
    },
    {
      question: "What's your response time for questions?",
      answer: "I typically respond to emails within 24 hours on weekdays. For urgent matters during our ongoing mentorship, I aim to respond within a few hours."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get answers to common questions about my mentorship and services
            </p>
          </div>

          <div className="slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 border border-primary/20 rounded-lg px-6 neon-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? I'm here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a 
                  href="mailto:oppoibrahim23@gmail.com"
                  aria-label="Email Ibrahim with your questions"
                >
                  Ask Me Anything
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a 
                  href="https://topmate.io/ibrahim_qasmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book a session with Ibrahim"
                >
                  Book Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;