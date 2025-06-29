// ES6 Module Component System
// This approach embeds components as JavaScript modules

// Component templates as JavaScript modules
export const headerComponent = `
<!-- Navigation -->
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-brand">
            <span class="material-icons">code</span>
            <span>Darshan Parikh</span>
        </div>
        <div class="nav-links">
            <a href="#about" class="nav-link">About</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button class="nav-toggle" aria-label="Toggle navigation">
            <span class="material-icons">menu</span>
        </button>
    </div>
</nav>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-image">
                <img src="assets/images/profile.png" alt="Darshan Parikh" class="profile-image">
            </div>
            <div class="hero-text">
                <h1 class="hero-title">Darshan Parikh</h1>
                <p class="hero-subtitle">Sr. Software Engineer at <a href="https://www.autodesk.com/" target="_blank" class="link-primary">Autodesk</a></p>
                <p class="hero-description">Android Engineer with over 9 years of experience in designing, writing clean and reusable code, performing tests and maintaining applications.</p>
                <div class="hero-actions">
                    <a href="mailto:parikhdarshan36@gmail.com" class="btn btn-primary">
                        <span class="material-icons">email</span>
                        Contact Me
                    </a>
                    <a href="https://drive.google.com/file/d/1dQsE3-PulAgLMAJyLp2f03gfBwkHBTcr/view?usp=share_link" target="_blank" class="btn btn-secondary">
                        <span class="material-icons">description</span>
                        Resume
                    </a>
                </div>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/activesince93" target="_blank" class="social-link" aria-label="LinkedIn">
                        <span class="material-icons">work</span>
                    </a>
                    <a href="https://github.com/activesince93" target="_blank" class="social-link" aria-label="GitHub">
                        <span class="material-icons">code</span>
                    </a>
                    <a href="https://twitter.com/activesince93" target="_blank" class="social-link" aria-label="Twitter">
                        <span class="material-icons">flutter_dash</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
`;

export const aboutComponent = `
<!-- About Section -->
<section id="about" class="section">
    <div class="section-header">
        <h2 class="section-title">About Me</h2>
    </div>
    <div class="section-content">
        <p>I am a professional Software Engineer with over 9 years of experience. I am responsible for designing, writing clean and reusable code, performing tests and maintaining the current app on the market. For me learning is always a great thing, being part of the communities like GDG Vancouver, GDG Baroda, GDG Hyderabad and AIESEC there is a lot of learning, technically and non-technically.</p>
        <p>I'm truly passionate about my work and always ready to learn the upcoming features in this field. While I enjoy all aspects of my job, I think my favourite stage of a project is working with other developers and exchanging the ideas. As we go through that collaborative process, the ideas start to flow and that's always the fun part.</p>
    </div>
</section>
`;

// Component loader class
export class ComponentLoader {
    constructor() {
        this.components = {
            header: headerComponent,
            about: aboutComponent,
            // Add other components here
        };
    }

    // Load component from embedded templates
    loadComponent(name, selector) {
        const component = this.components[name];
        if (!component) {
            console.warn(`Component not found: ${name}`);
            return;
        }

        const container = document.querySelector(selector);
        if (container) {
            container.innerHTML = component;
            console.log(`Component loaded: ${name}`);
            
            // Trigger custom event
            document.dispatchEvent(new CustomEvent('componentLoaded', {
                detail: { name, container }
            }));
        } else {
            console.warn(`Container not found for component: ${name}`);
        }
    }

    // Load all components
    async loadAllComponents() {
        const componentMap = [
            { name: 'header', selector: '#header-container' },
            { name: 'about', selector: '#about-container' },
            // Add other components here
        ];

        componentMap.forEach(({ name, selector }) => {
            this.loadComponent(name, selector);
        });
    }
} 