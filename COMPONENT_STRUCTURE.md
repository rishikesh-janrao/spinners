# React Spinner Library - Component Structure

## 📁 Project Structure

```
src/
├── App.js                    # Main application component
├── App.css                   # Global styles
├── Spinner.js                # Core spinner component (50 types)
├── Spinner.css               # All spinner animations
├── components/
│   ├── SpinnerCard.js       # Individual spinner card with number badge
│   ├── SpinnerCard.css      # Card styling
│   ├── SpinnerGrid.js       # Grid layout for all spinners
│   ├── SpinnerGrid.css      # Grid responsive styling
│   ├── Controls.js          # Customization controls
│   ├── Controls.css         # Controls styling
│   ├── UsageExample.js      # Code usage example display
│   └── UsageExample.css     # Usage example styling
└── data/
    └── spinnerExamples.js   # Usage examples for all 50 spinners
```

## 🧩 Component Overview

### App.js
Main application component that orchestrates all child components.
- Manages global config state (size, colors, speed, etc.)
- Manages selected spinner state
- Renders Controls, SpinnerGrid, and UsageExample

### Spinner.js
Core reusable spinner component supporting 50 different types.
**Props:**
- `type` (1-50): Spinner type
- `size`: Width/height in pixels
- `color`: Primary color
- `secondaryColor`: Secondary color
- `backgroundColor`: Background color
- `speed`: Animation duration in seconds
- `borderWidth`: Border thickness
- `style`: Additional inline styles

### SpinnerCard.js
Individual card displaying a single spinner with numbered badge.
**Props:**
- `number`: Display number (1-50)
- `type`: Spinner type to render
- `config`: Configuration object for spinner
- `onSelect`: Callback when card is clicked

### SpinnerGrid.js
Grid container that renders all 50 spinner cards.
**Props:**
- `config`: Configuration object passed to all spinners
- `onSelectSpinner`: Callback for spinner selection

### Controls.js
Input controls for customizing spinner appearance.
**Props:**
- `config`: Current configuration object
- `setConfig`: State setter for configuration

### UsageExample.js
Displays code usage example for selected spinner.
**Props:**
- `selectedSpinner`: Currently selected spinner number (1-50)

### spinnerExamples.js
Data file containing code examples for all 50 spinner types.

## 🎨 Styling Architecture

Each component has its own CSS file:
- `SpinnerCard.css`: Card layout, hover effects, numbered badges
- `SpinnerGrid.css`: Responsive grid layout
- `Controls.css`: Form inputs and control group styling
- `UsageExample.css`: Code block and documentation styling
- `App.css`: Global layout and theme
- `Spinner.css`: All 50 spinner animations

## 🚀 Usage

```jsx
import { useState } from "react";
import SpinnerGrid from "./components/SpinnerGrid";
import Controls from "./components/Controls";

function App() {
  const [config, setConfig] = useState({
    size: 50,
    color: "#61dafb",
    speed: 1,
    borderWidth: 4,
    secondaryColor: "#ffffff",
    backgroundColor: "transparent",
  });

  return (
    <div>
      <Controls config={config} setConfig={setConfig} />
      <SpinnerGrid config={config} onSelectSpinner={(type) => console.log(type)} />
    </div>
  );
}
```

## 📦 Features

- ✅ 50+ unique spinner designs
- ✅ Fully customizable (size, colors, speed)
- ✅ Pure CSS animations (60 FPS)
- ✅ Component-based architecture
- ✅ Responsive grid layout
- ✅ Interactive demo with live preview
- ✅ Click to view usage examples
- ✅ No external dependencies

## 🔧 Customization

All spinners accept the same props for consistency:
- Adjust size, colors, speed dynamically
- Override with custom styles
- Responsive design built-in

## 📝 Adding New Spinners

1. Add animation keyframes to `Spinner.css`
2. Add type case to `Spinner.js`
3. Add usage example to `data/spinnerExamples.js`
4. Update the count in `SpinnerGrid.js`

That's it! The component architecture handles the rest.
