import { useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function InteractionManager({ setHovered }) {
  const { camera, scene } = useThree();
  
  const raycasterDist = 15;

  // ⚡ OPTIMIZATION 1: Create raycaster once (useMemo not strictly needed but good practice)
  // ⚡ OPTIMIZATION 2: Set 'far' limit. It won't even check objects > raycasterDist units away.
  const [raycaster] = useState(() => {
    const ray = new THREE.Raycaster();
    ray.far = raycasterDist; 
    return ray;
  });
  
  // Set the raycaster to always point down the center of the screen
  const center = new THREE.Vector2(0, 0);

  useFrame(() => {
    // Cast a ray from the center of the camera
    raycaster.setFromCamera(center, camera);
    
    // Check for intersections with anything in the scene
    // Note: This checks EVERYTHING. For better performance, you might want to 
    // only check a specific group or layer in a real game.
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    // Check if the first hit object is "Interactable"
    // We assume any object with an 'onClick' event or specific name is interactive.
    // React Three Fiber attaches events to 'userData' or internal handlers.
    // A simple hack: Check if the object is close (< raycasterDist units) and visible.
    if (intersects.length > 0) {
        const firstHit = intersects[0];
        const isClose = firstHit.distance < raycasterDist; // Only interactive if close
     
        // Check for a specific name property
        // We check the object itself, or its parent (often needed for grouped meshes)
        const isInteractable = firstHit.object.name === "interactable" || 
                            firstHit.object.parent?.name === "interactable";

        if (isClose && isInteractable) {
            setHovered(true);
        } else {
            setHovered(false);
        }
        
    } else {
        setHovered(false);
    }
  });

  return null;
}