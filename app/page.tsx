'use client'; 

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Cat } from '../components/Cat';

export default function Home() {
  return (
    <div className="h-screen w-full bg-black">
      
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[2.5, 3, 5]} intensity={1} />

        {/* <mesh>
          <torusGeometry />
          <meshStandardMaterial color="orange" />
        </mesh> */}

        <Cat
          scale={0.1}
          position={[0, -1, 0]} // Move it down slightly to center it
        />

        <OrbitControls />

      </Canvas>
      
    </div>
  );
}