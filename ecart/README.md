# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## How to run the project
1.clone the repository
git clone E-cart-website
2.Navigate to project folder
cd ecart
3.install required dependecies
npm install
4.Run the project
npm run dev


## Key Design and Technical Decisions

* **React for the frontend:** Used React to build the application with reusable components and efficient state management.

* **React Router:** Used React Router to navigate between the product listing, add product, and product details pages without reloading the application.

* **React-Bootstrap:** Used React-Bootstrap for responsive layouts, cards, buttons, forms, modals, and grid-based UI design.

* **Fake Store API:** Used the Fake Store API to fetch and display product data.

* **Shared state management:** Kept the products state in the main `App` component and passed the data and state updater to child components. This allows newly 
