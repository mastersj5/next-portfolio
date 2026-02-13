import React, { useRef, useEffect } from 'react'
import { useGLTF, PositionalAudio } from '@react-three/drei'

export function Acoustic_guitar(props) {
  // 1. Load the scene
  const { scene, materials } = useGLTF('/acoustic_guitar.glb')
  const sound = useRef()

  // THE MATERIAL FIXER 
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.color.setHex(0xffffff)
      if (material.emissive) material.emissive.setHex(0x000000)
      if (material.emissiveIntensity) material.emissiveIntensity = 0
      if (material.emissiveMap && !material.map) {
          material.map = material.emissiveMap
          material.emissiveMap = null
      }
      material.roughness = 0.5 
      material.metalness = 0.1
      material.side = 2 
      material.needsUpdate = true
    })

    // ⚡ OPTIMIZATION: Turn off raycasting for the heavy model completely
    scene.traverse((child) => {
        if (child.isMesh) {
            child.raycast = () => null // 🚫 The raycaster will now pass right through it
        }
    })
  }, [materials, scene])

  const playSound = (e) => {
    // Stop the click from passing through to the wall behind
    e.stopPropagation() 
    if (sound.current) {
        if (sound.current.isPlaying) sound.current.stop()
        sound.current.play()
    }
  }

  return (
    <group {...props} dispose={null}>
      <PositionalAudio 
        ref={sound} 
        url="/Guitar_Twang.mp3" 
        distance={5} 
        loop={false}
      />

      {/* ⚡ OPTIMIZATION: Render the whole object at once */}
      <primitive 
        object={scene} 
        name="interactable" // Tags it for the new HUD!
        onClick={playSound}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      />
    </group>
  )
}

useGLTF.preload('/acoustic_guitar.glb')