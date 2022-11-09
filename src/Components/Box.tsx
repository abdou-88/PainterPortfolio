import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";

import { useGlobalContext } from "../Components/GlobalContext";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Box(props: JSX.IntrinsicElements["group"]) {
  const { setActiveBox, setContentBox, scrollSide, setScrollSide } = useGlobalContext();



  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/boxwithmainscene.glb");

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

    if (scrollSide === "U"){
      scroll.offset = offset + 0.0102;
      setScrollSide("N");
    } else if (scrollSide==="D"){
      scroll.offset = offset - 0.0102;
      setScrollSide("N");
    }

    ScrollAnimation(offset, setActiveBox, setContentBox, state);
  });

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="fullBox" position={[0.02, 0.98, 0.03]}>
            <group name="backCover" position={[-0.02, 0.89, -0.96]}>
              <mesh
                name="backCoverMesh"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.backCoverMesh.geometry}
                material={materials.lambert4}
                position={[-0.02, 1.22, -1.12]}
              />
            </group>
            <group name="frontCover" position={[-0.02, 0.89, 0.89]}>
              <mesh
                name="frontCoverMesh"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.frontCoverMesh.geometry}
                material={materials.lambert4}
                position={[0.01, 1.13, 1.21]}
              />
            </group>
            <group name="Box" position={[-0.02, -1.28, -0.03]}>
              <mesh
                name="emptySide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.emptySide.geometry}
                material={materials.lambert2}
                position={[-0.83, 0.52, 0.01]}
              />
              <mesh
                name="EyesSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.EyesSide.geometry}
                material={materials.lambert2}
                position={[-0.02, 0.52, -0.82]}
              />
              <mesh
                name="RecycleSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.RecycleSide.geometry}
                material={materials.lambert2}
                position={[0.01, 0.52, 0.84]}
              />
              <mesh
                name="UpArrowSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.UpArrowSide.geometry}
                material={materials.lambert2}
                position={[0.83, 0.52, -0.01]}
              />
              <mesh
                name="bottomSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.bottomSide.geometry}
                material={materials.lambert2}
              />
            </group>
          </group>
          <group
            name="Armature"
            position={[0, 0.2, 0]}
            rotation={[1.64, -0.02, -3.14]}
            scale={0}
          >
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="result_mesh"
              // @ts-ignore
              geometry={nodes.result_mesh.geometry}
              material={materials["Material.002"]}
              // @ts-ignore
              skeleton={nodes.result_mesh.skeleton}
            />
          </group>
          <group
            name="Sketchfab_model"
            position={[0, 0.28, -0.02]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0}
          >
            <group name="chairobjcleanermaterialmergergles">
              <mesh
                name="Object_2"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Object_2.geometry}
                material={materials["default"]}
                position={[-1.21, -9.65, 8.77]}
                scale={0.96}
              />
            </group>
            
          </group>
          <mesh
            name="MainPaint"
            castShadow
            receiveShadow
            // @ts-ignore
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
            // @ts-ignore
            geometry={nodes.Cube.geometry}
            material={materials["Material.003"]}
            position={[0, 0.45, -0.02]}
            rotation={[-0.23, 0, 0]}
            scale={-0.03}
          />
        </group>
      </group>
      
    </>
  );
}

useGLTF.preload("/boxwithmainscene.glb");
