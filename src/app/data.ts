import {
  Code, Brain, BarChart2, Rocket, Package, Clock, Globe,
  Users, Award, Briefcase, Shield, Zap, BookOpen, Target,
  MessageSquare, TrendingUp, Star,
} from "lucide-react";

export const tracks = [
  {
    icon: Code,
    tag: "Engineering",
    title: "Backend Web Engineering Mastery",
    forWho: "Junior devs who can build basic apps but haven't shipped production-grade systems.",
    gains: [
      "RESTful & GraphQL API design",
      "Authentication & security systems",
      "Database modeling & optimization",
      "Cloud deployment (AWS / GCP / Heroku)",
      "Performance monitoring & debugging",
    ],
    outcome: "3 production-ready backend systems in your portfolio. Confidence to compete for mid-to-senior engineering roles.",
    practical: "Build a real SaaS API, deploy it live, and present it to an industry panel of engineers.",
  },
  {
    icon: Brain,
    tag: "AI Marketing",
    title: "AI Marketing & Automation Mastery",
    forWho: "Marketers, content creators, and entrepreneurs ready to lead with AI-powered strategy.",
    gains: [
      "Advanced prompt engineering",
      "AI workflow design & automation",
      "Content systems & scalable publishing",
      "Campaign analytics & attribution",
      "Marketing funnel optimization",
    ],
    outcome: "An AI-powered marketing portfolio that positions you as a forward-thinking marketing leader.",
    practical: "Design and launch a real AI-powered campaign. Present metrics to working marketing professionals.",
  },
  {
    icon: BarChart2,
    tag: "Data & BI",
    title: "GenAI for Data Analysis & BI Mastery",
    forWho: "Data enthusiasts who want to transform raw numbers into strategic business intelligence.",
    gains: [
      "Python for data analysis",
      "SQL & database querying",
      "Power BI & Tableau dashboards",
      "AI-enhanced analytical workflows",
      "Business storytelling with data",
    ],
    outcome: "Live BI dashboards and the ability to lead data conversations in any boardroom.",
    practical: "Analyze a real dataset, build a live BI dashboard, and present insights to business stakeholders.",
  },
  {
    icon: Package,
    tag: "Product",
    title: "Advanced Product Management & Strategy Mastery",
    forWho: "Builders, aspiring PMs, and professionals who want to lead products from idea to market.",
    gains: [
      "Product discovery & validation",
      "Roadmapping & prioritization",
      "User research & journey mapping",
      "Stakeholder management",
      "Go-to-market strategy",
    ],
    outcome: "A complete PM case study portfolio and the toolkit to compete for product leadership roles.",
    practical: "Take a real product brief, run discovery, write the PRD, and pitch to a panel of product leaders.",
  },
  {
    icon: Rocket,
    tag: "Startups",
    title: "Entrepreneurship & Startup Development Mastery",
    forWho: "Early-stage founders and builders with ideas that need structure, strategy, and execution.",
    gains: [
      "Lean startup methodology",
      "Business model canvas & validation",
      "MVP design & development",
      "Pitch deck creation",
      "Fundraising fundamentals",
    ],
    outcome: "A pitch-ready MVP, investor-facing documentation, and the founder confidence to take your idea to market.",
    practical: "Build, test, and pitch your MVP to a real panel of investors and industry mentors.",
  },
];

export const differentiators = [
  { icon: Award, title: "Not a Bootcamp. A Graduate Program.", desc: "This is what comes after the bootcamp. We don't teach basics, we transform people who know basics into professionals who execute, lead, and earn." },
  { icon: Users, title: "Real Mentorship. Not Pre-Recorded Videos.", desc: "Direct, regular access to industry professionals with 5+ years of building real products and companies. Your mentor knows your name." },
  { icon: Target, title: "Small Cohort. Deep Impact.", desc: "10–15 participants per track. You receive focused attention, direct feedback, and genuine relationships that last beyond graduation." },
  { icon: Zap, title: "Execution Over Theory.", desc: "Every week involves building, presenting, and iterating. No passive consumption. If you can't demonstrate it, we haven't done our job." },
  { icon: Globe, title: "Industry Exposure Built In.", desc: "Guest sessions with working professionals, site visits to real companies, and a Demo Day where you present to actual industry panels." },
  { icon: TrendingUp, title: "Career Positioning That Works.", desc: "LinkedIn optimization, personal brand strategy, portfolio reviews, and job-readiness support are core curriculum, not afterthoughts." },
];

export const learningItems = [
  { icon: BookOpen, label: "Live cohort sessions, 2× weekly" },
  { icon: Users, label: "1-on-1 mentorship sessions" },
  { icon: Briefcase, label: "Real-world project briefs" },
  { icon: MessageSquare, label: "Peer accountability pods (3–4 people)" },
  { icon: Star, label: "Industry expert guest sessions" },
  { icon: Award, label: "Demo Day — present to real professionals" },
  { icon: Clock, label: "Open office hours every week" },
  { icon: Globe, label: "Site visits to industry companies" },
  { icon: Shield, label: "Lifetime community access (Slack / WhatsApp)" },
];

export const benefits = [
  { icon: Shield, title: "Confidence Building", desc: "Know exactly what you can do, articulate it clearly, and walk into any room ready." },
  { icon: Briefcase, title: "Portfolio Development", desc: "Leave with real, deployable projects that demonstrate actual industry capability." },
  { icon: Award, title: "Industry Readiness", desc: "Understand and meet the standards that top employers and clients actually expect." },
  { icon: MessageSquare, title: "Professional Communication", desc: "Speak the language of business, present your ideas confidently, and lead conversations." },
  { icon: TrendingUp, title: "Career Positioning", desc: "Know how to apply strategically, negotiate your worth, and grow intentionally." },
  { icon: Globe, title: "Network Access", desc: "Mentors, alumni, industry professionals, and a community of serious tech builders." },
];

export const experience = [
  "Program Workbook — your physical guide through the curriculum",
  "RAD5 TechX T-Shirt — wear it knowing you earned it",
  "WhatsApp / Slack Community — lifetime access after graduation",
  "Small cohort (10–15) — real relationships, not a crowd",
  "1-on-1 mentor access — available throughout, not just in sessions",
  "Weekly accountability check-ins — no one falls behind here",
];

export const shouldApply = [
  "You've completed a bootcamp or government program (3MTT, TechRise, Tech Hub Bootcamps, etc.)",
  "You're self-taught and genuinely ready to go beyond tutorials",
  "You have basic skills but haven't built anything production-grade",
  "You're applying for jobs but not getting real traction",
  "You want direct mentorship, structure, and accountability",
  "You're serious about a professional career in tech",
];

export const shouldNotApply = [
  "Complete beginners with no prior tech exposure",
  "People not ready to commit 12 intensive weeks",
  "Those looking for passive, pre-recorded video content",
];

export const testimonials = [
  {
    name: "Chukwuemeka Obi",
    role: "Backend Developer",
    source: "3MTT Graduate",
    text: "I finished 3MTT with some React knowledge but had no idea how to get hired. RAD5 TechX changed everything. I built three real APIs, got direct mentorship, and landed my first tech contract within six weeks of graduating. This is the missing layer.",
    initials: "CO",
  },
  {
    name: "Amara Eze",
    role: "Product Designer",
    source: "Self-taught",
    text: "I was stuck for two years on YouTube tutorials. This program gave me structure, real accountability, and a portfolio that actually impressed hiring managers. I got three interview calls in my first week of applying.",
    initials: "AE",
  },
  {
    name: "Tobi Adeyemi",
    role: "Data Analyst",
    source: "Udemy Graduate",
    text: "I thought I understood data analysis. RAD5 TechX showed me what industry-standard actually looks like. The mentors don't just teach — they challenge you to think like a professional. My dashboards now get attention in boardrooms.",
    initials: "TA",
  },
  {
    name: "Ngozi Nwachukwu",
    role: "Startup Founder",
    source: "Early-stage Builder",
    text: "The Entrepreneurship track gave me more than frameworks. I left with a polished pitch deck, a working MVP, and the confidence to talk to investors. We closed our first pre-seed round 10 weeks after Demo Day.",
    initials: "NN",
  },
];

export const faqs = [
  { q: "I already learned tech skills. Why should I join RAD5 TechX Graduate Program?", a: "Because learning and executing are two very different things. Most programs teach concepts, RAD5 TechX Graduate Program teaches you to apply them at industry level, build real systems, and position yourself for the career you want. If you know the basics, this is exactly what comes next." },
  { q: "What if I'm not confident enough?", a: "Confidence is what we build here. You don't need to arrive confident, you need to arrive committed. Our curriculum progressively moves you from uncertainty to clarity through real projects, direct mentorship, and structured execution." },
  { q: "Is this program beginner-friendly?", a: "RAD5 TechX is a graduate-level acceleration program, not a beginner bootcamp. You should have completed at least one foundational tech program or have equivalent self-taught experience before applying." },
  { q: "Will I actually build real projects?", a: "Yes. every track is built around real project execution. You won't build tutorial clones. You'll tackle real briefs, build deployable systems, and present your work to industry professionals." },
  { q: "Will I get one-on-one mentorship?", a: "Yes. Individual mentorship sessions are built into the program structure. You'll have regular 1-on-1 time with experienced industry professionals in your specific track, not generic coaches." },
  { q: "Can I pay in installments?", a: "Yes. We offer a structured installment payment option. Reach out to our admissions team for plan details. Installment availability is subject to cohort availability." },
  { q: "How practical is the curriculum really?", a: "Very. We spend less than 30% of program time on theory. The remaining 70% is active execution, building, presenting, iterating, and receiving feedback from industry professionals." },
];