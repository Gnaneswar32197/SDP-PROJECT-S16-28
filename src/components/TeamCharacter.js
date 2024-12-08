import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function TeamCharacter({ position, name, description, onHover }) {
    const ref = useRef();
    const gltf = useGLTF('/path-to-your-model.gltf'); // Replace with the path to your model

    useFrame(() => {
        ref.current.rotation.y += 0.01; // Keep rotating the model
    });

    return (
        <group
            position={position}
            ref={ref}
            onPointerOver={() => onHover({ name, description })}
            onPointerOut={() => onHover(null)}
        >
            <primitive object={gltf.scene} scale={0.5} /> {/* Adjust scale as needed */}
        </group>
    );
}

export default TeamCharacter;
