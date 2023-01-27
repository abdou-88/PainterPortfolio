
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        polySurface37_All_0_1: THREE.Mesh;
        polySurface37_All_0_2: THREE.Mesh;
        polySurface37_All_0_3: THREE.Mesh;
        Object_2001_1: THREE.SkinnedMesh;
        Object_2001_2: THREE.SkinnedMesh;
        mixamorigHips: THREE.Bone;
    };
    materials: {
        board1: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        material: THREE.MeshStandardMaterial;
        ["PackedMaterial0.001"]: THREE.MeshStandardMaterial;
        ["Material.001"]: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

type ActionName =
    | "Armature|mixamo.com|Layer0"
    | "Object_2.001"
    | "Object_75"
    | "polySurface37_All_0";
    
interface GLTFAction extends THREE.AnimationClip { name: ActionName;}

export function PaintingChar(props: JSX.IntrinsicElements["group"]) {
    const group:any = useRef<THREE.Group>();
    const { nodes, materials, animations } = useGLTF("/modelwithbrush2.glb");
    
    const { actions } = useAnimations(animations, group);
   
    
    useEffect(() => {
        actions['Armature|mixamo.com|Layer0']?.play();
    }, [])

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-0.1,3.2,0]} scale={0.8} position={[-0.2,0.2,-0.24]} name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group  name="Object_75" />
                    <primitive object={nodes.mixamorigHips} />
                    <group name="Object_2001">
                        <skinnedMesh
                        
                            name="Object_2001_1"
                            // @ts-ignore
                            geometry={nodes.Object_2001_1.geometry}
                            material={materials["PackedMaterial0.001"]}
                            // @ts-ignore
                            skeleton={nodes.Object_2001_1.skeleton}
                        />
                        <skinnedMesh
                        
                            name="Object_2001_2"
                            // @ts-ignore
                            geometry={nodes.Object_2001_2.geometry}
                            material={materials["Material.001"]}
                            // @ts-ignore
                            skeleton={nodes.Object_2001_2.skeleton}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/modelwithbrush2.glb");