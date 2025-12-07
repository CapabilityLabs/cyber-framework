export type ChannelKey = "careers" | "skills" | "learn" | "insight" | "tools";

export type ChannelHighlight = {
  title: string;
  description: string;
};

export type ChannelQuickLink = {
  label: string;
  href: string;
};

export type ChannelConfig = {
  key: ChannelKey;
  label: string;
  summary: string;
  description: string;
  audience: string;
  analogy: string;
  color: string;
  tint: string;
  highlights: ChannelHighlight[];
  quickLinks: ChannelQuickLink[];
};

const channels: Record<ChannelKey, ChannelConfig> = {
  careers: {
    key: "careers",
    label: "Careers",
    summary: "Join and grow in GDD roles across government.",
    description:
      "Explore roles, progression routes, early talent programmes and candidate support for joining Government Digital & Data teams.",
    audience: "Candidates, students, early-career talent and external specialists.",
    analogy: "GDS talent campaigns — a national destination for opportunities.",
    color: "#FF6B2C",
    tint: "#FFF3EC",
    highlights: [
      {
        title: "Live opportunities",
        description: "See open GDD vacancies, early talent intakes and secondments.",
      },
      {
        title: "Candidate guidance",
        description: "Download packs, EVP stories and tips for navigating recruitment.",
      },
      {
        title: "Inclusive pathways",
        description: "Discover tailored support for diverse talent and ex-military joiners.",
      },
    ],
    quickLinks: [
      { label: "Search GDD jobs", href: "/search?channel=careers" },
      { label: "Early talent offers", href: "/careers#early-talent" },
      { label: "Candidate pack", href: "/careers#candidate-pack" },
    ],
  },
  skills: {
    key: "skills",
    label: "Skills",
    summary: "Unify every role, level and capability framework.",
    description:
      "Browse the GDD and Cyber capability frameworks, compare skills taxonomies and understand expectations at each grade.",
    audience: "Candidates, current civil servants, hiring teams and planners.",
    analogy: "GDD playbook — structured, taxonomy-led journeys.",
    color: "#93328E",
    tint: "#F8F0FA",
    highlights: [
      {
        title: "Role explorer",
        description: "Search across frameworks to see role families, levels and overlaps.",
      },
      {
        title: "Skills taxonomy",
        description: "Navigate shared skills language to support hiring and workforce planning.",
      },
      {
        title: "Capability guidance",
        description: "Detailed notes on responsibilities, behaviours and assessment.",
      },
    ],
    quickLinks: [
      { label: "GDD Framework", href: "/skills#gdd" },
      { label: "Cyber roles (beta)", href: "/skills#cyber" },
      { label: "Compare roles", href: "/skills#compare" },
    ],
  },
  learn: {
    key: "learn",
    label: "Learn",
    summary: "Training, pathways and professional development.",
    description:
      "Map courses, academies and curated content to the skills you need for your next move in digital and data.",
    audience: "Civil servants, apprentices, returners and internal movers.",
    analogy: "GDS Academy playlists — consumable experiences and pathways.",
    color: "#FFB800",
    tint: "#FFF8E1",
    highlights: [
      {
        title: "Learning journeys",
        description: "Follow curated pathways linked to GDD and Cyber capability gaps.",
      },
      {
        title: "Provider directory",
        description: "Browse GDS Academy offers, e-learning and partner programmes.",
      },
      {
        title: "Upskill suggestions",
        description: "Future AI recommendations that surface the next best module.",
      },
    ],
    quickLinks: [
      { label: "Browse pathways", href: "/learn#pathways" },
      { label: "See providers", href: "/learn#providers" },
      { label: "Book academy courses", href: "/learn#academy" },
    ],
  },
  insight: {
    key: "insight",
    label: "Insight",
    summary: "Stories, research and leadership voice.",
    description:
      "Keep up with GDS and DSIT updates, ministerial briefings, research and transformation stories that shape digital government.",
    audience: "Sector-wide community — internal, external, academia and partners.",
    analogy: "DSIT briefings — authoritative storytelling and analysis.",
    color: "#0057B8",
    tint: "#E6F0FF",
    highlights: [
      {
        title: "Leadership updates",
        description: "Statements and commentary from ministers and senior digital leaders.",
      },
      {
        title: "Research library",
        description: "Evidence, reports and playbooks on government transformation.",
      },
      {
        title: "Case studies",
        description: "Best practice showcases from across government departments.",
      },
    ],
    quickLinks: [
      { label: "Latest blog posts", href: "/insight#blog" },
      { label: "Research hub", href: "/insight#research" },
      { label: "Transformation stories", href: "/insight#stories" },
    ],
  },
  tools: {
    key: "tools",
    label: "Tools",
    summary: "Interactive utilities for career and skills journeys.",
    description:
      "Experiment with job matching, JD building, skills diagnostics and calculators that make planning careers easier.",
    audience: "Candidates, employees and hiring teams seeking utility.",
    analogy: "GDS service toolkit — practical digital services.",
    color: "#009C6B",
    tint: "#E6F7F1",
    highlights: [
      {
        title: "Role matcher",
        description: "Map your CV or LinkedIn profile to the closest GDD roles.",
      },
      {
        title: "JD assessment",
        description: "Benchmark job descriptions against the standards.",
      },
      {
        title: "Planning calculators",
        description: "Track skill gaps and learning hours with lightweight tools.",
      },
    ],
    quickLinks: [
      { label: "Try the matcher", href: "/tools#matcher" },
      { label: "JD assessment (beta)", href: "/tools#jd" },
      { label: "All utilities", href: "/tools#utilities" },
    ],
  },
};

export const channelList: ChannelConfig[] = Object.values(channels);

export const getChannelConfig = (key: ChannelKey) => channels[key];


