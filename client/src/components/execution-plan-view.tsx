import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Download, Check, User, ListChecks, Code2, Rocket, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { ExecutionPlan, Idea } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

interface ExecutionPlanViewProps {
  plan: ExecutionPlan;
  idea: Idea;
}

export function ExecutionPlanView({ plan, idea }: ExecutionPlanViewProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, section: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedSection(section);
    toast({ title: 'Copied to clipboard' });
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const copyAll = async () => {
    const fullPlan = `# Execution Plan: ${idea.title}

## Elevator Pitch
${plan.elevatorPitch}

## Target Persona
${plan.persona}

## User Stories
${plan.userStories?.map((story, i) => `${i + 1}. ${story}`).join('\n')}

## Recommended Tech Stack
${plan.recommendedStack}

## Launch Checklist
${plan.launchChecklist?.map((item, i) => `${i + 1}. ${item}`).join('\n')}
`;
    await navigator.clipboard.writeText(fullPlan);
    toast({ title: 'Full plan copied to clipboard' });
  };

  const downloadMarkdown = () => {
    const fullPlan = `# Execution Plan: ${idea.title}

## Elevator Pitch
${plan.elevatorPitch}

## Target Persona
${plan.persona}

## User Stories
${plan.userStories?.map((story, i) => `${i + 1}. ${story}`).join('\n')}

## Recommended Tech Stack
${plan.recommendedStack}

## Launch Checklist
${plan.launchChecklist?.map((item, i) => `${i + 1}. ${item}`).join('\n')}
`;
    const blob = new Blob([fullPlan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${idea.title.toLowerCase().replace(/\s+/g, '-')}-execution-plan.md`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: 'Plan downloaded as Markdown' });
  };

  const CopyButton = ({ section, text }: { section: string; text: string }) => (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => copyToClipboard(text, section)}
      className="opacity-0 group-hover:opacity-100 transition-opacity"
      data-testid={`button-copy-${section}`}
    >
      {copiedSection === section ? (
        <Check className="w-4 h-4 text-emerald-500" />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground" />
      )}
    </Button>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-foreground">Execution Plan</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copyAll} data-testid="button-copy-all">
            <Copy className="w-4 h-4 mr-2" />
            Copy All
          </Button>
          <Button variant="outline" size="sm" onClick={downloadMarkdown} data-testid="button-download-md">
            <Download className="w-4 h-4 mr-2" />
            Download .md
          </Button>
        </div>
      </div>

      <Card className="group">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[hsl(224,54%,51%)]" />
            <CardTitle className="text-lg">1. Elevator Pitch</CardTitle>
          </div>
          <CopyButton section="pitch" text={plan.elevatorPitch || ''} />
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">{plan.elevatorPitch}</p>
        </CardContent>
      </Card>

      <Card className="group">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[hsl(224,54%,51%)]" />
            <CardTitle className="text-lg">2. Target Persona</CardTitle>
          </div>
          <CopyButton section="persona" text={plan.persona || ''} />
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed whitespace-pre-line">{plan.persona}</p>
        </CardContent>
      </Card>

      <Card className="group">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-[hsl(224,54%,51%)]" />
            <CardTitle className="text-lg">3. User Stories</CardTitle>
          </div>
          <CopyButton section="stories" text={plan.userStories?.join('\n') || ''} />
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {plan.userStories?.map((story, i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <span className="font-mono text-sm text-muted-foreground flex-shrink-0 w-6">
                  {i + 1}.
                </span>
                <span className="italic">{story}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Card className="group">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[hsl(224,54%,51%)]" />
            <CardTitle className="text-lg">4. Recommended Stack</CardTitle>
          </div>
          <CopyButton section="stack" text={plan.recommendedStack || ''} />
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed whitespace-pre-line">{plan.recommendedStack}</p>
        </CardContent>
      </Card>

      <Card className="group">
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-[hsl(224,54%,51%)]" />
            <CardTitle className="text-lg">5. Launch Checklist</CardTitle>
          </div>
          <CopyButton section="checklist" text={plan.launchChecklist?.join('\n') || ''} />
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {plan.launchChecklist?.map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <span className="font-mono text-sm text-muted-foreground flex-shrink-0 w-6">
                  {i + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
