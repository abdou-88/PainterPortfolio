import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";

import { useGlobalContext } from "../GlobalContext";
import { ScrollAnimation } from "../ScrollAnimation";


import { PaintingChar } from "./PaintingChar";

export default function Box(props: JSX.IntrinsicElements["group"]) {

  const { setActiveBox, setContentBox, setPopup, scOffSet,  setScOffSet } = useGlobalContext();

  const [hovered, setHovered] = useState(false);

  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const box: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/Box.glb");

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
         
          <PaintingChar/>         
          <group name="FullBox" position={[0.02, 0.98, 0.03]}>
            <group name="BackCover" position={[-0.02, 0.89, -0.96]}>
              <group name="backCover" position={[-0.02, 0.76, -1.47]}>
                <mesh
                  name="backCover_1"
                  castShadow
                  receiveShadow//@ts-ignore
                  geometry={nodes.backCover_1.geometry}
                  material={materials.lambert4}
                />
                <mesh
                  name="backCover_2"
                  castShadow
                  receiveShadow//@ts-ignore
                  geometry={nodes.backCover_2.geometry}
                  material={materials.lambert4}
                />
              </group>
            </group>
            <group name="box" position={[-0.02, -1.28, -0.03]}>
              <mesh
                name="backSide"
                castShadow
                receiveShadow//@ts-ignore
                geometry={nodes.backSide.geometry}
                material={materials.lambert2}
                position={[-0.02, 0.52, -0.82]}
                rotation={[-0.01, 0, 0]}
              />
              <mesh
                name="boxBase"
                castShadow
                receiveShadow//@ts-ignore
                geometry={nodes.boxBase.geometry}
                material={materials.lambert2}
              />
              <mesh
                name="eyeSide"
                castShadow
                receiveShadow//@ts-ignore
                geometry={nodes.eyeSide.geometry}
                material={materials.lambert2}
                position={[0.01, 0.52, 0.84]}
              />
              <mesh
                name="leftSide"
                castShadow
                receiveShadow//@ts-ignore
                geometry={nodes.leftSide.geometry}
                material={materials.lambert2}
                position={[-0.83, 0.52, 0.01]}
              />
              <mesh
                name="upSide"
                castShadow
                receiveShadow//@ts-ignore
                geometry={nodes.upSide.geometry}
                material={materials.lambert2}
                position={[0.83, 0.52, -0.01]}
              />
            </group>
            <group name="FrontCover" position={[-0.02, 0.89, 0.89]}>
              <mesh
                name="frontCover"
                castShadow
                receiveShadow//@ts-ignore
                geometry={nodes.frontCover.geometry}
                material={materials.lambert4}
                position={[0.01, 0.87, 1.41]}
              />
            </group>
          </group>
          <mesh
            name="carpet"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.carpet.geometry}
            material={materials["carpet.001"]}
            position={[0.14, 0.76, 0.09]}
            rotation={[0.01, 0, 0]}
            scale={0.22}
          />
          <group
            name="projector"
            position={[0.42, 0.9, 0.4]}
            rotation={[-1.58, 0.02, 0.45]}
            scale={0.0031}
          >
            <mesh
              name="Cylinder006_Material_#27_0001"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Cylinder006_Material_#27_0001"].geometry}
              material={materials["Material_27.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Cylinder006_Material_#27_0001_1"].geometry}
              material={materials["Material_31.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Cylinder006_Material_#27_0001_2"].geometry}
              material={materials["Material_30.001"]}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_3"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Cylinder006_Material_#27_0001_3"].geometry}
              material={materials.cam_body}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_4"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Cylinder006_Material_#27_0001_4"].geometry}
              material={materials.cam_body2}
            />
            <mesh
              name="Cylinder006_Material_#27_0001_5"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Cylinder006_Material_#27_0001_5"].geometry}
              material={materials.cam_chrome}
            />
          </group>
          <group
            name="towel"
            position={[0.49, 0.82, -0.3]}
            rotation={[3.01, 0.79, 3.12]}
            scale={0.01}
          >
            <mesh
              name="towel1001"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.towel1001.geometry}
              material={materials["board1.002"]}
            />
            <mesh
              name="towel1001_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.towel1001_1.geometry}
              material={materials["test.001"]}
            />
          </group>
          <mesh
            name="Plane"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.Plane.geometry}
            material={materials.Material}
            position={[0, 0.77, -0.04]}
            rotation={[1.35, 0, 0]}
            scale={[0.48, 0.28, 0.47]}
          />
          <group
            name="smallProjector"
            position={[0.21, 0.61, -0.19]}
            rotation={[3.13, 0.88, 3.13]}
            scale={0.15}
          >
            <mesh
              name="boom_h004_cam_body_0"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.boom_h004_cam_body_0.geometry}
              material={materials["cam_body.001"]}
            />
            <mesh
              name="boom_h004_cam_body_0_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.boom_h004_cam_body_0_1.geometry}
              material={materials["cam_body2.001"]}
            />
            <mesh
              name="boom_h004_cam_body_0_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.boom_h004_cam_body_0_2.geometry}
              material={materials["cam_chrome.001"]}
            />
            <mesh
              name="boom_h004_cam_body_0_3"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.boom_h004_cam_body_0_3.geometry}
              material={materials["llll.001"]}
            />
          </group>
          <mesh
            name="sofa"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.sofa.geometry}
            material={materials.sofaMatrial}
            position={[-0.5, 0.61, 0.32]}
            rotation={[-2.05, 1.56, 2.05]}
            scale={0.004}
          />
          <mesh
            name="papertrash"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.papertrash.geometry}
            material={materials["test.001"]}
            position={[0.67, 0.63, -0.19]}
            rotation={[-0.02, 0, 0]}
            scale={0.02}
          />
          <mesh
            name="fcbtxt"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.fcbtxt.geometry}
            material={materials["sofaMatrial.001"]}
            position={[-0.58, 0.72, 1.96]}
            rotation={[0.55, 0.3, -0.18]}
            scale={0.13}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="SBox1"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.SBox1.geometry}
            material={materials.lambert4}
            position={[0.7, 0.69, 0.73]}
            rotation={[0, -0.21, 0]}
            scale={-0.08}
          />
          <mesh
            name="instxt"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.instxt.geometry}
            material={materials.sofaMatrial}
            position={[-0.58, 0.72, 2.25]}
            rotation={[0.55, 0.3, -0.18]}
            scale={0.13}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="SBox2"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.SBox2.geometry}
            material={materials.lambert2}
            position={[0.51, 0.69, 0.75]}
            scale={-0.08}
          />
          <mesh
            name="WTptxt"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.WTptxt.geometry}
            material={materials.sofaMatrial}
            position={[-0.58, 0.72, 1.66]}
            rotation={[0.55, 0.3, -0.18]}
            scale={0.13}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="SBox3"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.SBox3.geometry}
            material={materials.lambert2}
            position={[0.34, 0.69, 0.71]}
            rotation={[0, 0.18, 0]}
            scale={-0.08}
          />
          <mesh
            name="SBox4"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.SBox4.geometry}
            material={materials.lambert4}
            position={[0.68, 0.69, 0.56]}
            scale={-0.08}
          />
          <mesh
            name="SBox5"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.SBox5.geometry}
            material={materials.lambert2}
            position={[0.68, 0.84, 0.71]}
            scale={-0.08}
          />
          <mesh
            name="SBox6"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.SBox6.geometry}
            material={materials.lambert4}
            position={[0.68, 0.85, 0.54]}
            scale={-0.08}
          />
          <mesh
            name="PostBOx"
            castShadow
            visible={scOffSet <= 0.1 ? false : true}
            receiveShadow//@ts-ignore
            geometry={nodes.PostBOx.geometry}
            material={materials.lambert2}
            position={[0.01, 0.66, 1.21]}
            rotation={[-Math.PI / 2, 0, -3.13]}
            scale={0.00035}
          />
          <group
            name="writeDesk"
            visible={scOffSet <= 0.1 ? false : true}
            position={[0.61, 1.03, 1.73]}
            rotation={[0.14, 1.5, -2.86]}
            scale={0.07}
          >
            <mesh
              name="Object_0"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0.geometry}
              material={materials["JA3.1001"]}
            />
            <mesh
              name="Object_0_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0_1.geometry}
              material={materials["sofaMatrial.001"]}
            />
          </group>
          <group
            name="playbtn"
            position={[-2.3, 1.68, -0.66]}
            rotation={[-0.01, 0, -0.01]}
            visible={scOffSet <= 0.1 ? false : true}
            scale={0.05}
          >
            <mesh
              name="Shape1_07_-_Default_0"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_07_-_Default_0"].geometry}
              material={materials.lambert2}
            />
            <mesh
              name="Shape1_07_-_Default_0_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_07_-_Default_0_1"].geometry}
              material={materials["Material.014"]}
            />
          </group>
          <mesh
            name="videoLight"
            castShadow
            receiveShadow//@ts-ignore
            visible={scOffSet <= 0.1 ? false : true}
            geometry={nodes.videoLight.geometry}
            material={materials["Material.004"]}
            position={[-1.81, 0.94, 0.74]}
            rotation={[-3.14, -0.01, 0.01]}
            scale={0.19}
          />
          <group
            name="videoProjector"
            position={[-1.81, 0.94, 0.74]}
            rotation={[3.14, 0.01, -3.14]}
            visible={scOffSet <= 0.1 ? false : true}
            scale={0.19}
          >
            <mesh
              name="Object_0003"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0003.geometry}
              material={materials.lambert2}
            />
            <mesh
              name="Object_0003_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0003_1.geometry}
              material={materials.sofaMatrial}
            />
          </group>
          <mesh
            name="Carpet_Red_Carpet_mtl_0"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.Carpet_Red_Carpet_mtl_0.geometry}
            material={materials.lambert3}
            position={[0, 0.72, -2.26]}
            scale={0.16}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="painttablestand"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.painttablestand.geometry}
            material={materials["Material.021"]}
            position={[0.04, 0.79, -2.49]}
            rotation={[-0.02, 1.56, 0.31]}
            scale={0.01}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="projectstables"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.projectstables.geometry}
            material={materials["table3.001"]}
            position={[0.01, 1.15, -2.4]}
            rotation={[1.38, 0, 0]}
            scale={0.02}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <group
            name="Ropes_Red_Carpet_mtl_0"
            position={[0, 0.7, -2.26]}
            scale={0.16}
            visible={scOffSet <= 0.1 ? false : true}
          >
            <mesh
              name="Ropes_Red_Carpet_mtl_0_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Ropes_Red_Carpet_mtl_0_1.geometry}
              material={materials.lambert3}
            />
            <mesh
              name="Ropes_Red_Carpet_mtl_0_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Ropes_Red_Carpet_mtl_0_2.geometry}
              material={materials.Post_Metal_mtl}
            />
          </group>
          <group
            name="Table"
            position={[0.61, 0.62, -0.45]}
            rotation={[0, 0.01, -0.01]}
            scale={0.02}
          >
            <mesh
              name="table"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.table.geometry}
              material={materials["Material.015"]}
            />
            <mesh
              name="table_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.table_1.geometry}
              material={materials["Material.015"]}
            />
            <mesh
              name="table_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.table_2.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              name="table_3"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.table_3.geometry}
              material={materials["redcolor.002"]}
            />
            <mesh
              name="table_4"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.table_4.geometry}
              material={materials["Material.014"]}
            />
            <mesh
              name="table_5"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.table_5.geometry}
              material={materials["Material.020"]}
            />
          </group>
          <group
            name="instagram"
            visible={scOffSet <= 0.1 ? false : true}
            position={[-0.66, 0.8, 2.21]}
            rotation={[3.09, -0.01, -1.57]}
            scale={0.05}
          >
            <mesh
              name="Object_3"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_3.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="Object_3_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_3_1.geometry}
              material={materials.lambert2}
            />
          </group>
          <group
            name="whatsapp"
            visible={scOffSet <= 0.1 ? false : true}
            position={[-0.68, 0.8, 1.64]}
            rotation={[1.45, 0.01, -1.58]}
            scale={0.1}
          >
            <mesh
              name="Object_1001"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_1001.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="Object_1001_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_1001_1.geometry}
              material={materials.lambert2}
            />
          </group>
          <group
            name="videobackground"
            visible={scOffSet <= 0.1 ? false : true}
            position={[-2.3, 1.3, -0.52]}
            rotation={[-0.01, 0, -0.01]}
            scale={0.05}
          >
            <mesh
              name="Shape1_02_-_Default_0"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_02_-_Default_0"].geometry}
              material={materials.lambert4}
            />
            <mesh
              name="Shape1_02_-_Default_0_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_02_-_Default_0_1"].geometry}
              material={materials["03_-_Default"]}
            />
            <mesh
              name="Shape1_02_-_Default_0_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_02_-_Default_0_2"].geometry}
              material={materials["08_-_Default"]}
            />
            <mesh
              name="Shape1_02_-_Default_0_3"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_02_-_Default_0_3"].geometry}
              material={materials["01_-_Default"]}
            />
            <mesh
              name="Shape1_02_-_Default_0_4"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes["Shape1_02_-_Default_0_4"].geometry}
              material={materials.lambert2}
            />
          </group>
          <group
            name="facebook"
            position={[-0.67, 0.8, 1.91]}
            rotation={[0.02, 0.01, -1.57]}
            visible={scOffSet <= 0.1 ? false : true}
            scale={0.06}
          >
            <mesh
              name="Object_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_1.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              name="Object_1_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_1_1.geometry}
              material={materials.lambert2}
            />
          </group>
          <mesh
            name="Posts_Post_Metal_mtl_0001"
            castShadow
            visible={scOffSet <= 0.1 ? false : true}
            receiveShadow//@ts-ignore
            geometry={nodes.Posts_Post_Metal_mtl_0001.geometry}
            material={materials.lambert4}
            position={[0, 0.72, -2.26]}
            scale={0.16}
          />
          <group
            name="Ropes_Red_Carpet_mtl_0001"
            position={[0, 0.72, -2.26]}
            scale={0.16}
            visible={scOffSet <= 0.1 ? false : true}
          >
            <mesh
              name="Ropes_Red_Carpet_mtl_0001_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Ropes_Red_Carpet_mtl_0001_1.geometry}
              material={materials.lambert3}
            />
            <mesh
              name="Ropes_Red_Carpet_mtl_0001_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Ropes_Red_Carpet_mtl_0001_2.geometry}
              material={materials.Post_Metal_mtl}
            />
          </group>
          <mesh
            name="redCarpt"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.redCarpt.geometry}
            material={materials["redcolor.002"]}
            position={[0.81, 0.63, -1.66]}
            rotation={[0.05, 0.01, -0.05]}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <group visible={scOffSet <= 0.1 ? false : true} name="CDRack" position={[-1.23, 0.62, -0.12]} scale={0.38}>
            <mesh
              name="Object_0001"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0001.geometry}
              material={materials["Wood_Tall_CD_Rack.001"]}
            />
            <mesh
              name="Object_0001_1"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0001_1.geometry}
              material={materials["Wood_Trim_Tall_CD_Rack.001"]}
            />
            <mesh
              name="Object_0001_2"
              castShadow
              receiveShadow//@ts-ignore
              geometry={nodes.Object_0001_2.geometry}
              material={materials["Black_Metal_Tall_CD_Rack.001"]}
            />
          </group>
          <mesh
            name="NewsScreen"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.NewsScreen.geometry}
            material={materials["llll.001"]}
            position={[2.15, 0.9, -0.48]}
            rotation={[3.14, 0.69, -3.12]}
            scale={0.02}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="NewsFloorB"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.NewsFloorB.geometry}
            //@ts-ignore
            material={nodes.NewsFloorB.material}
            position={[1.65, 1.14, 0.09]}
            scale={0.56}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="NewsFloorS"
            castShadow
            visible={scOffSet <= 0.1 ? false : true}
            receiveShadow//@ts-ignore
            geometry={nodes.NewsFloorS.geometry}
            material={materials["redcolor.002"]}
            position={[1.65, 0.98, 0.09]}
            scale={0.34}
          />
          <mesh
            name="boxNews"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.boxNews.geometry}
            material={materials["Material.002"]}
            position={[1.69, 1.98, -0.28]}
            rotation={[1.71, 0.39, -0.32]}
            scale={0.64}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="News"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.News.geometry}
            material={materials.lambert2}
            position={[1.45, 0.69, -0.22]}
            rotation={[1.57, 0, 0.63]}
            scale={0.18}
            visible={scOffSet <= 0.1 ? false : true}
          />
          <mesh
            name="NewsFrame"
            castShadow
            receiveShadow//@ts-ignore
            geometry={nodes.NewsFrame.geometry}
            material={materials.lambert4}
            position={[2.14, 0.88, -0.47]}
            rotation={[3.14, 0.69, -3.12]}
            scale={0.02}
            visible={scOffSet <= 0.1 ? false : true}
          />
        </group>
      </group>

    </>
  );
}

useGLTF.preload("/Box.glb");

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