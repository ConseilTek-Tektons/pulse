export const rbacConfig = {
  roles: {
    owner: { label: "Owner", description: "Full control of security, policy, and workspace data." },
    admin: { label: "Admin", description: "Manages configuration, integrations, identities, and access." },
    research_admin: { label: "Research administrator", description: "Owns versioned questionnaire builder and branching and validation." },
    researcher: { label: "Researcher", description: "Operates authorised survey workflows and records." },
    viewer: { label: "Viewer", description: "Reads permitted operational data." },
    auditor: { label: "Auditor", description: "Reads immutable history, controls, and evidence." },
  },
  permissions: {
    "dashboard.view": "View operational dashboard",
    "survey.manage": "Create and update survey records",
    "workflow.approve": "Approve controlled workflow transitions",
    "reports.view": "View operational reports",
    "sensitive.export": "Export sensitive workspace data",
    "assistant.ask": "Ask the Pulse knowledge guide",
    "audit.view": "Read audit history",
    "access.manage": "Configure roles and identity mappings",
    "settings.manage": "Manage workspace settings and integrations",
  },
  rolePermissions: {
    owner: ["*"], admin: ["*"],
    research_admin: ["dashboard.view", "survey.manage", "workflow.approve", "reports.view", "assistant.ask", "audit.view"],
    researcher: ["dashboard.view", "survey.manage", "reports.view", "assistant.ask"],
    viewer: ["dashboard.view", "reports.view"], auditor: ["dashboard.view", "reports.view", "audit.view"],
  } as Record<string, readonly string[]>,
  identityGroupMappings: {
    "pulse-owners": "owner", "pulse-admins": "admin",
    "pulse-managers": "research_admin", "pulse-operators": "researcher",
    "pulse-viewers": "viewer", "internal-audit": "auditor",
  } as Record<string, string>,
  defaultRole: "viewer",
};
