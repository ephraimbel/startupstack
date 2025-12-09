import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { LandingPage, LandingPageContent } from "@shared/schema";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  SocialProofSection,
  PricingSection,
  FAQSection,
  FinalCTASection,
  LandingFooter,
} from "@/components/landing";

export default function StartupLanding() {
  const [, params] = useRoute("/startup/:slug");
  const slug = params?.slug;

  const { data, isLoading, error } = useQuery<{
    landingPage: LandingPage;
    productName: string;
  }>({
    queryKey: ["/api/landing-pages", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto py-24 px-6">
          <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-8 w-1/2 mx-auto mb-12" />
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">This startup landing page doesn't exist.</p>
          <Link href="/ideas">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse Ideas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const { landingPage, productName } = data;
  
  let content: LandingPageContent;
  try {
    content = JSON.parse(landingPage.content) as LandingPageContent;
  } catch {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Error Loading Page</h1>
          <p className="text-muted-foreground mb-8">Unable to parse landing page content.</p>
          <Link href="/ideas">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse Ideas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-testid="page-startup-landing">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/ideas">
            <Button variant="ghost" size="sm" data-testid="link-back-ideas">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ideas
            </Button>
          </Link>
          <span className="font-serif text-lg text-foreground">{productName}</span>
          <Button size="sm" data-testid="button-nav-cta">
            {content.hero.cta_primary.text}
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection hero={content.hero} productName={productName} />
        <ProblemSection problem={content.problem_section} />
        <SolutionSection solution={content.solution_section} />
        <HowItWorksSection howItWorks={content.how_it_works} />
        <SocialProofSection socialProof={content.social_proof} />
        <PricingSection pricing={content.pricing} />
        <FAQSection faq={content.faq} />
        <FinalCTASection finalCta={content.final_cta} />
      </main>

      <LandingFooter footer={content.footer} productName={productName} />
    </div>
  );
}
