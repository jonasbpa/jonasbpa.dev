export type Lang = 'en' | 'pt';

export const langs: Lang[] = ['en', 'pt'];

export const paths: Record<Lang, string> = { en: '/', pt: '/pt/' };

export const htmlLang: Record<Lang, string> = { en: 'en', pt: 'pt-BR' };

export const links = {
  name: 'Jonas Berchol',
  email: 'jbpa28@gmail.com',
  github: 'https://github.com/jonasbpa',
  linkedin: 'https://www.linkedin.com/in/jonasbpa/',
  site: 'https://jonasbpa.dev',
  jsonToPostgresql: 'https://github.com/jonasbpa/json-to-postgresql',
};

type Card = { title: string; body: string; tags: string[] };

export type Project = {
  name: string;
  kind: string;
  body: string;
  tags: string[];
  href?: string;
  status?: string;
};

type Entry = { company: string; role: string; period: string; note: string };
type School = { school: string; degree: string; period: string };

export type Content = {
  meta: { title: string; description: string };
  nav: { services: string; work: string; products: string; experience: string; contact: string; switchLang: string };
  hero: {
    role: string;
    tagline: string;
    summary: string;
    availability: string;
    emailCta: string;
    meta: string;
    avatarAlt: string;
  };
  services: { label: string; title: string; lead: string; items: Card[] };
  work: { label: string; title: string; items: Project[] };
  products: { label: string; title: string; items: Project[] };
  experience: { label: string; title: string; items: Entry[]; educationLabel: string; education: School[] };
  contact: { label: string; title: string; lead: string; subject: string };
};

const tags = {
  backend: ['NestJS', '.NET', 'Node.js', 'Go', 'Python', 'Socket.IO', 'BullMQ', 'RabbitMQ'],
  frontend: ['React', 'Vite', 'TanStack', 'Redux', 'React Native', 'Expo'],
  messaging: ['WhatsApp Cloud API', 'Baileys', 'Whatsmeow', 'Telegram', 'Instagram', 'Webhooks'],
  infra: ['Docker', 'Docker Swarm', 'Kubernetes', 'k3s', 'GitHub Actions', 'AWS', 'Azure', 'Cloudflare'],
  data: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'Prisma', 'TypeORM'],
  desktop: ['C++', 'C#', 'Dear ImGui'],
  chatlabel: ['.NET', 'React', 'Node.js', 'Go', 'k3s', 'Redis'],
  rapid: ['NestJS', 'BullMQ', 'TypeORM', 'React', 'Kubernetes'],
  otimus: ['TypeScript', 'Node.js', 'REST'],
  facilitoo: ['NestJS', 'PostgreSQL', 'Prisma', 'React', 'Expo', 'Open Finance'],
  kindle: ['TypeScript', 'Telegram', 'PostgreSQL', 'Docker'],
  jsonPg: ['Bun', 'TypeScript', 'PostgreSQL'],
  cs2: ['React', 'MUI', 'NestJS', 'Fastify', 'PHP'],
};

const en: Content = {
  meta: {
    title: 'Jonas Berchol · Full-stack engineer',
    description:
      'Full-stack engineer working with TypeScript, .NET, infrastructure and DevOps. Open to remote roles and freelance projects.',
  },
  nav: { services: 'Services', work: 'Work', products: 'Products', experience: 'Experience', contact: 'Contact', switchLang: 'PT' },
  hero: {
    role: 'Full-stack engineer.',
    tagline: 'TypeScript, .NET, infrastructure and DevOps.',
    summary:
      'I build and run SaaS products end to end: APIs, real-time messaging, background queues, web and mobile frontends, and the Kubernetes clusters they run on. I have been writing code since I was nine, and I care about keeping it clean, tested and ready to scale.',
    availability: 'Open to remote roles and freelance projects',
    emailCta: 'Email me',
    meta: 'Curitiba, Brazil · UTC−3 · English and Portuguese',
    avatarAlt: 'Portrait of Jonas Berchol',
  },
  services: {
    label: '// services',
    title: 'Hire me for anything code',
    lead: 'Full-time role, contract or one-off project. If it runs on a server, a browser or a phone, I can build it, ship it and keep it running, or take over a legacy codebase and fix what is on fire.',
    items: [
      { title: 'Backend and APIs', body: 'REST and WebSocket APIs, background jobs and third-party integrations that hold up under load.', tags: tags.backend },
      { title: 'Web and mobile apps', body: 'Fast, maintainable frontends, from e-commerce and CRMs to internal dashboards and customer-facing products.', tags: tags.frontend },
      { title: 'Messaging and bots', body: 'WhatsApp, Telegram, Instagram and Facebook channels, omnichannel inboxes, chatbots and automations.', tags: tags.messaging },
      { title: 'Infrastructure and DevOps', body: 'Containers, clusters, CI/CD pipelines and cloud setups you can actually operate.', tags: tags.infra },
      { title: 'Data', body: 'Schema design, migrations, imports and query tuning across relational and document stores.', tags: tags.data },
      { title: 'Desktop and games', body: 'Native tools, overlays, game-server plugins and platform games for desktop and mobile, rooted in a technical degree in game programming.', tags: tags.desktop },
    ],
  },
  work: {
    label: '// selected work',
    title: 'Production systems',
    items: [
      {
        name: 'ChatLabel',
        kind: 'Omnichannel messaging SaaS · Hubcon',
        body: 'Hubcon’s large-scale, high-availability customer service platform. I work across the .NET backend, the React frontend, channel workers in Node.js and Go (WhatsApp, WhatsApp Cloud API, Telegram, Facebook, Infobip) and the Kubernetes infrastructure behind it.',
        tags: tags.chatlabel,
      },
      {
        name: 'Rapid',
        kind: 'Marketing platform',
        body: 'Monorepo with a NestJS REST and Socket.IO API, BullMQ workers with a Bull Board UI, a React SPA and a shared domain library. Deployed on Kubernetes with self-hosted GitHub Actions runners.',
        tags: tags.rapid,
      },
      {
        name: 'OtimusClinic API',
        kind: 'Healthcare integration',
        body: 'Integration API connecting the OtimusClinic platform to external services, rebuilt as a second version in TypeScript.',
        tags: tags.otimus,
      },
    ],
  },
  products: {
    label: '// products and side projects',
    title: 'Things I build for myself',
    items: [
      {
        name: 'Facilitoo',
        kind: 'Household finance planner',
        status: 'In development',
        body: 'Aggregates bank accounts and credit cards through Open Finance, reads card bills, categorizes spending and adds budgets, goals and cash flow forecasts, shared within a household.',
        tags: tags.facilitoo,
      },
      {
        name: 'Kindle Converter Bot',
        kind: 'Telegram bot',
        status: 'Live, private',
        body: 'Converts images, PDFs and MOBI files to EPUB with Calibre and emails them straight to each user’s Kindle. License-key access with admin tooling.',
        tags: tags.kindle,
      },
      {
        name: 'json-to-postgresql',
        kind: 'Open source CLI',
        status: 'Open source',
        body: 'Imports JSON collections into PostgreSQL, auto-detecting column types and creating one table per collection.',
        tags: tags.jsonPg,
        href: links.jsonToPostgresql,
      },
      {
        name: 'CS2 server tooling',
        kind: 'Gaming side project',
        status: 'Side project',
        body: 'Web panel and game-server plugins for a community Counter-Strike 2 server: React and MUI frontend, NestJS on Fastify backend.',
        tags: tags.cs2,
      },
    ],
  },
  experience: {
    label: '// experience',
    title: 'Where I have worked',
    items: [
      { company: 'Hubcon', role: 'Full-stack Developer', period: 'Apr 2022 – present', note: 'ChatLabel omnichannel SaaS, infrastructure and DevOps' },
      { company: 'Spannel Soluções Integradas', role: 'Full-stack Developer', period: 'Dec 2021 – present', note: 'Web platforms, marketing tools and integrations' },
      { company: 'Loupen', role: 'IT Support Analyst', period: 'Mar 2020 – May 2023', note: '' },
      { company: 'TI Solutions', role: 'IT Support Analyst', period: 'Apr 2020 – Dec 2020', note: '' },
    ],
    educationLabel: '// education',
    education: [
      { school: 'Federal University of Paraná (UFPR)', degree: 'Information Management (not completed)', period: '2020 – 2022' },
      { school: 'Federal Institute of Paraná (IFPR)', degree: 'Technical degree in Digital Game Programming', period: '2016 – 2019' },
    ],
  },
  contact: {
    label: '// contact',
    title: 'Have a role or a project in mind?',
    lead: 'Tell me what you are building. I usually reply within a day.',
    subject: 'Hello from jonasbpa.dev',
  },
};

const pt: Content = {
  meta: {
    title: 'Jonas Berchol · Engenheiro full-stack',
    description:
      'Engenheiro full-stack com TypeScript, .NET, infraestrutura e DevOps. Disponível para vagas remotas e projetos freelance.',
  },
  nav: { services: 'Serviços', work: 'Trabalhos', products: 'Produtos', experience: 'Experiência', contact: 'Contato', switchLang: 'EN' },
  hero: {
    role: 'Engenheiro full-stack.',
    tagline: 'TypeScript, .NET, infraestrutura e DevOps.',
    summary:
      'Construo e opero produtos SaaS de ponta a ponta: APIs, mensageria em tempo real, filas, frontends web e mobile e os clusters Kubernetes onde tudo roda. Programo desde os nove anos e me dedico a manter o código limpo, testado e pronto para escalar.',
    availability: 'Disponível para vagas remotas e projetos freelance',
    emailCta: 'Mande um e-mail',
    meta: 'Curitiba, Brasil · UTC−3 · Português e inglês',
    avatarAlt: 'Foto de Jonas Berchol',
  },
  services: {
    label: '// serviços',
    title: 'Me contrate para qualquer coisa de código',
    lead: 'Vaga CLT ou PJ, contrato ou projeto pontual. Se roda em servidor, navegador ou celular, eu construo, coloco no ar e mantenho funcionando, ou assumo um sistema legado e apago o incêndio.',
    items: [
      { title: 'Backend e APIs', body: 'APIs REST e WebSocket, jobs em segundo plano e integrações com terceiros que aguentam carga.', tags: tags.backend },
      { title: 'Apps web e mobile', body: 'Frontends rápidos e fáceis de manter, de e-commerce e CRMs a painéis internos e produtos para o cliente final.', tags: tags.frontend },
      { title: 'Mensageria e bots', body: 'Canais de WhatsApp, Telegram, Instagram e Facebook, atendimento omnichannel, chatbots e automações.', tags: tags.messaging },
      { title: 'Infraestrutura e DevOps', body: 'Containers, clusters, pipelines de CI/CD e ambientes em nuvem que dá para operar de verdade.', tags: tags.infra },
      { title: 'Dados', body: 'Modelagem, migrações, importações e otimização de consultas em bancos relacionais e de documentos.', tags: tags.data },
      { title: 'Desktop e jogos', body: 'Ferramentas nativas, overlays, plugins para servidores de jogos e jogos de plataforma para desktop e celular, com formação técnica em programação de jogos.', tags: tags.desktop },
    ],
  },
  work: {
    label: '// trabalhos',
    title: 'Sistemas em produção',
    items: [
      {
        name: 'ChatLabel',
        kind: 'SaaS de mensageria omnichannel · Hubcon',
        body: 'Plataforma de atendimento da Hubcon, de alta escala e alta disponibilidade. Atuo no backend .NET, no frontend React, nos workers de canais em Node.js e Go (WhatsApp, WhatsApp Cloud API, Telegram, Facebook, Infobip) e na infraestrutura Kubernetes.',
        tags: tags.chatlabel,
      },
      {
        name: 'Rapid',
        kind: 'Plataforma de marketing',
        body: 'Monorepo com API NestJS REST e Socket.IO, workers BullMQ com painel Bull Board, SPA em React e uma biblioteca de domínio compartilhada. Roda em Kubernetes com runners próprios do GitHub Actions.',
        tags: tags.rapid,
      },
      {
        name: 'OtimusClinic API',
        kind: 'Integração na área da saúde',
        body: 'API que integra a plataforma OtimusClinic a serviços externos, reescrita em TypeScript na segunda versão.',
        tags: tags.otimus,
      },
    ],
  },
  products: {
    label: '// produtos e projetos pessoais',
    title: 'O que construo para mim',
    items: [
      {
        name: 'Facilitoo',
        kind: 'Planejador financeiro familiar',
        status: 'Em desenvolvimento',
        body: 'Reúne contas e cartões via Open Finance, lê as faturas, categoriza os gastos e oferece orçamentos, metas e previsão de fluxo de caixa, compartilhados pela família.',
        tags: tags.facilitoo,
      },
      {
        name: 'Kindle Converter Bot',
        kind: 'Bot de Telegram',
        status: 'No ar, privado',
        body: 'Converte imagens, PDFs e arquivos MOBI para EPUB com o Calibre e envia direto para o Kindle de cada usuário. Acesso por chave de licença, com ferramentas de administração.',
        tags: tags.kindle,
      },
      {
        name: 'json-to-postgresql',
        kind: 'CLI open source',
        status: 'Open source',
        body: 'Importa coleções JSON para o PostgreSQL, detectando os tipos das colunas e criando uma tabela por coleção.',
        tags: tags.jsonPg,
        href: links.jsonToPostgresql,
      },
      {
        name: 'Ferramentas para servidor de CS2',
        kind: 'Projeto pessoal de games',
        status: 'Projeto pessoal',
        body: 'Painel web e plugins para um servidor comunitário de Counter-Strike 2: frontend em React e MUI, backend NestJS com Fastify.',
        tags: tags.cs2,
      },
    ],
  },
  experience: {
    label: '// experiência',
    title: 'Onde trabalhei',
    items: [
      { company: 'Hubcon', role: 'Desenvolvedor Full-stack', period: 'abr 2022 – atual', note: 'SaaS omnichannel ChatLabel, infraestrutura e DevOps' },
      { company: 'Spannel Soluções Integradas', role: 'Desenvolvedor Full-stack', period: 'dez 2021 – atual', note: 'Plataformas web, ferramentas de marketing e integrações' },
      { company: 'Loupen', role: 'Analista de Suporte de TI', period: 'mar 2020 – mai 2023', note: '' },
      { company: 'TI Solutions', role: 'Analista de Suporte de TI', period: 'abr 2020 – dez 2020', note: '' },
    ],
    educationLabel: '// formação',
    education: [
      { school: 'Universidade Federal do Paraná (UFPR)', degree: 'Gestão da Informação (incompleto)', period: '2020 – 2022' },
      { school: 'Instituto Federal do Paraná (IFPR)', degree: 'Técnico em Programação de Jogos Digitais', period: '2016 – 2019' },
    ],
  },
  contact: {
    label: '// contato',
    title: 'Tem uma vaga ou um projeto em mente?',
    lead: 'Me conte o que você está construindo. Costumo responder em até um dia.',
    subject: 'Olá, vim pelo jonasbpa.dev',
  },
};

export const content: Record<Lang, Content> = { en, pt };
