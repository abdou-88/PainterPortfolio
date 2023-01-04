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
  const { nodes, materials, animations } = useGLTF("/NewBoxPrpject+post.glb");

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
          <group name="FullBox" position={[0.02, 0.98, 0.03]}>
            <group name="BackCover" position={[-0.02, 0.89, -0.96]}>
              <group name="backCover" position={[-0.02, 0.76, -1.47]}>
                <mesh
                  name="backCover_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.backCover_1.geometry}
                  material={materials.lambert4}
                />
                <mesh
                  name="backCover_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.backCover_2.geometry}
                  material={materials.lambert4}
                />
              </group>
            </group>
            <group name="box" position={[-0.02, -1.28, -0.03]}>
              <mesh
                name="backSide"
                castShadow
                receiveShadow
                geometry={nodes.backSide.geometry}
                material={materials.lambert2}
                position={[-0.02, 0.52, -0.82]}
                rotation={[-0.01, 0, 0]}
              />
              <mesh
                name="boxBase"
                castShadow
                receiveShadow
                geometry={nodes.boxBase.geometry}
                material={materials.lambert2}
              />
              <mesh
                name="eyeSide"
                castShadow
                receiveShadow
                geometry={nodes.eyeSide.geometry}
                material={materials.lambert2}
                position={[0.01, 0.52, 0.84]}
              />
              <mesh
                name="leftSide"
                castShadow
                receiveShadow
                geometry={nodes.leftSide.geometry}
                material={materials.lambert2}
                position={[-0.83, 0.52, 0.01]}
              />
              <mesh
                name="upSide"
                castShadow
                receiveShadow
                geometry={nodes.upSide.geometry}
                material={materials.lambert2}
                position={[0.83, 0.52, -0.01]}
              />
            </group>
            <group name="FrontCover" position={[-0.02, 0.89, 0.89]}>
              <mesh
                name="frontCover"
                castShadow
                receiveShadow
                geometry={nodes.frontCover.geometry}
                material={materials.lambert4}
                position={[0.01, 0.87, 1.41]}
              />
            </group>
          </group>
          <mesh
            name="projectstables"
            castShadow
            receiveShadow
            geometry={nodes.projectstables.geometry}
            material={materials["table3.001"]}
            position={[-0.02, 1.04, -2.14]}
            rotation={[1.38, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="painttablestand"
            castShadow
            receiveShadow
            geometry={nodes.painttablestand.geometry}
            material={materials["Material.021"]}
            position={[0, 0.68, -2.23]}
            rotation={[-0.02, 1.56, 0.31]}
            scale={0.01}
          />
          <mesh
            name="Box001__0"
            castShadow
            receiveShadow
            geometry={nodes.Box001__0.geometry}
            material={materials.lambert2}
            position={[-0.4, 0.66, 2.19]}
            rotation={[-Math.PI / 2, 0, -0.7]}
            scale={0.0004}
          />
          <mesh
            name="carpet"
            castShadow
            receiveShadow
            geometry={nodes.carpet.geometry}
            material={materials["carpet.001"]}
            position={[0.05, 0.76, 0.09]}
            rotation={[-0.02, 0, 0]}
            scale={0.22}
          />
          <group
            name="bigbrush"
            position={[0.63, 0.99, -0.64]}
            rotation={[1.55, -0.01, -1.37]}
            scale={0.01}
          >
            <mesh
              name="brushhead001"
              castShadow
              receiveShadow
              geometry={nodes.brushhead001.geometry}
              material={materials["Material.017"]}
            />
            <mesh
              name="brushhead001_1"
              castShadow
              receiveShadow
              geometry={nodes.brushhead001_1.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              name="brushhead001_2"
              castShadow
              receiveShadow
              geometry={nodes.brushhead001_2.geometry}
              material={materials["Material.015"]}
            />
          </group>
          <mesh
            name="desk"
            castShadow
            receiveShadow
            geometry={nodes.desk.geometry}
            material={materials["Material.014"]}
            position={[0.58, 0.86, -0.55]}
            rotation={[3.12, -1.16, -Math.PI]}
            scale={0.02}
          />
          <mesh
            name="cover"
            castShadow
            receiveShadow
            geometry={nodes.cover.geometry}
            material={materials["redcolor.002"]}
            position={[0.56, 0.9, -0.55]}
            rotation={[-3.11, -1.16, -3.1]}
            scale={0.0235}
          />
          <mesh
            name="paintbuck"
            castShadow
            receiveShadow
            geometry={nodes.paintbuck.geometry}
            material={materials["Material.020"]}
            position={[0.63, 0.95, -0.66]}
            rotation={[3.12, 0.35, -Math.PI]}
            scale={0.03}
          />
          <mesh
            name="picturehands"
            castShadow
            receiveShadow
            geometry={nodes.picturehands.geometry}
            material={materials["test.001"]}
            position={[0.58, 0.72, -0.3]}
            rotation={[-0.17, 0, 3.14]}
            scale={0.01}
          />
          <group
            name="projector"
            position={[0.42, 0.9, 0.4]}
            rotation={[-1.58, 0.02, 0.45]}
            scale={0.0025}
          >
            <mesh
              name="Cylinder006_Material_#27_0001"
              castShadow
              receiveShadow
              geometry={nodes["Cylinder006_Material_#27_0001"].geometry}
              material={materials["Material_27.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_1"
              castShadow
              receiveShadow
              geometry={nodes["Cylinder006_Material_#27_0001_1"].geometry}
              material={materials["Material_31.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_2"
              castShadow
              receiveShadow
              geometry={nodes["Cylinder006_Material_#27_0001_2"].geometry}
              material={materials["Material_30.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_3"
              castShadow
              receiveShadow
              geometry={nodes["Cylinder006_Material_#27_0001_3"].geometry}
              material={materials["Material_29.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_4"
              castShadow
              receiveShadow
              geometry={nodes["Cylinder006_Material_#27_0001_4"].geometry}
              material={materials["Material_28.001"]}
            />
          </group>
          <mesh
            name="papertrash2"
            castShadow
            receiveShadow
            geometry={nodes.papertrash2.geometry}
            material={materials["test.001"]}
            position={[0.31, 0.63, -0.22]}
            rotation={[-0.02, 0, 0]}
            scale={0.01}
          />
          <mesh
            name="sofa"
            castShadow
            receiveShadow
            geometry={nodes.sofa.geometry}
            material={materials["Material.019"]}
            position={[-0.65, 0.64, 0.2]}
            rotation={[-1.57, 0.02, -1.58]}
            scale={0.25}
          />
          <mesh
            name="rolledPaper1"
            castShadow
            receiveShadow
            geometry={nodes.rolledPaper1.geometry}
            material={nodes.rolledPaper1.material}
            position={[0.59, 0.64, -0.49]}
            rotation={[0.06, 0.29, 0.24]}
            scale={0.02}
          />
          <mesh
            name="towel"
            castShadow
            receiveShadow
            geometry={nodes.towel.geometry}
            material={materials["board1.002"]}
            position={[0.49, 0.82, -0.3]}
            rotation={[3.01, 0.79, 3.12]}
            scale={0.01}
          />
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Material}
            position={[0, 0.77, -0.04]}
            rotation={[1.35, 0, 0]}
            scale={[0.48, 0.28, 0.47]}
          />
          <mesh
            name="SBox1"
            castShadow
            receiveShadow
            geometry={nodes.SBox1.geometry}
            material={materials.lambert4}
            position={[0.7, 0.69, 0.73]}
            rotation={[0, -0.21, 0]}
            scale={-0.08}
          />
          <mesh
            name="SBox2"
            castShadow
            receiveShadow
            geometry={nodes.SBox2.geometry}
            material={materials.lambert2}
            position={[0.51, 0.69, 0.75]}
            scale={-0.08}
          />
          <mesh
            name="SBox3"
            castShadow
            receiveShadow
            geometry={nodes.SBox3.geometry}
            material={materials.lambert2}
            position={[0.34, 0.69, 0.71]}
            rotation={[0, 0.18, 0]}
            scale={-0.08}
          />
          <mesh
            name="SBox4"
            castShadow
            receiveShadow
            geometry={nodes.SBox4.geometry}
            material={materials.lambert4}
            position={[0.68, 0.69, 0.56]}
            scale={-0.08}
          />
          <mesh
            name="SBox5"
            castShadow
            receiveShadow
            geometry={nodes.SBox5.geometry}
            material={materials.lambert2}
            position={[0.68, 0.84, 0.71]}
            scale={-0.08}
          />
          <mesh
            name="SBox6"
            castShadow
            receiveShadow
            geometry={nodes.SBox6.geometry}
            material={materials.lambert4}
            position={[0.68, 0.85, 0.54]}
            scale={-0.08}
          />
          <mesh
            name="SBox7"
            castShadow
            receiveShadow
            geometry={nodes.SBox7.geometry}
            material={materials.lambert4}
            position={[0.68, 1, 0.71]}
            rotation={[0, 0.27, 0]}
            scale={-0.08}
          />
          <mesh
            name="paper1"
            castShadow
            receiveShadow
            geometry={nodes.paper1.geometry}
            material={materials["Material.015"]}
            position={[0.45, 0.92, -0.6]}
            rotation={[-0.01, 1.34, 3.13]}
            scale={0.02}
          />
          <mesh
            name="paper2"
            castShadow
            receiveShadow
            geometry={nodes.paper2.geometry}
            material={nodes.paper2.material}
            position={[0.32, 0.63, -0.49]}
            rotation={[3.12, 0.14, -Math.PI]}
            scale={0.02}
          />
          <mesh
            name="papertrash1"
            castShadow
            receiveShadow
            geometry={nodes.papertrash1.geometry}
            material={materials["test.001"]}
            position={[0.67, 0.63, -0.19]}
            rotation={[-0.02, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="rolledPaper3"
            castShadow
            receiveShadow
            geometry={nodes.rolledPaper3.geometry}
            material={nodes.rolledPaper3.material}
            position={[0.61, 0.62, -0.52]}
            rotation={[0, -0.27, -0.01]}
            scale={0.02}
          />
          <mesh
            name="rolledPaper2"
            castShadow
            receiveShadow
            geometry={nodes.rolledPaper2.geometry}
            material={nodes.rolledPaper2.material}
            position={[0.61, 0.62, -0.45]}
            rotation={[0, 0.01, -0.01]}
            scale={0.02}
          />
        </group>
      </group>

    </>
  );
}

useGLTF.preload("/NewBoxPrpject+post.glb");

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