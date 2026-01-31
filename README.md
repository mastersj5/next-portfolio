# 3D Interactive Portfolio & Physics Lab 🚀

A "mixed reality" portfolio website built with **Next.js**, **React Three Fiber**, and **Rapier Physics**. This project demonstrates the integration of 3D immersive web experiences, real-time physics simulations, and cinematic post-processing with standard HTML/CSS interfaces.

**Live Demo:** [https://jm-folio.vercel.app](https://jm-folio.vercel.app)

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **3D Engine:** [React Three Fiber](https://docs.pmndrs.assets/react-three-fiber) (Three.js renderer for React)
* **Physics Engine:** [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) (Real-time rigid body physics)
* **Post-Processing:** [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) (Bloom, Vignette)
* **3D Helpers:** [@react-three/drei](https://github.com/pmndrs/drei)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** [Vercel](https://vercel.com/)

## ✨ Features

* **Interactive Physics:**
    * **Gravity & Collisions:** Objects react to the environment (floors/walls) using the Rapier engine.
    * **Impulse Interactions:** Clickable objects (Balls, Dice) that launch or spin using applied forces and torque.
    * **Complex Colliders:** Implementation of `Trimesh` and `Hull` colliders for irregular shapes (like a d20).
* **Dynamic Lighting Environment:**
    * **Day/Night Cycle:** Global state management that switches lighting profiles (sunlight vs. bulb light) and material properties (emissive textures).
    * **Custom Environments:** "Cornell Box" style room with dynamic shadows and material textures.
* **Cinematic Effects:** High-end visual polish using **Bloom** (glow) and **Vignette**.
* **Hybrid UI:** HTML overlays (`<Html>`) that track 3D position for accessible labels and controls.

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