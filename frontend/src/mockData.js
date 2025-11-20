export const mockPersonalInfo = {
  name: "Dennys Lazaro",
  title: "Desarrollador FullStack",
  tagline: "Desarrollador FullStack & Flutter",
  bio: "Desarrollador apasionado con experiencia en la creación de sistemas backend y frontend escalables, así como hermosas aplicaciones móviles. Me encanta crear soluciones que generen un impacto real.",
  email: "dennyspm.dev@gmail.com",
  github: "https://github.com/Mystedev",
  linkedin: "https://www.linkedin.com/in/dennyspm"
};

export const mockProjects = [
  {
    id: 1,
    title: "Plataforma de Gestión de Automoviles",
    description: "Una plataforma de gestión de autmoviles, donde se pueden crear vehiculos, marcas y modelos gurdados en una base de datos SqLite, con el backend creado a partir de modelos Python con Django.",
    tech: ["Node.js", "Django", "SqLite", "Python", "Stripe"],
    image: "/assets/GestiónCoches.png",
    github: "https://github.com/Mystedev/GestionCoches",
    category: "Backend"
  },
  {
    id: 2,
    title: "Aplicación de Seguimiento de Comidas",
    description: "Aplicación móvil para gestionar el seguimiento de comidas y cenas durante los dias del mes, incluida una lista de de compras necesarias para completar esos dias, con la base de datos PostgreSQL gestionada por Supabase",
    tech: ["Flutter", "Dart", "Supabase", "Provider"],
    image: "/assets/Food.png",
    github: "https://github.com/Mystedev/FlutterFood",
    category: "Mobile"
  },
  {
    id: 3,
    title: "Portfolio Web",
    description: "Portfolio con iformación personal del desarrollador, mostrando la gestión de interfaces y animaciones en el frtontend, y uso de MongoDB en el backend ademas de las dependencias utilizadas.",
    tech: ["Tailwind", "React", "MongoDB", "Javascript", "yarn"],
    image: "/assets/Portfolio.png",
    github: "https://github.com/Mystedev/portfolio-fullstack",
    category: "Fullstack"
  },
  {
    id: 4,
    title: "Sistema de Gestión de Información ERP/CRM",
    description: "Gestión de usuarios e información de la base de datos interna de Odoo ERP, integrada con Flutter para una interfaz mas personalizada.",
    tech: ["Python", "Odoo", "PostgreSQL", "Flutter", "RestFul API"],
    image: "/assets/OdooApp.png",
    github: "https://github.com/Mystedev/Odoo_App",
    category: "Fullstack"
  },
  {
    id: 5,
    title: "Perfil de GitHub",
    description: "Acceso directo a mi perfil principal de GitHub con todos mis repositorios y proyectos públicos.",
    tech: ["GitHub", "Open Source", "Repos"],
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    github: "https://github.com/Mystedev",
    category: "Personal"
  },
];

export const mockSkills = {
  backend: [
    { name: "Node.js", level: 50 },
    { name: "Python", level: 75 },
    { name: "PostgreSQL", level: 75 },
    { name: "MongoDB", level: 90 },
    { name: "Java", level: 100 },
    { name: "Spring Boot", level: 75 },
    { name: ".NET", level: 80 },
    { name: "Hibernate", level: 80 }
  ],
  mobile: [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 95 },
    { name: "REST APIs", level: 85 },
    { name: "React", level: 75 },
    { name: "Android Studio", level: 80 }
  ],
  design: [
    { name: "UI/UX Design", level: 90 },
    { name: "Figma", level: 50 },
    { name: "Responsive Design", level: 75 },
    { name: "Animations", level: 80 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Material UI", level: 75 }
  ],
  other: [
    { name: "Git", level: 90 },
    { name: "Github", level: 90 },
    { name: "Javascript", level: 80 },
    { name: "SCRUM", level: 80 }
  ]
};