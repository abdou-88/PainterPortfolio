
import { useGLTF } from "@react-three/drei";

export function Projects(props:any) {
    const { nodes, materials } = useGLTF("/Projectsarea.glb");
    return (
        <group position={[0.03, 0, 0]} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables.geometry}
                material={materials.table3}
                position={[-0.03, 0.59, -2.08]}
                rotation={[-1.52, 1.56, 2.92]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.painttablestand.geometry}
                material={materials["Material.008"]}
                position={[0, 0.23, -2.18]}
                rotation={[0, 1.56, 0.31]}
                scale={0.015}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables002.geometry}
                material={materials.table2}
                position={[-0.56, 0.37, -2.03]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables006.geometry}
                material={materials.table1}
                position={[0.53, 0.36, -2.03]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />           
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables003.geometry}
                material={materials["VRayMtl1.001"]}
                position={[-0.57, 0.37, -2.05]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables005.geometry}
                material={materials["VRayMtl1.001"]}
                position={[-0.58, 0.37, -2.09]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables007.geometry}
                // @ts-ignore
                material={nodes.projectstables007.material}
                position={[0.53, 0.36, -2.05]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables004.geometry}
                material={materials["VRayMtl1.001"]}
                position={[-0.57, 0.37, -2.07]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables009.geometry}
                // @ts-ignore
                material={nodes.projectstables009.material}
                position={[0.53, 0.37, -2.09]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.projectstables008.geometry}
                // @ts-ignore
                material={nodes.projectstables008.material}
                position={[0.53, 0.36, -2.07]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
        </group>
    );
}

useGLTF.preload("/Projectsarea.glb");