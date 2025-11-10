# Developer Guide - React Spinners Library

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Development Setup](#development-setup)
- [Component Structure](#component-structure)
- [Adding New Spinners](#adding-new-spinners)
- [Styling Guide](#styling-guide)
- [Testing](#testing)
- [Build & Deployment](#build--deployment)

## Project Overview

A lightweight, highly configurable React spinner library with 25 different loading animations. All spinners are built with pure CSS animations for optimal performance (60 FPS).

**Key Features:**
- 25 unique spinner designs
- Fully configurable props (size, color, speed, etc.)
- Pure CSS animations (no JavaScript overhead)
- Zero dependencies (except React)
- TypeScript-ready
- Tree-shakeable

## Architecture

### Project Structure
```
spinners/
├── src/
│   ├── Spinner.js          # Main component (all spinner logic)
│   ├── Spinner.css         # All CSS animations and styles
│   ├── App.js              # Demo/showcase application
│   ├── App.css             # Demo page styles
│   └── index.js            # Entry point
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # User documentation
```

### Component Design Pattern

**Single Component Architecture:**
- One `Spinner` component handles all 25 types
- Type-based conditional rendering
- Shared base styles with type-specific overrides
- Props-driven configuration

**Why this approach?**
- Simple API for users: `<Spinner type="ring" />`
- Easy to maintain: all spinner logic in one place
- Better tree-shaking: unused spinners can be eliminated
- Consistent prop interface across all types

## Development Setup

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation
```bash
cd spinners
npm install
```

### Development Server
```bash
npm start
# Opens http://localhost:3000 with hot reload
```

### Build for Production
```bash
npm run build
# Creates optimized build in /build directory
```

## Component Structure

### Main Component: `Spinner.js`

```javascript
const Spinner = ({ 
  type = 'ring',           // Spinner type (string or number)
  size = 5,                // Size in rem
  color = '#61dafb',       // Primary color
  secondaryColor = '#fff', // Secondary color (some types)
  backgroundColor = '#282c34', // Background color (some types)
  speed = 1,               // Animation duration in seconds
  borderWidth = 3,         // Border thickness (some types)
  style = {}               // Additional custom styles
}) => {
  // Component logic
};
```

### Type Normalization
Supports both string names and numeric IDs for backward compatibility:

```javascript
const normalizedType = typeof type === 'number' ? type : type.toLowerCase();

// Both work:
<Spinner type="ring" />
<Spinner type={1} />
```

### Conditional Rendering Pattern
Each spinner uses this structure:

```javascript
if (normalizedType === 1 || normalizedType === 'ring' || normalizedType === 'circle') {
  return (
    <div className="spinner spinner-ring" style={spinnerStyle}>
      <span style={{ borderTopColor: color, borderWidth: `${borderWidth}px` }}></span>
    </div>
  );
}
```

## Adding New Spinners

### Step 1: Design the Animation

Create the CSS animation in `Spinner.css`:

```css
/* Example: New "pulse-ring" spinner */
@keyframes pulse-ring {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}

.spinner-pulse-ring div {
  width: 100%;
  height: 100%;
  border: 3px solid;
  border-radius: 50%;
  animation: pulse-ring 1.5s ease-in-out infinite;
}
```

### Step 2: Add Component Logic

Add the new type to `Spinner.js`:

```javascript
// Pulse Ring Spinner - Expanding ring
if (normalizedType === 26 || normalizedType === 'pulse-ring') {
  return (
    <div className="spinner spinner-pulse-ring" style={{ ...spinnerStyle, animation: 'none' }}>
      <div style={{ 
        borderColor: color, 
        animationDuration: `${speed}s` 
      }}></div>
    </div>
  );
}
```

### Step 3: Update Demo App

Add to `App.js` spinner showcase:

```javascript
<div className="spinner-card" onClick={() => setSelectedSpinner('pulse-ring')}>
  <Spinner type="pulse-ring" {...config} />
  <p>Pulse Ring</p>
</div>
```

### Step 4: Add Usage Example

Add to `spinnerExamples` object in `App.js`:

```javascript
const spinnerExamples = {
  // ... existing examples
  'pulse-ring': `// Pulse Ring - Expanding ring
<Spinner type="pulse-ring" size={5} color="#61dafb" speed={1.5} />`,
};
```

### Step 5: Update Documentation

- Increment spinner count in README.md
- Add to spinner list with description
- Update type definitions if using TypeScript

## Styling Guide

### CSS Organization

**Spinner.css Structure:**
1. Base spinner styles
2. Keyframe animations
3. Type-specific styles

```css
/* 1. Base Styles */
.spinner {
  display: inline-block;
  position: relative;
}

/* 2. Animations */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 3. Type-Specific */
.spinner-ring span {
  /* Ring-specific styles */
}
```

### Performance Best Practices

**DO:**
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Use `will-change` sparingly for complex animations
- Prefer CSS animations over JavaScript

**DON'T:**
- Animate `width`, `height`, `top`, `left` (causes layout recalc)
- Use excessive `box-shadow` or `filter` blur
- Create too many DOM elements (keep under 10 per spinner)

### Animation Timing Functions

```css
/* Smooth continuous rotation */
animation: spin 1s linear infinite;

/* Bouncy effect */
animation: bounce 1s ease-in-out infinite;

/* Custom easing */
animation: custom 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
```

## Testing

### Manual Testing Checklist

For each new spinner:
- [ ] Renders correctly at different sizes (2rem, 5rem, 10rem)
- [ ] Color customization works (color, secondaryColor, backgroundColor)
- [ ] Speed adjustment works (0.5s, 1s, 2s)
- [ ] Smooth 60 FPS animation
- [ ] No layout shift during animation
- [ ] Works in different browsers (Chrome, Firefox, Safari)
- [ ] Responsive on mobile devices

### Automated Testing

```javascript
// Example test structure (App.test.js)
import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('renders ring spinner', () => {
  const { container } = render(<Spinner type="ring" />);
  expect(container.querySelector('.spinner-ring')).toBeInTheDocument();
});

test('applies custom size', () => {
  const { container } = render(<Spinner type="ring" size={10} />);
  const spinner = container.querySelector('.spinner');
  expect(spinner).toHaveStyle({ width: '10rem', height: '10rem' });
});
```

## Build & Deployment

### For npm Package

#### 1. Update package.json

```json
{
  "name": "your-spinner-library",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "files": ["dist"],
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
  }
}
```

#### 2. Create rollup.config.js

```javascript
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/Spinner.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  external: ['react'],
  plugins: [
    postcss({
      extract: true,
      minimize: true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    resolve()
  ]
};
```

#### 3. Publish to npm

```bash
npm login
npm publish
```

### For Demo Site (Vercel/Netlify)

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Deploy /build directory via Netlify dashboard
```

## Best Practices

### Code Style
- Use descriptive type names (prefer `'ring'` over `1`)
- Keep animations under 3 seconds for `speed={1}`
- Document any special props in code comments
- Maintain consistent naming (kebab-case for CSS classes)

### Performance
- Limit DOM elements per spinner to 10 or fewer
- Use CSS transforms instead of position changes
- Test on low-end devices (mobile)
- Monitor bundle size (keep under 10KB gzipped)

### Accessibility
- Spinners should have `role="status"` and `aria-live="polite"` when used as loading indicators
- Consider adding `aria-label="Loading"` for screen readers
- Ensure color contrast meets WCAG standards

### Versioning
Follow semantic versioning:
- **Major**: Breaking changes (remove spinner types, change prop names)
- **Minor**: New features (add spinner types, new props)
- **Patch**: Bug fixes (animation improvements, style tweaks)

## Common Issues & Solutions

### Issue: Animation Jank
**Solution:** Use `transform` and `opacity` only, add `will-change: transform` for complex animations

### Issue: Spinner Not Visible
**Solution:** Check parent container has space, ensure color contrasts with background

### Issue: Speed Prop Not Working
**Solution:** Make sure `animationDuration: ${speed}s` is applied to the animated element

### Issue: Colors Not Applying
**Solution:** Verify inline styles override CSS defaults, check specificity

## Contributing Guidelines

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-spinner`
3. Follow code style and naming conventions
4. Test thoroughly (all sizes, speeds, colors)
5. Update documentation
6. Submit pull request with description and demo GIF

## Resources

- [CSS Animation Performance](https://web.dev/animations-guide/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [npm Publishing Guide](https://docs.npmjs.com/cli/v8/commands/npm-publish)

---

**Questions or Issues?**
Open an issue on GitHub: https://github.com/rishikesh-janrao/spinners
