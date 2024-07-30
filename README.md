# Apple Mail Redesign Component

## Overview

The Apple Mail Redesign Component is a dynamic, visually engaging email browsing interface built with React and Next.js. It aims to provide a seamless email management experience that mimics Apple's design aesthetics, complete with responsive functionality and intuitive interactions.

## High-Level Accomplishments

- **Responsive and Dynamic Email Browsing:** Achieved a fluid browsing experience by implementing swipe gestures, keyboard navigation, and smooth animations. This ensures users can effortlessly switch between emails and categories.

- **Enhanced Email Categorization and Search:** Improved email retrieval with a dropdown menu for selecting categories and a real-time search bar. This allows users to quickly locate emails by category or keyword.

- **Visually Engaging Interface:** Designed a modern interface inspired by Apple's aesthetics. Utilized Framer Motion for animations, React Icons for consistent iconography, and CSS for a clean layout, enhancing both usability and visual appeal.

## Technical Description

### Structure and State Management

- **React Functional Component:** Developed using React functional components with hooks (`useState`, `useEffect`, `useRef`) for state management and lifecycle control.

- **State Variables:**
  - `searchQuery`: Stores the current search text to filter emails.
  - `isSearchActive`: Indicates if the search bar is currently active.
  - `selectedCategory`: Tracks the selected email category for filtering.
  - `dropdownVisible`: Controls the visibility of the category dropdown menu.
  - `selectedEmailIndex`: Holds the index of the email currently selected for viewing.
  - `animationClass`: Manages CSS class for animations during email transitions.
  - `isStackVisible`: Determines whether the stacked email preview is shown.
  - `shouldAnimate`: Controls whether animations are applied when switching emails.
  - `firstClickIndex`: Keeps track of the first email clicked to manage animations.

### Features and Interactions

- **Email Data and Filtering:**
  - `dummyEmails`: An array of email objects containing details like id, category, sender information, subject, body, timestamp, and profile picture.
  - `filteredEmails`: A derived state that filters `dummyEmails` based on the current `searchQuery` and `selectedCategory`.

- **Email Selection:**
  - `handleEmailClick(index)`: Sets the clicked email as the selected one and triggers animations. It prevents re-selection of the currently displayed email.

- **Email Navigation:**
  - **Keyboard Navigation:** Implements event listeners for ArrowRight, ArrowLeft, and Escape keys to navigate through emails and close the detail view.
  - **Swipe Gestures:** Utilizes the `react-swipeable` library to enable swipe-based navigation on touch-enabled devices.

- **Search Functionality:**
  - `handleSearchChange(e)`: Updates the search query and triggers email re-filtering as the user types.
  - `handleSearchFocus()` and `handleSearchBlur()`: Manage the search bar's visibility based on user focus.

- **Category Filtering:**
  - `handleCategoryChange(category)`: Updates the selected email category and hides the dropdown menu.
  - **Dropdown Menu:** Features animated transitions for smooth category selection.

- **Window Control Actions:**
  - **Window Controls:** Simulates close, minimize, and maximize actions with placeholder functionality for future expansion.

## Getting Started

This project is a [Next.js](https://nextjs.org/) application created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To get started:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate into the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Learn More

To dive deeper into Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide to Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial to get hands-on experience with Next.js.

You can also explore [the Next.js GitHub repository](https://github.com/vercel/next.js/) and contribute to the project.

## Deployment

For deployment, the easiest way is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
