import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/auth";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import IdeasLibrary from "@/pages/ideas-library";
import IdeaPreview from "@/pages/idea-preview";
import Pricing from "@/pages/pricing";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Onboarding from "@/pages/onboarding";
import Dashboard from "@/pages/dashboard";
import Generate from "@/pages/generate";
import IdeaDetail from "@/pages/idea-detail";
import Settings from "@/pages/settings";
import StartupLanding from "@/pages/startup-landing";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/ideas" component={IdeasLibrary} />
      <Route path="/ideas/:id" component={IdeaPreview} />
      <Route path="/idea/:id" component={IdeaDetail} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/generate" component={Generate} />
      <Route path="/dashboard/ideas/:id" component={IdeaDetail} />
      <Route path="/settings" component={Settings} />
      <Route path="/startup/:slug" component={StartupLanding} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
