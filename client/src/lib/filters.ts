import { Bot, Cloud, Megaphone, Palette, Zap, Wallet, Wrench, ShoppingCart, Heart, Home, Scale, Users, TrendingUp, Minus, TrendingDown, LucideIcon } from 'lucide-react';

export interface FilterState {
  category: string[];
  type: string[];
  demandBand: string[];
  trend: string[];
  competition: string[];
  priceRange: string[];
  query: string;
  sortBy: SortOption;
  sortOrder: 'asc' | 'desc';
}

export type SortOption = 
  | 'demand_score'
  | 'trending'
  | 'competition_asc'
  | 'newest'
  | 'alphabetical';

export const DEFAULT_FILTERS: FilterState = {
  category: [],
  type: [],
  demandBand: [],
  trend: [],
  competition: [],
  priceRange: [],
  query: '',
  sortBy: 'demand_score',
  sortOrder: 'desc',
};

export interface FilterOption {
  value: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
}

export const CATEGORIES: FilterOption[] = [
  { value: 'ai_tools', label: 'AI Tools', icon: Bot },
  { value: 'saas', label: 'SaaS', icon: Cloud },
  { value: 'marketing', label: 'Marketing', icon: Megaphone },
  { value: 'creator', label: 'Creator', icon: Palette },
  { value: 'productivity', label: 'Productivity', icon: Zap },
  { value: 'finance', label: 'Finance', icon: Wallet },
  { value: 'dev_tools', label: 'Dev Tools', icon: Wrench },
  { value: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
  { value: 'healthcare', label: 'Healthcare', icon: Heart },
  { value: 'real_estate', label: 'Real Estate', icon: Home },
  { value: 'legal', label: 'Legal', icon: Scale },
  { value: 'hr', label: 'HR & Hiring', icon: Users },
];

export const BUSINESS_TYPES: FilterOption[] = [
  { value: 'b2b', label: 'B2B', description: 'Sell to businesses' },
  { value: 'b2c', label: 'B2C', description: 'Sell to consumers' },
  { value: 'b2b2c', label: 'B2B2C', description: 'Platform/marketplace' },
];

export const DEMAND_BANDS: FilterOption[] = [
  { value: 'high', label: 'High Demand', description: 'Score 70-100' },
  { value: 'medium', label: 'Medium Demand', description: 'Score 40-69' },
  { value: 'low', label: 'Low Demand', description: 'Score 0-39' },
];

export const TRENDS: FilterOption[] = [
  { value: 'rising', label: 'Rising', icon: TrendingUp, description: 'Increasing search interest' },
  { value: 'flat', label: 'Stable', icon: Minus, description: 'Consistent interest' },
  { value: 'declining', label: 'Declining', icon: TrendingDown, description: 'Decreasing interest' },
];

export const COMPETITION_LEVELS: FilterOption[] = [
  { value: 'low', label: 'Low', description: 'Blue ocean opportunity' },
  { value: 'medium', label: 'Medium', description: 'Some players exist' },
  { value: 'high', label: 'High', description: 'Crowded market' },
];

export const PRICE_RANGES: FilterOption[] = [
  { value: 'micro', label: 'Micro SaaS', description: '< $50/mo' },
  { value: 'smb', label: 'SMB', description: '$50-200/mo' },
  { value: 'midmarket', label: 'Mid-Market', description: '$200-1000/mo' },
  { value: 'enterprise', label: 'Enterprise', description: '$1000+/mo' },
  { value: 'consumer', label: 'Consumer', description: '< $30/mo' },
  { value: 'transactional', label: 'Pay-per-use', description: 'Variable' },
];

export const SORT_OPTIONS: FilterOption[] = [
  { value: 'demand_score', label: 'Highest Demand' },
  { value: 'trending', label: 'Trending Now' },
  { value: 'competition_asc', label: 'Least Competition' },
  { value: 'newest', label: 'Newest First' },
  { value: 'alphabetical', label: 'A-Z' },
];

export function parseFiltersFromURL(searchParams: URLSearchParams): FilterState {
  return {
    category: searchParams.get('category')?.split(',').filter(Boolean) || [],
    type: searchParams.get('type')?.split(',').filter(Boolean) || [],
    demandBand: searchParams.get('demand')?.split(',').filter(Boolean) || [],
    trend: searchParams.get('trend')?.split(',').filter(Boolean) || [],
    competition: searchParams.get('competition')?.split(',').filter(Boolean) || [],
    priceRange: searchParams.get('price')?.split(',').filter(Boolean) || [],
    query: searchParams.get('q') || '',
    sortBy: (searchParams.get('sort') as SortOption) || 'demand_score',
    sortOrder: (searchParams.get('order') as 'asc' | 'desc') || 'desc',
  };
}

export function filtersToURLParams(filters: FilterState): string {
  const params = new URLSearchParams();
  
  if (filters.category.length > 0) params.set('category', filters.category.join(','));
  if (filters.type.length > 0) params.set('type', filters.type.join(','));
  if (filters.demandBand.length > 0) params.set('demand', filters.demandBand.join(','));
  if (filters.trend.length > 0) params.set('trend', filters.trend.join(','));
  if (filters.competition.length > 0) params.set('competition', filters.competition.join(','));
  if (filters.priceRange.length > 0) params.set('price', filters.priceRange.join(','));
  if (filters.query) params.set('q', filters.query);
  if (filters.sortBy !== 'demand_score') params.set('sort', filters.sortBy);
  if (filters.sortOrder !== 'desc') params.set('order', filters.sortOrder);
  
  return params.toString();
}

export function getActiveFilterCount(filters: FilterState): number {
  let count = 0;
  if (filters.category.length > 0) count += filters.category.length;
  if (filters.type.length > 0) count += filters.type.length;
  if (filters.demandBand.length > 0) count += filters.demandBand.length;
  if (filters.trend.length > 0) count += filters.trend.length;
  if (filters.competition.length > 0) count += filters.competition.length;
  if (filters.priceRange.length > 0) count += filters.priceRange.length;
  if (filters.query) count += 1;
  return count;
}

export function hasActiveFilters(filters: FilterState): boolean {
  return getActiveFilterCount(filters) > 0;
}

export function getDemandBandColor(band: string): string {
  switch (band) {
    case 'high': return 'bg-green-500';
    case 'medium': return 'bg-yellow-500';
    case 'low': return 'bg-gray-400';
    default: return 'bg-gray-400';
  }
}

export function getCompetitionColor(level: string): string {
  switch (level) {
    case 'low': return 'bg-green-500';
    case 'medium': return 'bg-yellow-500';
    case 'high': return 'bg-red-500';
    default: return 'bg-gray-400';
  }
}
