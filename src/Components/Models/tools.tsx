import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tools(props:any) {
    const { nodes, materials } = useGLTF("/MainTable.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_VRayMtl1_0.geometry}
                material={nodes.desk_VRayMtl1_0.material}
                position={[0.59, 0.41, -0.56]}
                rotation={[3.13, -1.16, -Math.PI]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper3_VRayMtl1_0.geometry}
                material={nodes.paper3_VRayMtl1_0.material}
                position={[0.71, -0.04, -0.36]}
                rotation={[0.05, 0.29, 0.23]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper16_VRayMtl1_0.geometry}
                material={materials.handspicture}
                position={[0.67, 0.2, -0.26]}
                rotation={[-0.01, 0, 0]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper19_VRayMtl1_0.geometry}
                material={nodes.paper19_VRayMtl1_0.material}
                position={[0.49, 0.45, -0.6]}
                rotation={[0.02, 1.47, 3.11]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper2_VRayMtl1_0.geometry}
                material={nodes.paper2_VRayMtl1_0.material}
                position={[0.73, -0.04, -0.32]}
                rotation={[-0.01, 0, 0]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.frame_VRayMtl1_0.geometry}
                material={materials.handspicture}
                position={[0.6, 0.28, -0.35]}
                rotation={[-0.16, 0, 3.14]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth01_VRayMtl1_0.geometry}
                material={materials.board1}
                position={[0.52, 0.36, -0.35]}
                rotation={[3.02, 0.79, 3.12]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper15_VRayMtl1_0.geometry}
                material={materials.handspicture}
                position={[0.38, 0.2, -0.28]}
                rotation={[-0.01, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper18_VRayMtl1_0.geometry}
                material={nodes.paper18_VRayMtl1_0.material}
                position={[0.38, 0.2, -0.51]}
                rotation={[3.13, 0.14, -Math.PI]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper_VRayMtl1_0.geometry}
                material={nodes.paper_VRayMtl1_0.material}
                position={[0.73, -0.04, -0.37]}
                rotation={[-0.01, -0.27, 0]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface20_All_0.geometry}
                material={materials.redcolor}
                position={[0.16, 0.27, -0.43]}
                rotation={[-1.6, 0, 0]}
                scale={0}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth02_VRayMtl1_0.geometry}
                material={nodes.cloth02_VRayMtl1_0.material}
                position={[0.65, 0.35, -0.37]}
                rotation={[-0.25, -0.72, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth_VRayMtl1_0.geometry}
                material={materials.redcolor}
                position={[0.58, 0.47, -0.56]}
                rotation={[-3.1, -1.16, -3.1]}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload("/MainTable.glb");