

import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";

import { useGlobalContext } from "../GlobalContext";
import { ScrollAnimation } from "../ScrollAnimation";
import { Chair } from "./Chair";
import { ChairAvatar } from "./ChairAvatar";



export function BoxFull(props:any) {
    


    const { setActiveBox, setContentBox, scrollSide, setScrollSide } = useGlobalContext();



    const scroll = useScroll();
    const group: any = useRef<THREE.Group>();
    const box: any = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF("/fullBox-Areas.glb");

    const { actions }: any = useAnimations(animations, group);

    useLayoutEffect(() =>

        Object.values(nodes).forEach(
            (node) => (node.receiveShadow = node.castShadow = true)
        ),

    );

    useEffect(() => void (actions["Take 001"].play().paused = true), [actions]);



    useFrame((state, delta) => {
        const offset = scroll.offset;

        const action: any = actions["Take 001"];
        // The offset is between 0 and 1, you can apply it to your models any way you like

        // run first animation
        action.time = THREE.MathUtils.damp(
            action.time,
            action.getClip().duration * (offset * 10),
            100,
            delta
        );

        if (scrollSide === "U") {
            scroll.offset = offset + 0.0102;
            setScrollSide("N");
        } else if (scrollSide === "D") {
            scroll.offset = offset - 0.0102;
            setScrollSide("N");
        }

        ScrollAnimation(offset, setActiveBox, setContentBox, state, box);
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={box}  name="Scene">
                <Chair />
                <ChairAvatar />
                <group name="backCover" position={[-0.02, 0.89, -0.96]}>
                    <mesh
                        name="backCoverMesh"
                        castShadow
                        receiveShadow
                        geometry={nodes.backCoverMesh.geometry}
                        material={materials.lambert4}
                        position={[-0.02, 0.47, -0.51]}
                    />
                </group>
                <group name="frontCover" position={[-0.02, 0.89, 0.89]}>
                    <mesh
                        name="frontCoverMesh"
                        castShadow
                        receiveShadow
                        geometry={nodes.frontCoverMesh.geometry}
                        material={materials.lambert4}
                        position={[0.01, 0.44, 0.54]}
                    />
                </group>
                <group name="Box" position={[-0.02, -1.28, -0.03]}>
                    <mesh
                        name="emptySide"
                        castShadow
                        receiveShadow
                        geometry={nodes.emptySide.geometry}
                        material={materials.lambert2}
                        position={[-0.83, 1.48, 0.01]}
                    />
                    <mesh
                        name="EyesSide"
                        castShadow
                        receiveShadow
                        geometry={nodes.EyesSide.geometry}
                        material={materials.lambert2}
                        position={[-0.02, 1.48, -0.82]}
                    />
                    <mesh
                        name="RecycleSide"
                        castShadow
                        receiveShadow
                        geometry={nodes.RecycleSide.geometry}
                        material={materials.lambert2}
                        position={[0.01, 1.48, 0.84]}
                    />
                    <mesh
                        name="UpArrowSide"
                        castShadow
                        receiveShadow
                        geometry={nodes.UpArrowSide.geometry}
                        material={materials.lambert2}
                        position={[0.83, 1.48, -0.01]}
                    />
                    <mesh
                        name="bottomSide"
                        castShadow
                        receiveShadow
                        geometry={nodes.bottomSide.geometry}
                        material={materials.lambert2}
                        position={[0, 0.96, 0]}
                    />
                </group>
                <mesh
                    name="desk"
                    castShadow
                    receiveShadow
                    geometry={nodes.desk.geometry}
                    material={materials["Material.002"]}
                    position={[0.58, 0.43, -0.5]}
                    rotation={[Math.PI, -1.16, Math.PI]}
                    scale={0.02}
                />
                <mesh
                    name="rolledPaper1"
                    castShadow
                    receiveShadow
                    geometry={nodes.rolledPaper1.geometry}
                    material={nodes.rolledPaper1.material}
                    position={[0.59, 0.21, -0.44]}
                    rotation={[0.08, 0.29, 0.24]}
                    scale={0.02}
                />
                <mesh
                    name="rolledPaper2"
                    castShadow
                    receiveShadow
                    geometry={nodes.rolledPaper2.geometry}
                    material={nodes.rolledPaper2.material}
                    position={[0.61, 0.19, -0.4]}
                    rotation={[0.02, 0.01, -0.01]}
                    scale={0.02}
                />
                <mesh
                    name="cover"
                    castShadow
                    receiveShadow
                    geometry={nodes.cover.geometry}
                    material={materials["redcolor.001"]}
                    position={[0.56, 0.51, -0.5]}
                    rotation={[-3.09, -1.16, -3.1]}
                    scale={0.03}
                />
                <mesh
                    name="MainPaint"
                    castShadow
                    receiveShadow
                    geometry={nodes.MainPaint.geometry}
                    material={materials["Material.001"]}
                    position={[-0.01, 0.46, -0.73]}
                    rotation={[1.54, 0, 0]}
                    scale={0.26}
                />
                <mesh
                    name="Cube"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials["Material.003"]}
                    position={[0, 0.45, -0.02]}
                    rotation={[-0.23, 0, 0]}
                    scale={-0.03}
                />
                <mesh
                    name="papertrash1"
                    castShadow
                    receiveShadow
                    geometry={nodes.papertrash1.geometry}
                    material={materials.test}
                    position={[0.67, 0.19, -0.14]}
                    scale={0.02}
                />
                <mesh
                    name="towel1"
                    castShadow
                    receiveShadow
                    geometry={nodes.towel1.geometry}
                    material={materials["board1.001"]}
                    position={[0.49, 0.39, -0.24]}
                    rotation={[3.03, 0.79, 3.12]}
                    scale={0.01}
                />
                <mesh
                    name="papertrash2"
                    castShadow
                    receiveShadow
                    geometry={nodes.papertrash2.geometry}
                    material={materials.test}
                    position={[0.31, 0.2, -0.17]}
                    scale={0.01}
                />
                <mesh
                    name="paper1"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper1.geometry}
                    material={materials["Material.005"]}
                    position={[0.45, 0.49, -0.54]}
                    rotation={[0.01, 1.34, 3.13]}
                    scale={0.02}
                />
                <mesh
                    name="paper2"
                    castShadow
                    receiveShadow
                    geometry={nodes.paper2.geometry}
                    material={nodes.paper2.material}
                    position={[0.32, 0.2, -0.44]}
                    rotation={[-Math.PI, 0.14, -Math.PI]}
                    scale={0.02}
                />
                <mesh
                    name="picturehands"
                    castShadow
                    receiveShadow
                    geometry={nodes.picturehands.geometry}
                    material={materials.test}
                    position={[0.58, 0.29, -0.25]}
                    rotation={[-0.15, 0, 3.14]}
                    scale={0.01}
                />
                <mesh
                    name="paintboard"
                    castShadow
                    receiveShadow
                    geometry={nodes.paintboard.geometry}
                    material={materials["Material.009"]}
                    position={[0.06, 0.28, -0.07]}
                    rotation={[-2.13, 1.27, -0.36]}
                    scale={0}
                />
                <mesh
                    name="rolledPaper3"
                    castShadow
                    receiveShadow
                    geometry={nodes.rolledPaper3.geometry}
                    material={nodes.rolledPaper3.material}
                    position={[0.61, 0.19, -0.47]}
                    rotation={[0.02, -0.27, -0.01]}
                    scale={0.02}
                />
                <mesh
                    name="bigbrushmiddle001"
                    castShadow
                    receiveShadow
                    geometry={nodes.bigbrushmiddle001.geometry}
                    material={materials["Material.005"]}
                    position={[0.62, 0.54, -0.58]}
                    rotation={[-1.57, 0, 1.4]}
                    scale={0.01}
                />
                <mesh
                    name="bigbrushhead"
                    castShadow
                    receiveShadow
                    geometry={nodes.bigbrushhead.geometry}
                    material={materials["Material.004"]}
                    position={[0.63, 0.57, -0.58]}
                    rotation={[1.57, -0.01, -1.37]}
                    scale={0.01}
                />
                <mesh
                    name="bigBrushhand"
                    castShadow
                    receiveShadow
                    geometry={nodes.bigBrushhand.geometry}
                    material={materials["Material.006"]}
                    position={[0.64, 0.56, -0.45]}
                    rotation={[0, -0.16, 0]}
                    scale={0.01}
                />
                <group
                    name="projector"
                    position={[-0.42, 0.48, -0.32]}
                    rotation={[-1.59, 0, -0.63]}
                    scale={0}
                >
                    <mesh
                        name="Cylinder006_Material_#27_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Cylinder006_Material_#27_0"].geometry}
                        material={materials.Material_27}
                    />
                    <mesh
                        name="Cylinder006_Material_#27_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes["Cylinder006_Material_#27_0_1"].geometry}
                        material={materials.Material_31}
                    />
                    <mesh
                        name="Cylinder006_Material_#27_0_2"
                        castShadow
                        receiveShadow
                        geometry={nodes["Cylinder006_Material_#27_0_2"].geometry}
                        material={materials.Material_30}
                    />
                    <mesh
                        name="Cylinder006_Material_#27_0_3"
                        castShadow
                        receiveShadow
                        geometry={nodes["Cylinder006_Material_#27_0_3"].geometry}
                        material={materials.Material_29}
                    />
                    <mesh
                        name="Cylinder006_Material_#27_0_4"
                        castShadow
                        receiveShadow
                        geometry={nodes["Cylinder006_Material_#27_0_4"].geometry}
                        material={materials.Material_28}
                    />
                </group>
                <mesh
                    name="sofa"
                    castShadow
                    receiveShadow
                    geometry={nodes.sofa.geometry}
                    material={materials.Material}
                    position={[-0.33, 0.19, 0.6]}
                    rotation={[-1.57, 0, 0]}
                    scale={0.32}
                />
                <mesh
                    name="carpet"
                    castShadow
                    receiveShadow
                    geometry={nodes.carpet.geometry}
                    material={materials.carpet}
                    position={[0.17, 0.32, 0.19]}
                    scale={0.22}
                />
                <mesh
                    name="paintbuck"
                    castShadow
                    receiveShadow
                    geometry={nodes.paintbuck.geometry}
                    material={materials["Material.007"]}
                    position={[0.63, 0.52, -0.6]}
                    rotation={[-Math.PI, 0.35, -Math.PI]}
                    scale={0.03}
                />
                <mesh
                    name="projectstables"
                    castShadow
                    receiveShadow
                    geometry={nodes.projectstables.geometry}
                    material={materials.table3}
                    position={[-0.03, 0.59, -2.08]}
                    rotation={[1.4, 0, 0]}
                    scale={0.02}
                />
                <mesh
                    name="painttablestand"
                    castShadow
                    receiveShadow
                    geometry={nodes.painttablestand.geometry}
                    material={materials["Material.008"]}
                    position={[0, 0.23, -2.18]}
                    rotation={[0, 1.56, 0.31]}
                    scale={0.01}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/fullBox-Areas.glb");

