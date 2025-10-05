# Portfolio Website

This is a portfolio website built with [Astro](https://astro.build/), a modern static site builder. The portfolio showcases professional projects, skills, and achievements.

## Tech Stack

- **[Astro](https://astro.build/)**: The core framework for building the website.
- **[React](https://reactjs.org/)**: Used for UI components.
- **[normalize.css](https://necolas.github.io/normalize.css/)**: A CSS library to render elements more consistently across browsers.
- **[ESLint](https://eslint.org/)**: For linting and maintaining code quality.
- **[Prettier](https://prettier.io/)**: For code formatting.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/bepbop/bepbop.github.io.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```

### Usage

To start the development server, run the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:4321`.

To build the project for production, use:

```sh
npm run build
```

## Project Structure

The project follows a standard Astro project structure:

- **`src/`**: Contains the source code of the website.
  - **`components/`**: Reusable Astro and React components.
  - **`pages/`**: The pages of the website. Each `.astro` file in this directory becomes a page on the website.
  - **`styles/`**: Global CSS styles.
- **`public/`**: Contains static assets like images, fonts, and CSS files.
- **`package.json`**: Lists the project dependencies and scripts.
- **`astro.config.mjs`**: The Astro configuration file.