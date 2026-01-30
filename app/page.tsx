'use client'; 
import React, { 
  useState, 
  Suspense  
} from 'react'
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls,
  FirstPersonControls,
  PointerLockControls,
  Center,
  Html,
  Loader
} from '@react-three/drei';

import { Analytics } from "@vercel/analytics/next"

import { Room } from '../components/Room';
import { Cat } from '../components/Cat';
import { Desk_set } from '../components/Desk_set';
import { Laptop_alienpredator } from '../components/Laptop_alienpredator';

export default function Home() {

  const [hovered, setHovered] = useState(false)
  //const [active, setActive] = useState(false)

  // Mood State
  const [isNight, setIsNight] = useState(false);

  return (
    <div className="h-screen w-full bg-black">
      
      <Canvas camera={{ position: [-8, 6.5, 8], fov: 45 }}>
        {/* <ambientLight intensity={1.25} />
        <directionalLight position={[2.5, 3, 5]} intensity={1} /> */}

        {/* <mesh>
          <torusGeometry />
          <meshStandardMaterial color="orange" />
        </mesh> */}

        {/* <Cat
          scale={0.1}
          position={[0, -1, 0]} // Move it down slightly to center it
        /> */}

        <Room isNight={isNight} />

        <Center position={[0, -2, 0]}>
            <Desk_set 
              scale={0.01}
              isNight={isNight} 
            />
        </Center>

        <group position={[0.1, -.3, -2]}>  

          <Center top>
              <Laptop_alienpredator 
                scale={1.5} 
                rotation={[0, Math.PI, 0]} 
              />
          </Center>

          <Html
            position={[0, 1.25, 0]} // Float it 1.25 units above the group center
            center // Centers the div on that point
            distanceFactor={10} // Makes it get smaller as you zoom out
          >
            <div 
              className={`px-4 py-2 rounded-full font-bold text-black whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                hovered ? 'bg-yellow-400' : 'bg-white'
              }`}
              
              onClick={() => window.open('https://github.com/mastersj5', '_blank')}
              
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
            >
                    My GitHub 💻
            </div>
          </Html>

        </group>

          <OrbitControls 
            makeDefault
            target={[0, -1, 0]}
          />

          {/* <FirstPersonControls/> */}

          {/* <PointerLockControls/> */}

      </Canvas>

      {/* HTML Light Switch */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsNight(!isNight)}
          className={`px-6 py-3 rounded-lg font-bold transition-colors ${
            isNight ? "bg-slate-900 text-white" : "bg-amber-100 text-black"
          }`}
        >
          {isNight ? "🌙 Night Mode" : "☀️ Day Mode"}
        </button>
      </div>

      <Loader />

      <Analytics/>
      
    </div>
  );
}