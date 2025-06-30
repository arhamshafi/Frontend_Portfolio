import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/spinning_rings.glb');
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function ModelViewer() {
  return (
    <div
      style={{
        width: "100%",
        height:"100%",
        margin: "0 auto",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [0, 0, 230] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false}  autoRotate autoRotateSpeed={5} />
      </Canvas>
    </div>
  );
}
