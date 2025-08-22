import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Spark Trend offer?",
      answer: "We specialize in website design and development, digital marketing strategies, brand identity creation, SEO optimization, and social media management to help your business grow online."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on scope and complexity. Typically, website projects take 4-8 weeks, while comprehensive marketing campaigns can take 2-3 months to fully implement and optimize."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and tailored to your specific needs and budget. We offer transparent pricing with no hidden fees. Contact us for a detailed quote based on your requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your website and marketing campaigns continue to perform optimally. We're here to help your business grow long-term."
    }
  ];

  const handleScheduleCall = () => {
    // Add your scheduling logic here
    console.log("Schedule call clicked");
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block bg-brand-orange rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
            <span className="text-primary-foreground text-xs sm:text-sm font-semibold tracking-wide uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight px-4">
            FREQUENTLY ASKED{" "}
            <span className="block mt-2">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface rounded-xl sm:rounded-2xl border border-border px-4 sm:px-6 data-[state=open]:border-brand-orange/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-text-primary hover:text-brand-orange transition-colors duration-300 py-4 sm:py-6 text-left text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* CTA Button with same spacing as FAQ items */}
          <div className="mt-3 sm:mt-4">
            <Button
              onClick={handleScheduleCall}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-primary-foreground px-8 sm:px-12 py-6 sm:py-8 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discovery call →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;