export interface Skill {
  id: string;
  name: string;
  description: string;
}

export interface RoleLevel {
  level: string;
  title: string;
  skills: string[];
  description: string;
}

export interface Role {
  id: string;
  title: string;
  category: string;
  description: string;
  levels: RoleLevel[];
  relatedRoles: string[];
  skills: string[];
  videoUrl?: string;
  tips: string[];
  synonyms?: string[];
}

export const skills: Skill[] = [
  { id: "risk-management", name: "Risk Management", description: "Identifying, assessing, and prioritizing risks to organizational assets." },
  { id: "audit-assurance", name: "Audit & Assurance", description: "Independent examination of records and activities to ensure compliance." },
  { id: "digital-forensics", name: "Digital Forensics", description: "Recovery and investigation of material found in digital devices." },
  { id: "incident-management", name: "Incident Management", description: "Monitoring and managing security incidents to restore service." },
  { id: "threat-monitoring", name: "Threat Monitoring", description: "Continuous observation of networks and systems for security threats." },
  { id: "secure-design", name: "Secure Systems Design", description: "Designing systems with security controls built in from the start." },
  { id: "security-testing", name: "Security Testing", description: "Testing systems to find vulnerabilities (e.g., penetration testing)." },
  { id: "vulnerability-management", name: "Vulnerability Management", description: "Identifying, evaluating, treating, and reporting on security vulnerabilities." },
  { id: "cryptography", name: "Cryptography", description: "Protecting information through codes and ciphers." },
  { id: "network-security", name: "Network Security", description: "Protecting the underlying networking infrastructure from unauthorized access." },
  { id: "strategic-thinking", name: "Strategic Thinking", description: "Ability to think long-term and align work with organizational goals" },
  { id: "communication", name: "Communication", description: "Effective verbal and written communication skills" },
  { id: "leadership", name: "Leadership", description: "Ability to lead and inspire teams" },
  { id: "problem-solving", name: "Problem Solving", description: "Creative and analytical approach to challenges" },
];

export const roles: Role[] = [
  {
    id: "cyber-security-audit-assurance",
    title: "Cyber Security Audit and Assurance",
    category: "Governance & Risk",
    description: "Audit and Assurance professionals review systems and processes to ensure they meet security standards and compliance requirements.",
    levels: [
      {
        level: "Associate",
        title: "Associate Auditor",
        skills: ["communication", "audit-assurance", "problem-solving"],
        description: "Assists in security audits and compliance checks under supervision."
      },
      {
        level: "Practitioner",
        title: "Security Auditor",
        skills: ["audit-assurance", "risk-management", "communication", "network-security"],
        description: "Leads audit activities, reports findings, and recommends improvements."
      },
      {
        level: "Senior",
        title: "Senior Security Auditor",
        skills: ["audit-assurance", "leadership", "strategic-thinking", "risk-management"],
        description: "Oversees audit programs, defines assurance strategies, and manages stakeholder relationships."
      }
    ],
    relatedRoles: ["cyber-security-governance-risk-management", "security-testing"],
    skills: ["audit-assurance", "risk-management", "communication", "problem-solving", "network-security"],
    tips: [
      "Gain understanding of security standards (ISO 27001, NIST).",
      "Develop strong report writing skills.",
      "Learn about different technology stacks and their security implications."
    ]
  },
  {
    id: "cyber-security-governance-risk-management",
    title: "Cyber Security Governance and Risk Management",
    category: "Governance & Risk",
    description: "Governance and Risk professionals define security strategies, policies, and manage organizational cyber risk.",
    levels: [
      {
        level: "Associate",
        title: "Associate Risk Analyst",
        skills: ["risk-management", "communication", "problem-solving"],
        description: "Supports risk assessments and policy maintenance."
      },
      {
        level: "Practitioner",
        title: "Risk Manager",
        skills: ["risk-management", "governance", "strategic-thinking", "communication"],
        description: "Conducts risk assessments, develops policies, and advises on risk mitigation."
      },
      {
        level: "Senior",
        title: "Senior Risk Manager",
        skills: ["risk-management", "leadership", "strategic-thinking", "communication"],
        description: "Sets governance frameworks, manages enterprise risk, and aligns security with business goals."
      }
    ],
    relatedRoles: ["cyber-security-audit-assurance", "secure-systems-architecture-design"],
    skills: ["risk-management", "communication", "strategic-thinking", "problem-solving"],
    tips: [
      "Understand business processes and how security impacts them.",
      "Learn risk assessment methodologies.",
      "Stay updated on regulatory requirements."
    ]
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    category: "Operations",
    description: "Digital Forensics professionals recover, analyze, and present data from digital devices for legal and investigative purposes.",
    levels: [
      {
        level: "Associate",
        title: "Associate Forensic Analyst",
        skills: ["digital-forensics", "problem-solving", "technical-expertise"],
        description: "Assists in evidence collection and basic analysis."
      },
      {
        level: "Practitioner",
        title: "Forensic Analyst",
        skills: ["digital-forensics", "incident-management", "communication", "problem-solving"],
        description: "Conducts complex forensic investigations and produces evidentiary reports."
      },
      {
        level: "Senior",
        title: "Senior Forensic Lead",
        skills: ["digital-forensics", "leadership", "strategic-thinking", "incident-management"],
        description: "Leads forensic teams, manages complex cases, and provides expert testimony."
      }
    ],
    relatedRoles: ["incident-response", "monitoring"],
    skills: ["digital-forensics", "problem-solving", "incident-management", "communication"],
    tips: [
      "Gain proficiency in forensic tools (EnCase, FTK).",
      "Understand legal procedures and chain of custody.",
      "Develop strong analytical and attention-to-detail skills."
    ]
  },
  {
    id: "incident-response",
    title: "Incident Response",
    category: "Operations",
    description: "Incident Responders investigate and remediate cyber security incidents to minimize impact and restore operations.",
    levels: [
      {
        level: "Associate",
        title: "Associate Incident Responder",
        skills: ["incident-management", "problem-solving", "communication"],
        description: "Triages alerts and assists in incident handling."
      },
      {
        level: "Practitioner",
        title: "Incident Responder",
        skills: ["incident-management", "digital-forensics", "network-security", "communication"],
        description: "Investigates incidents, performs root cause analysis, and coordinates containment."
      },
      {
        level: "Senior",
        title: "Senior Incident Manager",
        skills: ["incident-management", "leadership", "strategic-thinking", "crisis-management"],
        description: "Leads major incident response, manages crisis communications, and improves response plans."
      }
    ],
    relatedRoles: ["digital-forensics", "monitoring", "vulnerability-management"],
    skills: ["incident-management", "problem-solving", "digital-forensics", "network-security", "communication"],
    tips: [
      "Practice handling stress under pressure.",
      "Deepen knowledge of operating system internals and networking.",
      "Participate in CTF competitions."
    ]
  },
  {
    id: "monitoring",
    title: "Monitoring",
    category: "Operations",
    description: "Monitoring professionals observe networks and systems to detect anomalies and potential security threats.",
    levels: [
      {
        level: "Associate",
        title: "Security Analyst",
        skills: ["threat-monitoring", "problem-solving", "communication"],
        description: "Monitors security consoles and performs initial triage of events."
      },
      {
        level: "Practitioner",
        title: "Senior Security Analyst",
        skills: ["threat-monitoring", "incident-management", "network-security", "data-analysis"],
        description: "Analyzes complex threats, tunes monitoring tools, and mentors juniors."
      },
      {
        level: "Senior",
        title: "SOC Manager",
        skills: ["threat-monitoring", "leadership", "strategic-thinking", "incident-management"],
        description: "Manages the Security Operations Center (SOC), defines monitoring strategy, and reports on metrics."
      }
    ],
    relatedRoles: ["incident-response", "vulnerability-management"],
    skills: ["threat-monitoring", "network-security", "problem-solving", "incident-management"],
    tips: [
      "Learn how to use SIEM tools.",
      "Understand network protocols and traffic analysis.",
      "Develop skills in scripting and automation."
    ]
  },
  {
    id: "secure-systems-architecture-design",
    title: "Secure Systems Architecture and Design",
    category: "Architecture & Engineering",
    description: "Secure Systems Architects design secure IT systems and networks, ensuring security is integrated into the infrastructure.",
    levels: [
      {
        level: "Associate",
        title: "Associate Security Architect",
        skills: ["secure-design", "problem-solving", "communication"],
        description: "Assists in security design reviews and supports senior architects."
      },
      {
        level: "Practitioner",
        title: "Security Architect",
        skills: ["secure-design", "network-security", "cryptography", "communication"],
        description: "Designs secure solutions, reviews technical architectures, and ensures compliance with standards."
      },
      {
        level: "Senior",
        title: "Senior Security Architect",
        skills: ["secure-design", "leadership", "strategic-thinking", "systems-thinking"],
        description: "Defines enterprise security architecture, leads major design initiatives, and aligns technology with business strategy."
      }
    ],
    relatedRoles: ["cyber-security-governance-risk-management", "security-testing"],
    skills: ["secure-design", "network-security", "cryptography", "communication", "systems-thinking"],
    tips: [
      "Gain broad technical knowledge (cloud, network, app sec).",
      "Learn architectural frameworks (SABSA, TOGAF).",
      "Understand threat modeling techniques."
    ]
  },
  {
    id: "security-testing",
    title: "Security Testing",
    category: "Architecture & Engineering",
    description: "Security Testers (Penetration Testers) simulate attacks to identify vulnerabilities in systems and applications.",
    levels: [
      {
        level: "Associate",
        title: "Associate Tester",
        skills: ["security-testing", "problem-solving", "communication"],
        description: "Performs basic vulnerability scans and simple tests under supervision."
      },
      {
        level: "Practitioner",
        title: "Penetration Tester",
        skills: ["security-testing", "network-security", "scripting", "communication"],
        description: "Conducts penetration tests, exploits vulnerabilities, and writes technical reports."
      },
      {
        level: "Senior",
        title: "Senior Tester / Red Team Lead",
        skills: ["security-testing", "leadership", "strategic-thinking", "secure-design"],
        description: "Leads complex engagements, red team operations, and advises on remediation strategies."
      }
    ],
    relatedRoles: ["vulnerability-management", "secure-systems-architecture-design"],
    skills: ["security-testing", "network-security", "problem-solving", "communication"],
    tips: [
      "Master hacking tools and techniques (Kali Linux, Metasploit).",
      "Learn web application security (OWASP Top 10).",
      "Get certified (OSCP, CEH)."
    ]
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    category: "Operations",
    description: "Vulnerability Management professionals identify, prioritize, and manage the remediation of security vulnerabilities.",
    levels: [
      {
        level: "Associate",
        title: "Vulnerability Analyst",
        skills: ["vulnerability-management", "communication", "problem-solving"],
        description: "Runs scans and helps track remediation efforts."
      },
      {
        level: "Practitioner",
        title: "Vulnerability Manager",
        skills: ["vulnerability-management", "risk-management", "network-security", "communication"],
        description: "Analyzes scan results, prioritizes fixes based on risk, and coordinates with patch teams."
      },
      {
        level: "Senior",
        title: "Senior Vulnerability Manager",
        skills: ["vulnerability-management", "leadership", "strategic-thinking", "risk-management"],
        description: "Oversees the VM program, defines policies, and reports on organizational risk posture."
      }
    ],
    relatedRoles: ["security-testing", "monitoring", "incident-response"],
    skills: ["vulnerability-management", "risk-management", "communication", "problem-solving"],
    tips: [
      "Understand vulnerability scoring systems (CVSS).",
      "Learn about patch management processes.",
      "Develop skills in data analysis and reporting."
    ]
  }
];

export const categories = [
  { id: "Governance & Risk", name: "Governance & Risk", description: "Directing and controlling security strategy and risk" },
  { id: "Operations", name: "Operations", description: "Day-to-day security monitoring, defense, and response" },
  { id: "Architecture & Engineering", name: "Architecture & Engineering", description: "Designing and building secure systems" },
];
