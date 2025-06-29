# Darshan Parikh - Portfolio

A modern, responsive portfolio website built with Material 3 design principles, featuring a clean and maintainable modular codebase.

## 🚀 Features

### Modern Design
- **Material 3 Design System**: Implements Google's latest design language with proper color tokens, typography, and spacing
- **Dark/Light Theme**: Automatic theme switching based on system preferences with manual toggle
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience

### Performance & Accessibility
- **Lazy Loading**: Images load only when needed for better performance
- **Progressive Web App**: Service worker support for offline capabilities
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Proper meta tags and structured data

### Maintainable Codebase
- **Modular Structure**: Separated HTML, CSS, and JavaScript for easy maintenance
- **Component-Based Architecture**: Each section is a separate HTML component
- **CSS Custom Properties**: Consistent theming with Material 3 color tokens
- **Modern JavaScript**: ES6+ features with proper error handling
- **Responsive Images**: Images automatically resize based on viewport

## 📁 Project Structure

```
activesince93.github.io/
├── index.html                    # Main HTML file (modular structure)
├── components/                   # HTML Components
│   ├── header.html              # Navigation and hero section
│   ├── about.html               # About section
│   ├── experience.html          # Work experience timeline
│   ├── projects.html            # Professional projects
│   ├── other-projects.html      # Other projects section
│   ├── organizations.html       # Organizations section
│   ├── activities.html          # Extracurricular activities
│   ├── sidebar.html             # Contact, skills, education, languages
│   └── footer.html              # Footer section
├── assets/
│   ├── css/
│   │   └── styles.css           # Material 3 styles with responsive design
│   ├── js/
│   │   ├── main.js              # Main JavaScript functionality
│   │   └── components.js        # Component loader and management
│   └── images/
│       ├── profile.png          # Profile image
│       └── projects/            # Project screenshots
├── manifest.json                # PWA manifest
├── sw.js                        # Service Worker
├── favicon.ico
├── ic_person.png
└── README.md
```

## 🎨 Design System

### Color Palette (Material 3)
- **Primary**: Purple (#6750a4) - Main brand color
- **Secondary**: Gray (#625b71) - Supporting elements
- **Surface**: Light/Dark backgrounds with proper contrast
- **Error**: Red (#ba1a1a) - Error states and warnings

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Sizes**: Responsive scale from 0.875rem to 2rem
- **Line Heights**: Optimized for readability

### Spacing System
- **Consistent Spacing**: 0.25rem to 3rem scale
- **Responsive Margins**: Adapts to screen size
- **Grid System**: CSS Grid for layout

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modular components
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Modern features, Intersection Observer, Service Workers
- **Material Icons**: Google's icon library
- **Google Fonts**: Inter font family

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/activesince93/activesince93.github.io.git
   ```

2. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - Or serve locally using a local server

3. **Customize**:
   - Update content in individual component files in `components/`
   - Modify colors in `assets/css/styles.css` (CSS custom properties)
   - Add functionality in `assets/js/main.js`

## 🎯 Key Features Implementation

### Modular Component Architecture
- **Component Loader**: Dynamic loading of HTML components
- **Separation of Concerns**: Each section is a separate file
- **Easy Maintenance**: Update individual sections without affecting others
- **Reusable Components**: Components can be reused across pages

### Material 3 Design
- CSS custom properties for consistent theming
- Proper elevation and shadow system
- Color tokens for light/dark themes
- Typography scale and spacing

### Responsive Images
- `object-fit: cover` for consistent aspect ratios
- Lazy loading with Intersection Observer
- Responsive sizing with CSS Grid
- Optimized loading performance

### Modern JavaScript
- ES6+ features (arrow functions, destructuring, etc.)
- Intersection Observer for scroll effects
- Service Worker for PWA capabilities
- Error handling and performance monitoring

### Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🔧 Customization

### Adding New Sections
1. Create a new HTML file in `components/` directory
2. Add the component to the component loader in `assets/js/components.js`
3. Add a container div in `index.html`
4. Style with Material 3 classes in `assets/css/styles.css`

### Modifying Existing Sections
1. Edit the specific component file in `components/`
2. Changes will be automatically reflected when the page loads

### Changing Colors
Modify CSS custom properties in `:root`:
```css
:root {
    --md-primary: #your-color;
    --md-primary-container: #your-container-color;
    /* ... other colors */
}
```

### Adding Projects
1. Edit `components/projects.html` or `components/other-projects.html`
2. Include project image in `assets/images/projects/`
3. Update project links and descriptions

## 📊 Performance Features

- **Lazy Loading**: Images load on demand
- **Component Loading**: HTML components load dynamically
- **Debounced Scroll**: Optimized scroll event handling
- **CSS Animations**: Hardware-accelerated animations
- **Minimal Dependencies**: No external frameworks
- **Service Worker**: Offline capabilities

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 📈 Analytics

Built-in analytics tracking for:
- Page views
- Project clicks
- Social media interactions
- Contact form submissions
- Performance metrics

## 🔄 Component Management

### Available Components
- `header.html` - Navigation and hero section
- `about.html` - About section
- `experience.html` - Work experience timeline
- `projects.html` - Professional projects
- `other-projects.html` - Other projects
- `organizations.html` - Organizations
- `activities.html` - Extracurricular activities
- `sidebar.html` - Contact, skills, education, languages
- `footer.html` - Footer

### Loading Components
Components are automatically loaded by the `ComponentLoader` class:
```javascript
// Load all components
await componentLoader.loadPortfolioComponents();

// Load specific section
await componentLoader.loadSection('about');
```

### Component Events
Listen for component loaded events:
```javascript
document.addEventListener('componentLoaded', function(event) {
    const { name, container } = event.detail;
    // Initialize component-specific functionality
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes in the appropriate component files
4. Test across different devices
5. Submit a pull request

## 📄 License

This project is licensed under the Creative Commons Attribution 3.0 License.

## 👨‍💻 Author

**Darshan Parikh**
- LinkedIn: [activesince93](https://www.linkedin.com/in/activesince93)
- GitHub: [activesince93](https://github.com/activesince93)
- Twitter: [@activesince93](https://twitter.com/activesince93)

---

Built with ❤️ using Material 3 design principles and modular architecture
