import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "pulse",
  name: "Pulse",
  category: "Data & Insight",
  tagline: "Surveys that do not bill you per response.",
  description: "A survey platform for questionnaire design, distribution, consent, anonymous response collection, and analysis.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/pulse",
  nav: [
  {
    "label": "Surveys",
    "badge": "4"
  },
  {
    "label": "Questions"
  },
  {
    "label": "Distributions"
  },
  {
    "label": "Responses"
  },
  {
    "label": "Analysis"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "research_admin", label: "Research administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "researcher", label: "Researcher" },
  ],
  ai: {
    name: "Pulse knowledge guide",
    description: "Ask grounded questions about versioned questionnaire builder, branching and validation, anonymous or identified distributions, or operating policy.",
    systemPrompt: "You are Pulse's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain anonymous survey controls.","Explain questionnaire versioning.","Explain response quality signals."],
  },
};
