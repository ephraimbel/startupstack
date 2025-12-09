import OpenAI from "openai";
import type { UserProfile, Idea } from "@shared/schema";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface GeneratedIdea {
  title: string;
  oneLiner: string;
  problem: string;
  targetCustomer: string;
  solution: string;
  monetization: string;
  tags: string[];
  keywords: string[];
}

interface GeneratedExecutionPlan {
  elevatorPitch: string;
  persona: string;
  userStories: string[];
  recommendedStack: string;
  launchChecklist: string[];
}

export async function generateIdeas(
  focus: string,
  userProfile: UserProfile | null,
  count: number = 5
): Promise<GeneratedIdea[]> {
  const skillContext = userProfile?.skillLevel 
    ? `The user has ${userProfile.skillLevel === 'dev' ? 'development skills' : userProfile.skillLevel === 'no_code' ? 'no-code experience' : 'non-technical background'}.`
    : '';
  
  const preferenceContext = userProfile?.preference
    ? `They prefer ${userProfile.preference === 'b2b' ? 'B2B businesses' : userProfile.preference === 'b2c' ? 'B2C businesses' : 'either B2B or B2C'}.`
    : '';
  
  const marketContext = userProfile?.marketTags?.length
    ? `They are interested in these markets: ${userProfile.marketTags.join(', ')}.`
    : '';

  const prompt = `Generate ${count} innovative startup ideas based on this focus area: "${focus}"

${skillContext}
${preferenceContext}
${marketContext}

For each idea, provide:
- title: A catchy, memorable name (2-4 words)
- oneLiner: A one-sentence pitch (under 100 characters)
- problem: The specific problem being solved (2-3 sentences)
- targetCustomer: Who would pay for this (specific persona)
- solution: How the product solves the problem (2-3 sentences)
- monetization: Revenue model (subscription, marketplace, etc.)
- tags: 3-5 relevant category tags
- keywords: 3-5 search keywords for validation

Return ONLY valid JSON array with no additional text. Example format:
[{"title": "Example", "oneLiner": "...", "problem": "...", "targetCustomer": "...", "solution": "...", "monetization": "...", "tags": ["tag1"], "keywords": ["keyword1"]}]`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a startup idea generation expert. Generate creative, viable startup ideas with clear market potential. Always respond with valid JSON only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.8,
    max_tokens: 4000,
  });

  const content = response.choices[0]?.message?.content?.trim();
  if (!content) {
    throw new Error("No response from OpenAI");
  }

  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (e) {
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("Failed to parse OpenAI response as JSON");
  }
}

export async function generateExecutionPlan(
  idea: Idea,
  userProfile: UserProfile | null
): Promise<GeneratedExecutionPlan> {
  const skillContext = userProfile?.skillLevel
    ? `The user has ${userProfile.skillLevel === 'dev' ? 'development skills and can code' : userProfile.skillLevel === 'no_code' ? 'no-code experience (Bubble, Webflow, etc.)' : 'non-technical background and will need to hire developers or use no-code tools'}.`
    : 'Assume the user has moderate technical ability.';

  const prompt = `Create a detailed execution plan for this startup idea:

Title: ${idea.title}
One-liner: ${idea.oneLiner}
Problem: ${idea.problem}
Target Customer: ${idea.targetCustomer}
Solution: ${idea.solution}
Monetization: ${idea.monetization}

${skillContext}

Provide:
1. elevatorPitch: A compelling 30-second pitch (3-4 sentences)
2. persona: Detailed ideal customer persona (name, job, pain points, goals - 4-5 sentences)
3. userStories: Array of 5-7 user stories in format "As a [user], I want to [action] so that [benefit]"
4. recommendedStack: Technology recommendations based on user's skill level (2-3 sentences with specific tools/platforms)
5. launchChecklist: Array of 8-10 actionable steps to go from idea to MVP launch

Return ONLY valid JSON with no additional text. Example:
{"elevatorPitch": "...", "persona": "...", "userStories": ["As a..."], "recommendedStack": "...", "launchChecklist": ["Step 1..."]}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a startup execution strategist. Create actionable, detailed plans that help founders go from idea to launch. Always respond with valid JSON only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 2000,
  });

  const content = response.choices[0]?.message?.content?.trim();
  if (!content) {
    throw new Error("No response from OpenAI");
  }

  try {
    return JSON.parse(content);
  } catch (e) {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("Failed to parse OpenAI response as JSON");
  }
}

export async function validateIdea(idea: Idea): Promise<{
  demandScore: number;
  demandBand: 'high' | 'medium' | 'low';
  trendLabel: 'rising' | 'flat' | 'declining';
  validationSummary: string;
}> {
  const prompt = `Analyze the market potential for this startup idea:

Title: ${idea.title}
One-liner: ${idea.oneLiner}
Problem: ${idea.problem}
Target Customer: ${idea.targetCustomer}
Solution: ${idea.solution}
Keywords: ${idea.keywords?.join(', ')}

Evaluate:
1. demandScore: 0-100 based on market size, competition, and timing
2. demandBand: "high" (70-100), "medium" (40-69), or "low" (0-39)
3. trendLabel: "rising", "flat", or "declining" based on market trajectory
4. validationSummary: 2-3 sentences explaining the score and market opportunity

Return ONLY valid JSON. Example:
{"demandScore": 75, "demandBand": "high", "trendLabel": "rising", "validationSummary": "..."}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are a market research analyst. Provide realistic, data-informed assessments of startup idea viability. Always respond with valid JSON only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.5,
    max_tokens: 500,
  });

  const content = response.choices[0]?.message?.content?.trim();
  if (!content) {
    throw new Error("No response from OpenAI");
  }

  try {
    return JSON.parse(content);
  } catch (e) {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error("Failed to parse OpenAI response as JSON");
  }
}
