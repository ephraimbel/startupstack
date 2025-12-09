import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Search,
  X,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import {
  FilterState,
  FilterOption,
  CATEGORIES,
  BUSINESS_TYPES,
  DEMAND_BANDS,
  TRENDS,
  COMPETITION_LEVELS,
  PRICE_RANGES,
  SORT_OPTIONS,
  DEFAULT_FILTERS,
  getActiveFilterCount,
  hasActiveFilters,
  SortOption,
} from '@/lib/filters';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search ideas...',
  className,
}: SearchInputProps) {
  const [localValue, setLocalValue] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setLocalValue(newValue);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
    }, 300);
  };

  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        value={localValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="pl-9 pr-9"
        data-testid="input-search"
      />
      {localValue && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
          onClick={() => {
            setLocalValue('');
            onChange('');
          }}
          data-testid="button-clear-search"
        >
          <X className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
}

interface CategoryPillsProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

export function CategoryPills({
  selected,
  onChange,
  className,
}: CategoryPillsProps) {
  const toggleCategory = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <ScrollArea className={cn('w-full', className)}>
      <div className="flex gap-2 pb-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selected.includes(cat.value);
          const Icon = cat.icon;
          return (
            <Button
              key={cat.value}
              variant={isSelected ? 'default' : 'outline'}
              size="sm"
              onClick={() => toggleCategory(cat.value)}
              className="shrink-0 gap-1.5"
              data-testid={`button-category-${cat.value}`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {cat.label}
            </Button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

interface FilterCheckboxGroupProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  defaultOpen?: boolean;
}

export function FilterCheckboxGroup({
  title,
  options,
  selected,
  onChange,
  defaultOpen = false,
}: FilterCheckboxGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover-elevate rounded px-2 -mx-2">
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2 space-y-2">
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <div key={opt.value} className="flex items-start gap-2">
              <Checkbox
                id={`filter-${title}-${opt.value}`}
                checked={selected.includes(opt.value)}
                onCheckedChange={() => toggleOption(opt.value)}
                data-testid={`checkbox-${title.toLowerCase()}-${opt.value}`}
              />
              <div className="grid gap-0.5 leading-none">
                <Label
                  htmlFor={`filter-${title}-${opt.value}`}
                  className="flex items-center gap-1.5 text-sm cursor-pointer"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-muted-foreground" />}
                  {opt.label}
                </Label>
                {opt.description && (
                  <p className="text-xs text-muted-foreground">
                    {opt.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

export function SortSelect({ value, onChange, className }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className={cn('w-[180px]', className)} data-testid="select-sort">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} data-testid={`option-sort-${opt.value}`}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

interface ActiveFilterChipsProps {
  filters: FilterState;
  onRemove: (filterType: keyof FilterState, value: string) => void;
  onClearAll: () => void;
  className?: string;
}

export function ActiveFilterChips({
  filters,
  onRemove,
  onClearAll,
  className,
}: ActiveFilterChipsProps) {
  const getLabel = (type: string, value: string): string => {
    const allOptions = [
      ...CATEGORIES,
      ...BUSINESS_TYPES,
      ...DEMAND_BANDS,
      ...TRENDS,
      ...COMPETITION_LEVELS,
      ...PRICE_RANGES,
    ];
    return allOptions.find((o) => o.value === value)?.label || value;
  };

  const chips: { type: keyof FilterState; value: string; label: string }[] = [];

  filters.category.forEach((v) =>
    chips.push({ type: 'category', value: v, label: getLabel('category', v) })
  );
  filters.type.forEach((v) =>
    chips.push({ type: 'type', value: v, label: getLabel('type', v) })
  );
  filters.demandBand.forEach((v) =>
    chips.push({ type: 'demandBand', value: v, label: getLabel('demandBand', v) })
  );
  filters.trend.forEach((v) =>
    chips.push({ type: 'trend', value: v, label: getLabel('trend', v) })
  );
  filters.competition.forEach((v) =>
    chips.push({ type: 'competition', value: v, label: getLabel('competition', v) })
  );
  filters.priceRange.forEach((v) =>
    chips.push({ type: 'priceRange', value: v, label: getLabel('priceRange', v) })
  );
  if (filters.query) {
    chips.push({ type: 'query', value: filters.query, label: `"${filters.query}"` });
  }

  if (chips.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {chips.map((chip) => (
        <Badge
          key={`${chip.type}-${chip.value}`}
          variant="secondary"
          className="gap-1 pr-1"
        >
          {chip.label}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-0.5"
            onClick={() => onRemove(chip.type, chip.value)}
            data-testid={`button-remove-filter-${chip.type}-${chip.value}`}
          >
            <X className="w-3 h-3" />
          </Button>
        </Badge>
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-muted-foreground"
        data-testid="button-clear-all-filters"
      >
        Clear all
      </Button>
    </div>
  );
}

interface FilterDrawerProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  trigger?: React.ReactNode;
}

export function FilterDrawer({ filters, onChange, trigger }: FilterDrawerProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);
  const [open, setOpen] = useState(false);
  const activeCount = getActiveFilterCount(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApply = () => {
    onChange(localFilters);
    setOpen(false);
  };

  const handleReset = () => {
    setLocalFilters(DEFAULT_FILTERS);
  };

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="gap-2" data-testid="button-open-filters">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeCount > 0 && (
              <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
                {activeCount}
              </Badge>
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          <div className="space-y-4 py-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Search</Label>
              <SearchInput
                value={localFilters.query}
                onChange={(v) => updateFilter('query', v)}
              />
            </div>

            <div className="border-t pt-4">
              <FilterCheckboxGroup
                title="Category"
                options={CATEGORIES}
                selected={localFilters.category}
                onChange={(v) => updateFilter('category', v)}
                defaultOpen
              />
            </div>

            <div className="border-t pt-4">
              <FilterCheckboxGroup
                title="Business Type"
                options={BUSINESS_TYPES}
                selected={localFilters.type}
                onChange={(v) => updateFilter('type', v)}
                defaultOpen
              />
            </div>

            <div className="border-t pt-4">
              <FilterCheckboxGroup
                title="Demand"
                options={DEMAND_BANDS}
                selected={localFilters.demandBand}
                onChange={(v) => updateFilter('demandBand', v)}
              />
            </div>

            <div className="border-t pt-4">
              <FilterCheckboxGroup
                title="Trend"
                options={TRENDS}
                selected={localFilters.trend}
                onChange={(v) => updateFilter('trend', v)}
              />
            </div>

            <div className="border-t pt-4">
              <FilterCheckboxGroup
                title="Competition"
                options={COMPETITION_LEVELS}
                selected={localFilters.competition}
                onChange={(v) => updateFilter('competition', v)}
              />
            </div>

            <div className="border-t pt-4">
              <FilterCheckboxGroup
                title="Price Range"
                options={PRICE_RANGES}
                selected={localFilters.priceRange}
                onChange={(v) => updateFilter('priceRange', v)}
              />
            </div>

            <div className="border-t pt-4">
              <Label className="text-sm font-medium mb-2 block">Sort By</Label>
              <SortSelect
                value={localFilters.sortBy}
                onChange={(v) => updateFilter('sortBy', v)}
                className="w-full"
              />
            </div>
          </div>
        </ScrollArea>

        <SheetFooter className="flex-row gap-2 border-t pt-4">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1"
            data-testid="button-reset-filters"
          >
            Reset
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1"
            data-testid="button-apply-filters"
          >
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  className?: string;
}

export function FilterBar({ filters, onChange, className }: FilterBarProps) {
  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    onChange({ ...filters, [key]: value });
  };

  const removeFilter = (type: keyof FilterState, value: string) => {
    if (type === 'query') {
      updateFilter('query', '');
    } else if (Array.isArray(filters[type])) {
      updateFilter(
        type,
        (filters[type] as string[]).filter((v) => v !== value) as FilterState[typeof type]
      );
    }
  };

  const clearAll = () => {
    onChange(DEFAULT_FILTERS);
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchInput
          value={filters.query}
          onChange={(v) => updateFilter('query', v)}
          className="flex-1 max-w-md"
        />
        <div className="flex items-center gap-2">
          <SortSelect
            value={filters.sortBy}
            onChange={(v) => updateFilter('sortBy', v)}
          />
          <FilterDrawer filters={filters} onChange={onChange} />
        </div>
      </div>

      <CategoryPills
        selected={filters.category}
        onChange={(v) => updateFilter('category', v)}
      />

      {hasActiveFilters(filters) && (
        <ActiveFilterChips
          filters={filters}
          onRemove={removeFilter}
          onClearAll={clearAll}
        />
      )}
    </div>
  );
}

export {
  CATEGORIES,
  BUSINESS_TYPES,
  DEMAND_BANDS,
  TRENDS,
  COMPETITION_LEVELS,
  PRICE_RANGES,
  SORT_OPTIONS,
  DEFAULT_FILTERS,
};
