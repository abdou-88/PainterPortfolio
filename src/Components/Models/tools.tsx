
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tools(props:any) {
    const { nodes, materials } = useGLTF("/tools1.glb");
    return (
        <group scale={0.02} position={[-0, 0.2, -0.2]} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper15_VRayMtl1_0.geometry}
                material={materials.handspicture}
                position={[27.35, 0, 3.06]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.frame_VRayMtl1_0.geometry}
                material={materials.handspicture}
                position={[32.86, 2.51, -0.68]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper16_VRayMtl1_0.geometry}
                material={materials.handspicture}
                position={[25.77, 0, 19.37]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth01_VRayMtl1_0.geometry}
                material={materials.board1}
                position={[39.05, 10.22, -1.62]}
                rotation={[-0.04, -0.82, -0.03]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk_VRayMtl1_0.geometry}
                material={nodes.desk_VRayMtl1_0.material}
                position={[23.49, 8.76, -17.73]}
                scale={1.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth_VRayMtl1_0001.geometry}
                material={nodes.cloth_VRayMtl1_0001.material}
                position={[44.58, 3.47, 16.55]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface20_All_0.geometry}
                material={materials.redcolor}
                position={[-8.39, 15.26, -3.99]}
                rotation={[-1.59, 0, 0]}
                scale={0.23}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bigbrushhead.geometry}
                material={materials.redcolor}
                position={[23.39, -10.15, -6.92]}
                rotation={[1.57, -0.01, -1.54]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth02_VRayMtl1_0.geometry}
                material={nodes.cloth02_VRayMtl1_0.material}
                position={[27.4, 10.13, -1.95]}
                rotation={[-0.09, -0.72, 0]}
                scale={1.17}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bigBrushhand.geometry}
                material={materials.redcolor}
                position={[30.18, -12.53, 15.4]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bigbrushmiddle001.geometry}
                material={materials.redcolor}
                position={[21.92, -14.37, -6.99]}
                rotation={[-1.57, 0, 1.56]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloth_VRayMtl1_0.geometry}
                material={materials.redcolor}
                position={[23.59, 11.47, -17.01]}
                rotation={[-0.02, 0, -0.01]}
                scale={1.16}
            />
        </group>
    );
}

useGLTF.preload("/tools1.glb");