
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


export function ChairAvatar(props: JSX.IntrinsicElements["group"]) {
    const group:any = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF(
        "/sittingchar.glb"
    );
    const { actions } = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="result_mesh"
                    castShadow
                    receiveShadow
                    // @ts-ignore
                    geometry={nodes.result_mesh.geometry}
                    material={materials["Material.002"]}
                    position={[0, 0.2, 0.035]}
                    rotation={[1.52, 0, -3.05]}
                    scale={0.0018}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/sittingchar.glb");