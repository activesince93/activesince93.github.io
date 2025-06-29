const fs = require('fs');
const path = require('path');

// Build script to combine components into a single HTML file
async function buildPortfolio() {
    try {
        // Read the main index.html
        let indexHtml = fs.readFileSync('index.html', 'utf8');
        
        // Components to include
        const components = [
            'header',
            'about', 
            'experience',
            'projects',
            'other-projects',
            'organizations',
            'activities',
            'sidebar',
            'footer'
        ];
        
        // Replace each component container with its content
        for (const component of components) {
            const componentPath = path.join('components', `${component}.html`);
            if (fs.existsSync(componentPath)) {
                const componentContent = fs.readFileSync(componentPath, 'utf8');
                const containerId = `#${component}-container`;
                
                // Replace the container div with the actual content
                const containerRegex = new RegExp(
                    `<div id="${component}-container"></div>`,
                    'g'
                );
                indexHtml = indexHtml.replace(containerRegex, componentContent);
                
                console.log(`✓ Included ${component}.html`);
            } else {
                console.warn(`⚠ Component not found: ${componentPath}`);
            }
        }
        
        // Remove the component loader script since we don't need it anymore
        indexHtml = indexHtml.replace(
            /<script src="assets\/js\/components\.js"><\/script>\s*/g,
            ''
        );
        
        // Remove the loading indicator since components are embedded
        indexHtml = indexHtml.replace(
            /<!-- Loading Indicator -->[\s\S]*?<!-- Header Container -->/g,
            '<!-- Header Container -->'
        );
        
        // Write the built file
        fs.writeFileSync('index-built.html', indexHtml);
        console.log('✓ Built portfolio successfully: index-built.html');
        
    } catch (error) {
        console.error('Build failed:', error);
    }
}

// Run the build
buildPortfolio(); 