

# React Spinners Component Library

Beautiful, customizable React spinner components for loading states and UI feedback.

## Features

- 50+ unique spinner designs, all in one component
- Fully configurable via props: size, color, speed, border width, etc.
- Pure CSS animations for smooth performance
- Typeahead search for spinner names
- Live customization controls
- Usage code examples for every spinner
- No dependencies except React

## Installation

```bash
npm install @rishikesh-janrao/spinners
```

## Usage

```jsx
import Spinner from '@rishikesh-janrao/spinners/src/Spinner';

<Spinner
	type={1}                // Spinner type (number or name)
	size={3}                // rem
	color="#61dafb"
	secondaryColor="#fff"
	backgroundColor="#282c34"
	speed={1}               // seconds
	borderWidth={4}         // px
/>
```

## Props

| Prop            | Type            | Description                        | Example/Unit      |
|-----------------|-----------------|------------------------------------|-------------------|
| type            | number/string   | Spinner type or name (1-50, or name from list) | `1`, `"ring"`     |
| size            | number          | Size of spinner (rem)              | `3` (rem)         |
| color           | string          | Primary color                      | `"#61dafb"`       |
| secondaryColor  | string          | Secondary color                    | `"#fff"`          |
| backgroundColor | string          | Background color                   | `"#282c34"`       |
| speed           | number          | Animation speed (seconds)          | `1` (seconds)     |
| borderWidth     | number          | Border thickness (px)              | `4` (px)          |

## Spinner Types

You can use either a number (1-50) or a name (e.g., `"ring"`, `"dual"`, `"dots"`, etc.) for the `type` prop. See the full list in `src/data/spinnerNames.js`.

## Live Demo & Customization

- The main app (`src/App.js`) provides a live demo with:
	- **SearchBar**: Typeahead search for spinner names
	- **SpinnerGrid**: Displays all spinner types in a grid
	- **Controls**: Adjust size, speed, border, and colors
	- **UsageExample**: Shows code for the selected spinner

## Component Structure

- `Spinner.js`: Core spinner component (all logic, 50 types)
- `SpinnerGrid.js`: Grid layout for all spinners
- `SpinnerCard.js`: Individual spinner card
- `Controls.js`: Customization controls
- `SearchBar.js`: Typeahead spinner search
- `UsageExample.js`: Code usage display
- `data/spinnerNames.js`: List of spinner names
- `data/spinnerExamples.js`: Usage code for each spinner

## Styling

- Each component has its own CSS file for modular styling.
- All spinner animations are in `Spinner.css`.

## How to Add New Spinners

- Add logic to `Spinner.js` for the new type.
- Add a name to `spinnerNames.js`.
- Optionally, add a usage example to `spinnerExamples.js`.

## License

MIT
