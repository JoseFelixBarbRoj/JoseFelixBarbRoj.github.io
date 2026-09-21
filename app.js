// ==============================
// DATOS DEL PORTFOLIO
// ==============================

const profile = {
    name: "José Félix",
    title: "Estudiante de Ingeniería Informática",
    description:
        "Estudiante de Ingeniería Informática en la Universidad de Castilla-La Mancha, interesado en el desarrollo de software, desarrollo de IA y análisis de datos y tecnologías web.",
    image: "profile.jpg",
    github: "https://github.com/JoseFelixBarbRoj",
    linkedin: "https://www.linkedin.com/in/tu-usuario"
};

const education = [
    {
        title: "Grado en Ingeniería Informática",
        institution:
            "Escuela Superior de Informática — Universidad de Castilla-La Mancha",
        start_date: "2023",
        end_date: "2027",
        description:
            "Formación en Ingeniería Informática, adquiriendo conocimientos en programación, desarrollo de software, sistemas, bases de datos, desarrollo web y análisis de datos."
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
        description:
            "Desarrollo de un transformer para predicción de rutas marítimas en áreas de interés."
    }
];

const projects = [
    {
        name: "PeTracker",
        description:
            "Web para poner en contacto protectoras con dueños de mascotas perdidas. La aplicación realiza matching entre la imagen subida por protectoras con la imagen reportada por el dueño, haciendo uso de un modelo de IA integrado. También se integra OpenStreetMap para visualizar en mapa todos los reportes.",
        technologies: [
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "FastAPI", icon: "devicon-fastapi-plain" },
            { name: "PyTorch", icon: "devicon-pytorch-plain" },
            { name: "MySQL", icon: "devicon-mysql-plain" }
        ],
        github_url:
            "https://github.com/JoseFelixBarbRoj/isi-PeTracker"
    },
    {
        name: "Prototipo de sistema de etiquetado automático de imágenes",
        description:
            "En este proyecto se entrenó y utilizó un modelo basado en redes convolucionales para etiquetar automáticamente imágenes, en el ámbito de un problema de clasificación multiclase, concretamente imágenes de mariposas de más de 70 especies.",
        technologies: [
            { name: "Python", icon: "devicon-python-plain" },
            { name: "PyTorch", icon: "devicon-pytorch-plain" }
        ],
        github_url:
            "https://github.com/JoseFelixBarbRoj/GSI"
    },
    {
        name: "Aplicación TPV",
        description:
            "Aplicación tipo TPV para gestión de pedidos, ingredientes y clientes de un restaurante, aplicando principios generales de usabilidad en la interfaz. Se incluyen también los prototipos del diseño temprano.",
        technologies: [
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        github_url:
            "https://github.com/JoseFelixBarbRoj/IPO"
    },
    {
        name: "IPokemon",
        description:
            "Implementación de un videojuego de combate estilo Pokemon en C#, incluyendo una Pokedex para visualizar datos de todos los Pokemon seleccionables.",
        technologies: [
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        github_url:
            "https://github.com/DarioLopez6/IPOkemon1"
    }
];


// ==============================
// PERFIL
// ==============================

function loadProfile() {
    const description = document.getElementById("description");
    const profileImage = document.getElementById("profile-image");
    const githubLink = document.getElementById("github-link");
    const linkedinLink = document.getElementById("linkedin-link");

    if (description) {
        description.textContent = profile.description;
    }

    if (profileImage) {
        profileImage.src = profile.image;
        profileImage.alt = `Foto de ${profile.name}`;
    }

    if (githubLink) {
        githubLink.href = profile.github;
    }

    if (linkedinLink) {
        linkedinLink.href = profile.linkedin;
    }
}


// ==============================
// FORMACIÓN
// ==============================

function loadEducation() {
    const container = document.getElementById("education-container");

    if (!container) return;

    container.innerHTML = "";

    education.forEach((item) => {
        const element = document.createElement("article");

        element.className = "education-item";

        element.innerHTML = `
            <div class="education-date">
                ${item.start_date} — ${item.end_date}
            </div>

            <div class="education-content">
                <h3>${item.title}</h3>

                <p class="education-institution">
                    ${item.institution}
                </p>

                <p>
                    ${item.description}
                </p>
            </div>
        `;

        container.appendChild(element);
    });
}


// ==============================
// TECNOLOGÍAS
// ==============================

function loadTechnologies() {
    const container = document.getElementById("technologies-container");

    if (!container) return;

    container.innerHTML = "";

    technologies.forEach((category) => {
        const categoryElement = document.createElement("article");

        categoryElement.className = "technology-item";

        const items = category.items
            .map(
                (technology) => `
                    <div class="technology">
                        <i class="${technology.icon}"></i>
                        <span>${technology.name}</span>
                    </div>
                `
            )
            .join("");

        categoryElement.innerHTML = `
            <h3>${category.name}</h3>

            <div class="technology-items">
                ${items}
            </div>
        `;

        container.appendChild(categoryElement);
    });
}


// ==============================
// EXPERIENCIA
// ==============================

function loadExperience() {
    const container = document.getElementById("experience-container");

    if (!container) return;

    container.innerHTML = "";

    experience.forEach((item) => {
        const element = document.createElement("article");

        element.className = "experience-item";

        element.innerHTML = `
            <div class="experience-date">
                ${item.start_date} — ${item.end_date}
            </div>

            <div class="experience-content">
                <h3>${item.position}</h3>

                <p class="experience-company">
                    ${item.company}
                </p>

                <p>
                    ${item.description}
                </p>
            </div>
        `;

        container.appendChild(element);
    });
}


// ==============================
// PROYECTOS
// ==============================

function loadProjects() {
    const container = document.getElementById("projects-container");

    if (!container) {
        console.error("No se encontró #projects-container");
        return;
    }

    container.innerHTML = "";

    projects.forEach((project, index) => {
        const element = document.createElement("article");

        element.className = "project-card";

        const number = String(index + 1).padStart(2, "0");

        const technologiesHTML = project.technologies
            .map(
                (technology) => `
                    <span class="project-tech">
                        <i class="${technology.icon}"></i>
                        ${technology.name}
                    </span>
                `
            )
            .join("");

        element.innerHTML = `
            <div class="project-number">
                ${number}
            </div>

            <div class="project-content">
                <h3>${project.name}</h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-technologies">
                    ${technologiesHTML}
                </div>

                <a
                    href="${project.github_url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                >
                    Ver proyecto
                    <span>↗</span>
                </a>
            </div>
        `;

        container.appendChild(element);
    });
}


// ==============================
// INICIALIZACIÓN
// ==============================

function init() {
    loadProfile();
    loadEducation();
    loadTechnologies();
    loadExperience();
    loadProjects();
}

document.addEventListener("DOMContentLoaded", init);