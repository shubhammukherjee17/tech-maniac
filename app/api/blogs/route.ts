import { NextResponse } from 'next/server'

const mockBlogs = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: `Next.js has revolutionized the way we build React applications. As a powerful full-stack framework, it provides an excellent developer experience while ensuring optimal performance for end users.

    In this comprehensive guide, we'll explore the key features that make Next.js stand out:

    Server-Side Rendering (SSR)
    Next.js offers seamless server-side rendering out of the box. This means your pages are pre-rendered on the server, providing better SEO and faster initial page loads. SSR is particularly valuable for content-heavy websites and applications where search engine visibility is crucial.

    File-Based Routing
    One of Next.js's most intuitive features is its file-based routing system. Simply create a file in the pages directory, and it automatically becomes a route in your application. This eliminates the need for complex router configurations and makes your project structure more organized and predictable.

    API Routes
    Next.js allows you to create API endpoints right within your application. By adding files to the api directory, you can build your backend functionality alongside your frontend code. This feature is perfect for creating serverless functions and handling data operations.

    Best Practices for Next.js Development:
    1. Use appropriate rendering methods (SSR, SSG, or ISR) based on your content type
    2. Implement proper image optimization using the Next.js Image component
    3. Leverage the built-in CSS modules for component-level styling
    4. Take advantage of automatic code splitting for better performance

    Whether you're building a simple blog or a complex web application, Next.js provides the tools and features needed for modern web development.`,
    summary: 'Learn the basics of Next.js and how to build modern web applications.',
    image: 'https://raw.githubusercontent.com/vercel/next.js/canary/docs/public/images/next.svg',
    date: '2024-01-20',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    title: 'Understanding TypeScript',
    content: `TypeScript has become an essential tool in modern web development, offering a robust type system that enhances JavaScript's capabilities. Let's dive deep into what makes TypeScript special and how it can improve your development workflow.

    Why TypeScript?
    TypeScript adds static typing to JavaScript, providing developers with tools to catch errors early in development. This type system helps create more maintainable and scalable applications while improving team collaboration through better code documentation.

    Key Features and Benefits:
    1. Static Typing
    - Type annotations and interfaces
    - Generics for reusable code
    - Enum support for better data organization
    
    2. Object-Oriented Features
    - Classes with access modifiers
    - Interfaces for contract-based development
    - Abstract classes and inheritance
    
    3. Modern JavaScript Features
    - Support for all ECMAScript features
    - Decorators for metadata programming
    - Async/await functionality

    Best Practices:
    - Always define proper interfaces for objects
    - Use strict mode for better type checking
    - Leverage union types for flexible programming
    - Implement proper error handling with type guards

    Real-World Applications:
    TypeScript is widely used in enterprise applications, particularly in Angular development and large-scale Node.js projects. Companies like Microsoft, Google, and Airbnb rely on TypeScript for their development needs.

    Getting Started:
    To begin with TypeScript, set up your development environment with npm and configure your tsconfig.json for optimal type checking. Start small by converting existing JavaScript files to TypeScript and gradually implement more advanced features.`,
    summary: 'Explore the benefits of TypeScript in modern web development.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    date: '2024-01-21',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: '3',
    title: 'AI in Modern Technology',
    content: `Artificial Intelligence has become a transformative force in modern technology, reshaping how we interact with digital systems and solving complex problems. Let's explore the current state of AI and its impact on various industries.

    The Evolution of AI
    From rule-based systems to modern machine learning algorithms, AI has evolved significantly. Today's AI systems can process natural language, recognize images, and make complex decisions with impressive accuracy.

    Key Areas of AI Implementation:
    1. Machine Learning
    - Supervised and unsupervised learning
    - Deep learning networks
    - Neural network architectures
    
    2. Natural Language Processing
    - Language understanding and generation
    - Sentiment analysis
    - Chatbots and virtual assistants
    
    3. Computer Vision
    - Image recognition and classification
    - Object detection
    - Facial recognition systems

    Industry Applications:
    - Healthcare: Disease diagnosis and treatment planning
    - Finance: Fraud detection and risk assessment
    - Manufacturing: Quality control and predictive maintenance
    - Transportation: Autonomous vehicles and traffic management

    Ethical Considerations:
    As AI becomes more prevalent, important ethical questions arise:
    - Data privacy and security
    - Algorithmic bias and fairness
    - Transparency in AI decision-making
    - Impact on employment and society

    Future Trends:
    - Explainable AI for better transparency
    - Edge AI for improved privacy
    - AI-powered automation
    - Quantum computing integration`,
    summary: 'Discover how AI is transforming the tech landscape and its implications for the future.',
    image: 'https://www.shutterstock.com/image-photo/ai-artificial-intelligence-digital-brain-260nw-2339918373.jpg',
    date: '2024-01-22',
    tags: ['AI', 'Technology', 'Innovation']
  },
  {
    id: '4',
    title: 'Cloud Computing Essentials',
    content: 'Understanding the fundamentals of cloud computing...',
    summary: 'A comprehensive guide to cloud computing platforms and services.',
    image: 'https://www.gartner.com/imagesrv/peer-insights/cloud-computing.jpg',
    date: '2024-01-23',
    tags: ['Cloud', 'AWS', 'Azure']
  },
  {
    id: '5',
    title: 'Mastering React Hooks',
    content: 'Deep dive into React Hooks and their practical applications...',
    summary: 'Learn how to effectively use React Hooks to build better components.',
    image: 'https://reactjs.org/logo-og.png',
    date: '2025-01-24',
    tags: ['React', 'Hooks', 'Frontend']
  },
  {
    id: '6',
    title: 'The Future of Web3',
    content: 'Exploring the decentralized web and its potential impact...',
    summary: 'Understanding Web3 technologies and their role in the future internet.',
    image: 'https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.png',
    date: '2024-01-25',
    tags: ['Web3', 'Blockchain', 'Cryptocurrency']
  },
  {
    id: '7',
    title: 'DevOps Best Practices',
    content: 'Essential DevOps practices for modern development teams...',
    summary: 'Learn the key principles and tools for effective DevOps implementation.',
    image: 'https://www.docker.com/wp-content/uploads/2021/09/Moby-logo.png',
    date: '2024-01-26',
    tags: ['DevOps', 'CI/CD', 'Docker']
  },
  {
    id: '8',
    title: 'Mobile App Development Trends',
    content: 'Latest trends and technologies in mobile app development...',
    summary: 'Explore current and upcoming trends in mobile application development.',
    image: 'https://developer.android.com/static/images/brand/Android_Robot.png',
    date: '2024-01-27',
    tags: ['Mobile', 'Android', 'iOS']
  },
  {
    id: '9',
    title: 'Cybersecurity Fundamentals',
    content: 'Essential cybersecurity concepts and practices...',
    summary: 'Understanding key cybersecurity principles and protection strategies.',
    image: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg',
    date: '2025-01-28',
    tags: ['Security', 'Cybersecurity', 'InfoSec']
  }
]
export async function GET() {
  return NextResponse.json(mockBlogs)
}