export const personalData = {
  name: "Sahil Bansal",
  title: "DevOps & Cloud Infrastructure Engineer",
  headline: "I build cloud systems that don't break at 3am.",
  about: "From zero-downtime migrations to cost-optimized infrastructure. I obsess over reliability, automation, and giving teams the confidence to deploy. Currently architecting scalable infrastructure at Buyogo AG.",
  email: "sahilbansal.sb24@gmail.com",
}

export const socialsData = [
  { name: "LinkedIn", href: "https://linkedin.com/in/sahilbansal24", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/sahilbnsll", icon: "github" },
]

export const portfoliosData = [
  { name: "Main Portfolio", href: "https://sahilbansal.vercel.app/" },
  { name: "Showproof", href: "https://showproof.io/@sahil" }
]

export const experienceData = [
  {
    company: "Buyogo AG",
    role: "Software Engineer — DevOps & Cloud Infrastructure",
    date: "Jun 2024 - Present",
    description: [
      "Architected a 99.99% available multi-tenant FTP ingress platform (500+ merchants) using SFTP-gateway and automated AWS provisioning.",
      "Led ClickOps → Terraform migration + CI/CD modernization (GitHub Actions), reducing TTR by 40% and improving velocity by 30%.",
      "Drove outcomes: 40% AWS spend reduction (~$40k/yr), stronger observability (Prometheus/Grafana), zero-downtime Auth0 migration."
    ]
  },
  {
    company: "ZabeSync",
    role: "Workflow Automation Engineer - Freelance",
    date: "Mar 2026 - Apr 2026",
    description: [
      "Designed and deployed ZabeSync: an end-to-end LinkedIn content automation pipeline (n8n on AWS EC2, Docker) with Discord control plane.",
      "Built AI-assisted daily ideation + research workflows with deduped content delivery via Discord and Google Drive.",
    ]
  },
  {
    company: "Capgemini",
    role: "Analyst Trainee — Cloud & DevOps",
    date: "Jan 2024 - Jun 2024",
    description: [
      "Refactored monolithic CI/CD pipelines into modular stages, increasing success rates by 15%.",
      "Integrated Prometheus alerting with Slack, reducing incident response time by 20%."
    ]
  },
  {
    company: "Qapita Fintech",
    role: "Software Engineer — DevSecOps",
    date: "Jun 2023 - Nov 2023",
    description: [
      "Embedded security gates in AWS CodeBuild, preventing 95% of critical CVEs.",
      "Migrated logging storage to AWS EFS, improving query performance by 30%."
    ]
  }
]

export const educationData = [
  {
    school: "University of Petroleum and Energy Studies",
    degree: "B.Tech in Computer Science and Engineering",
    date: "2019 - 2023",
    description: "Specialization in DevOps & Cloud Infrastructure. CGPA: 7.86/10. Published research on microservices architecture and cloud-native security."
  }
]

export const skillsCarousel = [
  "Supabase", "AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", 
  "Prometheus", "Grafana", "PostgreSQL", "Python", "Bash", 
  "MongoDB", "CloudFormation", "ClickHouse", "n8n"
]

export const detailedSkills = [
  { category: "Cloud & Infrastructure", skills: ["AWS", "Kubernetes", "Docker"] },
  { category: "Infrastructure as Code", skills: ["Terraform", "AWS CloudFormation"] },
  { category: "CI/CD & Automation", skills: ["GitHub Actions", "Jenkins", "AWS CodeBuild"] },
  { category: "Observability & Monitoring", skills: ["Prometheus", "Grafana", "AWS CloudWatch"] },
  { category: "Data Engineering", skills: ["Dagster", "DLT", "DBT", "ClickHouse"] },
  { category: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Programming & Scripting", skills: ["Python", "Bash", "HCL", "YAML"] },
  { category: "Security & DevSecOps", skills: ["IAM", "Auth0", "DevSecOps"] },
]

export const projectsData = [
  {
    name: "Claude Superpack",
    description: "Built a 33-skill agentic orchestration system for Claude Code featuring persistent memory, blast-radius-aware codebase graphs, parallel worker coordination, and self-improving behavior.",
    tags: ["Claude Code", "AI Agents", "TypeScript", "Node.js"],
    href: "https://github.com/sahilbnsll/claude-superpack"
  },
  {
    name: "LumaCV: AI Resume Intelligence",
    description: "AI-powered resume intelligence platform that automates ATS-optimized resume generation using multi-LLM failover and deterministic LaTeX rendering.",
    tags: ["Next.js", "AI/LLM", "Supabase", "LaTeX"],
    href: "https://luma-cv.vercel.app/"
  },
  {
    name: "Multi-Tenant Merchant Platform",
    description: "Built a 99.99% available multi-tenant SFTP gateway with automated AWS provisioning. Supports 500+ merchants simultaneously with zero unplanned downtime.",
    tags: ["AWS", "Terraform", "High Availability", "SFTP"],
    href: "#"
  },
  {
    name: "Real-Time Data Pipeline",
    description: "Real-time ELT stack with Dagster and ClickHouse that turns minute-long analytics waits into sub-100ms dashboards.",
    tags: ["Dagster", "ClickHouse", "ELT", "Python"],
    href: "#"
  }
]

export const certificationsData = [
  { name: "DevOps on AWS Specialization", organization: "Amazon Web Services", date: "Feb 2024", url: "https://coursera.org/share/92a9be263fbfbe465d47dd92710b48ed" },
  { name: "Postman API Fundamentals", organization: "Postman", date: "Jul 2024", url: "https://api.badgr.io/public/assertions/X2ceMM37RqugIm-X52dVgQ" },
  { name: "Agile with Atlassian Jira", organization: "Atlassian", date: "Jan 2024", url: "https://coursera.org/share/ba5609f08d284e1c7089d0b4f4789835" }
]

export const blogsData = [
  { title: "Everything Docker!!", date: "2026-02-26", url: "https://medium.com/@sahilbansal.sb24/everything-docker-from-basic-containers-to-multi-stage-builds-bf14948a38ab" },
  { title: "From ClickOps to Terraform", date: "2026-02-01", url: "/blog/from-clickops-to-terraform" },
  { title: "Running LinkedIn automation without losing your mind", date: "2026-01-18", url: "/blog/running-linkedin-automation" },
  { title: "Observability that on-call actually uses", date: "2025-12-10", url: "/blog/observability-oncall-actually-uses" }
]

