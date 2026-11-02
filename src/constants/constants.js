// Social Icons
import linkedIn from '@/images/linkedin.png';
import github from '@/images/github.png';
import mail from '@/images/email.png';

// Tech Icons
import reactIcon from '@/images/react-icon.svg';
import nextjsIcon from '@/images/nextjs-icon.svg';
import javascriptIcon from '@/images/javascript-icon.svg';
import typescriptIcon from '@/images/typescript-icon.svg';
import nodejsIcon from '@/images/nodejs-icon.svg';
import reduxIcon from '@/images/redux-icon.svg';
import htmlIcon from '@/images/html-icon.svg';
import cssIcon from '@/images/css-icon.svg';
import tailwindIcon from '@/images/tailwind-css-icon.svg';
import sassIcon from '@/images/sass-icon.svg';
import awsIcon from '@/images/aws-icon.svg';
import dockerIcon from '@/images/docker-icon.svg';
import opentelemetryIcon from '@/images/opentelemetry-icon.svg';
import grafanaIcon from '@/images/grafana-icon.svg';
import postgresqlIcon from '@/images/postgresql-icon.svg';
import mongodbIcon from '@/images/mongodb-icon.svg';
import gitIcon from '@/images/git-icon.svg';
import postmanIcon from '@/images/postman-icon.svg';
import webpackIcon from '@/images/webpack-icon.svg';

export const personalInfo = {
    name: 'Keerthivasan',
    role: 'Full Stack Developer',
    experience: '5+ Years',
    location: 'Rasipuram, India',
    email: 'keerthikrishna66@gmail.com',
    phone: '+91 8344803585',
    resumeUrl: '/Keerthivasan_resume.pdf',
    shortIntro: 'I build scalable, high-performance web applications and reliable backend services, with expertise in modern frontend technologies, cloud infrastructure, and end-to-end product development.',
    mainTechnologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript']
};

export const socialPlatforms = [
    { type: 'linkedin', label: 'LinkedIn', icon: linkedIn, url: 'https://www.linkedin.com/in/keerthivasan-m-k-7a885a184/' },
    { type: 'github', label: 'GitHub', icon: github, url: 'https://github.com/keerthivasanmk' },
    { type: 'mail', label: 'Email', icon: mail, url: 'mailto:keerthikrishna66@gmail.com' }
];

export const skillCategories = [
    {
        category: 'Languages',
        skills: [
            { name: 'JavaScript', icon: javascriptIcon },
            { name: 'TypeScript', icon: typescriptIcon },
            { name: 'HTML5', icon: htmlIcon },
            { name: 'CSS3', icon: cssIcon }
        ]
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'React.js', icon: reactIcon },
            { name: 'Next.js', icon: nextjsIcon },
            { name: 'Redux', icon: reduxIcon },
            { name: 'Tailwind CSS', icon: tailwindIcon },
            { name: 'Sass', icon: sassIcon }
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: nodejsIcon },
            { name: 'REST APIs', icon: nextjsIcon }
        ]
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'AWS', icon: awsIcon },
            { name: 'ECR', icon: awsIcon },
            { name: 'EBS', icon: awsIcon },
            { name: 'S3', icon: awsIcon },
            { name: 'Docker', icon: dockerIcon }
        ]
    },
    {
        category: 'Observability',
        skills: [
            { name: 'OpenTelemetry', icon: opentelemetryIcon },
            { name: 'Grafana', icon: grafanaIcon }
        ]
    },
    {
        category: 'Database',
        skills: [
            { name: 'PostgreSQL', icon: postgresqlIcon },
            { name: 'MongoDB', icon: mongodbIcon }
        ]
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git', icon: gitIcon },
            { name: 'Postman', icon: postmanIcon },
            { name: 'Webpack', icon: webpackIcon }
        ]
    }
];

export const workExperience = [
    {
        company: 'AOT Technologies',
        client: 'Hootsuite',
        role: 'Full Stack Developer',
        period: 'Apr 2024 – Present',
        isCurrent: true,
        description: 'Working as a Full Stack Developer building enterprise-grade integrations and scalable backend and frontend microservices for Hootsuite.',
        achievements: [
            'Building and maintaining applications using React, Next.js, TypeScript, JavaScript, and Node.js.',
            'Implementing OpenTelemetry with Grafana and Amazon S3 for centralized distributed observability and monitoring.',
            'Developing a plugin-based approach to automate telemetry configuration across services.',
            'Resolving Snyk security vulnerabilities and successfully upgrading Node.js versions across systems.',
            'Managing Docker-based containerization and AWS deployments using ECR, EBS, and S3.'
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'OpenTelemetry', 'Grafana', 'AWS (ECR, EBS, S3)', 'Docker', 'Snyk']
    },
    {
        company: 'Mallow Technologies',
        client: 'KwickMetrics',
        role: 'Frontend Developer',
        period: 'Apr 2021 – Mar 2024',
        isCurrent: false,
        description: 'Engineered high-performance web applications and documentation platforms for an Amazon and Walmart seller business intelligence SaaS.',
        achievements: [
            'Developed the KwickMetrics marketing website using Next.js and headless WordPress.',
            'Implemented SSR (Server-Side Rendering), responsive design, and extensive performance optimizations improving Core Web Vitals.',
            'Built the comprehensive documentation platform using React and Docusaurus.',
            'Collaborated closely with design and content teams to deliver production-ready interfaces and smooth UX.'
        ],
        technologies: ['React', 'Next.js', 'Headless WordPress', 'Docusaurus', 'Tailwind CSS', 'Redux', 'JavaScript']
    }
];

// Note: Hootsuite and KwickMetrics are removed from projects per request, preserved in workExperience
export const projects = [
    {
        id: 'food-delivery-platform',
        title: 'Food Delivery Platform',
        subtitle: 'Multi-Role Real-Time Delivery Ecosystem',
        type: 'Personal Project',
        overview: 'An end-to-end full-stack food delivery platform featuring distinct role-tailored applications for customer ordering, restaurant menu & order management, and real-time delivery partner tracking.',
        roleAndContributions: 'Engineered the complete application architecture from the ground up: dynamic cart state workflows, real-time order status dispatching, Firebase backend authentication and database synchronization, responsive analytics dashboards, and deployment on Vercel.',
        technologies: ['Next.js', 'React', 'Firebase', 'Vercel', 'Tailwind CSS', 'REST APIs'],
        image: 'https://images.openai.com/static-rsc-4/Q--s_WmPzBNsbWzao968SNR191piIDCoQb-7NBbgETyTIZxDxFSX0dZmZTOaFfkYN4rDtkXBD7KEjKrJ4v12WOkxxbjRP2BwY-bI89xrkH6BuRMIheqvfvw2l9CFT5xeH_IO7AF25TEb493RfLFLwuTBv95ICjae3BbWeVVLBeg?purpose=inline',
        githubUrl: 'https://github.com/keerthivasanmk',
        isConfidential: false
    }
];

export const certifications = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        badge: 'AWS Cloud',
        description: 'Demonstrated overall understanding of AWS Cloud concepts, security, architecture principles, core services, and deployment models.'
    },
    {
        title: 'Node.js – The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
        issuer: 'Udemy / Maximilian Schwarzmüller',
        badge: 'Node.js Specialist',
        description: 'Comprehensive mastery of Node.js backend development, Express, REST APIs, GraphQL, authentication, SQL/NoSQL databases, and MVC design patterns.'
    }
];

export const education = [
    {
        degree: 'B.Tech – Information Technology',
        institution: 'Kongu Engineering College',
        period: '2017 – 2021',
        description: 'Foundation in computer science, software engineering, algorithms, data structures, and web technologies.'
    }
];
