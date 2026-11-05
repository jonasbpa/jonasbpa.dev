export const profile = {
  name: 'Jonas Berchol',
  handle: 'jonasbpa',
  role: 'Full-stack engineer',
  tagline: 'TypeScript, .NET, infrastructure and DevOps.',
  location: 'Curitiba, Brazil',
  email: 'jbpa28@gmail.com',
  github: 'https://github.com/jonasbpa',
  linkedin: 'https://www.linkedin.com/in/jonasbpa/',
  site: 'https://jonasbpa.dev',
  summary:
    'I build and run SaaS products end to end: APIs, real-time messaging, background queues, web and mobile frontends, and the Kubernetes clusters they run on. I have been writing code since I was nine and shipping production software since 2021.',
  availability: 'Open to remote roles and freelance projects',
};

export const services = [
  {
    title: 'Backend and APIs',
    body: 'REST and WebSocket APIs, background jobs and third-party integrations that hold up under load.',
    tags: ['NestJS', '.NET', 'Node.js', 'Go', 'Python', 'Socket.IO', 'BullMQ', 'RabbitMQ'],
  },
  {
    title: 'Web and mobile apps',
    body: 'Fast, maintainable frontends, from internal dashboards to customer-facing products.',
    tags: ['React', 'Vite', 'TanStack', 'Redux', 'React Native', 'Expo'],
  },
  {
    title: 'Messaging and bots',
    body: 'WhatsApp, Telegram, Instagram and Facebook channels, omnichannel inboxes, chatbots and automations.',
    tags: ['WhatsApp Cloud API', 'Baileys', 'Whatsmeow', 'Telegram', 'Instagram', 'Webhooks'],
  },
  {
    title: 'Infrastructure and DevOps',
    body: 'Containers, clusters, CI/CD pipelines and cloud setups you can actually operate.',
    tags: ['Docker', 'Docker Swarm', 'Kubernetes', 'k3s', 'GitHub Actions', 'AWS', 'Azure', 'Cloudflare'],
  },
  {
    title: 'Data',
    body: 'Schema design, migrations, imports and query tuning across relational and document stores.',
    tags: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'Prisma', 'TypeORM'],
  },
  {
    title: 'Desktop and game tooling',
    body: 'Native tools, overlays and game-server plugins, rooted in a technical degree in game programming.',
    tags: ['C++', 'C#', 'Dear ImGui'],
  },
];

export type Project = {
  name: string;
  kind: string;
  body: string;
  tags: string[];
  href?: string;
  status?: string;
};

export const work: Project[] = [
  {
    name: 'ChatLabel',
    kind: 'Omnichannel messaging SaaS · Hubcon',
    body: 'Hubcon’s large-scale, high-availability customer service platform. I work across the .NET backend, the React frontend, channel workers in Node.js and Go (WhatsApp, WhatsApp Cloud API, Telegram, Facebook, Infobip) and the Kubernetes infrastructure behind it.',
    tags: ['.NET', 'React', 'Node.js', 'Go', 'k3s', 'Redis'],
  },
  {
    name: 'Rapid',
    kind: 'Marketing platform',
    body: 'Monorepo with a NestJS REST and Socket.IO API, BullMQ workers with a Bull Board UI, a React SPA and a shared domain library. Deployed on Kubernetes with self-hosted GitHub Actions runners.',
    tags: ['NestJS', 'BullMQ', 'TypeORM', 'React', 'Kubernetes'],
  },
  {
    name: 'OtimusClinic API',
    kind: 'Healthcare integration',
    body: 'Integration API connecting the OtimusClinic platform to external services, rebuilt as a second version in TypeScript.',
    tags: ['TypeScript', 'Node.js', 'REST'],
  },
];

export const products: Project[] = [
  {
    name: 'Facilitoo',
    kind: 'Household finance planner',
    status: 'In development',
    body: 'Aggregates bank accounts and credit cards through Open Finance, reads card bills, categorizes spending and adds budgets, goals and cash flow forecasts, shared within a household.',
    tags: ['NestJS', 'PostgreSQL', 'Prisma', 'React', 'Expo', 'Open Finance'],
  },
  {
    name: 'Kindle Converter Bot',
    kind: 'Telegram bot',
    status: 'Live, private',
    body: 'Converts images, PDFs and MOBI files to EPUB with Calibre and emails them straight to each user’s Kindle. License-key access with admin tooling.',
    tags: ['TypeScript', 'Telegram', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'json-to-postgresql',
    kind: 'Open source CLI',
    status: 'Open source',
    body: 'Imports JSON collections into PostgreSQL, auto-detecting column types and creating one table per collection.',
    tags: ['Bun', 'TypeScript', 'PostgreSQL'],
    href: 'https://github.com/jonasbpa/json-to-postgresql',
  },
  {
    name: 'CS2 server tooling',
    kind: 'Gaming side project',
    status: 'Side project',
    body: 'Web panel and game-server plugins for a community Counter-Strike 2 server: React and MUI frontend, NestJS on Fastify backend.',
    tags: ['React', 'MUI', 'NestJS', 'Fastify', 'PHP'],
  },
];

export const experience = [
  { company: 'Hubcon', role: 'Full-stack Developer', period: 'Apr 2022 – present', note: 'ChatLabel omnichannel SaaS, infrastructure and DevOps' },
  { company: 'Spannel Soluções Integradas', role: 'Full-stack Developer', period: 'Dec 2021 – present', note: 'Web platforms, marketing tools and integrations' },
  { company: 'Loupen', role: 'IT Support Analyst', period: 'Mar 2020 – May 2023', note: '' },
  { company: 'TI Solutions', role: 'IT Support Analyst', period: 'Apr 2020 – Dec 2020', note: '' },
];

export const education = [
  { school: 'Federal University of Paraná (UFPR)', degree: 'B.Sc. in Information Management', period: '2020 – 2022' },
  { school: 'Federal Institute of Paraná (IFPR)', degree: 'Technical degree in Digital Game Programming', period: '2016 – 2019' },
];
