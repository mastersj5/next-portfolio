import React from 'react';
import { Html } from '@react-three/drei';

export function LaptopScreen() {
  return (
    <Html 
      transform 
      occlude//="blending"
      wrapperClass="htmlScreen" // For optional CSS styling
      distanceFactor={.66} // Adjusts the "zoom" level of the screen content
      position={[.48, .94, .71]} // 📍 The hardest part: Finding these exact coordinates
      rotation={[0, Math.PI, 0]} // 📐 Matching the laptop screen's tilt
    >
        {/* The HTML Content */}
        <div 
            className="w-[1024px] h-[670px] bg-white rounded-lg overflow-hidden"
            // 🖱️ FIX INTERACTION: Stop OrbitControls from hijacking clicks
            onPointerDown={(e) => e.stopPropagation()}
        >
            <iframe 
            src="/screen" // Your GitHub (or any site)
            className="w-full h-full border-none"
            title="My GitHub"
            />
        </div>
    </Html>
  );
}