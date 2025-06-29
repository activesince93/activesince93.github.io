// Component Loader for Portfolio Website

class ComponentLoader {
    constructor() {
        this.components = new Map();
        this.loadedComponents = new Set();
    }

    // Load a component from file
    async loadComponent(name, selector) {
        if (this.loadedComponents.has(name)) {
            console.log(`Component ${name} already loaded, skipping...`);
            return;
        }

        try {
            console.log(`Loading component: ${name} into selector: ${selector}`);
            
            const response = await fetch(`components/${name}.html`);
            console.log(`Fetch response for ${name}:`, response.status, response.statusText);
            
            if (!response.ok) {
                throw new Error(`Failed to load component: ${name} - Status: ${response.status}`);
            }

            const html = await response.text();
            console.log(`Component ${name} HTML length:`, html.length);
            
            const container = document.querySelector(selector);
            
            if (container) {
                container.innerHTML = html;
                this.loadedComponents.add(name);
                console.log(`✓ Component loaded successfully: ${name}`);
                
                // Trigger custom event for component loaded
                document.dispatchEvent(new CustomEvent('componentLoaded', {
                    detail: { name, container }
                }));
            } else {
                console.error(`❌ Container not found for component: ${name} (selector: ${selector})`);
                console.log('Available containers:', document.querySelectorAll('[id*="container"]'));
            }
        } catch (error) {
            console.error(`❌ Error loading component ${name}:`, error);
            
            // Show error in the container if it exists
            const container = document.querySelector(selector);
            if (container) {
                container.innerHTML = `
                    <div style="padding: 20px; background: #ffebee; border: 1px solid #f44336; border-radius: 8px; color: #c62828;">
                        <h3>Error Loading Component: ${name}</h3>
                        <p>${error.message}</p>
                        <p>Please check the browser console for more details.</p>
                    </div>
                `;
            }
        }
    }

    // Load multiple components
    async loadComponents(componentList) {
        console.log('Loading components:', componentList);
        
        const promises = componentList.map(({ name, selector }) => 
            this.loadComponent(name, selector)
        );
        
        await Promise.all(promises);
    }

    // Load all components for the portfolio
    async loadPortfolioComponents() {
        const components = [
            { name: 'header', selector: '#header-container' },
            { name: 'about', selector: '#about-container' },
            { name: 'experience', selector: '#experience-container' },
            { name: 'projects', selector: '#projects-container' },
            { name: 'other-projects', selector: '#other-projects-container' },
            { name: 'organizations', selector: '#organizations-container' },
            { name: 'activities', selector: '#activities-container' },
            { name: 'sidebar', selector: '#sidebar-container' },
            { name: 'footer', selector: '#footer-container' }
        ];

        console.log('Starting to load portfolio components...');
        await this.loadComponents(components);
        console.log('Finished loading all components');
    }

    // Load a specific section
    async loadSection(sectionName) {
        const sectionMap = {
            'about': { name: 'about', selector: '#about-container' },
            'experience': { name: 'experience', selector: '#experience-container' },
            'projects': { name: 'projects', selector: '#projects-container' },
            'other-projects': { name: 'other-projects', selector: '#other-projects-container' },
            'organizations': { name: 'organizations', selector: '#organizations-container' },
            'activities': { name: 'activities', selector: '#activities-container' }
        };

        const section = sectionMap[sectionName];
        if (section) {
            await this.loadComponent(section.name, section.selector);
        } else {
            console.warn(`Section not found: ${sectionName}`);
        }
    }

    // Check if component is loaded
    isComponentLoaded(name) {
        return this.loadedComponents.has(name);
    }

    // Get loaded components
    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM Content Loaded - Starting component loading...');
    
    // Show loading indicator
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
        console.log('Loading indicator shown');
    }

    try {
        // Check if we're running on a local file system
        if (window.location.protocol === 'file:') {
            console.warn('⚠️ Running on file:// protocol - components may not load properly');
            console.warn('💡 Please use a local server (python3 -m http.server 8000) for best results');
        }
        
        // Load all components
        await componentLoader.loadPortfolioComponents();
        
        // Initialize main functionality after components are loaded
        if (typeof initNavigation === 'function') {
            console.log('Initializing navigation...');
            initNavigation();
        }
        if (typeof initSmoothScrolling === 'function') {
            console.log('Initializing smooth scrolling...');
            initSmoothScrolling();
        }
        if (typeof initImageLazyLoading === 'function') {
            console.log('Initializing image lazy loading...');
            initImageLazyLoading();
        }
        if (typeof initScrollEffects === 'function') {
            console.log('Initializing scroll effects...');
            initScrollEffects();
        }
        if (typeof initThemeToggle === 'function') {
            console.log('Initializing theme toggle...');
            initThemeToggle();
        }
        if (typeof initMobileMenu === 'function') {
            console.log('Initializing mobile menu...');
            initMobileMenu();
        }
        if (typeof initProjectCards === 'function') {
            console.log('Initializing project cards...');
            initProjectCards();
        }

        console.log('✅ All components loaded successfully');
        console.log('Loaded components:', componentLoader.getLoadedComponents());
        
    } catch (error) {
        console.error('❌ Error loading components:', error);
    } finally {
        // Hide loading indicator
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
            console.log('Loading indicator hidden');
        }
    }
});

// Listen for component loaded events
document.addEventListener('componentLoaded', function(event) {
    const { name, container } = event.detail;
    console.log(`🎉 Component ${name} loaded into container:`, container);
    
    // Initialize component-specific functionality
    switch (name) {
        case 'header':
            console.log('Initializing header-specific functionality...');
            // Initialize header-specific functionality
            break;
        case 'projects':
            console.log('Initializing project cards...');
            // Initialize project cards
            if (typeof initProjectCards === 'function') {
                initProjectCards();
            }
            break;
        case 'sidebar':
            console.log('Initializing sidebar functionality...');
            // Initialize sidebar functionality
            break;
    }
});

// Export for use in other modules
window.ComponentLoader = ComponentLoader;
window.componentLoader = componentLoader; 