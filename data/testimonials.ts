export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  gradient: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mohamed rebuilt our entire car rental flow and it went from 'works' to 'wow'. The trilingual PDF contracts alone saved us hours a day. A developer who genuinely cares about craft.",
    name: "Client",
    role: "Platform Owner",
    company: "CARFORFAR",
    initials: "MO",
    gradient: "linear-gradient(135deg, #3B82F6, #A78BFA)",
    rating: 5,
  },
  {
    quote:
      "The ITSM automation he delivered cut our incident triage time dramatically. Flows are clean, documented, and the team actually enjoys using ServiceNow now.",
    name: "IT Manager",
    role: "Enterprise Operations",
    company: "UX4MATION Client",
    initials: "IM",
    gradient: "linear-gradient(135deg, #22D3EE, #3B82F6)",
    rating: 5,
  },
  {
    quote:
      "Rare mix of frontend taste and backend rigor. Mohamed thinks about the user, the API contract, and the edge cases — usually before you ask.",
    name: "Mentor",
    role: "Lead Instructor",
    company: "YouCode × Simplon",
    initials: "YS",
    gradient: "linear-gradient(135deg, #A78BFA, #EC4899)",
    rating: 5,
  },
  {
    quote:
      "Shipped the Service Portal widget ahead of schedule and it looked better than our internal design mock. Reliable, communicative, and fast.",
    name: "Product Lead",
    role: "ServiceNow Practice",
    company: "UX4MATION",
    initials: "PL",
    gradient: "linear-gradient(135deg, #10B981, #22D3EE)",
    rating: 5,
  },
  {
    quote:
      "Our expense tracker went from spreadsheet chaos to something our whole house uses daily. The debt settlement feature is genuinely clever.",
    name: "Colleague",
    role: "EasyColoc User",
    company: "Shared Household",
    initials: "CH",
    gradient: "linear-gradient(135deg, #F59E0B, #F43F5E)",
    rating: 4,
  },
  {
    quote:
      "Self-taught discipline plus a real eye for premium UI. Watching his portfolio evolve over a year was watching a developer level up in fast-forward.",
    name: "Peer",
    role: "Fellow Developer",
    company: "YouCode",
    initials: "FD",
    gradient: "linear-gradient(135deg, #8B5CF6, #22D3EE)",
    rating: 5,
  },
];
