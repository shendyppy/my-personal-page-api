import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // ============ HERO SECTION ============
  console.log('📝 Seeding hero section...');

  const hero = await prisma.hero.create({
    data: {
      bio: `<p>Front-End Developer currently at <b>Daya Dimensi Indonesia</b> with <b>4+ years of experience</b>. I specialize in creating clean, user-friendly UIs and playful interactions. Currently, I'm expanding my skills to become a full-stack developer, with a keen interest in <b>Large Language Models</b> and <b>3D web elements</b>.</p>`,
    },
  });

  const traits = await prisma.trait.createMany({
    data: [
      // General traits
      { label: 'Curious Mind', type: 'general', iconName: 'Lightbulb', order: 1 },
      { label: 'Problem Solver (still eager to learn)', type: 'general', iconName: 'Workflow', order: 2 },
      { label: 'Always Growing', type: 'general', iconName: 'Brain', order: 3 },
      // Frontend traits
      { label: 'Exploring Front-End Craft', type: 'frontend', iconName: 'Layout', order: 4 },
      { label: 'UI/UX Enthusiast', type: 'frontend', iconName: 'Frame', order: 5 },
      { label: 'Playful Experiments', type: 'frontend', iconName: 'Sparkles', order: 6 },
      { label: 'Test Driven Development', type: 'frontend', iconName: 'Sparkles', order: 7 },
      // 3D traits
      { label: 'Learning 3D & Graphics', type: 'three', iconName: 'Layers3', order: 8 },
      { label: 'Trying Out Animations', type: 'three', iconName: 'Gamepad2', order: 9 },
      { label: 'Polishing Interfaces', type: 'three', iconName: 'Wand', order: 10 },
      // Backend traits
      { label: 'Backend Beginner', type: 'backend', iconName: 'Code', order: 11 },
      { label: 'REST API Craft', type: 'backend', iconName: 'Cpu', order: 12 },
      { label: 'Docker Self Test Endpoint', type: 'backend', iconName: 'Bot', order: 13 },
      // Learning traits
      { label: 'DevOps Love at The First Deployment', type: 'learning', iconName: 'BookText', order: 14 },
      { label: 'AI Engineer Wanna Be', type: 'learning', iconName: 'Library', order: 15 },
      { label: 'Database Want to Learn', type: 'learning', iconName: 'NotepadText', order: 16 },
      // Shuffle trait
      { label: 'Shuffle', type: 'shuffle', iconName: 'Shuffle', order: 17 },
    ],
  });

  // ============ ABOUT SECTION ============
  console.log('📄 Seeding about section...');

  const about = await prisma.about.create({
    data: {
      professionalBioTitle: 'Professional Dreamer',
      professionalBioContent: `I began my career as a civil engineer, but curiosity soon pulled me into tech (during the pandemic I challenged myself to switch paths by joining a coding bootcamp). Growing up as a gamer — and still one today — I was always fascinated by how those worlds were built. Realizing that a few lines of code could bring something interactive to life was game-changing. Since then, I've been all-in on front-end craft: experimenting with 3D on the web, and polishing interfaces that feel playful and intuitive.`,
      learningJourneyTitle: 'Learning Journey',
      learningJourneyContent: `Recently, I've been revisiting the backend, DevOps, and even dipping my toes into LLMs — learning my way through Node.js, Nest.js, ORMs, Python, and the world of CI/CD and deployment. I'm still early on this path, but my aim is clear: to eventually feel just as comfortable building systems behind the scenes as I do shaping the UI up front.`,
      cvTitle: 'Curriculum Vitae',
      cvPreviewImage: '/assets/Screenshot_CV.png',
      cvDownloadPath: '/assets/CV_Shendy Putra Perdana Yohansah_19 Sep 2025.pdf',
    },
  });

  // Social Links
  await prisma.socialLink.createMany({
    data: [
      {
        href: 'https://github.com/shendyppy',
        label: 'GitHub',
        iconName: 'Github',
        order: 1,
      },
      {
        href: 'https://www.linkedin.com/in/shendyppy/',
        label: 'LinkedIn',
        iconName: 'Linkedin',
        order: 2,
      },
      {
        href: 'https://www.instagram.com/shendyppy/',
        label: 'Instagram',
        iconName: 'Instagram',
        order: 3,
      },
      {
        href: 'https://www.twitter.com/shendyppy/',
        label: 'Twitter',
        iconName: 'Twitter',
        order: 4,
      },
      {
        href: 'mailto:shendyppy@gmail.com?subject=Hello Shendy&body=I%20saw%20your%20portfolio!',
        label: 'Email',
        iconName: 'Mail',
        order: 5,
      },
    ],
  });

  // Loves (Hobbies/Interests)
  const dota2 = await prisma.love.create({
    data: {
      main: 'DOTA 2',
      imageSrc: '/images/clubs/dota-2.png',
      order: 1,
      clubs: {
        create: [
          { name: 'Rekonix', imageSrc: '/images/clubs/rekonix.png' },
          { name: 'Tundra Esports', imageSrc: '/images/clubs/tundra-esports.png' },
        ],
      },
    },
  });

  const football = await prisma.love.create({
    data: {
      main: 'Football',
      imageSrc: '/images/clubs/football.png',
      order: 2,
      clubs: {
        create: [
          { name: 'Real Madrid', imageSrc: '/images/clubs/real-madrid.png' },
        ],
      },
    },
  });

  const basketball = await prisma.love.create({
    data: {
      main: 'Basketball',
      imageSrc: '/images/clubs/basketball.png',
      order: 3,
      clubs: {
        create: [
          { name: 'Los Angeles Lakers', imageSrc: '/images/clubs/lakers.png' },
          { name: 'Golden State Warriors', imageSrc: '/images/clubs/warriors.png' },
        ],
      },
    },
  });

  // ============ SKILLS ============
  console.log('🛠️ Seeding skills...');

  const frontendSkills = [
    { name: 'TypeScript', level: 90, logo: '/images/skills/typescript.png', model: '/models/typescript.glb', color: '#3178C6' },
    { name: 'JavaScript', level: 95, logo: '/images/skills/javascript.png', model: '/models/javascript.glb', color: '#F7DF1E' },
    { name: 'Vue.js', level: 50, logo: '/images/skills/vue.png', model: '/models/vue.glb', color: '#42B883' },
    { name: 'React.js', level: 95, logo: '/images/skills/react.png', model: '/models/react.glb', color: '#61DAFB' },
    { name: 'AXIOS', level: 90, logo: '/images/skills/axios.png', model: '/models/axios.glb', color: '#5A29E4' },
    { name: 'Redux', level: 80, logo: '/images/skills/redux.png', model: '/models/redux.glb', color: '#764ABC' },
    { name: 'Jest', level: 70, logo: '/images/skills/jest.png', model: '/models/jest.glb', color: '#C21325' },
  ];

  const backendSkills = [
    { name: 'Python', level: 40, logo: '/images/skills/python.png', model: '/models/python.glb', color: '#3776AB' },
    { name: 'Node.js', level: 60, logo: '/images/skills/nodejs.png', model: '/models/nodejs.glb', color: '#339933' },
    { name: 'Sequelize', level: 50, logo: '/images/skills/sequelize.png', model: '/models/sequelize.glb', color: '#52B0E7' },
  ];

  const devopsSkills = [
    { name: 'Github Actions', level: 60, logo: '/images/skills/github-actions.png', model: '/models/github-actions.glb', color: '#2088FF' },
    { name: 'AWS', level: 50, logo: '/images/skills/aws.png', model: '/models/aws.glb', color: '#FF9900' },
    { name: 'cPanel', level: 50, logo: '/images/skills/cpanel.png', model: '/models/cpanel.glb', color: '#FF6C2C' },
    { name: 'Firebase', level: 75, logo: '/images/skills/firebase.png', model: '/models/firebase.glb', color: '#FFCA28' },
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', level: 60, logo: '/images/skills/postgresql.png', model: '/models/postgresql.glb', color: '#336791' },
  ];

  await prisma.skill.createMany({
    data: [
      ...frontendSkills.map((s) => ({ ...s, category: 'Frontend' as const })),
      ...backendSkills.map((s) => ({ ...s, category: 'Backend' as const })),
      ...devopsSkills.map((s) => ({ ...s, category: 'DevOps' as const })),
      ...databaseSkills.map((s) => ({ ...s, category: 'Database' as const })),
    ],
  });

  // ============ EXPERIENCES ============
  console.log('💼 Seeding experiences...');

  await prisma.experience.createMany({
    data: [
      {
        experienceId: '1',
        title: 'Front End Developer',
        company: 'PT. Daya Dimensi Indonesia (DDI)',
        logo: '/images/companies/ddi-logo.webp',
        location: 'Jakarta, Indonesia - Remote',
        period: 'February 2022 - Present',
        current: true,
        description: 'Human resources consultant specializing in learning management systems and assessment platforms.',
        responsibilities: [
          'Drove product iteration cycles by participating in planning and quality reviews, ensuring timely delivery of high-impact features.',
          'Enhanced learning management systems with focus on usability, scalability, and performance.',
          'Built and delivered 80+ features including face recognition, video conferencing, dynamic organizational charts, and real-time communication.',
          'Led end-to-end development of multiple applications across diverse business domains.',
        ],
        projects: [
          'EnGauge – Assessment Platform (Released, internal use)',
          'Learning Hub – Learning Platform (Released, internal use)',
          'TPOP (Talent Potential Predictors) – (Released, internal use)',
          'DASH SaaS – SaaS assessment platform with video conferencing (Released, internal use)',
          'WISH – Career discovery platform (Released, education.acelents.com)',
          'ACELENTS – SaaS platform for assessment and recruitment (In development)',
          'PortrAI – AI-driven assessment platform (In development)',
        ],
        techStack: 'React.js, Redux, Axios, Ant Design, Firebase, Vite.js, JavaScript, TypeScript',
      },
      {
        experienceId: '2',
        title: 'Front End Developer',
        company: 'PT. Mahardika Solusi Teknologi (IDE Asia)',
        logo: '/images/companies/ide-logo.webp',
        location: 'Jakarta, Indonesia - Remote',
        period: 'October 2021 - May 2022, September 2024 - August 2025',
        current: false,
        description: 'Technology consultant working on banking integration features and cross-border payment solutions.',
        responsibilities: [
          'Contributed to BI-FAST, one of Indonesia\'s largest banking integration features for interbank transactions.',
          'Implemented Vietnam eTax Payment, a regional cross-border banking initiative.',
          'Delivered 20+ production-ready features enhancing customer experience in banking applications.',
          'Collaborated with Big 4 global consulting firm on retail/consumer banking platform.',
          'Built responsive, accessible, and user-friendly banking service interfaces.',
        ],
        projects: [
          'Banking Platform – BI-FAST & VN eTax features (Released, internal use)',
        ],
        techStack: 'React.js, JavaScript, Redux, Axios, Material UI, Jenkins, Sonar, Jest',
      },
    ],
  });

  // ============ PROJECTS ============
  console.log('🎨 Seeding projects...');

  const ddiReleasedProject = await prisma.project.create({
    data: {
      slug: 'ddi-released',
      title: 'Daya Dimensi Indonesia - HR Consultant [RELEASED PROJECT]',
      description: 'Building assessment platform for HR consultants to evaluate candidates, also manage clients and reports.',
      image: '/images/projects/bg-released-ddi.png',
      company: 'Daya Dimensi Indonesia',
      overview: 'Daya Dimensi Indonesia (DDI) is an Indonesian consulting firm that has been around for quite some time. They\'re known mainly in the HR and talent management space, helping companies with leadership assessments, organizational development, and workforce capability building.',
      scope: 'Front End Developer',
      industry: 'Human Resources',
      highlights: {
        create: [
          {
            highlightId: 'engauge',
            title: 'Engauge',
            description: 'EnGauge seems like a strong asset for DDI because psychometric/assessment platforms are highly valuable in HR consulting. It provides recurring value, could help differentiate them, and possibly generate reliable revenue (via clients subscribing).',
            impact: ['Scale code to be maintainable', 'Revamped UI/UX'],
            images: {
              create: [
                { link: '/images/projects/engauge/cms-1.png', scrollable: false },
                { link: '/images/projects/engauge/cms-2.png', scrollable: false },
                { link: '/images/projects/engauge/participant-1.png', scrollable: false },
                { link: '/images/projects/engauge/participant-2.png', scrollable: false },
                { link: '/images/projects/engauge/participant-3.png', scrollable: false },
              ],
            },
          },
          {
            highlightId: 'learning-hub',
            title: 'Learning Hub',
            description: 'Learning Hub is a learning platform for employees to learn and grow. It provides a convenient way for employees to access educational content, resources, and tools to improve their skills and knowledge. Have multiple learning paths, learning modules, and quizzes.',
            impact: ['Scale code to be maintainable', 'Revamped UI/UX'],
            images: {
              create: [
                { link: '/images/projects/learning-hub/cms-1.png', scrollable: true },
                { link: '/images/projects/learning-hub/cms-2.png', scrollable: false },
                { link: '/images/projects/learning-hub/cms-3.png', scrollable: true },
                { link: '/images/projects/learning-hub/participant-1.png', scrollable: true },
                { link: '/images/projects/learning-hub/participant-2.png', scrollable: true },
                { link: '/images/projects/learning-hub/participant-3.png', scrollable: false },
                { link: '/images/projects/learning-hub/participant-4.png', scrollable: false },
              ],
            },
          },
          {
            highlightId: 'tpop',
            title: 'Talent Potential Predictors',
            description: 'Talent Potential Predictors (TPOP) is a platform that predicts the potential of candidates based on their performance on a test. It provides an objective way to evaluate candidates and help companies make informed hiring decisions.',
            impact: ['Scale code to be maintainable', 'Revamped UI/UX'],
            images: {
              create: [
                { link: '/images/projects/tpop/cms-1.png', scrollable: true },
                { link: '/images/projects/tpop/participant-1.png', scrollable: true },
                { link: '/images/projects/tpop/validator-1.png', scrollable: false },
              ],
            },
          },
          {
            highlightId: 'dash-saas',
            title: 'DASH SaaS',
            description: 'Dash SaaS is a voluntary SaaS implementation of the assessment platform with video conferencing. It provides a convenient way for HR consultants to evaluate candidates, and then the test integrated with EnGauge make it more effective.',
            impact: ['Initiate a new project', 'Make new code environment', 'Software as a Service (SaaS)'],
            images: {
              create: [
                { link: '/images/projects/dash-saas/cms-1.png', scrollable: true },
                { link: '/images/projects/dash-saas/cms-assessor-1.png', scrollable: false },
                { link: '/images/projects/dash-saas/cms-assessor-2.png', scrollable: true },
                { link: '/images/projects/dash-saas/cms-assessor-3.png', scrollable: false },
                { link: '/images/projects/dash-saas/participant-1.png', scrollable: false },
                { link: '/images/projects/dash-saas/participant-2.png', scrollable: false },
                { link: '/images/projects/dash-saas/participant-3.png', scrollable: false },
              ],
            },
          },
          {
            highlightId: 'wish',
            title: 'Acelents for Education (WISH)',
            description: 'One stop education solutions for students, parents, and educational institution',
            impact: ['AI Agent', 'Payment Gateway', 'Software as a Service (SaaS)'],
            link: 'https://education.acelents.com/',
            images: {
              create: [
                { link: '/images/projects/wish/participant-1.png', scrollable: true },
                { link: '/images/projects/wish/participant-2.png', scrollable: true },
                { link: '/images/projects/wish/participant-3.png', scrollable: true },
                { link: '/images/projects/wish/participant-4.png', scrollable: true },
                { link: '/images/projects/wish/participant-5.png', scrollable: false },
                { link: '/images/projects/wish/participant-6.png', scrollable: true },
              ],
            },
          },
        ],
      },
    },
  });

  const ddiIncomingProject = await prisma.project.create({
    data: {
      slug: 'ddi-incoming',
      title: 'Daya Dimensi Indonesia - HR Consultant [INCOMING PROJECT]',
      description: 'Building assessment platform for HR consultants to evaluate candidates, also manage clients and reports.',
      image: '/images/projects/bg-incoming-ddi.png',
      company: 'Daya Dimensi Indonesia',
      overview: 'Daya Dimensi Indonesia (DDI) is an Indonesian consulting firm that has been around for quite some time. They\'re known mainly in the HR and talent management space, helping companies with leadership assessments, organizational development, and workforce capability building.',
      scope: 'Front End Developer',
      industry: 'Human Resources',
      highlights: {
        create: [
          {
            highlightId: 'acelents',
            title: 'Acelents',
            description: 'Acelents seems like a strong asset for DDI because psychometric/assessment platforms are highly valuable in HR consulting. It provides recurring value, could help differentiate them, and possibly generate reliable revenue (via clients subscribing).',
            impact: ['Scale code to be maintainable', 'Initiate a new project', 'Software as a Service (SaaS)'],
            images: {
              create: [
                { link: '/images/projects/acelents/cms-1.png', scrollable: true },
                { link: '/images/projects/acelents/cms-2.png', scrollable: false },
                { link: '/images/projects/acelents/cms-3.png', scrollable: false },
                { link: '/images/projects/acelents/cms-4-1.png', scrollable: false },
                { link: '/images/projects/acelents/cms-4-2.png', scrollable: false },
                { link: '/images/projects/acelents/cms-5.png', scrollable: false },
                { link: '/images/projects/acelents/cms-6.png', scrollable: false },
              ],
            },
          },
          {
            highlightId: 'portrai',
            title: 'PortrAI',
            description: 'PortrAI is a learning platform for employees to learn and grow. It provides a convenient way for employees to access educational content, resources, and tools to improve their skills and knowledge. Have multiple learning paths, learning modules, and quizzes.',
            impact: ['Scale code to be maintainable', 'New Codes Environment', 'Software as a Service (SaaS)'],
            images: {
              create: [
                { link: '/images/projects/portrAI/cms-1.png', scrollable: false },
                { link: '/images/projects/portrAI/home-participant-3.png', scrollable: false },
                { link: '/images/projects/portrAI/chat-participant-2.png', scrollable: false },
                { link: '/images/projects/portrAI/email-participant-1.png', scrollable: true },
              ],
            },
          },
        ],
      },
    },
  });

  const uobInfinityProject = await prisma.project.create({
    data: {
      slug: 'uob-infinity',
      title: 'UOB Infinity - Banking Platform',
      description: 'A banking platform for UOB customers to manage accounts, transfer funds, pay bills, and access financial services.',
      image: '/images/projects/bg-uob-infinity.png',
      company: 'United Overseas Bank (UOB)',
      overview: 'UOB is rated as one of the world\'s top banks, ranked \'Aa1\' by Moody\'s Investors Service and \'AA-\' by both S&P Global and Fitch Ratings. With a global network of 500 branches and offices across 19 countries in Asia Pacific, Europe and North America. In Asia, we operate through our head office in Singapore and banking subsidiaries in China, Indonesia, Malaysia, Thailand and Vietnam, as well as branches and offices throughout the region.',
      scope: 'Front End Developer',
      industry: 'Financial Services',
      highlights: {
        create: [
          {
            highlightId: 'uob-indonesia',
            title: 'UOB Infinity - Indonesia',
            description: 'BI-FAST implementation for UOB Indonesia, for Single and Bulk Transactions',
            impact: ['Scale code to be maintainable'],
            images: {
              create: [
                { link: '/images/projects/uob-infinity/uob-indonesia.png', scrollable: false },
              ],
            },
          },
          {
            highlightId: 'uob-vietnam',
            title: 'UOB Infinity - Vietnam',
            description: 'Vietnam ETax implementation for UOB Vietnam, for Single and Bulk Transactions (General Tax, Customs Tax, Customs Fee Payment)',
            impact: ['Scale code to be maintainable', 'Review code', 'Refactor code'],
            images: {
              create: [
                { link: '/images/projects/uob-infinity/uob-vietnam.png', scrollable: false },
              ],
            },
          },
        ],
      },
    },
  });

  const sapasonnyProject = await prisma.project.create({
    data: {
      slug: 'sapasonny',
      title: 'Sapasonny - Personal Branding Website',
      description: 'A personal branding website to showcase portfolio, services, contact information, and can be used as aspiration tracker.',
      image: '/images/projects/bg-bandung-makin-juara.png',
      company: 'Dr. H. Sonny Salimi, S.ST., MT.',
      overview: 'Sonny Salimi is Direktur Utama (President Director / CEO) of Perumda Tirtawening Kota Bandung — the municipal water utility company in Bandung. He at that time, need to gain personal branding or exposure to the public, so he created this website.',
      scope: 'Front End Developer & Devops Engineer',
      industry: 'Personal Branding',
      highlights: {
        create: [
          {
            highlightId: 'sapasonny-website',
            title: 'Sapasonny - Personal Branding Website',
            description: 'Provide personal branding to promote his profile, achievements, and also provide a platform for aspiration tracker for Bandung citizens.',
            impact: ['Scale code to be maintainable', 'Deploy to production', 'Initiate a new project', 'Review code'],
            link: 'https://sonny-salimi-dummy.web.app/',
            images: {
              create: [
                { link: '/images/projects/sapasonny/homepage-1.png', scrollable: true },
                { link: '/images/projects/sapasonny/aspiration-1.png', scrollable: true },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('✅ Seeding completed successfully!');
  console.log(`
  📊 Summary:
  - Hero section seeded
  - 17 traits added
  - About section seeded with social links, tech stack, and interests
  - 15 skills seeded (Frontend, Backend, DevOps, Database)
  - 2 work experiences seeded
  - 4 projects with highlights and images seeded
  `);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
