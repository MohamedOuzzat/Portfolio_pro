export type ServiceNowCapability = {
  name: string;
  desc: string;
  icon: "cert" | "itsm" | "cmdb" | "csdm" | "discovery" | "flow" | "script" | "rules" | "client" | "catalog" | "rest" | "hub";
};

export const snCapabilities: ServiceNowCapability[] = [
  { name: "CSA Certification", desc: "Certified System Administrator with production platform experience.", icon: "cert" },
  { name: "ITSM", desc: "Incident, change, problem, request — configured end to end.", icon: "itsm" },
  { name: "CMDB", desc: "Configuration items modeled with relationships and ownership.", icon: "cmdb" },
  { name: "CSDM", desc: "Common Service Data Model aligned data across the enterprise.", icon: "csdm" },
  { name: "Discovery", desc: "Automated infrastructure discovery feeding the CMDB.", icon: "discovery" },
  { name: "Flow Designer", desc: "No-code / low-code workflow and process automation.", icon: "flow" },
  { name: "Script Includes", desc: "Reusable server-side classes for shared business logic.", icon: "script" },
  { name: "Business Rules", desc: "Server-side automation, validation and data integrity.", icon: "rules" },
  { name: "Client Scripts", desc: "Client-side logic for forms, validation and UX.", icon: "client" },
  { name: "Catalog Items", desc: "Self-service request catalog with variables and flows.", icon: "catalog" },
  { name: "REST APIs", desc: "Secured REST integrations with external systems.", icon: "rest" },
  { name: "IntegrationHub", desc: "Spoke-based connectors and orchestration.", icon: "hub" },
];

export const snStats = [
  { value: 1, suffix: "", label: "CSA Certification" },
  { value: 12, suffix: "+", label: "Capabilities" },
  { value: 5, suffix: "+", label: "Workflows shipped" },
  { value: 99.9, suffix: "%", label: "Enterprise uptime" },
];

export const flowSteps = [
  { step: "Trigger", desc: "Incident created or catalog request submitted." },
  { step: "Route", desc: "Assignment group resolved from category + CI." },
  { step: "Automate", desc: "Flow Designer updates state, notifies, creates tasks." },
  { step: "Escalate", desc: "SLA breach or P1 raises on-call escalation." },
  { step: "Resolve", desc: "Knowledge captured, ticket closed, metric logged." },
];
