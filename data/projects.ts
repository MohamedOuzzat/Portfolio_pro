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
    categories: ["Full Stack", "Laravel", "PHP", "MySQL"],
    description:
      "Shared housing platform with automatic balance calculation, email-token invitations, reputation scoring and an admin dashboard.",
    longDescription:
      "EasyColoc is a full-stack web application built with Laravel that simplifies shared housing management. It lets roommates track shared expenses, calculate balances automatically, and manage reimbursements transparently — eliminating manual math with a clear view of who owes whom. The platform covers the full lifecycle of a shared house: creating and managing households, inviting members via secure email tokens, recording categorized expenses, and automatically computing debts and settlements. It also ships a reputation system based on members' financial behavior and a global admin dashboard for platform management.",
    stack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL", "Eloquent ORM", "Laravel Breeze", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/MohamedOuzzat/EasyColoc",
    featured: true,
    color: "#A78BFA",
    year: "2025",
    role: "Full Stack Developer",
    highlights: [
      { label: "Balance", value: "Auto" },
      { label: "Invites", value: "Email tokens" },
      { label: "Reputation", value: "Scored" },
      { label: "Admin", value: "Dashboard" },
    ],
    features: [
      { title: "Secure authentication", desc: "Laravel Breeze auth with profile management." },
      { title: "Household management", desc: "Create and manage a shared house with one active house per user." },
      { title: "Email-token invites", desc: "Invite members via secure tokens that expire after use." },
      { title: "Expense tracking", desc: "Full expense management with categories and monthly filtering." },
      { title: "Auto balance & settlement", desc: "Balances and debts computed automatically with a simplified 'Who Owes Whom' view." },
      { title: "Payment tracking", desc: "Mark reimbursements as paid with live settlement state." },
      { title: "Reputation system", desc: "Member scoring based on financial behavior and timeliness." },
      { title: "Admin dashboard", desc: "Platform statistics plus ban/unban user management." },
    ],
    architecture: [
      { title: "Frontend", points: ["Server-rendered Blade views", "Tailwind CSS responsive UI", "Laravel Breeze scaffolding", "Live balance widgets"] },
      { title: "Backend", points: ["Laravel REST API and MVC", "Simplified-debt settlement engine", "Auth with roles per household", "Admin middleware for platform tools"] },
      { title: "Data", points: ["MySQL with normalized splits", "Eloquent ORM with relations", "Migrations & seeders", "Transactional balance updates"] },
    ],
    tech: [
      { name: "Laravel", use: "Full MVC framework, auth and business logic." },
      { name: "PHP", use: "Core language and settlement engine." },
      { name: "Blade", use: "Server-rendered templates and layouts." },
      { name: "Tailwind CSS", use: "Clean, responsive interface." },
      { name: "MySQL", use: "Households, expenses, splits and users." },
      { name: "Eloquent ORM", use: "Relations and scopes for balances." },
      { name: "Laravel Breeze", use: "Authentication scaffolding and profiles." },
      { name: "JavaScript", use: "Interactive UI and real-time updates." },
    ],
    challenges: [
      "Computing the fewest transactions to settle all debts across a household.",
      "Keeping balances consistent under concurrent expense additions.",
      "Preventing invite-token reuse while keeping the flow simple.",
      "Designing a reputation score that is transparent and fair to members.",
    ],
    solutions: [
      "Implemented the simplified-debt algorithm: build balances, then greedily settle the highest-positive against the highest-negative member.",
      "Wrapped balance recomputation in DB transactions with row locking on household records.",
      "Issued single-use, time-limited email tokens stored hashed, invalidated on first use.",
      "Scored reputation from payment timeliness and balance age, with a breakdown shown to every member.",
    ],
    process: [
      { title: "Discovery", desc: "Mapped the full shared-housing lifecycle with roommates." },
      { title: "Prototype", desc: "Bare-bones Laravel app with a single shared ledger." },
      { title: "Refine", desc: "Added households, categories, invites and the settlement engine." },
      { title: "Ship", desc: "Launched with reputation scoring and the admin dashboard." },
    ],
    results: [
      { metric: "Full", label: "CRUD + admin tools" },
      { metric: "Auto", label: "Debt settlement" },
      { metric: "1", label: "Tap to log an expense" },
      { metric: "0", label: "Manual calculations" },
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
    featured: true,
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
    featured: true,
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
  {
    slug: "watchlist-movie-tracker",
    name: "WatchList — Movie Tracker",
    tag: "Frontend",
    categories: ["Frontend", "React", "TypeScript", "Vite"],
    description:
      "Modern movie tracker with secure Sanctum auth, custom collections, and full CRUD on movies and lists.",
    longDescription:
      "WatchList is a modern and responsive Movie Tracker web application built with React and TypeScript. It helps users organize and manage their personal movie collections through a clean, intuitive interface, backed by a Laravel REST API secured with Sanctum. Users can register and log in securely, build their watchlist, organize movies into custom collections, and perform full CRUD operations on movies and lists — all inside a polished, mobile-first UI with protected routes, toast notifications and form validation.",
    stack: ["React", "TypeScript", "Vite", "React Router", "Axios", "Tailwind", "Context API", "Framer Motion"],
    liveUrl: null,
    githubUrl: "https://github.com/MohamedOuzzat/Movie_Tracker",
    featured: false,
    color: "#F43F5E",
    year: "2025",
    role: "Frontend Developer",
    highlights: [
      { label: "Auth", value: "Sanctum" },
      { label: "Routes", value: "Protected" },
      { label: "UI", value: "Responsive" },
      { label: "Alerts", value: "Toasts" },
    ],
    features: [
      { title: "Secure authentication", desc: "Register, log in and log out with Laravel Sanctum token-based auth." },
      { title: "Watchlist management", desc: "Build and maintain a personal movie watchlist with full CRUD support." },
      { title: "Custom collections", desc: "Create collections and organize movies into personalized lists." },
      { title: "Search & filtering", desc: "Find and filter movies quickly across your collection." },
      { title: "Protected routes", desc: "Private pages guarded by token-based authentication and route guards." },
      { title: "Polished UX", desc: "Loading states, toasts and form validation with a cinematic Framer Motion UI." },
    ],
    architecture: [
      { title: "Frontend", points: ["React + TypeScript with Vite", "React Router navigation", "Tailwind CSS design system", "Framer Motion interactions"] },
      { title: "State & Data", points: ["Context API for auth & global state", "Axios client with interceptors", "Token persistence in storage", "Centralized loading/error handling"] },
      { title: "Integration", points: ["Laravel REST API", "Sanctum bearer-token auth", "Toast notifications", "Optimized API requests"] },
    ],
    tech: [
      { name: "React", use: "Component-driven UI and application state." },
      { name: "TypeScript", use: "Type-safe development across the whole app." },
      { name: "Vite", use: "Fast build tooling and dev server." },
      { name: "React Router", use: "Client-side routing with protected routes." },
      { name: "Axios", use: "HTTP client with interceptors and error handling." },
      { name: "Tailwind CSS", use: "Utility-first responsive styling." },
      { name: "Context API", use: "Shared auth and app state without extra deps." },
      { name: "Framer Motion", use: "Smooth animations and micro-interactions." },
      { name: "Laravel Sanctum", use: "Token-based authentication against the API." },
      { name: "REST API", use: "Seamless backend data synchronization." },
    ],
    challenges: [
      "Keeping auth tokens safe on the client while persisting user sessions.",
      "Handling API errors and loading states consistently across every screen.",
      "Designing a cinematic, responsive UI that feels great on any device.",
    ],
    solutions: [
      "Stored tokens in localStorage and injected them via Axios request interceptors, with route guards on protected pages.",
      "Built a centralized request layer that normalizes errors and surfaces toasts, plus reusable loading components.",
      "Used a Tailwind design system with Framer Motion for a fast, film-like experience on mobile and desktop.",
    ],
    process: [
      { title: "Discovery", desc: "Mapped the movie-tracking journey: auth, watchlist, collections and CRUD." },
      { title: "Design", desc: "Crafted a modern, responsive design system with Tailwind." },
      { title: "Build", desc: "Implemented auth, routing and CRUD features against the Sanctum API." },
      { title: "Polish", desc: "Added toasts, validation, loading states and Framer Motion polish." },
    ],
    results: [
      { metric: "Full", label: "CRUD operations" },
      { metric: "100%", label: "Protected routes" },
      { metric: "10+", label: "Modern tools" },
      { metric: "All", label: "Devices supported" },
    ],
    codeSnippet: {
      tab: "lib/api.ts",
      lang: "typescript",
      lines: [
        "// Axios client with Sanctum token",
        "const api = axios.create({",
        "  baseURL: import.meta.env.VITE_API_URL,",
        "});",
        "api.interceptors.request.use((config) => {",
        "  const token = localStorage.getItem('token');",
        "  if (token) config.headers.Authorization = `Bearer ${token}`;",
        "  return config;",
        "});",
      ],
    },
  },
  {
    slug: "municipal-library",
    name: "Municipal Library",
    tag: "Full Stack",
    categories: ["Full Stack", "Laravel", "PHP", "MySQL"],
    description:
      "MVC-based library system with book/member CRUD, loan and return tracking, soft deletes and librarian auth.",
    longDescription:
      "The Municipal Library Management System is a full-stack web application built with Laravel following the MVC architecture to modernize municipal library management. It lets librarians manage books, members, borrowings and returns through a secure, responsive interface. The platform delivers complete CRUD for books and members, secure librarian authentication, and an organized workflow for loans and returns — built on Eloquent ORM, Blade templates and MySQL for a maintainable, scalable solution.",
    stack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL", "Eloquent ORM", "JavaScript"],
    liveUrl: null,
    githubUrl: "https://github.com/MohamedOuzzat/Biblioth-que-Municipale",
    featured: false,
    color: "#34D399",
    year: "2025",
    role: "Full Stack Developer",
    highlights: [
      { label: "Books", value: "Full CRUD" },
      { label: "Loans", value: "Tracked" },
      { label: "Recovery", value: "Soft deletes" },
      { label: "Auth", value: "Librarians" },
    ],
    features: [
      { title: "Secure librarian auth", desc: "Authentication restricted to authorized library staff." },
      { title: "Book management", desc: "Full create, read, update and delete for the book catalog." },
      { title: "Member management", desc: "Register and manage library members." },
      { title: "Borrowing workflow", desc: "Issue book loans and track their status." },
      { title: "Return tracking", desc: "Process returns and keep the collection in sync." },
      { title: "Categories & authors", desc: "Organize books by category and author for easy browsing." },
      { title: "Soft deletes", desc: "Recoverable deletions keep the catalog safe." },
      { title: "Validation & errors", desc: "Form validation and clear error handling throughout." },
    ],
    architecture: [
      { title: "Controllers", points: ["RESTful resource controllers", "Form Request validation", "Service layer for loans & returns"] },
      { title: "Views", points: ["Blade templates with layouts", "Tailwind CSS responsive UI", "Reusable components and partials"] },
      { title: "Data", points: ["MySQL relational schema", "Eloquent ORM with relations", "Soft deletes with restore", "Eager loading for optimized queries"] },
    ],
    tech: [
      { name: "Laravel", use: "MVC framework, auth and routing." },
      { name: "PHP", use: "Core language and business logic." },
      { name: "Blade", use: "Server-rendered templates and layouts." },
      { name: "Tailwind CSS", use: "Clean, responsive interface." },
      { name: "JavaScript", use: "Client-side interactions." },
      { name: "MySQL", use: "Books, members and loans persistence." },
      { name: "Eloquent ORM", use: "Relations, scopes and optimized queries." },
      { name: "Laravel Auth", use: "Secure librarian authentication." },
    ],
    challenges: [
      "Keeping loan and return state consistent when books change hands.",
      "Designing a schema that cleanly maps books, authors and categories.",
      "Protecting against accidental deletion of catalog records.",
    ],
    solutions: [
      "Modeled loans as a stateful resource with strict validation on issue and return transitions.",
      "Used normalized pivot tables and Eloquent relations to connect books to authors and categories.",
      "Adopted soft deletes so records can be restored instantly instead of lost.",
    ],
    process: [
      { title: "Analyze", desc: "Studied the municipal library's daily operations and pain points." },
      { title: "Design", desc: "Modeled the schema and planned MVC structure." },
      { title: "Build", desc: "Delivered CRUD modules and the loan/return workflow." },
      { title: "Ship", desc: "Polished validation, errors and the responsive UI." },
    ],
    results: [
      { metric: "Full", label: "Book & member CRUD" },
      { metric: "Real-time", label: "Loan/return state" },
      { metric: "0", label: "Data loss (soft deletes)" },
      { metric: "MVC", label: "Clean architecture" },
    ],
    codeSnippet: {
      tab: "BookController.php",
      lang: "php",
      lines: [
        "// Book CRUD with soft deletes",
        "public function destroy(Book $book) {",
        "  $book->delete(); // soft delete",
        "  return redirect()->route('books.index')",
        "    ->with('success', 'Book archived.');",
        "}",
        "public function restore($id) {",
        "  Book::onlyTrashed()->findOrFail($id)->restore();",
        "  return back()->with('success', 'Book restored.');",
        "}",
      ],
    },
  },
  {
    slug: "oop-payment-system",
    name: "OOP Payment System",
    tag: "Backend",
    categories: ["Backend", "PHP", "MySQL", "OOP"],
    description:
      "PHP 8 CLI payment workflow with polymorphic payment methods, PDO prepared statements and layered architecture.",
    longDescription:
      "The Object-Oriented Payment System is a console-based PHP 8 application that simulates a complete digital payment workflow using modern OOP principles. Built to replace a legacy procedural system, it manages customers, orders and multiple payment methods while guaranteeing data consistency through encapsulation, validation and custom exceptions. A layered architecture separates business logic, data access and domain entities, making the system easy to extend with new payment methods.",
    stack: ["PHP 8", "OOP", "MySQL", "PDO", "Composer", "SQL"],
    liveUrl: null,
    githubUrl: "https://github.com/MohamedOuzzat/Syst-me-de-Paiement",
    featured: false,
    color: "#818CF8",
    year: "2025",
    role: "Backend Developer",
    highlights: [
      { label: "Methods", value: "3+" },
      { label: "Payments", value: "Polymorphic" },
      { label: "Queries", value: "Prepared" },
      { label: "Standards", value: "PSR-4/12" },
    ],
    features: [
      { title: "Customer management", desc: "Create and manage customers through a clean domain model." },
      { title: "Orders & payments", desc: "Create orders and process them against any supported payment method." },
      { title: "Multiple payment methods", desc: "Credit Card, PayPal and Bank Transfer handled polymorphically." },
      { title: "Secure CRUD", desc: "All persistence via PDO prepared statements to prevent SQL injection." },
      { title: "Custom validation", desc: "Domain rules enforced with dedicated custom exceptions." },
      { title: "Layered architecture", desc: "Repositories and services separate business logic from data access." },
    ],
    architecture: [
      { title: "Domain", points: ["Entities for customer, order, payment", "Abstract classes & interfaces", "Custom exceptions for validation"] },
      { title: "Application", points: ["Payment strategy pattern", "Service layer for use cases", "Polymorphic processing dispatch"] },
      { title: "Data", points: ["PDO with prepared statements", "MySQL persistence", "Repository pattern per entity", "PSR-4 Composer autoloading"] },
    ],
    tech: [
      { name: "PHP 8", use: "Modern language features and typed properties." },
      { name: "OOP", use: "Encapsulation, polymorphism and interfaces." },
      { name: "MySQL", use: "Relational persistence for entities." },
      { name: "PDO", use: "Secure, prepared-statement data access." },
      { name: "Composer", use: "PSR-4 autoloading and dependencies." },
      { name: "SQL", use: "Queries and schema definition." },
    ],
    challenges: [
      "Replacing a procedural codebase without breaking existing workflows.",
      "Supporting new payment methods without touching core logic.",
      "Keeping data consistent while enforcing validation across every entity.",
    ],
    solutions: [
      "Designed a UML-based domain model first, then mapped each legacy routine to a dedicated class.",
      "Used a PaymentStrategy pattern with interfaces so adding a method is purely additive.",
      "Centralized validation in domain entities and let custom exceptions fail fast with clear messages.",
    ],
    process: [
      { title: "Model", desc: "Drew UML class and sequence diagrams for the payment domain." },
      { title: "Refactor", desc: "Split the procedural script into domain, application and data layers." },
      { title: "Build", desc: "Implemented repositories, services and polymorphic payment strategies." },
      { title: "Harden", desc: "Added custom exceptions, validation and PSR-12-compliant code." },
    ],
    results: [
      { metric: "3+", label: "Payment methods" },
      { metric: "100%", label: "Prepared statements" },
      { metric: "0", label: "SQL injection surface" },
      { metric: "PSR-12", label: "Clean code" },
    ],
    codeSnippet: {
      tab: "PaymentProcessor.php",
      lang: "php",
      lines: [
        "// Polymorphic payment processing",
        "interface PaymentMethod {",
        "  public function pay(float $amount): void;",
        "}",
        "class PaymentProcessor {",
        "  public function __construct(",
        "    private PaymentMethod $method",
        "  ) {}",
        "  public function process(float $amount): void {",
        "    $this->method->pay($amount);",
        "  }",
        "}",
      ],
    },
  },
  {
    slug: "digital-garden",
    name: "Digital Garden",
    tag: "Full Stack",
    categories: ["Full Stack", "PHP", "MySQL", "Bootstrap"],
    description:
      "Personal knowledge workspace where notes live in colorful themes, with secure auth, CRUD and advanced filtering.",
    longDescription:
      "Digital Garden is a personal knowledge management web application built with PHP 8 and MySQL that helps users organize ideas, projects and personal notes in a secure, customizable digital workspace. Each user owns a private garden where notes are grouped into colorful themes for better organization and productivity. It ships with complete authentication, session management, CRUD for themes and notes, advanced filtering, and secure data handling built on prepared statements and server-side validation.",
    stack: ["PHP 8", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript", "MySQLi"],
    liveUrl: null,
    githubUrl: "https://github.com/MohamedOuzzat/Digital-Garden",
    featured: false,
    color: "#4ADE80",
    year: "2025",
    role: "Full Stack Developer",
    highlights: [
      { label: "Workspace", value: "Private" },
      { label: "Themes", value: "Colorful" },
      { label: "Security", value: "Prepared SQL" },
      { label: "Validation", value: "Dual" },
    ],
    features: [
      { title: "Secure auth & sessions", desc: "Registration, login and session management per user." },
      { title: "Private workspace", desc: "Every user gets their own isolated digital garden." },
      { title: "Theme management", desc: "Create themes with custom colors for organization." },
      { title: "Notes CRUD", desc: "Full create, read, update and delete for notes." },
      { title: "Themed notes", desc: "Associate each note with a custom color theme." },
      { title: "Search & filter", desc: "Filter by theme, importance or keywords." },
      { title: "Responsive UI", desc: "Bootstrap interface that works on any screen." },
      { title: "Hardened security", desc: "Prepared statements, input sanitization and XSS protection." },
    ],
    architecture: [
      { title: "Frontend", points: ["Bootstrap responsive UI", "JavaScript client-side validation", "Theme-colored note cards"] },
      { title: "Application", points: ["Modular page scripts per feature", "Server-side validation", "Session-guarded dashboards"] },
      { title: "Data", points: ["MySQLi prepared statements", "Normalized user/theme/note schema", "Sanitized output for XSS safety"] },
    ],
    tech: [
      { name: "PHP 8", use: "Server-side logic and session handling." },
      { name: "MySQL", use: "Users, themes and notes persistence." },
      { name: "HTML5", use: "Semantic page structure." },
      { name: "CSS3", use: "Custom styling beyond Bootstrap." },
      { name: "Bootstrap", use: "Responsive component framework." },
      { name: "JavaScript", use: "Client-side validation and interactions." },
      { name: "MySQLi", use: "Secure prepared-statement access." },
    ],
    challenges: [
      "Isolating each user's garden from everyone else's.",
      "Filtering notes by theme, importance and keywords in one clean query.",
      "Shielding the app from SQL injection and XSS without a framework.",
    ],
    solutions: [
      "Scoped every query to the logged-in user's id and guarded routes with session checks.",
      "Built a single parameterized filter query with dynamic, validated clauses.",
      "Used MySQLi prepared statements for all input and escaped output on every render.",
    ],
    process: [
      { title: "Concept", desc: "Imagined knowledge as a garden of themed notes." },
      { title: "Design", desc: "Planned the user/theme/note schema and modular structure." },
      { title: "Build", desc: "Implemented auth, CRUD and filtering page by page." },
      { title: "Secure", desc: "Hardened sessions, validation and prepared statements." },
    ],
    results: [
      { metric: "100%", label: "User isolation" },
      { metric: "2", label: "Validation layers" },
      { metric: "0", label: "Injection surface" },
      { metric: "Responsive", label: "All devices" },
    ],
    codeSnippet: {
      tab: "notes/filter.php",
      lang: "php",
      lines: [
        "// Safe, parameterized note filtering",
        "$sql = 'SELECT * FROM notes",
        "        WHERE user_id = ?';",
        "$params = [$userId];",
        "if ($themeId) {",
        "  $sql .= ' AND theme_id = ?';",
        "  $params[] = $themeId;",
        "}",
        "$stmt = $mysqli->prepare($sql);",
        "$stmt->bind_param(str_repeat('i', count($params)), ...$params);",
        "$stmt->execute();",
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
