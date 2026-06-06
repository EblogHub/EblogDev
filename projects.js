const allProjects = [
  {
    id: 'pulseai-api-platform',
    name: 'PulseAI API Platform',
    domain: 'API & Integration',
    category: 'SaaS',
    description: 'A media analytics API powering real-time insights and sentiment scoring for enterprise dashboards.',
    capabilities: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
    year: 2026,
    status: 'Live',
    url: null
  },
  {
    id: 'shopshield-commerce-api',
    name: 'ShopShield Commerce API',
    domain: 'API & Integration',
    category: 'E-commerce',
    description: 'Headless commerce backend with payments, inventory sync, and secure order workflows.',
    capabilities: ['GraphQL', 'Stripe', 'MongoDB', 'Docker', 'Kubernetes'],
    year: 2025,
    status: 'Live',
    url: null
  },
  {
    id: 'campusconnect-lms-backend',
    name: 'CampusConnect LMS Backend',
    domain: 'API & Integration',
    category: 'Educational',
    description: 'Learning platform backend with course management, student progress tracking, and asynchronous jobs.',
    capabilities: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'AWS'],
    year: 2025,
    status: 'Live',
    url: null
  },
  {
    id: 'secureflow-auth-service',
    name: 'SecureFlow Auth Service',
    domain: 'API & Integration',
    category: 'Business/Corporate',
    description: 'Identity and access management engine with OAuth2, SSO, and adaptive security policies.',
    capabilities: ['Node.js', 'OAuth2', 'JWT', 'Redis', 'Kubernetes'],
    year: 2026,
    status: 'Live',
    url: null
  },
  {
    id: 'insightmetrics-analytics-engine',
    name: 'InsightMetrics Analytics Engine',
    domain: 'API & Integration',
    category: 'SaaS',
    description: 'Backend analytics platform for capturing events, summarizing pipelines, and serving custom reports.',
    capabilities: ['Python', 'Flask', 'Elasticsearch', 'Kafka', 'Docker'],
    year: 2024,
    status: 'Live',
    url: null
  },
  {
    id: 'fleetops-logistics-api',
    name: 'FleetOps Logistics API',
    domain: 'API & Integration',
    category: 'Logistics',
    description: 'Vehicle tracking and dispatch backend with real-time telemetry, routing, and event streaming.',
    capabilities: ['Node.js', 'NestJS', 'MongoDB', 'RabbitMQ', 'AWS Lambda'],
    year: 2025,
    status: 'Live',
    url: null
  },
  {
    id: 'healthsync-care-data-platform',
    name: 'HealthSync Care Data Platform',
    domain: 'API & Integration',
    category: 'Healthcare',
    description: 'Secure patient data API with audit logging, HIPAA-style compliance, and encrypted storage.',
    capabilities: ['Python', 'Django', 'PostgreSQL', 'AES-256', 'Terraform'],
    year: 2026,
    status: 'Live',
    url: null
  },
  {
    id: 'eventpulse-engagement-api',
    name: 'EventPulse Engagement API',
    domain: 'API & Integration',
    category: 'Event',
    description: 'Real-time event backend powering attendee messaging, ticketing workflows, and engagement metrics.',
    capabilities: ['Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'CI/CD'],
    year: 2025,
    status: 'Live',
    url: null
  }
];

const extraProjectCategories = [
  'Fintech', 'Healthcare', 'Logistics', 'E-commerce', 'Education', 'Enterprise', 'Marketplace', 'Media',
  'Travel', 'SaaS', 'Security', 'Retail', 'Gaming', 'IoT', 'Analytics', 'HR', 'Real Estate', 'FoodTech',
  'Automotive', 'Social', 'Events', 'Nonprofit', 'Telecom', 'Energy', 'Wellness'
];

const extraProjectTechStacks = [
  ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
  ['Python', 'FastAPI', 'MongoDB', 'RabbitMQ', 'AWS'],
  ['Go', 'gRPC', 'MySQL', 'Kubernetes', 'Prometheus'],
  ['Java', 'Spring Boot', 'OracleDB', 'Kafka', 'Terraform'],
  ['Ruby', 'Rails', 'PostgreSQL', 'Sidekiq', 'Docker'],
  ['Node.js', 'NestJS', 'MongoDB', 'GraphQL', 'Docker'],
  ['Python', 'Django', 'PostgreSQL', 'Celery', 'GCP'],
  ['Node.js', 'Express', 'MySQL', 'Nginx', 'CI/CD'],
  ['Python', 'Flask', 'Elasticsearch', 'Redis', 'Docker']
];

const projectNamePrefixes = [
  'PayFlow', 'CareLink', 'RouteSync', 'MarketPulse', 'EduCloud', 'SecureMesh', 'FoodTrail', 'EventEdge',
  'FitTrack', 'HomeHub', 'DataForge', 'InsightSphere', 'ShopGuard', 'FleetLink', 'HealthBridge', 'TalentFlow',
  'TravelPort', 'AssetPulse', 'GameBack', 'MediaSync', 'EnergyGrid', 'SocialCore', 'CharityConnect', 'TeleStream',
  'WellBase', 'InvestorPro', 'OrderWave', 'BookingVault', 'SupplyPulse', 'RequestHub'
];

const projectNameSuffixes = ['API', 'Platform', 'Engine', 'Hub', 'Gateway', 'Service', 'System', 'Backend', 'Core'];

const descriptionTemplates = {
  Fintech: 'serving payments, reconciliation, and fraud monitoring with PCI-conscious API design.',
  Healthcare: 'managing patient, provider, and compliance workflows with encrypted storage and audit logs.',
  Logistics: 'orchestrating fleet tracking, delivery routing, and inventory sync in real-time.',
  'E-commerce': 'powering catalog services, checkout workflows, and order lifecycle management.',
  Education: 'handling course data, student progress, and assessment workflows for scalable learning platforms.',
  Enterprise: 'delivering secure business APIs for collaboration, reporting, and systems integration.',
  Marketplace: 'coordinating seller onboarding, listing services, and transaction flows.',
  Media: 'publishing content, streaming metadata, and editorial workflows with fast API delivery.',
  Travel: 'booking, itinerary, and pricing APIs optimized for global availability and latency.',
  SaaS: 'automating subscription, tenant, and usage management for multi-tenant applications.',
  Security: 'providing identity verification, access control, and secure event auditing.',
  Retail: 'synchronizing inventory, pricing, and customer orders across channels.',
  Gaming: 'supporting matchmaking, player profiles, and telemetry ingestion in real-time.',
  IoT: 'ingesting device telemetry, edge events, and automation triggers at scale.',
  Analytics: 'streaming event data, dashboards, and custom report APIs for fast insights.',
  HR: 'managing employee records, applicant tracking, and payroll integrations.',
  'Real Estate': 'powering property listings, lead capture, and agent collaboration APIs.',
  FoodTech: 'handling menu management, order routing, and kitchen fulfillment services.',
  Automotive: 'managing vehicle diagnostics, maintenance scheduling, and fleet analytics.',
  Social: 'powering user connections, content feeds, and engagement APIs.',
  Events: 'handling ticketing, attendee check-in, and scheduling workflows.',
  Nonprofit: 'supporting donor management, campaign tracking, and impact reporting.',
  Telecom: 'managing subscriber services, billing, and network configuration APIs.',
  Energy: 'scheduling generation, usage analytics, and demand-response services.',
  Wellness: 'tracking appointments, member plans, and personalized health recommendations.'
};

const extraProjects = Array.from({ length: Math.max(0, 210 - allProjects.length) }, (_, index) => {
  const projectIndex = index + 1;
  const category = extraProjectCategories[index % extraProjectCategories.length];
  const prefix = projectNamePrefixes[index % projectNamePrefixes.length];
  const suffix = projectNameSuffixes[index % projectNameSuffixes.length];
  const stack = extraProjectTechStacks[index % extraProjectTechStacks.length];
  const name = `${prefix} ${suffix}`;
  const categoryDescription = descriptionTemplates[category] || 'delivering scalable API-first architecture and adaptive backend operations.';

  return {
    id: `${prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${suffix.toLowerCase()}-${projectIndex}`,
    name,
    domain: 'API & Integration',
    category,
    description: `${name} is a responsive backend for ${category.toLowerCase()} applications, ${categoryDescription}`,
    capabilities: stack,
    year: 2024 + (projectIndex % 3),
    status: 'Live',
    url: null
  };
});

allProjects.push(...extraProjects);

allProjects.forEach(project => {
  if (!project.detailsUrl) {
    project.detailsUrl = `project-detail.html?id=${encodeURIComponent(project.id)}`;
  }
  if (!project.url) {
    project.url = `project-site.html?id=${encodeURIComponent(project.id)}`;
  }
});
