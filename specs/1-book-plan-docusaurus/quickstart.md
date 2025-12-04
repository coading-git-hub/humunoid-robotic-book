# Quickstart Guide: Physical AI & Humanoid Robotics Book

This guide provides quick instructions to set up and run the Docusaurus-based book project locally.

## 1. Prerequisites

Ensure you have the following installed:

*   **Node.js**: Version 18 or higher (LTS recommended). You can download it from [nodejs.org](https://nodejs.org/).
*   **npm**: Node Package Manager, which comes with Node.js.
*   **Git**: For cloning the repository.

## 2. Project Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd humanoid-robotics
    ```

2.  **Install dependencies**:
    Navigate to the project root where `package.json` is located and run:
    ```bash
    npm install
    ```

## 3. Running the Project Locally

To start the development server and view the book locally:

1.  **Navigate to the project root** (if not already there).

2.  **Start the Docusaurus development server**:
    ```bash
    npm run start
    ```

    This command starts a local development server and opens a browser window to `http://localhost:3000`. Most changes are reflected live without restarting the server.

## 4. Building the Project

To build the static files for deployment:

1.  **Navigate to the project root**.

2.  **Build the Docusaurus site**:
    ```bash
    npm run build
    ```

    This command generates static content into the `build` directory, which can then be deployed to any static hosting service (e.g., GitHub Pages).

## 5. Directory Structure Overview

Key directories for content:

*   **`docs/`**: Contains all Markdown files for modules, lessons, setup guides, and other documentation.
*   **`static/images/`**: Stores all static image assets referenced in the Markdown files.
*   **`sidebars.js`**: Configures the navigation sidebar for the Docusaurus site.
*   **`docusaurus.config.js`**: Main configuration file for the Docusaurus project.
