import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "DATA & INSIGHT · OPERATIONS",
  heading: "Pulse keeps the operating record visible, governed, and ready for action.",
  summary: "Versioned questionnaire builder, Branching and validation, Anonymous or identified distributions are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create survey", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "survey.manage", metricLabel: "Pulse operating health",
  metrics: [{"label":"Responses","value":"184,220","change":"30 days","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Completion","value":"72.4%","change":"↗ 4.2%","context":"operational window","tone":"positive","progress":"76%"},{"label":"Median time","value":"6m 12s","change":"within plan","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Quality review","value":"1.8%","change":"flagged","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active surveys", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"PUL-842 · Customer onboarding feedback","secondary":"Versioned questionnaire builder","tertiary":"Updated today","status":"Draft","accent":"violet"},{"id":2,"primary":"PUL-831 · Quarterly manager pulse","secondary":"Branching and validation","tertiary":"Evidence current","status":"Live","accent":"lime"},{"id":3,"primary":"PUL-820 · Product concept study","secondary":"Anonymous or identified distributions","tertiary":"Updated today","status":"Closing","accent":"cyan"},{"id":4,"primary":"PUL-809 · Event experience survey","secondary":"Response-quality controls","tertiary":"Evidence current","status":"Analysed","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Versioned questionnaire builder", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Branching and validation", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Anonymous or identified distributions", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Branching and validation has the clearest next action.",
  insightBody: "The recommendation is grounded in current survey records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Survey", modalEyebrow: "NEW SURVEY", modalTitle: "Add survey",
  formFields: [
    { name: "title", label: "Survey title", placeholder: "Customer onboarding feedback" },
    { name: "owner", label: "Owner", placeholder: "Researcher" },
    { name: "reference", label: "Reference", placeholder: "PUL-843" },
  ],
  defaultSecondary: "Versioned questionnaire builder", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The survey inherits workspace visibility, requires survey.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create survey",
};
