import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LandingPageFooter } from "@shared/schema";

interface LandingFooterProps {
  footer: LandingPageFooter;
  productName: string;
}

export function LandingFooter({ footer, productName }: LandingFooterProps) {
  return (
    <footer 
      className="py-16 px-6 bg-secondary/30 border-t"
      data-testid="section-footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl text-foreground mb-4">{productName}</h3>
            <p className="text-sm text-muted-foreground">{footer.tagline}</p>
          </div>
          
          {footer.links?.product && footer.links.product.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-foreground uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2">
                {footer.links.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-product-${index}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {footer.links?.company && footer.links.company.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-foreground uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                {footer.links.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-company-${index}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {footer.links?.legal && footer.links.legal.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-foreground uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                {footer.links.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-legal-${index}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {footer.newsletter && (
          <div className="border-t pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="font-medium text-foreground mb-4">{footer.newsletter.headline}</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder={footer.newsletter.placeholder}
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button data-testid="button-newsletter-subscribe">
                  {footer.newsletter.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {productName}. All rights reserved.
          </p>
          
          {footer.social && footer.social.length > 0 && (
            <div className="flex items-center gap-4">
              {footer.social.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-social-${index}`}
                >
                  {social}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
