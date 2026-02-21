# Blueprint for Lottery Number Recommendation Page

## Project Overview
This project will transform the existing `index.html` into a lottery number recommendation page. Users will be able to click a button to generate a set of unique lottery numbers.

## Detailed Outline

### Initial Version Features:
- Display a main title for the page.
- A button to trigger the lottery number generation.
- A dedicated area to display the recommended lottery numbers.
- Basic styling for a clean and modern look.

### Dark/Light Mode Features:
- A toggle button to switch between dark and light modes.
- Persist user's theme preference using localStorage.
- Apply appropriate styling for both modes using CSS variables.

## Current Requested Change Plan

The user wants to add dark mode and light mode functionality. This involves:

1.  **Modify `index.html`**:
    *   Add a toggle button (e.g., a checkbox or a button with an icon) for theme switching.
2.  **Modify `main.js`**:
    *   Implement JavaScript logic to:
        *   Detect system theme preference.
        *   Load saved theme preference from `localStorage`.
        *   Toggle a class (e.g., `dark-mode`) on the `body` element based on user interaction and saved preference.
        *   Save the current theme preference to `localStorage`.
3.  **Modify `style.css`**:
    *   Define CSS variables for colors (e.g., `--bg-color`, `--text-color`, `--container-bg`).
    *   Apply these variables in the general styles.
    *   Create a `.dark-mode` class that overrides these CSS variables to dark theme values.
