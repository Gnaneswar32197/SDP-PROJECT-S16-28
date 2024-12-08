import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import Background from './Background';

// Load the 3D model for the cartoon character
function Character({ modelPath, position }) {
    const { scene } = useGLTF(modelPath); // Load the model
    return <primitive object={scene} position={position} scale={[0.5, 0.5, 0.5]} />;
}

function Team() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <h1 style={{ textAlign: 'center', color: '#fff', position: 'absolute', top: '20%' }}>
                Meet Our Team
            </h1>
            <p style={{ textAlign: 'center', color: '#fff', position: 'absolute', top: '30%' }}>
                Details about the team members go here...
            </p>

            {/* The 3D background */}
            <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Background /> {/* Render the Background */}

                {/* Render the cartoon characters */}
                <Character modelPath="/models/character1.glb" position={[-2, 0, 0]} />
                <Character modelPath="/models/character2.glb" position={[2, 0, 0]} />
            </Canvas>
        </div>
    );
}

export default Team;
