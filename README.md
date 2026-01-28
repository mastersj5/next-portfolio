# 3D Interactive Portfolio 🚀

A "mixed reality" portfolio website built with the **Next.js** framework and **React Three Fiber**. This project demonstrates the integration of 3D immersive web experiences with standard HTML/CSS interfaces.

**Live Demo:** [https://jm-folio.vercel.app](https://jm-folio.vercel.app)

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **3D Engine:** [React Three Fiber](https://docs.pmndrs.assets/react-three-fiber) (Three.js renderer for React)
* **3D Helpers:** [@react-three/drei](https://github.com/pmndrs/drei)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** [Vercel](https://vercel.com/)

## ✨ Features

* **Declarative 3D Scenes:** Built using reusable React components (`<Cat />`, `<Laptop />`).
* **Interactive Models:** Raycasting interactions (hover/click events) without complex math.
* **HTML Overlays:** Floating UI elements that track 3D objects using the `<Html>` component.
* **Asset Optimization:** Automatic model centering and scaling.
* **Cloud Loading:** Assets streamed/loaded via glTF pipeline.

## 📦 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mastersj5/next-portfolio.git](https://github.com/mastersj5/next-portfolio.git)
    cd next-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the project.

## 🤝 Contributing

Feel free to fork this project and submit pull requests.