
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';

import paper1 from "/img-1870.jpg";
import paper2 from "/img-1869.jpg";

export function Tools(props: any) {
    const { nodes, materials } = useGLTF("/furnituresnoshades.glb");

    const tPaper1 = useLoader(THREE.TextureLoader, paper1);
    const tPaper2 = useLoader(THREE.TextureLoader, paper2);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rolledPaper1.geometry}
                material={nodes.rolledPaper1.material}
                position={[0.59, 0.21, -0.44]}
                rotation={[0.08, 0.29, 0.24]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.desk.geometry}
                material={materials["Material.002"]}
                position={[0.58, 0.43, -0.5]}
                rotation={[Math.PI, -1.16, Math.PI]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper2.geometry}
                material={nodes.paper2.material}
                position={[0.32, 0.2, -0.44]}
                rotation={[-Math.PI, 0.14, -Math.PI]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paper1.geometry}
                material={nodes.paper1.material}
                position={[0.45, 0.49, -0.54]}
                rotation={[0.01, 1.34, 3.13]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rolledPaper2.geometry}
                material={nodes.rolledPaper2.material}
                position={[0.61, 0.19, -0.4]}
                rotation={[0.02, 0.01, -0.01]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.papertrash1.geometry}
                material={materials.test}
                position={[0.67, 0.19, -0.14]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.picturehands.geometry}
                material={materials.test}
                position={[0.58, 0.29, -0.25]}
                rotation={[-0.15, 0, 3.14]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.towel1.geometry}
                material={materials["board1.001"]}
                position={[0.49, 0.39, -0.24]}
                rotation={[3.03, 0.79, 3.12]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paintboard.geometry}
                material={materials["Material.009"]}
                position={[0.06, 0.28, -0.07]}
                rotation={[-2.13, 1.27, -0.36]}
                scale={0}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rolledPaper3.geometry}
                material={nodes.rolledPaper3.material}
                position={[0.61, 0.19, -0.47]}
                rotation={[0.02, -0.27, -0.01]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bigbrushhead.geometry}
                material={materials["Material.004"]}
                position={[0.63, 0.57, -0.58]}
                rotation={[1.57, -0.01, -1.37]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables002.geometry}
                material={materials.table2}
                position={[-0.56, 0.37, -2.03]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables003.geometry}
                material={materials["VRayMtl1.001"]}
                position={[-0.57, 0.37, -2.05]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables004.geometry}
                material={materials["VRayMtl1.001"]}
                position={[-0.57, 0.37, -2.07]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables005.geometry}
                material={materials["VRayMtl1.001"]}
                position={[-0.58, 0.37, -2.09]}
                rotation={[-2.66, 1.5, -2.17]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables006.geometry}
                material={materials.table1}
                position={[0.53, 0.36, -2.03]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables007.geometry}
                material={nodes.projectstables007.material}
                position={[0.53, 0.36, -2.05]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables009.geometry}
                material={nodes.projectstables009.material}
                position={[0.53, 0.37, -2.09]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bigBrushhand.geometry}
                material={materials["Material.006"]}
                position={[0.64, 0.56, -0.45]}
                rotation={[0, -0.16, 0]}
                scale={0.01}
            />
            <group
                position={[-0.42, 0.48, -0.32]}
                rotation={[-1.59, 0, -0.63]}
                scale={0}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder006_Material_#27_0"].geometry}
                    material={materials.Material_27}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder006_Material_#27_0_1"].geometry}
                    material={materials.Material_31}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder006_Material_#27_0_2"].geometry}
                    material={materials.Material_30}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder006_Material_#27_0_3"].geometry}
                    material={materials.Material_29}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Cylinder006_Material_#27_0_4"].geometry}
                    material={materials.Material_28}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sofa.geometry}
                material={materials.Material}
                position={[-0.33, 0.19, 0.6]}
                rotation={[-1.57, 0, 0]}
                scale={0.32}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.carpet.geometry}
                material={materials.carpet}
                position={[0.17, 0.32, 0.19]}
                scale={0.22}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.paintbuck.geometry}
                material={materials["Material.007"]}
                position={[0.63, 0.52, -0.6]}
                rotation={[-Math.PI, 0.35, -Math.PI]}
                scale={0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables.geometry}
                material={materials.table3}
                position={[-0.03, 0.59, -2.08]}
                rotation={[-1.52, 1.56, 2.92]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.painttablestand.geometry}
                material={materials["Material.008"]}
                position={[0, 0.23, -2.18]}
                rotation={[0, 1.56, 0.31]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.projectstables008.geometry}
                material={nodes.projectstables008.material}
                position={[0.53, 0.36, -2.07]}
                rotation={[-0.03, 1.45, 1.44]}
                scale={0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bigbrushmiddle001.geometry}
                material={materials["Material.005"]}
                position={[0.62, 0.54, -0.58]}
                rotation={[-1.57, 0, 1.4]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cover.geometry}
                material={materials["redcolor.001"]}
                position={[0.56, 0.51, -0.5]}
                rotation={[-3.09, -1.16, -3.1]}
                scale={0.03}
            />
        </group>
    );
}

useGLTF.preload("/furnituresnoshades.glb");







// <group scale={1} {...props} dispose={null}>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.rolledPaper1.geometry}
//         material={nodes.rolledPaper1.material}
//         position={[0.59, 0.21, -0.44]}
//         rotation={[0.08, 0.29, 0.24]}
//         scale={0.02}
//     ><meshBasicMaterial
//             transparent={true}
//             side={THREE.DoubleSide}
//             attach="material"
//             map={tPaper1}
//             toneMapped={false}
//         />
//     </mesh>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.desk.geometry}
//         material={materials["Material.002"]}
//         position={[0.58, 0.43, -0.5]}
//         rotation={[Math.PI, -1.16, Math.PI]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.paper2.geometry}
//         material={nodes.paper2.material}
//         position={[0.32, 0.2, -0.44]}
//         rotation={[-Math.PI, 0.14, -Math.PI]}
//         scale={0.02}
//     > <meshBasicMaterial
//             transparent={true}
//             side={THREE.DoubleSide}
//             attach="material"
//             map={tPaper2}
//             toneMapped={false}
//         />
//     </mesh>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.paper1.geometry}
//         material={nodes.paper1.material}
//         position={[0.45, 0.49, -0.54]}
//         rotation={[0.01, 1.34, 3.13]}
//         scale={0.02}
//     >  <meshBasicMaterial
//             transparent={true}
//             side={THREE.DoubleSide}
//             attach="material"
//             map={tPaper1}
//             toneMapped={false}
//         />
//     </mesh>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.rolledPaper2.geometry}
//         material={nodes.rolledPaper2.material}
//         position={[0.61, 0.19, -0.4]}
//         rotation={[0.02, 0.01, -0.01]}
//         scale={0.02}
//     ><meshBasicMaterial
//             transparent={true}
//             side={THREE.DoubleSide}
//             attach="material"
//             map={tPaper1}
//             toneMapped={false}
//         />
//     </mesh>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.papertrash1.geometry}
//         material={materials.test}
//         position={[0.67, 0.19, -0.14]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.picturehands.geometry}
//         material={materials.test}
//         position={[0.58, 0.29, -0.25]}
//         rotation={[-0.15, 0, 3.14]}
//         scale={0.01}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.towel1.geometry}
//         material={materials["board1.001"]}
//         position={[0.49, 0.39, -0.24]}
//         rotation={[3.03, 0.79, 3.12]}
//         scale={0.01}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.paintboard.geometry}
//         material={materials["Material.009"]}
//         position={[0.06, 0.28, -0.07]}
//         rotation={[-2.13, 1.27, -0.36]}
//         scale={0}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.rolledPaper3.geometry}
//         material={nodes.rolledPaper3.material}
//         position={[0.61, 0.19, -0.47]}
//         rotation={[0.02, -0.27, -0.01]}
//         scale={0.02}
//     ><meshBasicMaterial
//             transparent={true}
//             side={THREE.DoubleSide}
//             attach="material"
//             map={tPaper1}
//             toneMapped={false}
//         />
//     </mesh>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.bigbrushhead.geometry}
//         material={materials["Material.004"]}
//         position={[0.63, 0.57, -0.58]}
//         rotation={[1.57, -0.01, -1.37]}
//         scale={0.01}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables002.geometry}
//         material={materials.table2}
//         position={[-0.56, 0.37, -2.03]}
//         rotation={[-2.66, 1.5, -2.17]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables003.geometry}
//         material={materials["VRayMtl1.001"]}
//         position={[-0.57, 0.37, -2.05]}
//         rotation={[-2.66, 1.5, -2.17]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables004.geometry}
//         material={materials["VRayMtl1.001"]}
//         position={[-0.57, 0.37, -2.07]}
//         rotation={[-2.66, 1.5, -2.17]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables005.geometry}
//         material={materials["VRayMtl1.001"]}
//         position={[-0.58, 0.37, -2.09]}
//         rotation={[-2.66, 1.5, -2.17]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables006.geometry}
//         material={materials.table1}
//         position={[0.53, 0.36, -2.03]}
//         rotation={[-0.03, 1.45, 1.44]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables007.geometry}
//         material={nodes.projectstables007.material}
//         position={[0.53, 0.36, -2.05]}
//         rotation={[-0.03, 1.45, 1.44]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables009.geometry}
//         material={nodes.projectstables009.material}
//         position={[0.53, 0.37, -2.09]}
//         rotation={[-0.03, 1.45, 1.44]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.bigBrushhand.geometry}
//         material={materials["Material.006"]}
//         position={[0.64, 0.56, -0.45]}
//         rotation={[0, -0.16, 0]}
//         scale={0.01}
//     />
//     <group
//         position={[-6.48, 2.6, 3.42]}
//         rotation={[-1.59, 0, -0.63]}
//         scale={0.03}
//     >
//         <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes["Cylinder006_Material_#27_0"].geometry}
//             material={materials.Material_27}
//         />
//         <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes["Cylinder006_Material_#27_0_1"].geometry}
//             material={materials.Material_31}
//         />
//         <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes["Cylinder006_Material_#27_0_2"].geometry}
//             material={materials.Material_30}
//         />
//         <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes["Cylinder006_Material_#27_0_3"].geometry}
//             material={materials.Material_29}
//         />
//         <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes["Cylinder006_Material_#27_0_4"].geometry}
//             material={materials.Material_28}
//         />
//     </group>
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.sofa.geometry}
//         material={materials.Material}
//         position={[-0.33, 0.19, 0.6]}
//         rotation={[-1.57, 0, 0]}
//         scale={0.32}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.carpet.geometry}
//         material={materials.carpet}
//         position={[0.17, 0.32, 0.19]}
//         scale={0.22}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.paintbuck.geometry}
//         material={materials["Material.007"]}
//         position={[0.63, 0.52, -0.6]}
//         rotation={[-Math.PI, 0.35, -Math.PI]}
//         scale={0.03}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables.geometry}
//         material={materials.table3}
//         position={[-0.03, 0.59, -2.08]}
//         rotation={[-1.52, 1.56, 2.92]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.painttablestand.geometry}
//         material={materials["Material.008"]}
//         position={[0, 0.23, -2.18]}
//         rotation={[0, 1.56, 0.31]}
//         scale={0.01}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.projectstables008.geometry}
//         material={nodes.projectstables008.material}
//         position={[0.53, 0.36, -2.07]}
//         rotation={[-0.03, 1.45, 1.44]}
//         scale={0.02}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.bigbrushmiddle001.geometry}
//         material={materials["Material.005"]}
//         position={[0.62, 0.54, -0.58]}
//         rotation={[-1.57, 0, 1.4]}
//         scale={0.01}
//     />
//     <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.cover.geometry}
//         material={materials["redcolor.001"]}
//         position={[0.56, 0.51, -0.5]}
//         rotation={[-3.09, -1.16, -3.1]}
//         scale={0.03}
//     />
// </group>