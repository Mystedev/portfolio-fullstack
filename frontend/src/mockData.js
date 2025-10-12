export const mockPersonalInfo = {
  name: "Alex Rodriguez",
  title: "FullStack Developer",
  tagline: "Backend & Flutter Specialist",
  bio: "Passionate developer with expertise in building scalable backend systems and beautiful mobile applications. I love creating solutions that make a real impact.",
  email: "alex.rodriguez@example.com",
  github: "https://github.com/alexrodriguez",
  linkedin: "https://linkedin.com/in/alexrodriguez",
  twitter: "https://twitter.com/alexrodriguez"
};

export const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com/alexrodriguez/ecommerce",
    demo: "https://demo.example.com",
    category: "backend"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with beautiful UI/UX.",
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    github: "https://github.com/alexrodriguez/fitness-tracker",
    demo: "https://demo.example.com",
    category: "mobile"
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Scalable chat application with WebSocket support, group chats, file sharing, and end-to-end encryption.",
    tech: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "Flutter"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
    github: "https://github.com/alexrodriguez/chat-app",
    demo: "https://demo.example.com",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Enterprise task management with kanban boards, time tracking, team collaboration, and analytics.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Flutter", "Docker"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    github: "https://github.com/alexrodriguez/task-manager",
    demo: "https://demo.example.com",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Beautiful weather application with real-time forecasts, interactive maps, and personalized alerts.",
    tech: ["Flutter", "Dart", "REST API", "Animations"],
    image: "https://images.unsplash.com/photo-1561484930-974554019ade?w=800&h=600&fit=crop",
    github: "https://github.com/alexrodriguez/weather-app",
    demo: "https://demo.example.com",
    category: "mobile"
  },
  {
    id: 6,
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting, authentication, load balancing, and monitoring.",
    tech: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    github: "https://github.com/alexrodriguez/api-gateway",
    demo: "https://demo.example.com",
    category: "backend"
  }
];

export const mockSkills = {
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "FastAPI", level: 88 },
    { name: "Express.js", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "Redis", level: 80 },
    { name: "Docker", level: 85 }
  ],
  mobile: [
    { name: "Flutter", level: 92 },
    { name: "Dart", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "Provider", level: 88 },
    { name: "BLoC Pattern", level: 85 },
    { name: "REST APIs", level: 90 }
  ],
  design: [
    { name: "UI/UX Design", level: 75 },
    { name: "Figma", level: 70 },
    { name: "Responsive Design", level: 88 },
    { name: "Animations", level: 80 }
  ],
  other: [
    { name: "Git", level: 90 },
    { name: "CI/CD", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Agile", level: 85 }
  ]
};