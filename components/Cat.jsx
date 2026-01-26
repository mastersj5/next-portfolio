/*
Author: volkanongun (https://sketchfab.com/volkanongun)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-cat-1e7143dfafd04ff4891efcb06949a0b4
Title: Low Poly Cat
*/

import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cat(props) {
  const { nodes, materials } = useGLTF('/low_poly_cat.glb')
    
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.CatMesh2_lambert1_0.geometry} 
        material={materials.lambert1} 

        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}

        scale={active ? 1.5 : 1}
        material-color={hovered ? "orange" : "grey"}
      
      />
    </group>
  )
}

useGLTF.preload('/low_poly_cat.glb')
