# 3D Interactive Portfolio & Physics Lab 🚀

A "mixed reality" portfolio website built with **Next.js**, **React Three Fiber**, and **Rapier Physics**. This project demonstrates the integration of 3D immersive web experiences, real-time physics simulations, spatial audio, and cinematic post-processing with standard HTML/CSS interfaces.

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

### 🎮 Interactive Physics
* **Gravity & Collisions:** Objects react to the environment (floors/walls) using the Rapier engine.
* **Impulse Interactions:** Clickable objects (Balls, Dice) launch or spin using applied forces and torque.
* **Complex Colliders:** `Trimesh` and `Hull` colliders for irregular shapes (like a d20 die or leaning guitar).

### 🔊 Immersive Audio
* **Spatial Sound:** 3D Positional Audio attached to the acoustic guitar. The volume and panning adjust automatically based on the camera's distance and angle relative to the instrument.
* **Audio Context Handling:** A custom "Enter Experience" overlay ensures browser audio policies are respected before loading the scene.

### 💻 Virtual OS (Embedded HTML)
* **Occluded Screens:** A functional web browser embedded inside the 3D laptop model using the `<Html transform occlude>` component.
* **Interactive Content:** Displays a custom terminal-style internal page (`/screen`) that users can interact with inside the 3D world.
* **Visual Integration:** Properly rotated and scaled to match the GLB model's bezel, with "z-fighting" resolved via occlusion.

### 🎨 Visuals & Performance
* **Dynamic Lighting:** Day/Night cycle switching (Sunlight vs. Bulb light) with emissive texture handling.
* **Asset Optimization:** Draco compression pipeline for 3D models to reduce mobile load times.
* **Custom Loading System:** Interpolated progress bar that smooths out asset loading jumps for a premium feel.

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
