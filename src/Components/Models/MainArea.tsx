
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';

import paper1 from "/img-1870.jpg";
import paper2 from "/img-1869.jpg";

export const MainArea = (props:any) => {
    const tPaper1: any = useLoader(THREE.TextureLoader, paper1);
    const tPaper2: any = useLoader(THREE.TextureLoader, paper2);
    
    const { nodes, materials } = useGLTF("/mainroom.glb");


    

    return (
        <group scale ={0.1} position={[0.2,0.62,-0.7]} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.rolledPaper1.geometry}
                // @ts-ignore
                material={nodes.rolledPaper1.material}
                position={[3.72, 0.17, 2.56]}
                rotation={[0.08, 0.29, 0.24]}
                scale={0.19}
            > <meshBasicMaterial
                    transparent={true}
                    side={THREE.DoubleSide}
                    attach="material"
                    map={tPaper1}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.papertrash1.geometry}
                material={materials.test}
                position={[4.37, 0.05, 5.15]}
                scale={0.19}
            />
            {/* paper on top f the table */}
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.paper1.geometry}
                position={[2.49, 2.59, 1.71]}
                rotation={[0.01, 1.34, 3.13]}
                scale={0.19}
            >
                <meshBasicMaterial
                    transparent={true}
                    side={THREE.DoubleSide}
                    attach="material"
                    map={tPaper1}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.desk.geometry}
                material={materials["Material.003"]}
                position={[3.57, 2.08, 2.12]}
                rotation={[Math.PI, -1.16, Math.PI]}
                scale={0.19}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.picturehands.geometry}
                material={materials.test}
                position={[3.63, 0.84, 4.24]}
                rotation={[-0.15, 0, 3.14]}
                scale={0.11}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.rolledPaper2.geometry}
                // @ts-ignore
                material={nodes.rolledPaper2.material}
                position={[3.85, 0.05, 2.91]}
                rotation={[0.02, 0.01, -0.01]}
                scale={0.19}
            > <meshBasicMaterial
                    transparent={true}
                    side={THREE.DoubleSide}
                    attach="material"
                    map={tPaper1}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.papertrash2.geometry}
                material={materials.test}
                position={[1.34, 0.08, 4.9]}
                scale={0.08}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.rolledPaper3.geometry}
                // @ts-ignore
                material={nodes.rolledPaper3.material}
                position={[3.9, 0.05, 2.35]}
                rotation={[0.02, -0.27, -0.01]}
                scale={0.19}
            > 
            <meshBasicMaterial
                    transparent={true}
                    side={THREE.DoubleSide}
                    attach="material"
                    map={tPaper1}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.towel1.geometry}
                material={materials.board1}
                position={[2.82, 1.67, 4.27]}
                rotation={[3.03, 0.79, 3.12]}
                scale={0.11}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.bigbrushhead.geometry}
                material={materials["Material.004"]}
                position={[4, 3.23, 1.39]}
                rotation={[1.57, -0.01, -1.37]}
                scale={0.05}
            />
            {/* paper under the table */}
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.paper2.geometry}
                position={[1.42, 0.08, 2.6]}
                rotation={[-Math.PI, 0.14, -Math.PI]}
                scale={0.19}
            >  
            <meshBasicMaterial
                    transparent={true}
                    side={THREE.DoubleSide}
                    attach="material"
                    map={tPaper2}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.paintboard.geometry}
                material={materials["Material.009"]}
                position={[-0.85, 0.77, 5.73]}
                rotation={[-2.13, 1.27, -0.36]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.bigBrushhand.geometry}
                material={materials["Material.006"]}
                position={[4.15, 3.12, 2.51]}
                rotation={[0, -0.16, 0]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Cylinder.geometry}
                material={materials["Material.002"]}
                position={[4.02, 2.83, 1.19]}
                rotation={[-Math.PI, 0.35, -Math.PI]}
                scale={0.29}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Cylinder001.geometry}
                material={materials.carpet}
                position={[-2.9, 1.09, 7.98]}
                scale={1.91}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Plane_Material_0.geometry}
                material={materials.Material}
                position={[-9.01, 0, 8.62]}
                rotation={[-Math.PI / 2, 0, -1.5]}
                scale={2.39}
            />
            <group
                position={[2.48, 2.6, 11.82]}
                rotation={[-1.6, 0, 0.67]}
                scale={0.03}
            >
                <mesh
                    castShadow
                    receiveShadow
                    // @ts-ignore
                    geometry={nodes["Cylinder006_Material_#27_0_1"].geometry}
                    material={materials.Material_27}
                />
                <mesh
                    castShadow
                    receiveShadow
                    // @ts-ignore
                    geometry={nodes["Cylinder006_Material_#27_0_2"].geometry}
                    material={materials.Material_31}
                />
                <mesh
                    castShadow
                    receiveShadow
                    // @ts-ignore
                    geometry={nodes["Cylinder006_Material_#27_0_3"].geometry}
                    material={materials.Material_30}
                />
                <mesh
                    castShadow
                    receiveShadow
                    // @ts-ignore
                    geometry={nodes["Cylinder006_Material_#27_0_4"].geometry}
                    material={materials.Material_29}
                />
                <mesh
                    castShadow
                    receiveShadow
                    // @ts-ignore
                    geometry={nodes["Cylinder006_Material_#27_0_5"].geometry}
                    material={materials.Material_28}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.bigbrushmiddle001.geometry}
                material={materials["Material.005"]}
                position={[3.93, 3.03, 1.38]}
                rotation={[-1.57, 0, 1.4]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.cover.geometry}
                material={materials.redcolor}
                position={[3.45, 2.77, 2.11]}
                rotation={[-3.09, -1.16, -3.1]}
                scale={0.23}
            />
        </group>
    );
}

useGLTF.preload("/mainroom.glb");


