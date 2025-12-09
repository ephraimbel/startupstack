import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PaywallModal } from '@/components/paywall-modal';
import { useAuth } from '@/lib/auth';
import { Idea, ExecutionPlan } from '@shared/schema';
import { useState } from 'react';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Bookmark, 
  BookmarkCheck, 
  ChevronRight, 
  Star, 
  Megaphone, 
  Package, 
  Briefcase, 
  Search,
  AlertCircle,
  Lightbulb,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  Loader2,
  Sparkles,
  BarChart3,
  Target
} from 'lucide-react';

const BUILD_RESOURCES = [
  {
    id: 'popular',
    name: 'Popular',
    icon: Star,
    items: [
      { id: 'ad_creatives', name: 'Ad Creatives' },
      { id: 'brand_package', name: 'Brand Package' },
      { id: 'landing_page', name: 'Landing Page' },
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    items: [
      { id: 'content_calendar', name: 'Content Calendar' },
      { id: 'email_funnel', name: 'Email Funnel System' },
      { id: 'email_sequence', name: 'Email Sequence' },
      { id: 'lead_magnet', name: 'Lead Magnet' },
      { id: 'sales_funnel', name: 'Sales Funnel' },
      { id: 'seo_content', name: 'SEO Content' },
      { id: 'tweet_landing', name: 'Tweet-Sized Landing Page' },
      { id: 'user_personas', name: 'User Personas' },
    ]
  },
  {
    id: 'product',
    name: 'Product',
    icon: Package,
    items: [
      { id: 'feature_specs', name: 'Feature Specs' },
      { id: 'mvp_roadmap', name: 'MVP Roadmap' },
      { id: 'product_requirements', name: 'Product Requirements Doc' },
    ]
  },
  {
    id: 'business',
    name: 'Business',
    icon: Briefcase,
    items: [
      { id: 'gtm_calendar', name: 'GTM Launch Calendar' },
      { id: 'gtm_strategy', name: 'GTM Strategy' },
      { id: 'kpi_dashboard', name: 'KPI Dashboard' },
      { id: 'pricing_strategy', name: 'Pricing Strategy' },
    ]
  },
  {
    id: 'research',
    name: 'Research',
    icon: Search,
    items: [
      { id: 'competitive_analysis', name: 'Competitive Analysis' },
      { id: 'customer_interview', name: 'Customer Interview Guide' },
    ]
  },
];

export default function IdeaDetail() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const [showPaywall, setShowPaywall] = useState(false);
  const [paywallReason, setPaywallReason] = useState<'limit_reached' | 'premium_required'>('limit_reached');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['popular']);
  const [selectedDeliverable, setSelectedDeliverable] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const tier = (user?.profile?.subscriptionTier as 'free' | 'premium') || 'free';
  const isPremium = tier === 'premium';

  const { data: ideaData, isLoading: loadingIdea } = useQuery<{ idea: Idea; executionPlan: ExecutionPlan | null }>({
    queryKey: ['/api/ideas', id],
    queryFn: async () => {
      const response = await fetch(`/api/ideas/${id}`, { credentials: 'include' });
      if (!response.ok) throw new Error('Failed to fetch idea');
      return response.json();
    },
  });

  const idea = ideaData?.idea;
  const executionPlan = ideaData?.executionPlan;

  const saveMutation = useMutation({
    mutationFn: async () => {
      const currentlySaved = idea?.isSaved;
      await apiRequest('POST', `/api/ideas/${id}/save`, {});
      return { wasSaved: currentlySaved };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/ideas', id] });
      toast({ title: data.wasSaved ? 'Removed from saved' : 'Saved!' });
    },
  });

  const generateMutation = useMutation({
    mutationFn: async () => {
      await apiRequest('POST', `/api/ideas/${id}/plan`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/ideas', id] });
      toast({ title: 'Content generated!' });
    },
    onError: (error: Error) => {
      if (error.message.includes('limit') || error.message.includes('premium')) {
        setPaywallReason(error.message.includes('premium') ? 'premium_required' : 'limit_reached');
        setShowPaywall(true);
      } else {
        toast({
          title: 'Failed to generate',
          description: 'Please try again',
          variant: 'destructive',
        });
      }
    },
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectDeliverable = (deliverableId: string, deliverableName: string) => {
    setSelectedDeliverable(deliverableId);
    setActiveTab(deliverableId);
  };

  if (loadingIdea) {
    return (
      <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
        <nav className="sticky top-0 z-50 bg-[hsl(var(--startup-bg-primary))]/85 backdrop-blur-md border-b border-border h-16 px-8 flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-9 w-48" />
        </nav>
        <div className="flex">
          <div className="w-[280px] border-r border-border p-5">
            <Skeleton className="h-4 w-24 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="flex-1 p-10">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-96 mb-8" />
            <div className="space-y-6">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-medium text-foreground mb-2">Idea not found</h2>
          <Link href="/ideas">
            <Button variant="outline" data-testid="button-back-to-ideas">Back to Ideas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getDeliverableName = () => {
    for (const category of BUILD_RESOURCES) {
      const item = category.items.find(i => i.id === selectedDeliverable);
      if (item) return item.name;
    }
    return '';
  };

  const getDeliverableContent = () => {
    if (!executionPlan || !selectedDeliverable) return null;
    
    const contentMap: Record<string, { title: string; content: string | string[] | null }> = {
      'user_personas': { title: 'User Persona', content: executionPlan.persona },
      'mvp_roadmap': { title: 'User Stories', content: executionPlan.userStories },
      'feature_specs': { title: 'Recommended Stack', content: executionPlan.recommendedStack },
      'gtm_calendar': { title: 'Launch Checklist', content: executionPlan.launchChecklist },
      'ad_creatives': { title: 'Elevator Pitch', content: executionPlan.elevatorPitch },
    };
    
    return contentMap[selectedDeliverable] || null;
  };

  const hasDeliverableContent = (deliverableId: string) => {
    if (!executionPlan) return false;
    const contentMap: Record<string, string | string[] | null | undefined> = {
      'user_personas': executionPlan.persona,
      'mvp_roadmap': executionPlan.userStories,
      'feature_specs': executionPlan.recommendedStack,
      'gtm_calendar': executionPlan.launchChecklist,
      'ad_creatives': executionPlan.elevatorPitch,
    };
    return !!contentMap[deliverableId];
  };

  const getDemandColor = (band: string | null) => {
    switch (band) {
      case 'high': return 'text-emerald-600';
      case 'medium': return 'text-amber-600';
      case 'low': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const getTrendColor = (label: string | null) => {
    switch (label) {
      case 'rising': return 'text-indigo-600';
      case 'flat': return 'text-gray-500';
      case 'declining': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getCompetitionColor = (level: string | null) => {
    switch (level?.toLowerCase()) {
      case 'low': return 'text-emerald-600';
      case 'medium': return 'text-amber-600';
      case 'high': return 'text-red-500';
      default: return 'text-amber-600';
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[hsl(var(--startup-bg-primary))]/85 backdrop-blur-md border-b border-border h-16 px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/ideas">
            <Button variant="ghost" size="sm" className="text-muted-foreground gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Ideas
            </Button>
          </Link>
          <div className="w-px h-5 bg-border" />
          <span className="text-xs text-muted-foreground font-mono tracking-wide" data-testid="text-idea-id">
            idea_{id?.slice(0, 6)}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending}
            className="gap-2"
            data-testid="button-save"
          >
            {idea.isSaved ? (
              <BookmarkCheck className="w-4 h-4 text-[hsl(224,54%,51%)]" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
            {idea.isSaved ? 'Saved' : 'Save Idea'}
          </Button>
          <Button
            size="sm"
            onClick={() => generateMutation.mutate()}
            disabled={generateMutation.isPending}
            className="gap-2 bg-[hsl(var(--startup-ink))] text-white"
            data-testid="button-generate"
          >
            {generateMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            Generate All
          </Button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar - File Tree Style */}
        <aside className="w-[280px] min-h-[calc(100vh-64px)] bg-file-tree-bg dark:bg-file-tree-bg border-r border-border/50 sticky top-16 h-[calc(100vh-64px)] flex-shrink-0">
          <ScrollArea className="h-full">
            <div className="p-3 font-mono">
              {/* Header */}
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">build-resources</span>
              </div>

              {/* Tree */}
              <div className="space-y-0.5">
                {BUILD_RESOURCES.map((category) => (
                  <div key={category.id} className="select-none">
                    {/* Folder Row */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="group w-full relative flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer transition-all duration-200 ease-out hover:bg-file-tree-hover"
                      data-testid={`button-category-${category.id}`}
                    >
                      {/* Chevron */}
                      <div className={`flex items-center justify-center w-4 h-4 transition-transform duration-200 ease-out ${expandedCategories.includes(category.id) ? 'rotate-90' : ''}`}>
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                          <path d="M1 1L5 4L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Folder Icon */}
                      <div className="flex items-center justify-center w-5 h-5 text-folder-icon group-hover:scale-110 transition-all duration-200">
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor">
                          <path d="M1.5 1C0.671573 1 0 1.67157 0 2.5V11.5C0 12.3284 0.671573 13 1.5 13H14.5C15.3284 13 16 12.3284 16 11.5V4.5C16 3.67157 15.3284 3 14.5 3H8L6.5 1H1.5Z" />
                        </svg>
                      </div>

                      {/* Folder Name */}
                      <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                        {category.name}
                      </span>

                      {/* Count Badge */}
                      <span className="ml-auto text-[10px] text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                        {category.items.length}
                      </span>
                    </button>

                    {/* Children */}
                    {expandedCategories.includes(category.id) && (
                      <div className="overflow-hidden transition-all duration-300 ease-out">
                        {category.items.map((item, index) => (
                          <button
                            key={item.id}
                            onClick={() => selectDeliverable(item.id, item.name)}
                            className={`group w-full relative flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer transition-all duration-200 ease-out ${
                              selectedDeliverable === item.id ? 'bg-file-tree-hover' : 'hover:bg-file-tree-hover'
                            }`}
                            style={{ paddingLeft: '32px' }}
                            data-testid={`button-deliverable-${item.id}`}
                          >
                            {/* Tree Line */}
                            <div className="absolute left-[18px] top-0 bottom-0 flex">
                              <div className={`w-px transition-colors duration-200 ${selectedDeliverable === item.id ? 'bg-primary/40' : 'bg-border/50'}`} />
                            </div>

                            {/* File Icon */}
                            <div className={`flex items-center justify-center w-5 h-5 transition-all duration-200 ${
                              selectedDeliverable === item.id ? 'text-primary scale-110' : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                            }`}>
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" opacity="0.8">
                                <path d="M1.5 0C0.671573 0 0 0.671573 0 1.5V14.5C0 15.3284 0.671573 16 1.5 16H12.5C13.3284 16 14 15.3284 14 14.5V4.5L9.5 0H1.5Z" />
                                <path d="M9 0V4.5H14" fill="currentColor" fillOpacity="0.5" />
                              </svg>
                            </div>

                            {/* File Name */}
                            <span className={`text-sm transition-colors duration-200 ${
                              selectedDeliverable === item.id ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                            }`}>
                              {item.name}
                            </span>

                            {/* Status Indicator */}
                            <span className={`ml-auto w-2 h-2 rounded-full transition-all duration-200 ${
                              hasDeliverableContent(item.id) 
                                ? 'bg-emerald-500' 
                                : 'border border-border'
                            }`} />

                            {/* Hover Indicator */}
                            <div className={`absolute right-2 w-1.5 h-1.5 rounded-full bg-primary transition-all duration-200 ${
                              selectedDeliverable === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                            }`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 p-3 bg-muted/30 rounded-lg text-[11px] text-muted-foreground border border-border/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full border border-border" />
                  <span>Not generated</span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <header className="bg-white border-b border-border px-12 py-10">
            <div className="max-w-[900px]">
              {/* Tags Row */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Badge className="bg-[hsl(var(--startup-ink))] text-white font-semibold text-[11px] uppercase tracking-wide">
                  {idea.targetCustomer?.toLowerCase().includes('b2b') ? 'B2B' : 'B2C'}
                </Badge>
                {idea.tags && idea.tags.slice(0, 3).map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-[11px] uppercase tracking-wide">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-serif text-[42px] font-semibold text-[hsl(var(--startup-ink))] leading-tight tracking-tight mb-3" data-testid="text-idea-title">
                {idea.title}
              </h1>

              {/* One-liner */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-6" data-testid="text-idea-oneliner">
                {idea.oneLiner}
              </p>

              {/* Metrics Row */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Demand</div>
                    <div className={`text-sm font-semibold flex items-center gap-1.5 ${getDemandColor(idea.demandBand)}`} data-testid="text-demand">
                      {idea.demandScore || '--'}/100
                      {idea.demandBand === 'high' && (
                        <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded uppercase font-medium">
                          High
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Trend</div>
                    <div className={`text-sm font-semibold capitalize ${getTrendColor(idea.trendLabel)}`} data-testid="text-trend">
                      {idea.trendLabel || '--'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center">
                    <Target className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Competition</div>
                    <div className={`text-sm font-semibold capitalize ${getCompetitionColor(idea.competitionLevel)}`} data-testid="text-competition">
                      {idea.competitionLevel || '--'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-pink-50 dark:bg-pink-950 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">Market Size</div>
                    <div className="text-sm font-semibold text-pink-600" data-testid="text-market-size">
                      {idea.marketSize || '--'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="bg-white border-b border-border px-12">
              <TabsList className="h-auto bg-transparent border-0 p-0 gap-1">
                <TabsTrigger
                  value="overview"
                  className="px-5 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[hsl(var(--startup-ink))] data-[state=active]:text-[hsl(var(--startup-ink))] data-[state=active]:shadow-none text-muted-foreground font-medium"
                  data-testid="tab-overview"
                >
                  Overview
                </TabsTrigger>
                {selectedDeliverable && (
                  <TabsTrigger
                    value={selectedDeliverable}
                    className="px-5 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-[hsl(var(--startup-ink))] data-[state=active]:text-[hsl(var(--startup-ink))] data-[state=active]:shadow-none text-muted-foreground font-medium"
                    data-testid="tab-deliverable"
                  >
                    {getDeliverableName()}
                  </TabsTrigger>
                )}
              </TabsList>
            </div>

            {/* Overview Tab Content */}
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">
                {/* Left Column */}
                <div className="p-10 lg:pr-10 lg:border-r border-border">
                  {/* Problem */}
                  <section className="mb-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950 flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      </div>
                      <h3 className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">
                        The Problem
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-foreground" data-testid="text-problem">
                      {idea.problem}
                    </p>
                  </section>

                  {/* Solution */}
                  <section className="mb-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-emerald-500" />
                      </div>
                      <h3 className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">
                        The Solution
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-foreground" data-testid="text-solution">
                      {idea.solution}
                    </p>
                  </section>

                  {/* Target Customer */}
                  <section className="mb-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center">
                        <Users className="w-4 h-4 text-indigo-500" />
                      </div>
                      <h3 className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Target Customer
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-foreground" data-testid="text-target">
                      {idea.targetCustomer}
                    </p>
                  </section>

                  {/* Monetization */}
                  <section className="mb-10">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-950 flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-pink-500" />
                      </div>
                      <h3 className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Monetization
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-foreground" data-testid="text-monetization">
                      {idea.monetization}
                    </p>
                  </section>

                  {/* Why Now */}
                  {idea.whyNow && (
                    <section className="mb-10">
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 flex items-center justify-center">
                          <Clock className="w-4 h-4 text-amber-500" />
                        </div>
                        <h3 className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider">
                          Why Now
                        </h3>
                      </div>
                      <p className="text-base leading-relaxed text-foreground" data-testid="text-why-now">
                        {idea.whyNow}
                      </p>
                    </section>
                  )}

                  {/* Revenue Impact */}
                  {idea.revenueImpact && (
                    <section className="mb-10">
                      <div className="p-6 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl border border-emerald-200 dark:border-emerald-800">
                        <div className="flex items-center gap-2.5 mb-3">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                          <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                            Revenue Impact
                          </h3>
                        </div>
                        <p className="text-[15px] leading-relaxed text-emerald-800 dark:text-emerald-300" data-testid="text-revenue-impact">
                          {idea.revenueImpact}
                        </p>
                      </div>
                    </section>
                  )}
                </div>

                {/* Right Column - Deliverable Panel */}
                <div className="p-10 bg-[hsl(var(--startup-bg-primary))]">
                  <div className="bg-white rounded-xl border border-border overflow-hidden">
                    {selectedDeliverable ? (
                      (() => {
                        const content = getDeliverableContent();
                        const hasContent = content && content.content;
                        return (
                          <>
                            <div className="p-5 border-b border-border">
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h4 className="font-serif text-xl font-semibold text-foreground mb-1">
                                    {getDeliverableName()}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    AI-generated content for {idea.title}
                                  </p>
                                </div>
                                <Badge variant={hasContent ? "default" : "outline"} className={hasContent ? "bg-emerald-500 text-white" : "text-muted-foreground"}>
                                  {hasContent ? 'Generated' : 'Not generated'}
                                </Badge>
                              </div>
                            </div>
                            {hasContent ? (
                              <div className="p-6" data-testid="deliverable-content">
                                {Array.isArray(content.content) ? (
                                  <ul className="space-y-3">
                                    {content.content.map((item, i) => (
                                      <li key={i} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                                          {i + 1}
                                        </span>
                                        <span className="text-base text-foreground leading-relaxed">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap">{content.content}</p>
                                )}
                              </div>
                            ) : (
                              <div className="p-12 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
                                  <Sparkles className="w-6 h-6 text-muted-foreground" />
                                </div>
                                <h5 className="font-serif text-lg font-semibold text-foreground mb-2">
                                  Generate {getDeliverableName()}
                                </h5>
                                <p className="text-sm text-muted-foreground max-w-[280px] mx-auto mb-6">
                                  Create professional {getDeliverableName().toLowerCase()} tailored to your idea.
                                </p>
                                <Button
                                  onClick={() => generateMutation.mutate()}
                                  disabled={generateMutation.isPending}
                                  className="gap-2 bg-[hsl(var(--startup-ink))] text-white"
                                  data-testid="button-generate-deliverable"
                                >
                                  {generateMutation.isPending ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                  ) : (
                                    <Sparkles className="w-4 h-4" />
                                  )}
                                  Generate Now
                                </Button>
                              </div>
                            )}
                          </>
                        );
                      })()
                    ) : (
                      <div className="p-12 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
                          <Package className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <h5 className="font-serif text-lg font-semibold text-foreground mb-2">
                          Select a Deliverable
                        </h5>
                        <p className="text-sm text-muted-foreground max-w-[280px] mx-auto">
                          Choose a deliverable from the sidebar to generate AI-powered content.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Deliverable Tab Content */}
            {selectedDeliverable && (
              <TabsContent value={selectedDeliverable} className="mt-0">
                <div className="p-10">
                  <div className="max-w-4xl mx-auto bg-white rounded-xl border border-border overflow-hidden">
                    {(() => {
                      const content = getDeliverableContent();
                      const hasContent = content && content.content;
                      return (
                        <>
                          <div className="p-6 border-b border-border">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="font-serif text-2xl font-semibold text-foreground mb-1">
                                  {getDeliverableName()}
                                </h4>
                                <p className="text-muted-foreground">
                                  AI-generated {getDeliverableName().toLowerCase()} for {idea.title}
                                </p>
                              </div>
                              <Badge variant={hasContent ? "default" : "outline"} className={hasContent ? "bg-emerald-500 text-white" : "text-muted-foreground"}>
                                {hasContent ? 'Generated' : 'Not generated'}
                              </Badge>
                            </div>
                          </div>
                          {hasContent ? (
                            <div className="p-8" data-testid="deliverable-tab-content">
                              {Array.isArray(content.content) ? (
                                <ul className="space-y-4">
                                  {content.content.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                                        {i + 1}
                                      </span>
                                      <span className="text-lg text-foreground leading-relaxed pt-1">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-lg text-foreground leading-relaxed whitespace-pre-wrap">{content.content}</p>
                              )}
                            </div>
                          ) : (
                            <div className="p-16 text-center">
                              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-muted-foreground" />
                              </div>
                              <h5 className="font-serif text-xl font-semibold text-foreground mb-3">
                                Ready to generate?
                              </h5>
                              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                Generate professional {getDeliverableName().toLowerCase()} tailored specifically to your startup idea.
                              </p>
                              <Button
                                size="lg"
                                onClick={() => generateMutation.mutate()}
                                disabled={generateMutation.isPending}
                                className="gap-2 bg-[hsl(var(--startup-ink))] text-white"
                                data-testid="button-generate-deliverable-main"
                              >
                                {generateMutation.isPending ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Sparkles className="w-4 h-4" />
                                )}
                                Generate {getDeliverableName()}
                              </Button>
                              {!isPremium && (
                                <p className="text-xs text-muted-foreground mt-4">
                                  {user?.profile?.plansGeneratedThisMonth || 0} / 2 generations used this month
                                </p>
                              )}
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </main>
      </div>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        reason={paywallReason}
      />
    </div>
  );
}
