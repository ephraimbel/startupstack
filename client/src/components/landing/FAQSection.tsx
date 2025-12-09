import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LandingPageFAQ } from "@shared/schema";

interface FAQSectionProps {
  faq: LandingPageFAQ;
}

export function FAQSection({ faq }: FAQSectionProps) {
  return (
    <section 
      id={faq.section_id} 
      className="py-24 px-6"
      data-testid="section-faq"
    >
      <div className="max-w-3xl mx-auto">
        <h2 
          className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-foreground text-center mb-12"
          data-testid="text-faq-headline"
        >
          {faq.headline}
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faq.questions.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
