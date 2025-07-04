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
                height: "100%",
                margin: "0 auto",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 370], fov: 45 }}
                dpr={[1, 1.5]} // reduce GPU stress
                gl={{ preserveDrawingBuffer: false }}
            >
                <ambientLight intensity={1.5} />
                <directionalLight
                    intensity={2}
                    position={[10, 15, 10]}
                    castShadow
                />
                <pointLight position={[0, 0, 200]} intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={1.5}
                />
            </Canvas>
        </div>
    );
}
