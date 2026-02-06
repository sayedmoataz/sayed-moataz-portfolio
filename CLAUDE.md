# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Generate JavaScript exports from markdown articles
npm run generate-markdown
```

**Note:** This is a React portfolio website (not Flutter, despite being in a Flutter-Projects directory).

## Architecture Overview

### Data-Driven Design

This portfolio uses a data-driven architecture where all static content is stored in JSON files under `src/data/`. Components import and render data directly, separating content from presentation logic.

**Data Files:**
- `about.json` - Personal information and stats
- `articles.json` - Blog post metadata
- `contact.json` - Contact links
- `experiences.json` - Work and education timeline
- `navbar.json` - Navigation structure
- `portfolio.json` - Portfolio metadata
- `projects.json` - Project listings
- `publications.json` - Platform contributions
- `services.json` - Services offered
- `skills.json` - Skills with categories and proficiency levels

### State Management

Uses React Context API with useReducer pattern for minimal global state (`src/context/`):

```javascript
// AppContext state structure
{
  color: {
    primary: '#40718D',
    secondary: '#6286A1',
    cold: '#A2C6F1',
    teal: '#368F80',
    light: '#FAFAFA',
    dark: '#1E1E1E',
  }
}
```

Action types: `SYSTEM_MODE`, `LIGHT_MODE`, `DARK_MODE`

### Routing Structure

React Router v6 handles navigation in `src/App.js`:
- `/` - Main landing page with anchors (#Home, #About, #Skills, #Services)
- `/experiences` - Experience timeline
- `/publications` - Contributions
- `/blog` - Blog listing and reader
- `/projects` - Projects portfolio
- `*` - Redirects to `/`

### Markdown Content System

Blog articles are stored as `.md` files in `src/articles/` and converted to JavaScript at build time:

1. Write article in `src/articles/` as Markdown
2. Run `npm run generate-markdown`
3. Generates `src/utils/markdownContent.js` with exports:
   - `markdownContent` - Object with all content
   - `getMarkdownContent(id)` - Get content by article ID
   - `getAvailableArticleIds()`
   - `hasMarkdownContent(id)`

## Key Patterns

### Component Organization
- Feature-based components in `src/components/` (about/, contact/, home/, etc.)
- Reusable styling utilities in `src/utils/` (button.js, card.js, tab.js, etc.)
- Route-level pages in `src/pages/`

### Styling
- Material-UI (MUI) v5 as primary UI framework
- Emotion for styled components
- Custom styled components in `src/utils/`
- AOS (Animate On Scroll) for scroll animations: `data-aos="fade-up"`, `data-aos="fade-right"`, `data-aos="fade-left"`
- Lottie animations from JSON files in `src/assets/lotties/`

### Icons
- `react-icons` library with dynamic loading:
  - `Fa*` prefix for FontAwesome icons
  - `Si*` prefix for Brand icons (Simple Icons)
  - Pattern: `const IconComponent = FaIcons[iconName] || SiIcons[iconName]`

### Experience Timeline
The Experiences page uses a sophisticated timeline with:
- IntersectionObserver for active section tracking
- Alternating left/right layout on desktop, single-column on mobile
- Duration calculation utility
- Differentiates between "education" and "work" job types

### Contact Form
Uses `@emailjs/browser` for email sending with `notistack` for toast notifications. Form validation is handled through custom styled components in `src/utils/`.

### Loading Screen
A 2-second loading screen appears on app load:
```javascript
const [loading, setLoading] = React.useState(true)
useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 2000)
  return () => clearTimeout(timer)
}, [])
```

## Dependencies (Key Packages)

- **React**: 18.3.1
- **UI Framework**: @mui/material 5.16.7, @mui/lab 5.0.0-alpha.173
- **Styling**: @emotion/react, @emotion/styled
- **Routing**: react-router-dom 6.26.0
- **Animations**: lottie-react, aos, react-tsparticles
- **Icons**: react-icons, @mui/icons-material
- **Form/Email**: @emailjs/browser, notistack
- **Markdown**: marked