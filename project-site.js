const contentRoot = document.getElementById('site-content');
const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

const categorySites = {
  Fintech: {
    siteType: 'Payments Platform',
    hero: 'Trusted financial workflows for modern businesses.',
    summary: 'Built for quick approvals, secure transactions, and modular account management across devices.',
    features: ['Secure checkout flow', 'Transaction analytics', 'Customer account dashboards'],
    desktopTitle: 'Finance Control Center',
    desktopCopy: 'A high-impact desktop view with dashboards, transaction feeds, and account controls.',
    mobileTitle: 'Wallet Mobile',
    mobileCopy: 'A streamlined mobile interface for fast payments and expense tracking.'
  },
  Healthcare: {
    siteType: 'Care Portal',
    hero: 'A secure patient experience with responsive access and booking flows.',
    summary: 'Designed for care continuity, appointment scheduling, and confidential patient communications.',
    features: ['Appointment booking', 'Patient records access', 'Secure messaging'],
    desktopTitle: 'Clinical Dashboard',
    desktopCopy: 'A responsive care management layout for doctors and clinical staff.',
    mobileTitle: 'Patient App',
    mobileCopy: 'A mobile-friendly patient interface for appointments and care updates.'
  },
  Logistics: {
    siteType: 'Dispatch Hub',
    hero: 'Live routing, delivery tracking, and driver coordination across screens.',
    summary: 'Designed for operations teams and drivers to stay aligned with real-time logistics data.',
    features: ['Route planning', 'Driver status updates', 'Delivery timelines'],
    desktopTitle: 'Routing Console',
    desktopCopy: 'A planning-first desktop layout for dispatch and field operations.',
    mobileTitle: 'Driver Tracker',
    mobileCopy: 'A mobile-first driver interface for pickups and delivery updates.'
  },
  'E-commerce': {
    siteType: 'Commerce Store',
    hero: 'A polished shopping experience optimized for buyers on every device.',
    summary: 'Custom storefronts, streamlined checkout flows, and product discovery that adapt beautifully to mobile and desktop users.',
    features: ['Product galleries', 'One-page checkout', 'Customer reviews'],
    desktopTitle: 'Storefront View',
    desktopCopy: 'A modern desktop storefront with promotional sections and featured products.',
    mobileTitle: 'Shop Mobile',
    mobileCopy: 'A clean mobile shopping experience for fast browsing and purchasing.'
  },
  Education: {
    siteType: 'Learning Hub',
    hero: 'A responsive experience for students, instructors, and admins.',
    summary: 'Courses, progress tracking, and communications work together in a device-friendly learning platform.',
    features: ['Course catalog', 'Progress tracking', 'Student portals'],
    desktopTitle: 'Course Dashboard',
    desktopCopy: 'A structured desktop view for course management and reporting.',
    mobileTitle: 'Student Mobile',
    mobileCopy: 'A simplified mobile interface for learners and instructors.'
  },
  Enterprise: {
    siteType: 'Business Portal',
    hero: 'A responsive enterprise site for stakeholders and operations.',
    summary: 'Secure dashboards, reporting, and collaboration tools built for desktop and mobile teams.',
    features: ['Executive dashboards', 'Approval workflows', 'Team collaboration'],
    desktopTitle: 'Enterprise Console',
    desktopCopy: 'A comprehensive desktop portal for executives and business users.',
    mobileTitle: 'Mobile Briefing',
    mobileCopy: 'A fast access mobile summary for quick decisions on the go.'
  },
  Marketplace: {
    siteType: 'Marketplace Experience',
    hero: 'A responsive marketplace for sellers and buyers.',
    summary: 'Listings, orders, and seller tools are built to scale across screens.',
    features: ['Listing management', 'Order processing', 'Buyer search'],
    desktopTitle: 'Vendor Dashboard',
    desktopCopy: 'A seller-facing desktop experience for managing offerings and orders.',
    mobileTitle: 'Buyer App',
    mobileCopy: 'A mobile-friendly browsing experience for shoppers.'
  },
  Media: {
    siteType: 'Editorial Site',
    hero: 'A responsive publishing experience for content and media.',
    summary: 'Stories, video, and editorial workflows are presented in an engaging cross-device layout.',
    features: ['Story pages', 'Media galleries', 'Content workflows'],
    desktopTitle: 'Editor Desk',
    desktopCopy: 'A content-rich desktop layout for publishers and editors.',
    mobileTitle: 'Reader View',
    mobileCopy: 'A streamlined mobile reading experience for users on the go.'
  }
};

const defaultSite = {
  siteType: 'Responsive Website',
  hero: 'A dynamic preview built for every device and use case.',
  summary: 'This responsive project site shows how the frontend and backend work together to deliver a polished user experience.',
  features: ['Adaptive page sections', 'Mobile-friendly navigation', 'Fast loading content'],
  desktopTitle: 'Desktop Preview',
  desktopCopy: 'A wider layout with layered content and conversion-focused sections.',
  mobileTitle: 'Mobile Preview',
  mobileCopy: 'A compact interface built for fast navigation and touch-friendly interactions.'
};

function getProjectSite(project) {
  return categorySites[project.category] || defaultSite;
}

function hashString(value) {
  return value.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function getProjectAccent(project) {
  const phrases = [
    'Built for seamless conversions',
    'Designed for fast user journeys',
    'Crafted to maximize reliability',
    'Optimized for modern responsiveness'
  ];
  const index = hashString(project.id || project.name || 'key') % phrases.length;
  return phrases[index];
}

function getProjectAudience(project) {
  if (project.category === 'Fintech') return 'For finance teams and payment users';
  if (project.category === 'Healthcare') return 'For patients and care providers';
  if (project.category === 'Logistics') return 'For dispatch teams and delivery drivers';
  if (project.category === 'E-commerce') return 'For shoppers and store managers';
  if (project.category === 'Education') return 'For learners and instructors';
  if (project.category === 'Enterprise') return 'For executives and operations teams';
  if (project.category === 'Marketplace') return 'For sellers and buyers';
  if (project.category === 'Media') return 'For readers and content creators';
  return 'For users who need a polished responsive experience';
}

function renderSite(project) {
  const site = getProjectSite(project);
  const themeClass = getProjectTheme(project);
  const siteAccent = getProjectAccent(project);
  const siteAudience = getProjectAudience(project);
  const featureLabel = project.capabilities && project.capabilities.length
    ? `Unique focus: ${project.capabilities[0]}`
    : 'Unique focus: responsive design';

  document.title = `${project.name} | Live Preview`;

  contentRoot.innerHTML = `
    <div class="project-page-header">
      <a href="index.html" class="back-button detail-link">← Back to Portfolio</a>
      <div>
        <p class="page-breadcrumb">${project.category} • ${project.domain}</p>
        <h1>${project.name}</h1>
      </div>
    </div>
    <div class="site-hero detail-hero ${themeClass}">
      <div class="detail-hero-copy">
        <span class="detail-hero-badge">Live Site Preview</span>
        <h2>${site.siteType}</h2>
        <p class="detail-hero-subtitle">${site.hero}</p>
      </div>
    </div>
    <section class="site-section">
      <div class="site-intro">
        <h3>What this website was built for</h3>
        <p>${project.description}</p>
        <p>${site.summary}</p>
        <p class="site-tagline"><strong>${siteAccent}</strong> ${siteAudience}.</p>
      </div>
      <div class="site-card-grid">
        ${site.features.map(feature => `<div class="site-card"><h4>${feature}</h4></div>`).join('')}
        <div class="site-card">
          <h4>Project focus</h4>
          <p>${featureLabel}</p>
        </div>
      </div>
    </section>
    <section class="site-section site-split">
      <div class="site-card site-preview-card">
        <h3>${site.desktopTitle}</h3>
        <p>${site.desktopCopy}</p>
      </div>
      <div class="site-card site-preview-card">
        <h3>${site.mobileTitle}</h3>
        <p>${site.mobileCopy}</p>
      </div>
    </section>
    <section class="site-section site-cta-section">
      <div class="site-cta">
        <h3>Responsive by design</h3>
        <p>Every page here adapts to mobile, tablet, and desktop layouts, presenting your project as a fully responsive experience.</p>
        <a href="project-detail.html?id=${encodeURIComponent(project.id)}" class="detail-link primary">View Project Details</a>
      </div>
    </section>
  `;
}

function renderNotFound() {
  contentRoot.innerHTML = `
    <div class="detail-card">
      <h1>Preview Not Found</h1>
      <p>The requested site preview could not be found. Return to the portfolio to select another project.</p>
      <a href="index.html" class="detail-link primary">Back to Portfolio</a>
    </div>
  `;
}

function getProjectTheme(project) {
  const key = (project.domain || project.category || '').toLowerCase();
  if (key.includes('stream') || key.includes('entertainment')) return 'theme-streaming';
  if (key.includes('e-commerce') || key.includes('ecommerce') || key.includes('retail')) return 'theme-ecommerce';
  if (key.includes('blog') || key.includes('news') || key.includes('wiki')) return 'theme-blog';
  if (key.includes('corporate') || key.includes('business') || key.includes('agency')) return 'theme-corporate';
  if (key.includes('saas') || key.includes('platform') || key.includes('analytics')) return 'theme-saas';
  if (key.includes('health') || key.includes('fitness') || key.includes('medical')) return 'theme-health';
  if (key.includes('education') || key.includes('learning') || key.includes('course')) return 'theme-education';
  if (key.includes('social') || key.includes('community') || key.includes('forum')) return 'theme-social';
  return 'theme-default';
}

if (!projectId) {
  renderNotFound();
} else {
  const project = allProjects.find(item => item.id === projectId);
  if (!project) {
    renderNotFound();
  } else {
    renderSite(project);
  }
}
