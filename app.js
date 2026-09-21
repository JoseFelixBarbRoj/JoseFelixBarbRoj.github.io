const profile = {
    name: "José Félix",
    title: "Estudiante de Ingeniería Informática",
    description: "Estudiante de Ingeniería Informática en la Universidad de Castilla-La Mancha, apasionado por el desarrollo de software, inteligencia artificial, análisis de datos y tecnologías web avanzadas.",
    image: "profile.jpg",
    github: "https://github.com/JoseFelixBarbRoj",
    linkedin: "https://www.linkedin.com/in/tu-usuario"
};

const education = [
    {
        title: "Grado en Ingeniería Informática",
        institution: "Escuela Superior de Informática — Universidad de Castilla-La Mancha",
        start_date: "2023",
        end_date: "2027",
        description: "Formación en Ingeniería Informática, adquiriendo conocimientos sólidos en programación, ingeniería del software, sistemas operativos, bases de datos, arquitecturas web y machine learning."
    }
];

const technologies = [
    {
        name: "Lenguajes",
        items: [
            { name: "Java", icon: "devicon-java-plain" },
            { name: "C", icon: "devicon-c-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "C#", icon: "devicon-csharp-plain" }
        ]
    },
    {
        name: "Web",
        items: [
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "FastAPI", icon: "devicon-fastapi-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "Angular", icon: "devicon-angularjs-plain" },
            { name: "Spring", icon: "devicon-spring-plain" }
        ]
    },
    {
        name: "IA y Data Science",
        items: [
            { name: "PyTorch", icon: "devicon-pytorch-plain" },
            { name: "Matplotlib", icon: "devicon-matplotlib-plain" },
            { name: "Pandas", icon: "devicon-pandas-plain" },
            { name: "NumPy", icon: "devicon-numpy-plain" },
            { name: "GeoPandas", icon: "devicon-geopandas-plain" }
        ]
    },
    {
        name: "Sistemas",
        items: [
            { name: "Docker", icon: "devicon-docker-plain" },
            { name: "Kubernetes", icon: "devicon-kubernetes-plain" }
        ]
    },
    {
        name: "Bases de datos",
        items: [
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "SQLite", icon: "devicon-sqlite-plain" }
        ]
    },
    {
        name: "Herramientas",
        items: [
            { name: "GitHub", icon: "devicon-github-original" },
            { name: "LaTeX", icon: "devicon-latex-original" }
        ]
    }
];

const experience = [
    {
        company: "Ubotica",
        position: "Prácticas",
        start_date: "2026",
        end_date: "Actualidad",
        description: "Desarrollo de un transformer avanzado para la predicción de rutas marítimas en áreas de interés estratégico."
    }
];

const projects = [
    {
        name: "PeTracker",
        description: "Web conectando protectoras con dueños de mascotas perdidas. Incluye matching mediante modelo de IA integrado y visualización interactiva de reportes en mapas con OpenStreetMap.",
        technologies: [
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "FastAPI", icon: "devicon-fastapi-plain" },
            { name: "PyTorch", icon: "devicon-pytorch-plain" },
            { name: "MySQL", icon: "devicon-mysql-plain" }
        ],
        github_url: "https://github.com/JoseFelixBarbRoj/isi-PeTracker"
    },
    {
        name: "Sistema de Etiquetado Automático",
        description: "Prototipo basado en redes convolucionales para clasificación multiclase de imágenes de más de 70 especies diferentes de mariposas.",
        technologies: [
            { name: "Python", icon: "devicon-python-plain" },
            { name: "PyTorch", icon: "devicon-pytorch-plain" }
        ],
        github_url: "https://github.com/JoseFelixBarbRoj/GSI"
    },
    {
        name: "Aplicación TPV",
        description: "Sistema TPV completo para gestión de pedidos, ingredientes y clientes en restaurantes, priorizando principios de usabilidad y diseño centrado en el usuario.",
        technologies: [
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        github_url: "https://github.com/JoseFelixBarbRoj/IPO"
    },
    {
        name: "IPokemon",
        description: "Videojuego de combate estilo Pokémon desarrollado en C#, incluyendo una Pokédex interactiva con estadísticas detalladas.",
        technologies: [
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        github_url: "https://github.com/DarioLopez6/IPOkemon1"
    }
];

function loadProfile() {
    const description = document.getElementById("description");
    const profileImage = document.getElementById("profile-image");
    const githubLink = document.getElementById("github-link");
    const linkedinLink = document.getElementById("linkedin-link");

    if (description) description.textContent = profile.description;
    if (profileImage) {
        profileImage.src = profile.image;
        profileImage.alt = `Foto de ${profile.name}`;
    }
    if (githubLink) githubLink.href = profile.github;
    if (linkedinLink) linkedinLink.href = profile.linkedin;
}

function loadEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;
    container.innerHTML = "";

    education.forEach((item) => {
        const element = document.createElement("article");
        element.className = "timeline-item";
        element.innerHTML = `
            <div class="timeline-date">${item.start_date} — ${item.end_date}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <div class="timeline-subtitle">${item.institution}</div>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(element);
    });
}

function loadTechnologies() {
    const container = document.getElementById("technologies-container");
    if (!container) return;
    container.innerHTML = "";

    technologies.forEach((category) => {
        const categoryElement = document.createElement("article");
        categoryElement.className = "technology-item";

        const items = category.items.map((tech) => `
            <div class="technology">
                <i class="${tech.icon}"></i>
                <span>${tech.name}</span>
            </div>
        `).join("");

        categoryElement.innerHTML = `
            <h3>${category.name}</h3>
            <div class="technology-items">${items}</div>
        `;
        container.appendChild(categoryElement);
    });
}

function loadExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;
    container.innerHTML = "";

    experience.forEach((item) => {
        const element = document.createElement("article");
        element.className = "timeline-item";
        element.innerHTML = `
            <div class="timeline-date">${item.start_date} — ${item.end_date}</div>
            <div class="timeline-content">
                <h3>${item.position}</h3>
                <div class="timeline-subtitle">${item.company}</div>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(element);
    });
}

function loadProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;
    container.innerHTML = "";

    projects.forEach((project, index) => {
        const element = document.createElement("article");
        element.className = "project-card";

        // Simple number formatting without padding zeros (1, 2, 3, 4)
        const number = String(index + 1);

        const technologiesHTML = project.technologies.map((tech) => `
            <span class="project-tech">
                <i class="${tech.icon}"></i>
                ${tech.name}
            </span>
        `).join("");

        element.innerHTML = `
            <div>
                <div class="project-header-row">
                    <div class="project-number">${number}</div>
                    <a href="${project.github_url}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver proyecto en GitHub">
                        ↗
                    </a>
                </div>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
            <div class="project-technologies">
                ${technologiesHTML}
            </div>
        `;

        container.appendChild(element);
    });
}

function init() {
    loadProfile();
    loadEducation();
    loadTechnologies();
    loadExperience();
    loadProjects();
}

document.addEventListener("DOMContentLoaded", init);
