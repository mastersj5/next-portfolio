import * as THREE from "three"
import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody, CapsuleCollider } from "@react-three/rapier"
import { useRef } from "react"

const SPEED = 8
const JUMP_FORCE = 8
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const ref = useRef()
  const [, get] = useKeyboardControls() // Access the inputs

  useFrame((state) => {
    // 🚑 SAFETY CHECK: If physics body isn't ready, wait.
    if (!ref.current) return

    // Read Inputs
    const { forward, backward, left, right, jump } = get()
    
    // Get current physics state
    const velocity = ref.current.linvel()
    const translation = ref.current.translation()

    // Move Camera to Body Position (Sync)
    // We add +1.5 to Y so the camera is at "Eye Level" inside the capsule
    state.camera.position.set(translation.x, translation.y + 1.5, translation.z)

    // Calculate Movement Direction
    // Front/Back
    frontVector.set(0, 0, Number(backward) - Number(forward))
    // Left/Right
    sideVector.set(Number(left) - Number(right), 0, 0)
    
    // Combine vectors and match Camera rotation
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation) // Rotate movement to match where you are looking

    // Apply Velocity (Move the Body)
    // We keep velocity.y (gravity) so we fall, but overwrite X and Z to walk.
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })

    // Jump Logic (Simple)
    // Only jump if we are not falling too fast (grounded-ish)
    if (jump && Math.abs(velocity.y) < 0.05) {
       ref.current.setLinvel({ x: velocity.x, y: JUMP_FORCE, z: velocity.z })
    }
  })

  return (
    <RigidBody 
      ref={ref} 
      colliders={false} 
      mass={1} 
      type="dynamic" 
      position={[-5, 5, 5]} // Start in the air so you don't get stuck in the floor
      enabledRotations={[false, false, false]} // CRITICAL: Player should never tip over!
      friction={0} // No friction so we don't stick to walls
    >
      {/* Capsule Collider:
          args=[halfHeight, radius] 
          Total height is halfHeight*2 + radius*2 approx 
      */}
      <CapsuleCollider args={[11, 0.5]} />
    </RigidBody>
  )
}