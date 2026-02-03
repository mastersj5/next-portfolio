'use client'; 
import React, { 
  useState, 
  useRef,
  Suspense  
} from 'react'
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls,
  FirstPersonControls,
  PointerLockControls,
  Center,
  Html,
  //Loader,
  Environment
} from '@react-three/drei';
import { Physics, RigidBody, RapierRigidBody } from '@react-three/rapier';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

import { Analytics } from "@vercel/analytics/next"

import { Cat } from '../components/Cat';
import { Desk_set } from '../components/Desk_set';
import { Laptop_alienpredator } from '../components/Laptop_alienpredator';
import { Room } from '../components/Room';
import { Dice } from '../components/Dice';
import { Acoustic_guitar } from '../components/Acoustic_guitar.jsx';
import { LoadingScreen } from '../components/LoadingScreen';

export default function Home() {

  const [hovered, setHovered] = useState(false)
  //const [active, setActive] = useState(false)

  // Mood State
  const [isNight, setIsNight] = useState(false);

  // State for the Start Screen
  const [start, setStart] = useState(false);

  const ballRef = useRef<RapierRigidBody>(null);

  return (
    <div className="h-screen w-full bg-black">
      
      <LoadingScreen 
        started={start} 
        onStarted={() => setStart(true)} 
      />

      <Canvas 
        camera={{ position: [-8, 6.5, 8], fov: 45 }}

      >

        <Physics > { /*debug*/ } 
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


            {/* THE GUITAR 
                We use type="fixed" (or "kinematicPosition") so it doesn't fall over immediately.
                If you want it to be kickable, use default (dynamic) but you might need a custom collider.
                For now, let's just lean it against the back wall.
            */}
            <RigidBody type="fixed" colliders="trimesh">
              <Center top position={[-22.7, -8.5, -12.5]}>
                <Acoustic_guitar 
                    scale={10} 
                    //position={[-20, -5.5, -17]} // To the right, on the floor, near back wall
                    rotation={[1.4, 0.15, -0.7]} // Leaning slightly
                />
              </Center>
            </RigidBody>

            {/* THE BOUNCING BALL */}
            {/* colliders="ball": Tells the physics engine this is a sphere (efficient).
                position: Start it high up (y=10) so it falls.
            */}
            <RigidBody 
              ref={ballRef}
              position={[15, 10, -5]} 
              colliders="ball" 
              restitution={1.3}
            >
                <mesh 
                  castShadow
                  onClick={() => {
                    // applyImpulse takes a Vector3 {x, y, z}
                    // We shoot it up (y=10) and slightly random sideways so it doesn't get boring
                    ballRef.current?.applyImpulse({ x: Math.random() + 1, y: 5, z: Math.random() + 1 }, true);
                    // The 'true' argument means 'wake up the body' if it was sleeping
                  }}
                >
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </RigidBody>

            <Dice/>
            
            <RigidBody type="fixed" colliders="trimesh">
              <Center position={[0, -2, 0]}>
                <Desk_set 
                  scale={0.01}
                  isNight={isNight} 
                />
              </Center>
            </RigidBody>
            
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

        </Physics>

          {/* 
          preset="sunset": Warm, orange/pink light. Great for "golden hour" looks 
          https://sbcode.net/react-three-fiber/environment/ 
          A list of presets can be found at 
          https://github.com/pmndrs/drei/blob/master/src/helpers/environment-assets.ts
          */}
          {/* intensity={isNight ? 0.3 : 0.8}  broken */}
          {/* <Environment preset="warehouse" /> */}

          {/* 2. The Effects Layer */}
          {/* disableNormalPass helps performance if we don't need fancy AO */}
          <EffectComposer enableNormalPass={false}> 

            {/* BLOOM: Makes bright things glow.
                luminanceThreshold: How bright must a pixel be to glow? (1 = very bright)
                intensity: How strong is the glow?
            */}
            <Bloom luminanceThreshold={1} mipmapBlur intensity={1} />

            {/* VIGNETTE: Darkens corners 
                eskil: A smoother gradient style
                offset: How big is the dark area?
                darkness: How black is it?
            */}
            <Vignette eskil={false} offset={0.1} darkness={.8} />
            
          </EffectComposer>
    
          <OrbitControls 
            makeDefault
            target={[0, -1, 0]}
          />

          {/* <FirstPersonControls/> */}

          {/* <PointerLockControls/> */}
        

      </Canvas>

      {/* HTML Light Switch */}
      <div className="absolute top-4 right-4 z-10 transition-opacity duration-1000 animate-in fade-in">
        <button
          onClick={() => setIsNight(!isNight)}
          className={`px-6 py-3 rounded-lg font-bold transition-colors ${
            isNight ? "bg-slate-900 text-white" : "bg-amber-100 text-black"
          }`}
        >
          {isNight ? "🌙 Night Mode" : "☀️ Day Mode"}
        </button>
      </div>

      <Analytics/>
      
    </div>
  );
}