import React from 'react';
import { RigidBody } from '@react-three/rapier';
import { useGLTF, MeshReflectorMaterial, useTexture } from '@react-three/drei'
import { Office_Rug } from './Persian_nain_carpet'

export function Room({ isNight }) {

    // Load the textures
    const woodTexture = useTexture({
        map: '/textures/wood/2k/diffuse.jpg',
        normalMap: '/textures/wood/2k/normal.jpg',
        roughnessMap: '/textures/wood/2k/roughness.jpg',
        //aoMap: '/textures/wood/arm.jpg', // Optional: Ambient Occlusion
    })

    const plasterTexture = useTexture({
        map: '/textures/plaster/1k/diffuse.jpg',
        normalMap: '/textures/plaster/1k/normal.jpg',
        //roughnessMap: '/textures/plaster/1k/roughness.jpg',
        aoMap: '/textures/plaster/1k/arm.jpg', // Optional: Ambient Occlusion
    })

    return (
        <group>
            {/* FLOOR (Wood Texture) */}
            <RigidBody>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8.5, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    
                    <meshStandardMaterial {...woodTexture} />

                </mesh>

            </RigidBody>

            {/* 🧶 THE RUG */}
            {/* We place it just barely above the floor (y=0.01) to stop flickering */}
            <mesh rotation={[0, 0, 0]} position={[0, -8.49, 2]} receiveShadow>
                {/* <circleGeometry args={[4, 64]} /> 
                <meshStandardMaterial 
                    color="#263238" // Dark Blue/Grey Rug
                    roughness={1}   // Fabric is 100% rough (no reflection)
                    side={2}        // Double sided
                /> */}
                <Office_Rug 
                    scale={6}
                />
            </mesh>
            

            {/* CEILING (With a Light) */}
            <RigidBody colliders="trimesh"> 
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 20, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial {...plasterTexture} side={2} /> {/* Double sided */}
                </mesh>
            </RigidBody>
            {/* The "Calm Light Source" from the roof */}
            <pointLight 
                position={[0, 14, 0]} 
                intensity={isNight ? 0 : 800} 
                color="#ffdcb4" 
                decay={2}
                castShadow 
            />

            {/* BACK WALL */}
            <RigidBody>
                <mesh position={[0, 1.5, -15]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial {...plasterTexture} />
                </mesh>
            </RigidBody>

            {/* LEFT WALL */}
            <RigidBody>
                <mesh rotation={[0, Math.PI / 2, 0]} position={[-25, 1.5, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial {...plasterTexture} />
                </mesh>
            </RigidBody>
            

            {/* RIGHT WALL */}
            <RigidBody>
               <mesh rotation={[0, -Math.PI / 2, 0]} position={[25, 1.5, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial {...plasterTexture} />
                </mesh> 
            </RigidBody>
                
        </group>
    );
}