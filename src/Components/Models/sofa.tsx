
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sofa(props:any) {
    const { nodes, materials } = useGLTF("/sofa.glb");
    return (
        <group position = {[-0.5,0.2,0.6]} scale = {0.2} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                        <mesh
                            castShadow
                            receiveShadow
                            // @ts-ignore
                            geometry={nodes.Plane_Material_0.geometry}
                            material={materials.Material}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/sofa.glb");