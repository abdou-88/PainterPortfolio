import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";

import { useGlobalContext } from "../GlobalContext";
import { ScrollAnimation } from "../ScrollAnimation";
import { Chair } from "./Chair";
import { MainArea } from "./MainArea";

import { Projects } from "./Projects";
import { PaintingChar } from "./PaintingChar";

export default function Box(props: JSX.IntrinsicElements["group"]) {

  const { setActiveBox, setContentBox, setPopup, scOffSet,  setScOffSet } = useGlobalContext();

  const [hovered, setHovered] = useState(false);

  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const box: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/NewBoxPrpject.glb");

  const { actions }: any = useAnimations(animations, group);



  useEffect(() => void (actions["Take 001"].play().paused = true), [actions]);


  useEffect(() => {
    document.body.style.cursor =  hovered? 'pointer': 'auto' ;
  }, [hovered])

 

  useFrame((state, delta) => {
    setScOffSet( scroll.offset);

    const action: any = actions["Take 001"];
    // The offset is between 0 and 1, you can apply it to your models any way you like

    // run first animation
    action.time = THREE.MathUtils.damp(
      action.time,
      action.getClip().duration * (scOffSet * 10),
      100,
      delta
    );


    ScrollAnimation(scOffSet, setActiveBox, setContentBox, state, box);
  });

  
  return (
    <>

      <group ref={group} {...props} dispose={null}>
        <group ref={box} position={[0.1,0,0]} name="Scene">
          <Chair />
          <PaintingChar/>         
          <MainArea  />
          <Projects/>
     
          <group name="FullBox" position={[0.02, 0.98, 0.03]}>
            <group name="BackCover" position={[-0.02, 0.89, -0.96]}>
              <group name="backCover" position={[-0.02, 0.76, -1.47]}>
                <mesh
                  name="backCover_1"
                  castShadow
                  receiveShadow
                  // @ts-ignore
                  geometry={nodes.backCover_1.geometry}
                  material={materials.lambert4}
                />
                <mesh
                  name="backCover_2"
                  castShadow
                  receiveShadow
                  // @ts-ignore
                  geometry={nodes.backCover_2.geometry}
                  material={materials.lambert4}
                />
              </group>
            </group>
            <group name="box" position={[-0.02, -1.28, -0.03]}>
              <mesh
                name="boxBase"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.boxBase.geometry}
                material={materials.lambert2}
              />
              <mesh
                name="backSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.backSide.geometry}
                material={materials.lambert2}
                position={[-0.02, 0.52, -0.82]}
                rotation={[-0.01, 0, 0]}
              />
              <mesh
                name="upSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.upSide.geometry}
                material={materials.lambert2}
                position={[0.83, 0.52, -0.01]}
              />
              <mesh
                name="eyeSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.eyeSide.geometry}
                material={materials.lambert2}
                position={[0.01, 0.52, 0.84]}
              />
              <mesh
                name="leftSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.leftSide.geometry}
                material={materials.lambert2}
                position={[-0.83, 0.52, 0.01]}
              />
            </group>
            <group name="FrontCover" position={[-0.02, 0.89, 0.89]}>
              <mesh
                name="frontCover"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.frontCover.geometry}
                material={materials.lambert4}
                position={[0.01, 0.87, 1.41]}
              />
            </group>
          </group>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube.geometry}
            material={materials.lambert4}
            position={[0.7, 0.69, 0.73]}
            rotation={[0, -0.21, 0]}
            scale={-0.08}
          />
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube003.geometry}
            material={materials.lambert4}
            position={[0.68, 0.69, 0.56]}
            scale={-0.08}
          />
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube005.geometry}
            material={materials.lambert4}
            position={[0.68, 0.85, 0.54]}
            scale={-0.08}
          />
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube006.geometry}
            material={materials.lambert4}
            position={[0.68, 1, 0.71]}
            rotation={[0, 0.27, 0]}
            scale={-0.08}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube001.geometry}
            material={materials.lambert2}
            position={[0.51, 0.69, 0.75]}
            scale={-0.08}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube002.geometry}
            material={materials.lambert2}
            position={[0.34, 0.69, 0.71]}
            rotation={[0, 0.18, 0]}
            scale={-0.08}
          />
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube004.geometry}
            material={materials.lambert2}
            position={[0.68, 0.84, 0.71]}
            scale={-0.08}
          />
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Plane.geometry}
            material={materials.Material}
            position={[0, 0.77, -0.04]}
            rotation={[1.35, 0, 0]}
            scale={[0.48, 0.28, 0.47]}
          />
        </group>
      </group>

    </>
  );
}

useGLTF.preload("/NewBoxPrpject.glb'");

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