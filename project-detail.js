const contentRoot = document.getElementById('project-content');
const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

function formatTechTags(tags) {
  return tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
}

function formatFeatureList(project) {
  const base = [
    'Responsive API endpoints with graceful error handling',
    'Scalable backend architecture designed for production traffic',
    'Secure authentication and authorization flows',
    'Database-backed persistence with caching and queue support'
  ];

  const extra = [];
  if (project.capabilities.includes('GraphQL') || project.capabilities.includes('gRPC')) {
    extra.push('Schema-first API design for clear client integration');
  }
  if (project.capabilities.includes('Redis') || project.capabilities.includes('Elasticsearch')) {
    extra.push('High-performance caching and search optimizations');
  }
  if (project.capabilities.includes('Kafka') || project.capabilities.includes('RabbitMQ')) {
    extra.push('Event-driven workflows and asynchronous job processing');
  }
  if (project.capabilities.includes('Docker') || project.capabilities.includes('Kubernetes')) {
    extra.push('Containerized deployments with infrastructure as code');
  }

  return [...base, ...extra].slice(0, 6).map(item => `<li>${item}</li>`).join('');
}

const responsivePreviewData = {
  Fintech: {
    type: 'Payment Dashboard',
    tagline: 'A fast financial portal for desktop and mobile users.',
    description: 'Live transaction streams, spend insights, and secure account actions are delivered through a polished responsive interface.',
    detail: 'Adaptive charts, responsive forms, and intelligent account management features deliver trust and clarity across devices.',
    desktopTitle: 'Merchant Insights',
    desktopDetail: 'A high-density dashboard designed for CFO and operations teams.',
    mobileTitle: 'Mobile Wallet',
    mobileDetail: 'Compact user flows for payments, invoices, and approvals on the go.'
  },
  Healthcare: {
    type: 'Patient Portal',
    tagline: 'A secure responsive interface for care teams and patients.',
    description: 'Appointment booking, secure messaging, and care plans are rendered in a responsive frontend built for trust and clarity.',
    detail: 'Accessible forms, responsive patient summaries, and appointment calendars create an intuitive healthcare experience.',
    desktopTitle: 'Care Dashboard',
    desktopDetail: 'Rich patient overviews with clinical workflows and notifications.',
    mobileTitle: 'Patient Access',
    mobileDetail: 'Compact mobile views for secure messaging and appointment scheduling.'
  },
  Logistics: {
    type: 'Dispatch Console',
    tagline: 'A responsive operations dashboard for route planning and tracking.',
    description: 'Real-time fleet maps, delivery statuses, and route planning are presented in a flexible frontend for dispatch teams.',
    detail: 'Interactive route boards, responsive timelines, and mobile delivery updates keep teams aligned and efficient.',
    desktopTitle: 'Route Planner',
    desktopDetail: 'A wide-screen logistics console with map overlays and task tracking.',
    mobileTitle: 'Driver Mobile',
    mobileDetail: 'Mobile-first route updates and delivery checklists for field crews.'
  },
  'E-commerce': {
    type: 'Commerce Storefront',
    tagline: 'A responsive shopping experience built for conversion.',
    description: 'Product galleries, checkout flows, and customer reviews are optimized for desktop and mobile buyers.',
    detail: 'Fast-loading product grids, responsive checkout steps, and persistent cart state enhance every shopper journey.',
    desktopTitle: 'Product Showcase',
    desktopDetail: 'A compelling storefront with featured products and promotional banners.',
    mobileTitle: 'Mobile Checkout',
    mobileDetail: 'Streamlined buying paths for users on phones and tablets.'
  },
  Education: {
    type: 'Learning Hub',
    tagline: 'A responsive classroom experience for students and educators.',
    description: 'Courses, progress tracking, and assignment workflows adapt beautifully to different screen sizes.',
    detail: 'Responsive lesson pages, progress dashboards, and class communication tools make learning accessible everywhere.',
    desktopTitle: 'Course Dashboard',
    desktopDetail: 'Organized course modules and student metrics in a desktop view.',
    mobileTitle: 'Study Mobile',
    mobileDetail: 'Compact lesson cards and quick progress tracking for mobile learners.'
  },
  Enterprise: {
    type: 'Executive Portal',
    tagline: 'A dashboard built for executive users and stakeholders.',
    description: 'KPIs, reports, and approvals are laid out in a responsive interface that scales across devices.',
    detail: 'Permissions-based views, analytics cards, and mobile summaries provide consistent business visibility.',
    desktopTitle: 'Executive Console',
    desktopDetail: 'A broad control center for corporate workflows and reporting.',
    mobileTitle: 'Quick Insights',
    mobileDetail: 'Essential data tiles and action buttons for executives on the move.'
  },
  Marketplace: {
    type: 'Vendor Marketplace',
    tagline: 'A responsive front end for buying and selling products.',
    description: 'Search, discover, and transact with flexible storefronts designed for any screen.',
    detail: 'Responsive item cards, seller profiles, and checkout experiences maintain clarity from desktop to mobile.',
    desktopTitle: 'Seller Portal',
    desktopDetail: 'Manage listings and orders with a clean desktop layout.',
    mobileTitle: 'Buyer Flow',
    mobileDetail: 'Mobile-first browsing and checkout for shoppers on the go.'
  },
  Media: {
    type: 'Editorial Platform',
    tagline: 'A responsive content hub for editors and readers.',
    description: 'Stories, media galleries, and recommendations adapt quickly to different display sizes.',
    detail: 'Responsive content previews, inline media, and editorial workflows make publishing effortless.',
    desktopTitle: 'Content Desk',
    desktopDetail: 'A feature-rich workspace for managing articles and assets.',
    mobileTitle: 'Reader View',
    mobileDetail: 'A smooth reading experience optimized for mobile browsers.'
  },
  Travel: {
    type: 'Booking Portal',
    tagline: 'A responsive travel experience built for discovery and reservations.',
    description: 'Search itineraries, compare routes, and reserve trips with easy cross-device navigation.',
    detail: 'Responsive cards, map previews, and booking flows keep travel planning intuitive.',
    desktopTitle: 'Trip Planner',
    desktopDetail: 'A wide-screen view for itinerary planning and comparisons.',
    mobileTitle: 'Travel Mobile',
    mobileDetail: 'Fast mobile searches and booking actions for travelers.'
  },
  SaaS: {
    type: 'Subscription Dashboard',
    tagline: 'A responsive SaaS control panel for users and admins.',
    description: 'Usage stats, account settings, and feature toggles are designed for both desktop and mobile.',
    detail: 'Responsive dashboards, adaptable menus, and user settings create a consistent SaaS experience.',
    desktopTitle: 'Account Console',
    desktopDetail: 'A complete admin experience with detail-rich panels.',
    mobileTitle: 'Quick Actions',
    mobileDetail: 'Mobile-friendly task flows and subscription management tools.'
  },
  Security: {
    type: 'Secure Gateway',
    tagline: 'A responsive security dashboard for monitoring and controls.',
    description: 'Alerts, access logs, and device controls remain readable and usable across all devices.',
    detail: 'Secure widgets, incident summaries, and policy actions translate to responsive screens quickly.',
    desktopTitle: 'Threat Monitor',
    desktopDetail: 'Analyze security events with a rich desktop interface.',
    mobileTitle: 'Alert Center',
    mobileDetail: 'Quick response actions for security teams on mobile.'
  },
  Retail: {
    type: 'Retail Hub',
    tagline: 'A responsive retail management experience for store operators.',
    description: 'Stock, pricing, and order workflows are surfaced in a mobile-friendly environment.',
    detail: 'Responsive product cards, inventory summaries, and sales dashboards support daily retail operations.',
    desktopTitle: 'Stock Control',
    desktopDetail: 'Manage inventory and orders with a clear desktop dashboard.',
    mobileTitle: 'Sales Mobile',
    mobileDetail: 'Track orders and promotions from a mobile device.'
  },
  Gaming: {
    type: 'Player Portal',
    tagline: 'A responsive gaming experience for players and communities.',
    description: 'Leaderboards, live events, and personalized feeds are rendered in a dynamic frontend.',
    detail: 'Responsive profile cards, event announcements, and social feeds keep players engaged across devices.',
    desktopTitle: 'Gamer Hub',
    desktopDetail: 'A visually rich dashboard for game stats and community updates.',
    mobileTitle: 'Play Mobile',
    mobileDetail: 'Fast access to gameplay news and session scheduling on phones.'
  },
  IoT: {
    type: 'Device Dashboard',
    tagline: 'A responsive interface for monitoring connected devices.',
    description: 'Telemetry, alerts, and automation controls are delivered through a device-friendly frontend.',
    detail: 'Responsive device cards, status feeds, and control panels make IoT operations manageable anywhere.',
    desktopTitle: 'Control Center',
    desktopDetail: 'Monitor device networks with a comprehensive desktop layout.',
    mobileTitle: 'Field Control',
    mobileDetail: 'Check device health and event alerts from mobile devices.'
  },
  Analytics: {
    type: 'Insights Portal',
    tagline: 'A responsive analytics workspace for data-driven teams.',
    description: 'Dashboards, reports, and visualizations are optimized for all screen sizes.',
    detail: 'Interactive charts, split views, and data summaries support responsive decision-making.',
    desktopTitle: 'Data Dashboard',
    desktopDetail: 'Analyze metrics and trends in a desktop analytics view.',
    mobileTitle: 'Signal View',
    mobileDetail: 'Quick KPI access and alerts for mobile stakeholders.'
  },
  HR: {
    type: 'People Platform',
    tagline: 'A responsive HR system for employees and managers.',
    description: 'Recruiting, onboarding, and employee engagement tools adapt across devices.',
    detail: 'Responsive talent profiles, workflow approvals, and communication tools support HR operations.',
    desktopTitle: 'HR Console',
    desktopDetail: 'Manage teams, roles, and approvals in a desktop portal.',
    mobileTitle: 'Employee Mobile',
    mobileDetail: 'Access HR tasks, requests, and schedules on the go.'
  },
  'Real Estate': {
    type: 'Property Marketplace',
    tagline: 'A responsive real estate experience for buyers and agents.',
    description: 'Listings, tours, and lead capture features are built for searchers on every device.',
    detail: 'Responsive map searches, property cards, and inquiry forms make listings accessible anywhere.',
    desktopTitle: 'Listing Board',
    desktopDetail: 'Explore property portfolios with rich desktop navigation.',
    mobileTitle: 'Browse Mobile',
    mobileDetail: 'Search homes and schedule tours from a phone.'
  },
  FoodTech: {
    type: 'Ordering Platform',
    tagline: 'A responsive food ordering experience for diners and kitchens.',
    description: 'Menus, delivery tracking, and kitchen dashboards scale seamlessly across devices.',
    detail: 'Responsive menu cards, order updates, and fulfillment tools support restaurant operations.',
    desktopTitle: 'Kitchen Dashboard',
    desktopDetail: 'Manage orders, prep status, and deliveries with a desktop view.',
    mobileTitle: 'Diner App',
    mobileDetail: 'Browse menus and track orders from a mobile phone.'
  },
  Automotive: {
    type: 'Mobility Portal',
    tagline: 'A responsive interface for vehicle services and fleet management.',
    description: 'Maintenance, bookings, and fleet monitoring adapt to mobile and desktop users alike.',
    detail: 'Responsive service cards, booking flows, and telematics dashboards keep operations moving.',
    desktopTitle: 'Fleet Dashboard',
    desktopDetail: 'Monitor vehicle performance and service schedules in a desktop portal.',
    mobileTitle: 'Driver Mobile',
    mobileDetail: 'Access routes, service history, and requests on the go.'
  },
  Social: {
    type: 'Community Network',
    tagline: 'A responsive social experience for connections and content.',
    description: 'Feeds, profiles, and messaging are optimized for desktop browsing and mobile engagement.',
    detail: 'Responsive content cards, community spaces, and interaction tools support active user networks.',
    desktopTitle: 'Community Feed',
    desktopDetail: 'Explore conversations and groups in a desktop view.',
    mobileTitle: 'Social Mobile',
    mobileDetail: 'Engage with posts and messages on your phone.'
  },
  Events: {
    type: 'Event Platform',
    tagline: 'A responsive events experience for attendees and organizers.',
    description: 'Schedules, ticketing, and live updates are presented in a mobile-first friendly site.',
    detail: 'Responsive agenda cards, venue maps, and registration flows keep event users informed and engaged.',
    desktopTitle: 'Event Dashboard',
    desktopDetail: 'Plan and monitor event logistics from a desktop portal.',
    mobileTitle: 'Attendee App',
    mobileDetail: 'View sessions and ticket details quickly on mobile devices.'
  },
  Nonprofit: {
    type: 'Impact Portal',
    tagline: 'A responsive fundraising and operations interface for missions.',
    description: 'Campaigns, donor journeys, and reporting adapt to both volunteer and donor devices.',
    detail: 'Responsive donation cards, campaign updates, and volunteer tools support nonprofit goals.',
    desktopTitle: 'Campaign Hub',
    desktopDetail: 'Manage fundraising, events, and reporting in a desktop portal.',
    mobileTitle: 'Donor Mobile',
    mobileDetail: 'Support giving and event signups from a phone.'
  },
  Telecom: {
    type: 'Subscriber Portal',
    tagline: 'A responsive telecom management experience for customers and teams.',
    description: 'Plans, usage data, and support tickets are rendered in a flexible interface for all devices.',
    detail: 'Responsive account summaries, billing tools, and support access keep telecom users connected.',
    desktopTitle: 'Service Portal',
    desktopDetail: 'Manage customer plans and support cases with a desktop view.',
    mobileTitle: 'Account Mobile',
    mobileDetail: 'Check balances, usage, and service tickets from your phone.'
  },
  Energy: {
    type: 'Utility Dashboard',
    tagline: 'A responsive energy operations interface for monitoring and control.',
    description: 'Usage analytics, grid status, and sustainability metrics are available across devices.',
    detail: 'Responsive energy charts, alerts, and scheduling features support operations teams and customers.',
    desktopTitle: 'Grid Monitor',
    desktopDetail: 'Track generation and demand with a desktop dashboard.',
    mobileTitle: 'Utility Mobile',
    mobileDetail: 'View usage and alerts while in the field.'
  },
  Wellness: {
    type: 'Health Studio',
    tagline: 'A responsive wellness experience for members and coaches.',
    description: 'Class schedules, progress tracking, and personal plans are built for desktop and mobile access.',
    detail: 'Responsive booking flows, progress cards, and coach messaging keep wellness programs connected.',
    desktopTitle: 'Member Portal',
    desktopDetail: 'Manage classes, plans, and progress from a desktop view.',
    mobileTitle: 'Wellness App',
    mobileDetail: 'Book sessions and track goals on the go.'
  }
};

function getResponsivePreview(project) {
  return responsivePreviewData[project.category] || {
    type: 'Responsive Experience',
    tagline: 'A polished frontend designed for every viewport.',
    description: 'This responsive site combines a front-end interface with a backend API to deliver consistent performance across devices.',
    detail: 'Fluid layouts, adaptive interactions, and mobile-optimized components keep the experience refined on any screen.',
    desktopTitle: 'Desktop View',
    desktopDetail: 'A wider layout designed for productivity and clarity.',
    mobileTitle: 'Mobile View',
    mobileDetail: 'A simplified interface designed for touch and fast navigation.'
  };
}

function renderProject(project) {
  document.title = `${project.name} | Project Details`;

  const themeClass = getProjectTheme(project);
  const preview = getResponsivePreview(project);
  const hasLiveSite = project.url && !project.url.includes('project-detail.html');
  const liveUrl = hasLiveSite ? project.url : null;

  contentRoot.innerHTML = `
    <div class="project-page-header">
      <a href="index.html" class="back-button detail-link">← Back to Portfolio</a>
      <div>
        <p class="page-breadcrumb">${project.category} • ${project.domain}</p>
        <h1>${project.name}</h1>
      </div>
    </div>
    <div class="page-banner detail-hero ${themeClass}">
      <div class="detail-hero-copy">
        <span class="detail-hero-badge">Responsive Frontend + Backend</span>
        <h2>${preview.type} for ${project.name}</h2>
        <p class="detail-hero-subtitle">${preview.tagline}</p>
      </div>
    </div>
    <div class="detail-container">
      <article class="detail-card">
        <div class="detail-summary">
          <p><strong>Project Purpose:</strong> ${project.description}</p>
        </div>
        <div class="detail-stats">
          <div class="detail-stat"><span>${project.year}</span><p>Year Delivered</p></div>
          <div class="detail-stat"><span>${project.status}</span><p>Status</p></div>
          <div class="detail-stat"><span>${project.domain}</span><p>Domain</p></div>
        </div>
        <div class="detail-section">
          <h3>What the Website Was Built For</h3>
          <p>${project.description}</p>
          <ul class="detail-features">
            ${formatFeatureList(project)}
          </ul>
        </div>
        <div class="detail-section">
          <h3>Responsive Frontend Preview</h3>
          <div class="detail-preview">
            <article class="preview-panel">
              <div class="preview-bar">
                <span class="preview-chip">${preview.type}</span>
                <span>${preview.tagline}</span>
              </div>
              <p>${preview.description}</p>
            </article>
            <article class="preview-panel">
              <div class="preview-bar">
                <span class="preview-chip">Adaptive Layout</span>
              </div>
              <p>${preview.detail}</p>
            </article>
            <div class="preview-screens">
              <div class="preview-screen">
                <h4>${preview.desktopTitle}</h4>
                <p>${preview.desktopDetail}</p>
              </div>
              <div class="preview-screen">
                <h4>${preview.mobileTitle}</h4>
                <p>${preview.mobileDetail}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-section">
          <h3>Core Backend Capabilities</h3>
          <div class="tech-grid">
            ${formatTechTags(project.capabilities)}
          </div>
        </div>
        <div class="detail-links">
          <a href="index.html" class="detail-link">Return to Portfolio</a>
        </div>
      </article>
      <aside class="detail-card detail-backend">
        <h3>Backend Details</h3>
        <div class="detail-backend-grid">
          <div class="detail-backend-card">
            <h4>API-First Design</h4>
            <p>Structured endpoints and versioning strategy ensure clients can consume the service reliably.</p>
          </div>
          <div class="detail-backend-card">
            <h4>Secure Operations</h4>
            <p>Authentication, authorization, and encryption are built into how data is served and stored.</p>
          </div>
          <div class="detail-backend-card">
            <h4>Scalable Infrastructure</h4>
            <p>Cloud-ready deployment patterns support growth and traffic spikes without downtime.</p>
          </div>
          <div class="detail-backend-card">
            <h4>Developer Ready</h4>
            <p>Clean documentation, monitoring hooks, and modular code make handoff simple.</p>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderNotFound() {
  contentRoot.innerHTML = `
    <div class="detail-card">
      <h1>Project Not Found</h1>
      <p>The requested project could not be found. Return to the portfolio to select another project.</p>
      <a href="index.html" class="detail-link primary">Back to Portfolio</a>
    </div>
  `;
}

if (!projectId) {
  renderNotFound();
} else {
  const project = allProjects.find(item => item.id === projectId);
  if (!project) {
    renderNotFound();
  } else {
    renderProject(project);
  }
}
