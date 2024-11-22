# React GitHub Deployment App (TypeScript)
This project is a simple React application built in TypeScript for the purpose of learning and implementing GitHub deployment workflows. The app demonstrates best practices in deploying to GitHub Pages, managing repository variables, handling routing, and dynamically installing npm dependencies.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Features
- **GitHub Actions Workflow:** A custom workflow for automated deployment to GitHub Pages.
- **Repository Variables:** Demonstrates the use of GitHub repository variables within the code.
- **Routing:** Implements routing to manage different pages within the app.
- **Dynamic Dependency Management:** Installs npm dependencies at deployment, including adding `react-virtualized` after initial project setup to illustrate handling new dependencies.

In the project directory, you can run:

## Commands

- Install: `npm install`
- Run: `npm start`
- Build: `npm run build`


## Deployment Guidelines for React Applications
To ensure a smooth deployment of your React application, keep the following points in mind:

1. ##### Environment Variable Naming
    All environment variables in a React application should start with `REACT_APP_`.
2. ##### Routing Configuration
    Use the `HashRouter` library for routing to ensure compatibility with GitHub Pages.
3. ##### Setting the Home Page
   - Navigate to Pages / GitHub Pages in your repository settings and copy the site URL (e.g., https://username.github.io/repository-name).

   - Update your `package.json` file by adding or modifying the homepage field

    ```bash
    "homepage": "https://username.github.io/repository-name/#"
4. ##### Deployment Branch Configuration
    - Go to `Pages / GitHub Pages` in your repository settings.
    - Set the `deployment branch` to `gh-pages`, as specified in your workflow YAML file.
