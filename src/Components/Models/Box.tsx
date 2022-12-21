import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";

import { useGlobalContext } from "../GlobalContext";
import { ScrollAnimation } from "../ScrollAnimation";
import { Chair } from "./Chair";
import { MainArea } from "./MainArea";

import { Projects } from "./Projects";
import { PaintingChar } from "./PaintingChar";

export default function Box(props: JSX.IntrinsicElements["group"]) {

  const { setActiveBox, setContentBox, setPopup } = useGlobalContext();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor =  hovered? 'pointer': 'auto' ;
  }, [hovered])

  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const box: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/cleanerversioEyes.glb");

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


    ScrollAnimation(offset, setActiveBox, setContentBox, state, box);
  });

  return (
    <>

      <group ref={group} {...props} dispose={null}>
        <group ref={box} name="Scene">
          <Chair />
          <PaintingChar/>         
          <MainArea  />
          <Projects/>
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

          <mesh
            onClick={(e) => setPopup(true)}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}            
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
     
        </group>
      </group>

    </>
  );
}

useGLTF.preload("/cleanerversioEyes.glb");

            // onContextMenu={(e) => console.log('context menu')}
            // onDoubleClick={(e) => console.log('double click')}
            // onWheel={(e) => console.log('wheel spins')}
            // onPointerUp={(e) => console.log('up')}
            // onPointerDown={(e) => console.log('down')}
            // onPointerOver={(e) => console.log('over')}
            // onPointerOut={(e) => console.log('out')}
            // onPointerEnter={(e) => console.log('enter')}
            // onPointerLeave={(e) => console.log('leave')}
            // onPointerMove={(e) => console.log('move')}
            // onPointerMissed={() => console.log('missed')}
            // onUpdate={(self) => console.log('props have been updated')}