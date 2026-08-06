export type ProjectFeature = {
  title: string;
  desc: string;
};

export type ProjectArchLayer = {
  title: string;
  points: string[];
};

export type ProjectTech = {
  name: string;
  use: string;
};

export type ProjectProcessStep = {
  title: string;
  desc: string;
};

export type Project = {
  slug: string;
  name: string;
  tag: "Full Stack" | "ServiceNow" | "Backend" | "Frontend";
  categories: string[];
  description: string;
  longDescription: string;
  stack: string[];
  liveUrl: string | null;
  githubUrl: string;
  featured: boolean;
  color: string;
  year: string;
  role: string;
  highlights: { label: string; value: string }[];
  features: ProjectFeature[];
  architecture: ProjectArchLayer[];
  tech: ProjectTech[];
  challenges: string[];
  solutions: string[];
  process: ProjectProcessStep[];
  results: { metric: string; label: string }[];
  codeSnippet: { tab: string; lang: string; lines: string[] };
};

export const projects: Project[] = [
  {
    slug: "carforfar",
    name: "CARFORFAR",
    tag: "Full Stack",
    categories: ["Full Stack", "Next.js", "Laravel", "React"],
    description:
      "Premium car rental platform with trilingual PDF contracts, live GPS tracking, and Google OAuth.",
    longDescription:
      "CARFORFAR is a full-scale car rental platform built for the Moroccan market. It pairs a cinematic Next.js frontend with a Laravel backend, delivering a complete booking flow — from browsing the fleet and reserving a vehicle to signing a trilingual contract generated on the fly as a PDF. Live Leaflet GPS tracking lets fleet managers follow vehicles in real time, and Google OAuth provides frictionless authentication.",
    stack: ["Next.js", "Laravel", "MySQL", "Sanctum", "DomPDF", "Leaflet"],
    liveUrl: "https://carforfar.com",
    githubUrl: "https://github.com/2003GG",
    featured: true,
    color: "#3B82F6",
    year: "2025",
    role: "Full Stack Developer",
    highlights: [
      { label: "Pages", value: "12+" },
      { label: "Languages", value: "3" },
      { label: "Response", value: "<300ms" },
      { label: "Auth", value: "Google + Sanctum" },
    ],
    features: [
      { title: "Fleet booking flow", desc: "End-to-end reservation system with availability checks, pricing rules, and instant confirmation." },
      { title: "Trilingual PDF contracts", desc: "Arabic, French and English contracts generated with DomPDF, fully branded and digitally signable." },
      { title: "Live GPS tracking", desc: "Leaflet-based map widget showing vehicle positions in real time for fleet managers." },
      { title: "Google OAuth", desc: "One-tap sign in via Google alongside email/password with Sanctum token auth." },
      { title: "Admin dashboard", desc: "Manage vehicles, bookings, pricing tiers and customers from a dedicated control panel." },
      { title: "Responsive PWA-grade UI", desc: "Mobile-first interface with a premium, cinematic feel on every device." },
    ],
    architecture: [
      { title: "Frontend", points: ["Next.js App Router with server components", "Tailwind CSS design system", "Framer Motion interactions", "API client with typed endpoints"] },
      { title: "Backend", points: ["Laravel REST API", "Sanctum token authentication", "Form Requests & validation", "Queue jobs for PDF generation"] },
      { title: "Data", points: ["MySQL relational schema", "Eloquent ORM with relations", "Migrations & seeders", "Soft deletes for audits"] },
    ],
    tech: [
      { name: "Next.js", use: "SSR/SSG pages and the full client experience." },
      { name: "Laravel", use: "REST API, business logic and admin panel." },
      { name: "MySQL", use: "Relational persistence for fleets, users and bookings." },
      { name: "Sanctum", use: "Token-based authentication for the SPA frontend." },
      { name: "DomPDF", use: "Server-side generation of branded PDF contracts." },
      { name: "Leaflet", use: "Real-time GPS map for fleet tracking." },
    ],
    challenges: [
      "Generating trilingual PDF contracts with correct RTL rendering for Arabic.",
      "Keeping GPS positions live without hammering the API with polls.",
      "Designing a pricing engine that handles daily, weekly and monthly tiers.",
    ],
    solutions: [
      "Used DomPDF with custom fonts and CSS support, testing RTL layout carefully across Arabic, French and English.",
      "Built a lightweight polling layer with throttling and caching so the map stays fresh at minimal cost.",
      "Modeled pricing as a configurable rule engine, keeping complex rates data-driven instead of hard-coded.",
    ],
    process: [
      { title: "Discovery", desc: "Mapped the rental journey with the client, from search to post-rental return." },
      { title: "Design", desc: "Crafted a premium visual language with mobile-first Tailwind components." },
      { title: "Build", desc: "Delivered the Laravel API and Next.js frontend in parallel sprint cycles." },
      { title: "Polish", desc: "Optimized for Core Web Vitals, added animations and refined every micro-interaction." },
    ],
    results: [
      { metric: "12+", label: "Production pages" },
      { metric: "3", label: "Languages supported" },
      { metric: "<300ms", label: "Avg API response" },
      { metric: "100", label: "Google Lighthouse" },
    ],
    codeSnippet: {
      tab: "routes/api.php",
      lang: "php",
      lines: [
        "// Booking lifecycle — REST API",
        "Route::apiResource('vehicles', VehicleController::class);",
        "Route::post('bookings', [BookingController::class, 'store']);",
        "Route::post('bookings/{b}/contract', [ContractController::class, 'generate']);",
        "Route::post('bookings/{b}/checkout', [CheckoutController::class, 'complete']);",
        "Route::get('tracking', [TrackingController::class, 'live']);",
      ],
    },
  },
  {
    slug: "easycoloc",
    name: "EasyColoc",
    tag: "Full Stack",
    categories: ["Full Stack", "Laravel", "React"],
    description:
      "Shared expense tracker and debt splitter for roommates — clean, mobile-first, zero math on paper.",
    longDescription:
      "EasyColoc solves the eternal roommate problem: who owes whom, and how much. The platform lets households create shared budgets, log expenses, and automatically settle debts with a smart simplified-debt algorithm. Built mobile-first with Laravel, it's designed to be usable in seconds while everyone's still standing in the kitchen.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    liveUrl: null,
    githubUrl: "https://github.com/2003GG",
    featured: false,
    color: "#A78BFA",
    year: "2024",
    role: "Full Stack Developer",
    highlights: [
      { label: "Households", value: "Unlimited" },
      { label: "Settlement", value: "Auto" },
      { label: "Platform", value: "Mobile-first" },
    ],
    features: [
      { title: "Shared budgets", desc: "Each household gets a shared expense ledger visible to all members." },
      { title: "Smart debt splitting", desc: "A simplified-debt algorithm minimizes transfers so people pay once." },
      { title: "Expense history", desc: "Every expense logged with payer, split, category and date." },
      { title: "Notifications", desc: "Members are notified when balances change or debts settle." },
    ],
    architecture: [
      { title: "Frontend", points: ["Server-rendered Tailwind views", "Mobile-first responsive layout", "Live balance widgets"] },
      { title: "Backend", points: ["Laravel REST API", "Simplified-debt settlement engine", "Auth with roles per household"] },
      { title: "Data", points: ["MySQL with normalized splits", "Eloquent scopes for balances"] },
    ],
    tech: [
      { name: "Laravel", use: "Full application framework and API." },
      { name: "PHP", use: "Core language and settlement logic." },
      { name: "MySQL", use: "Expenses, splits and households." },
      { name: "Tailwind", use: "Clean mobile-first interface." },
    ],
    challenges: [
      "Computing the fewest transactions to settle all debts.",
      "Keeping balances consistent across concurrent expense adds.",
    ],
    solutions: [
      "Implemented the simplified-debt graph algorithm: build balances, then greedily settle highest-positive against highest-negative.",
      "Wrapped balance recomputation in DB transactions with row locking on household records.",
    ],
    process: [
      { title: "Idea", desc: "A real pain point shared by the team living in colocation." },
      { title: "Prototype", desc: "Bare-bones Laravel app with a single shared ledger." },
      { title: "Refine", desc: "Added households, categories and the settlement engine." },
    ],
    results: [
      { metric: "1", label: "Tap to log an expense" },
      { metric: "N", label: "Transfers to settle debts" },
    ],
    codeSnippet: {
      tab: "SettlementService.php",
      lang: "php",
      lines: [
        "// Simplified-debt settlement",
        "function settle(array $balances): array {",
        "  $tx = [];",
        "  $pos = collect($balances)->where('amount', '>', 0);",
        "  $neg = collect($balances)->where('amount', '<', 0);",
        "  foreach ($pos as $creditor) {",
        "    foreach ($neg as $debtor) {",
        "      $amount = min($creditor['amount'], -$debtor['amount']);",
        "      $tx[] = [$debtor['user'], $creditor['user'], $amount];",
        "    }",
        "  }",
        "  return $tx;",
        "}",
      ],
    },
  },
  {
    slug: "itsm-automation",
    name: "ITSM Automation",
    tag: "ServiceNow",
    categories: ["ServiceNow"],
    description:
      "Automated incident routing and escalation using Flow Designer and Business Rules on ServiceNow.",
    longDescription:
      "This engagement automated the entire incident lifecycle on ServiceNow. Incoming incidents are auto-assigned based on category, impact and assignment-group rules; critical incidents trigger on-call escalations through Flow Designer; and duplicate incidents are automatically linked and closed. The result: dramatically reduced triage time and MTTR.",
    stack: ["ServiceNow", "Flow Designer", "GlideRecord", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/2003GG",
    featured: false,
    color: "#22D3EE",
    year: "2024",
    role: "ServiceNow Developer",
    highlights: [
      { label: "Triage time", value: "-60%" },
      { label: "Escalation", value: "Auto" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      { title: "Auto assignment", desc: "Incidents routed to the right assignment group from category and CI data." },
      { title: "Smart escalation", desc: "Flow Designer workflows escalate P1/P2 incidents to on-call via notification and task." },
      { title: "Duplicate detection", desc: "Similar open incidents matched and linked automatically." },
      { title: "SLA enforcement", desc: "Business rules track and escalate SLA breaches in real time." },
    ],
    architecture: [
      { title: "Assignment", points: ["Business Rule on incident insert", "Category + CI mapping tables", "Fallback group logic"] },
      { title: "Escalation", points: ["Flow Designer workflow", "On-call schedule integration", "Notification + task creation"] },
      { title: "Monitoring", points: ["SLA timer rules", "Breach alerts", "Dashboards for MTTR"] },
    ],
    tech: [
      { name: "Flow Designer", use: "No-code automation of the escalation path." },
      { name: "Business Rules", use: "Assignment and validation logic on the server." },
      { name: "GlideRecord", use: "Data queries and updates from scripts." },
      { name: "JavaScript", use: "Custom script actions where flows need logic." },
    ],
    challenges: [
      "On-call schedules that change weekly.",
      "Preventing duplicate escalations from firing simultaneously.",
    ],
    solutions: [
      "Integrated with the on-call schedule table so flows always target the current duty engineer.",
      "Added state guards and condition rows so only the first escalation path executes.",
    ],
    process: [
      { title: "Audit", desc: "Analyzed current incident triage bottlenecks with the IT team." },
      { title: "Automate", desc: "Built assignment rules and escalation flows in a sandbox." },
      { title: "Deploy", desc: "Moved to production after UAT and trained the support desk." },
    ],
    results: [
      { metric: "-60%", label: "Triage time" },
      { metric: "24/7", label: "Auto escalation" },
    ],
    codeSnippet: {
      tab: "IncidentAssignment.js",
      lang: "javascript",
      lines: [
        "// Auto-assign incident on insert",
        "(function executeRule(current, previous) {",
        "  var group = getAssignmentGroup(current.category, current.cmdb_ci);",
        "  if (!group && current.impact === 1) {",
        "    group = 'On-call support';",
        "  }",
        "  if (group) {",
        "    current.assignment_group.setValue('name', group);",
        "    current.state = 1; // New",
        "  }",
        "})(current, previous);",
      ],
    },
  },
  {
    slug: "service-portal-widget",
    name: "Service Portal Widget",
    tag: "ServiceNow",
    categories: ["ServiceNow"],
    description:
      "Custom self-service request tracking widget with real-time updates using AngularJS and GlideRecord.",
    longDescription:
      "A custom ServiceNow Service Portal widget that gives employees live visibility into their service requests. It lists active tickets, tracks status changes in real time via a polling refresh, and lets users filter by category or search by ticket number — all inside a clean, branded widget that drops into any portal page.",
    stack: ["ServiceNow", "AngularJS", "GlideRecord", "SCSS"],
    liveUrl: null,
    githubUrl: "https://github.com/2003GG",
    featured: false,
    color: "#F59E0B",
    year: "2024",
    role: "ServiceNow Developer",
    highlights: [
      { label: "Widget", value: "1 drop-in" },
      { label: "Updates", value: "Real-time" },
      { label: "Support", value: "Self-service" },
    ],
    features: [
      { title: "Live status", desc: "Requests refresh automatically so users see progress without reloading." },
      { title: "Filtering", desc: "Filter by category, state or search by ticket number." },
      { title: "Mobile-first", desc: "Widget scales perfectly in the portal's mobile experience." },
    ],
    architecture: [
      { title: "Client", points: ["AngularJS controller", "Server script feeds JSON", "Branded SCSS theme"] },
      { title: "Server", points: ["Widget server script", "GlideRecord queries", "Secure ACL-aware fetch"] },
    ],
    tech: [
      { name: "AngularJS", use: "Interactive client-side widget logic." },
      { name: "GlideRecord", use: "Secure server-side data access." },
      { name: "SCSS", use: "Premium branded styling." },
    ],
    challenges: [
      "Respecting ACLs while letting users see only their own requests.",
      "Keeping the widget responsive inside the portal shell.",
    ],
    solutions: [
      "Queried via GlideRecord scoped to sys_user = gs.getUserID() so ACLs stay intact.",
      "Used Bootstrap portal grid classes plus custom SCSS breakpoints.",
    ],
    process: [
      { title: "Wireframe", desc: "Mapped the employee self-service journey." },
      { title: "Build", desc: "AngularJS controller + server script + SCSS." },
      { title: "Ship", desc: "Packaged as a widget, deployed to the portal." },
    ],
    results: [
      { metric: "100%", label: "Self-service coverage" },
      { metric: "0", label: "Support-desk calls for status" },
    ],
    codeSnippet: {
      tab: "widget/server.js",
      lang: "javascript",
      lines: [
        "// Server script: my requests",
        "var gr = new GlideRecord('sc_req_item');",
        "gr.addQuery('request.requested_for', gs.getUserID());",
        "gr.orderByDesc('sys_updated_on');",
        "gr.setLimit(20);",
        "gr.query();",
        "var items = [];",
        "while (gr.next()) {",
        "  items.push({",
        "    number: gr.number.toString(),",
        "    state: gr.state.getDisplayValue(),",
        "    short: gr.short_description.toString()",
        "  });",
        "}",
        "data.items = items;",
      ],
    },
  },
  {
    slug: "laravel-sanctum-api",
    name: "Laravel Sanctum API",
    tag: "Backend",
    categories: ["Backend", "Laravel"],
    description:
      "Production-ready REST API with resource collections, rate limiting, multi-tenant support and full tests.",
    longDescription:
      "A reference-grade Laravel REST API built as the backend core for multiple client apps. It ships with Sanctum token auth, API resource collections, per-route rate limiting, multi-tenant data isolation, and a complete test suite covering authorization, validation and tenant boundaries.",
    stack: ["Laravel", "Sanctum", "PHP", "MySQL"],
    liveUrl: null,
    githubUrl: "https://github.com/2003GG",
    featured: false,
    color: "#EC4899",
    year: "2024",
    role: "Backend Developer",
    highlights: [
      { label: "Tests", value: "150+" },
      { label: "Rate limit", value: "Per route" },
      { label: "Tenants", value: "Isolated" },
    ],
    features: [
      { title: "Resource collections", desc: "Consistent JSON:api-style payloads with pagination and meta." },
      { title: "Rate limiting", desc: "Throttle-sensitive endpoints per user and per route." },
      { title: "Multi-tenant", desc: "Scoped data access so tenants never leak each other's records." },
      { title: "Test coverage", desc: "Feature tests for every endpoint, guard and validation rule." },
    ],
    architecture: [
      { title: "Auth", points: ["Sanctum personal access tokens", "Ability-based policies", "Refresh rotation"] },
      { title: "Domain", points: ["Service + Repository separation", "Form Request validation", "API Resources for output"] },
      { title: "Plumbing", points: ["Global scope for tenancy", "Middleware for throttling", "Exception rendering to JSON"] },
    ],
    tech: [
      { name: "Laravel", use: "Framework, ORM, queues, and HTTP layer." },
      { name: "Sanctum", use: "Token authentication and abilities." },
      { name: "PHP", use: "Language and backend logic." },
      { name: "MySQL", use: "Data persistence with tenant scoping." },
    ],
    challenges: [
      "Tenant isolation that can't be bypassed accidentally.",
      "Clean pagination metadata across every collection.",
    ],
    solutions: [
      "Applied a global scope on tenant models plus policy checks at the controller boundary.",
      "Centralized resource collection with consistent meta including paginator links.",
    ],
    process: [
      { title: "Spec", desc: "Defined endpoints and response contracts up front." },
      { title: "Build", desc: "Delivered feature-first with tests written alongside." },
      { title: "Harden", desc: "Security review, rate limits and edge-case tests." },
    ],
    results: [
      { metric: "150+", label: "Automated tests" },
      { metric: "100%", label: "Green pipeline" },
    ],
    codeSnippet: {
      tab: "routes/api.php",
      lang: "php",
      lines: [
        "Route::middleware(['auth:sanctum', 'throttle:api'])",
        "  ->prefix('v1')->group(function () {",
        "    Route::apiResource('projects', ProjectController::class);",
        "    Route::apiResource('tenants', TenantController::class);",
        "    Route::get('me', [ProfileController::class, 'show']);",
        "});",
      ],
    },
  },
  {
    slug: "developer-portfolio",
    name: "Developer Portfolio",
    tag: "Frontend",
    categories: ["Frontend", "React", "Next.js"],
    description:
      "VS Code-inspired portfolio with live GitHub API integration, dark/light mode and animated stats.",
    longDescription:
      "The original single-page portfolio that evolved into this site. It was built as a working editor metaphor: a gutter of line numbers, file-tab project cards, and a terminal-style hero. Live GitHub API integration pulls real repository data, and a full dark/light theme makes it a pleasure to read either way.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub API"],
    liveUrl: null,
    githubUrl: "https://github.com/2003GG",
    featured: false,
    color: "#10B981",
    year: "2024",
    role: "Frontend Developer",
    highlights: [
      { label: "Theme", value: "Dark + Light" },
      { label: "Data", value: "Live GitHub" },
      { label: "Speed", value: "100" },
    ],
    features: [
      { title: "Live GitHub", desc: "Projects, stats and profile loaded straight from the GitHub API." },
      { title: "Editor aesthetic", desc: "Line numbers, file tabs and syntax-highlighted code panels." },
      { title: "Theme toggle", desc: "Carefully tuned dark and light palettes with persisted choice." },
      { title: "Animated stats", desc: "Counters, progress bars and scroll reveals throughout." },
    ],
    architecture: [
      { title: "Shell", points: ["Semantic HTML + CSS variables", "Theme switching via data-attribute", "IntersectionObserver reveals"] },
      { title: "Data", points: ["GitHub REST API", "Graceful fallback dataset", "Client-side filtering & sort"] },
    ],
    tech: [
      { name: "HTML", use: "Semantic, accessible markup." },
      { name: "CSS", use: "Design system with variables and themes." },
      { name: "JavaScript", use: "Fetching, filtering and interactions." },
      { name: "GitHub API", use: "Live repo and profile data." },
    ],
    challenges: [
      "GitHub API rate limits on client-side requests.",
      "Consistent typography and spacing across two themes.",
    ],
    solutions: [
      "Cached responses in memory and shipped a quality fallback dataset for offline or rate-limited cases.",
      "Defined every color as a CSS variable so both themes stay perfectly aligned.",
    ],
    process: [
      { title: "Concept", desc: "Imagined the portfolio as a real codebase being viewed in an editor." },
      { title: "Design", desc: "Built the variable-based design system first." },
      { title: "Ship", desc: "Launched, then evolved into this multi-page Next.js site." },
    ],
    results: [
      { metric: "100", label: "Lighthouse performance" },
      { metric: "2", label: "Themes" },
    ],
    codeSnippet: {
      tab: "app.js",
      lang: "javascript",
      lines: [
        "// Load real projects from GitHub",
        "const repos = await fetch(",
        "  'https://api.github.com/users/2003GG/repos?per_page=100'",
        ").then(r => r.json());",
        "render(repos.filter(r => !r.fork));",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
