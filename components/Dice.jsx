import React, { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';

export function Dice() {
  const rigidBody = useRef();

  return (
    // position: Start high up
    // colliders="hull": This generates a collider that matches the geometry shape!
    <RigidBody 
        ref={rigidBody} 
        position={[-4, 5, -2]} 
        colliders="hull" 
        restitution={0.5}
    >
      <mesh name="interactable"
        castShadow
        onClick={() => {
            // Apply a random torque (spin) and impulse (jump) to simulate a roll
            rigidBody.current.applyImpulse({ x: 0, y: 10, z: 0 }, true);
            rigidBody.current.applyTorqueImpulse({ 
                x: Math.random() * 10, 
                y: Math.random() * 10, 
                z: Math.random() * 10 
            }, true);
        }}
      >
        {/* Radius 0.5, Detail 0 (0 = 20-sided Icosahedron) */}
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="cyan" flatShading /> 
      </mesh>
    </RigidBody>
  );
}