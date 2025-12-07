export type SupplierType = "Government" | "Public Sector Partner" | "External";

export type LearningResource = {
  id: string;
  title: string;
  description: string;
  supplierName: string;
  supplierType: SupplierType;
  format: "Course" | "Learning Path" | "Guide" | "Video" | "Workshop" | "Certification";
  url: string;
  tags: string[];
};

export const learningResources: LearningResource[] = [
  {
    id: "ncsc-certified-training",
    title: "NCSC Certified Cyber Security Training",
    description: "Training courses certified by the National Cyber Security Centre (NCSC) covering a wide range of cyber disciplines.",
    supplierName: "NCSC",
    supplierType: "Public Sector Partner",
    format: "Course",
    url: "https://www.ncsc.gov.uk/section/education-and-skills/ncct",
    tags: ["cyber-security", "certification", "ncsc"],
  },
  {
    id: "cybok-knowledge",
    title: "CyBOK: Cyber Security Body of Knowledge",
    description: "A comprehensive body of knowledge to inform and underpin education and professional training for the cyber security sector.",
    supplierName: "CyBOK",
    supplierType: "Public Sector Partner",
    format: "Guide",
    url: "https://www.cybok.org/",
    tags: ["cyber-security", "foundations", "knowledge-base"],
  },
  {
    id: "sans-institute",
    title: "SANS Institute Cyber Security Training",
    description: "Hands-on cyber security training, certifications, and research.",
    supplierName: "SANS Institute",
    supplierType: "External",
    format: "Course",
    url: "https://www.sans.org/",
    tags: ["cyber-security", "incident-response", "forensics", "penetration-testing"],
  },
  {
    id: "isc2-cissp",
    title: "CISSP - Certified Information Systems Security Professional",
    description: "Advanced security certification for experienced security practitioners, managers, and executives.",
    supplierName: "ISC2",
    supplierType: "External",
    format: "Certification",
    url: "https://www.isc2.org/Certifications/CISSP",
    tags: ["security-management", "certification", "leadership"],
  },
  {
    id: "comptia-security",
    title: "CompTIA Security+",
    description: "Global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
    supplierName: "CompTIA",
    supplierType: "External",
    format: "Certification",
    url: "https://www.comptia.org/certifications/security",
    tags: ["security-foundations", "certification", "entry-level"],
  },
  {
    id: "open-learn-cyber",
    title: "Introduction to Cyber Security: Stay Safe Online",
    description: "Learn how to stay safe online, covering malware, network security, cryptography, and identity theft.",
    supplierName: "OpenLearn (The Open University)",
    supplierType: "External",
    format: "Course",
    url: "https://www.open.edu/openlearn/science-maths-technology/introduction-cyber-security-stay-safe-online/content-section-overview",
    tags: ["cyber-security", "awareness", "safety"],
  },
  {
    id: "ncsc-secure-design",
    title: "Secure by Design",
    description: "NCSC guidance on designing systems with security embedded across the software lifecycle.",
    supplierName: "NCSC",
    supplierType: "Public Sector Partner",
    format: "Guide",
    url: "https://www.ncsc.gov.uk/collection/secure-development-and-deployment",
    tags: ["security", "secure-by-design", "sdlc"],
  },
  {
    id: "pluralsight-secops",
    title: "DevSecOps: Security in the SDLC",
    description: "Integrate security practices into CI/CD pipelines and development workflows.",
    supplierName: "Pluralsight",
    supplierType: "External",
    format: "Course",
    url: "https://www.pluralsight.com/",
    tags: ["devsecops", "security", "ci-cd"],
  },
  {
    id: "aws-security-specialty",
    title: "AWS Certified Security - Specialty",
    description: "Validates expertise in securing data and workloads in the AWS Cloud.",
    supplierName: "AWS",
    supplierType: "External",
    format: "Certification",
    url: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["cloud-security", "aws", "certification"],
  },
];

