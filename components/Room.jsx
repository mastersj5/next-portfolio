import React from 'react';

export function Room({ isNight }) {
    return (
        <group>
        {/* 1. FLOOR (Wood Color) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8.5, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#5d4037" roughness={0.5} /> 
        </mesh>

        {/* 2. CEILING (With a Light) */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 20, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#ddd" side={2} /> {/* Double sided */}
        </mesh>
        {/* The "Calm Light Source" from the roof */}
        <pointLight 
            position={[0, 14, 0]} 
            intensity={isNight ? 0 : 800} 
            color="#ffdcb4" 
            decay={2}
            castShadow 
        />

        {/* 3. BACK WALL */}
        <mesh position={[0, 1.5, -15]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#888" />
        </mesh>

        {/* 4. LEFT WALL */}
        <mesh rotation={[0, Math.PI / 2, 0]} position={[-25, 1.5, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#888" />
        </mesh>

        {/* 5. RIGHT WALL */}
        <mesh rotation={[0, -Math.PI / 2, 0]} position={[25, 1.5, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#888" />
        </mesh>
        </group>
    );
}