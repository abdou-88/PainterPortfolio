import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";

import { useGlobalContext } from "../GlobalContext";
import { ScrollAnimation } from "../ScrollAnimation";
import { Chair } from "./Chair";

import { PaintingChar } from "./PaintingChar";

export default function Box(props: JSX.IntrinsicElements["group"]) {

  const { setActiveBox, setContentBox, setPopup, scOffSet,  setScOffSet } = useGlobalContext();

  const [hovered, setHovered] = useState(false);

  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const box: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/NewBoxPrpject5.glb");

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
                name="boxBase"
                castShadow
                receiveShadow
                geometry={nodes.boxBase.geometry}
                material={materials.lambert2}
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
                name="backSide"
                castShadow
                receiveShadow
                geometry={nodes.backSide.geometry}
                material={materials.lambert2}
                position={[-0.02, 0.52, -0.82]}
                rotation={[-0.01, 0, 0]}
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
          <group
            name="facebook"
            position={[-1.08, 0.8, 0.75]}
            rotation={[-2.75, 0.65, -1.82]}
            scale={[0.11, 0.01, 0.11]}
          >
            <group
              name="Plane_0"
              position={[0.02, 0.19, 0.06]}
              rotation={[-Math.PI, 0.26, -Math.PI]}
              scale={[0.61, 6.57, 0.61]}
            >
              <mesh
                name="Object_6"
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials["Material.002"]}
                position={[-0.27, 15.2, 4.94]}
              />
            </group>
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.lambert2}
              position={[0.92, 99.9, -2.85]}
            />
          </group>
          <group
            name="whats_app"
            position={[0.15, 0.8, 1.2]}
            rotation={[-2.71, 0.91, -1.92]}
            scale={[0.11, 0.01, 0.11]}
          >
            <group
              name="Plane009_0"
              position={[1.49, -7.56, -4.45]}
              rotation={[-Math.PI, 0.26, -Math.PI]}
              scale={[1, 10.86, 1]}
            >
              <mesh
                name="Object_6001"
                castShadow
                receiveShadow
                geometry={nodes.Object_6001.geometry}
                material={materials["Material.003"]}
              />
            </group>
            <mesh
              name="Object_4001"
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials.lambert2}
              position={[1.19, -8.18, -4.52]}
            />
          </group>
          <group
            name="instagram"
            position={[-1.63, 0.8, 1.51]}
            rotation={[-2.86, 0.37, -1.67]}
            scale={[0.11, 0.01, 0.11]}
          >
            <group
              name="Cylinder012_0"
              position={[0, 1.3, 0]}
              rotation={[-Math.PI, 0.26, -Math.PI]}
              scale={[0.3, 0.4, 0.3]}
            >
              <mesh
                name="Object_6002"
                castShadow
                receiveShadow
                geometry={nodes.Object_6002.geometry}
                material={materials["Material.003"]}
                position={[0, 259.08, -0.82]}
                scale={1.5}
              />
            </group>
            <group
              name="Cylinder013_1"
              position={[0.13, 105.69, 0.58]}
              rotation={[-Math.PI, 0.26, -Math.PI]}
              scale={[0.07, 0.23, 0.07]}
            >
              <mesh
                name="Object_8"
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials["Material.003"]}
              />
            </group>
            <group
              name="Plane001_2"
              position={[0, 1.69, 0]}
              rotation={[-Math.PI, 0.26, -Math.PI]}
              scale={[0.53, 5.79, 0.53]}
            >
              <mesh
                name="Object_10"
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials["Material.003"]}
                position={[0, 18.04, -0.45]}
              />
            </group>
            <mesh
              name="Object_4002"
              castShadow
              receiveShadow
              geometry={nodes.Object_4002.geometry}
              material={materials.lambert2}
              position={[-0.06, 104.5, 0.23]}
            />
          </group>
          <group
            name="body012"
            position={[0.43, 1.11, 0.39]}
            rotation={[2.74, -0.43, -0.17]}
            scale={[0.19, 0.13, 0.13]}
          >
            <mesh
              name="body012_cam_body2_0"
              castShadow
              receiveShadow
              geometry={nodes.body012_cam_body2_0.geometry}
              material={materials.cam_body2}
              position={[0.03, -1.53, -0.18]}
            />
            <mesh
              name="body012_cam_body_0"
              castShadow
              receiveShadow
              geometry={nodes.body012_cam_body_0.geometry}
              material={materials.cam_body}
              position={[0.03, -1.53, -0.18]}
            />
            <mesh
              name="body012_llll_0"
              castShadow
              receiveShadow
              geometry={nodes.body012_llll_0.geometry}
              material={materials.llll}
              position={[0.03, -1.53, -0.18]}
            />
            <mesh
              name="body012_cam_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.body012_cam_chrome_0.geometry}
              material={materials.cam_chrome}
              position={[0.03, -1.53, -0.18]}
            />
          </group>
          <group
            name="boom_h004"
            position={[0.21, 0.62, -0.2]}
            rotation={[0.03, -1.02, 0.01]}
            scale={0.16}
          >
            <group
              name="Group005"
              position={[0, 1.34, 0]}
              rotation={[1.23, -0.52, 0.96]}
              scale={0.02}
            >
              <mesh
                name="body004_cam_chrome_0"
                castShadow
                receiveShadow
                geometry={nodes.body004_cam_chrome_0.geometry}
                material={materials["cam_chrome.001"]}
                position={[0, 0.13, 69.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={52.07}
              />
              <mesh
                name="flap005_cam_body_0"
                castShadow
                receiveShadow
                geometry={nodes.flap005_cam_body_0.geometry}
                material={materials["cam_body.001"]}
                position={[0, 0.13, 69.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={52.07}
              />
              <mesh
                name="body004_cam_body2_0"
                castShadow
                receiveShadow
                geometry={nodes.body004_cam_body2_0.geometry}
                material={materials["cam_body2.001"]}
                position={[0, 0.13, 69.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={52.07}
              />
              <mesh
                name="body004_llll_0"
                castShadow
                receiveShadow
                geometry={nodes.body004_llll_0.geometry}
                material={materials["llll.001"]}
                position={[0, 0.13, 69.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={52.07}
              />
              <mesh
                name="body004_cam_body_0"
                castShadow
                receiveShadow
                geometry={nodes.body004_cam_body_0.geometry}
                material={materials["cam_body.001"]}
                position={[0, 0.13, 69.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={52.07}
              />
            </group>
            <mesh
              name="boom_h004_cam_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.boom_h004_cam_chrome_0.geometry}
              material={materials["cam_chrome.001"]}
            />
            <mesh
              name="boom_h004_cam_body2_0"
              castShadow
              receiveShadow
              geometry={nodes.boom_h004_cam_body2_0.geometry}
              material={materials["cam_body2.001"]}
            />
            <mesh
              name="boom_h004_cam_body_0"
              castShadow
              receiveShadow
              geometry={nodes.boom_h004_cam_body_0.geometry}
              material={materials["cam_body.001"]}
            />
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
            name="You"
            castShadow
            receiveShadow
            geometry={nodes.You.geometry}
            material={materials["01_-_Default"]}
            position={[-1.51, 0.63, -0.59]}
            rotation={[0.02, 0, -0.01]}
            scale={0}
          />
          <mesh
            name="loadingBar"
            castShadow
            receiveShadow
            geometry={nodes.loadingBar.geometry}
            material={materials["08_-_Default"]}
            position={[-1.8, 0.71, -0.57]}
            rotation={[3.14, 0, 0.01]}
            scale={0.05}
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
            name="play_and_volum"
            castShadow
            receiveShadow
            geometry={nodes.play_and_volum.geometry}
            material={materials["01_-_Default"]}
            position={[-2.92, -0.03, -0.58]}
            rotation={[3.14, 0, 0.02]}
            scale={0.05}
          />
          <mesh
            name="PostBOx"
            castShadow
            receiveShadow
            geometry={nodes.PostBOx.geometry}
            material={materials.lambert2}
            position={[0.01, 0.66, 1.21]}
            rotation={[-Math.PI / 2, 0, -3.13]}
            scale={0.00035}
          />
          <mesh
            name="Tube"
            castShadow
            receiveShadow
            geometry={nodes.Tube.geometry}
            material={materials.lambert2}
            position={[-1.51, 0.63, -0.58]}
            rotation={[0.02, 0, -0.01]}
            scale={0}
          />
          <mesh
            name="Object_7"
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.lambert2}
            position={[-1.81, 0.94, 0.74]}
            rotation={[3.14, 0.01, -3.14]}
            scale={0.19}
          />
          <mesh
            name="Rectangle003_15_-_Defaultawda_0001"
            castShadow
            receiveShadow
            geometry={nodes["Rectangle003_15_-_Defaultawda_0001"].geometry}
            material={materials.lambert4}
            position={[2.14, 0.88, -0.47]}
            rotation={[3.14, 0.69, -3.12]}
            scale={0.02}
          />
          <mesh
            name="maximise"
            castShadow
            receiveShadow
            geometry={nodes.maximise.geometry}
            material={materials["01_-_Default"]}
            position={[-2.21, -0.04, -0.58]}
            rotation={[3.14, 0, 0.01]}
            scale={0.05}
          />
          <mesh
            name="background"
            castShadow
            receiveShadow
            geometry={nodes.background.geometry}
            material={materials.lambert4}
            position={[-2.3, 1.68, -0.52]}
            rotation={[-0.01, 0, -0.01]}
            scale={0.05}
          />
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
            name="carpet"
            castShadow
            receiveShadow
            geometry={nodes.carpet.geometry}
            material={materials["carpet.001"]}
            position={[0.14, 0.76, 0.09]}
            rotation={[-0.02, 0, 0]}
            scale={0.22}
          />
          <mesh
            name="playBtn"
            castShadow
            receiveShadow
            geometry={nodes.playBtn.geometry}
            material={materials["03_-_Default"]}
            position={[-2.3, 1.68, -0.66]}
            rotation={[-0.01, 0, -0.01]}
            scale={0.05}
          />
          <mesh
            name="mainscreen"
            castShadow
            receiveShadow
            geometry={nodes.mainscreen.geometry}
            material={materials["01_-_Default"]}
            position={[-2.3, 1.68, -0.56]}
            rotation={[-0.01, 0, -0.01]}
            scale={0.05}
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
            name="cover"
            castShadow
            receiveShadow
            geometry={nodes.cover.geometry}
            material={materials["redcolor.002"]}
            position={[0.56, 0.899, -0.55]}
            rotation={[-3.11, -1.16, -3.1]}
            scale={0.024}
          />
          <mesh
            name="nexttoyoutubeBtn"
            castShadow
            receiveShadow
            geometry={nodes.nexttoyoutubeBtn.geometry}
            material={materials["01_-_Default"]}
            position={[-1.56, 0.68, -0.58]}
            rotation={[3.14, 0, 0.01]}
            scale={0.03}
          />
          <mesh
            name="redBtn"
            castShadow
            receiveShadow
            geometry={nodes.redBtn.geometry}
            material={materials["07_-_Default"]}
            position={[-2.3, 1.68, -0.66]}
            rotation={[-0.01, 0, -0.01]}
            scale={0.05}
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
          <mesh
            name="Rectangle002_15_-_Defaultawda_0"
            castShadow
            receiveShadow
            geometry={nodes["Rectangle002_15_-_Defaultawda_0"].geometry}
            material={materials["15_-_Defaultawda"]}
            position={[2.15, 0.9, -0.48]}
            rotation={[3.14, 0.69, -3.12]}
            scale={0.02}
          />
          <mesh
            name="brogresscyrcle"
            castShadow
            receiveShadow
            geometry={nodes.brogresscyrcle.geometry}
            material={materials["03_-_Default"]}
            position={[-2.27, 0.71, -0.58]}
            rotation={[0.02, 0, -0.01]}
            scale={0.05}
          />
          <mesh
            name="Object_8001"
            castShadow
            receiveShadow
            geometry={nodes.Object_8001.geometry}
            material={materials["Material.004"]}
            position={[-1.81, 0.94, 0.74]}
            rotation={[-3.14, -0.01, 0.01]}
            scale={0.19}
          />
          <mesh
            name="Rectangle002_15_-_Default_0"
            castShadow
            receiveShadow
            geometry={nodes["Rectangle002_15_-_Default_0"].geometry}
            material={materials["15_-_Defaultawda"]}
            position={[2.15, 0.9, -0.48]}
            rotation={[3.14, 0.69, -3.12]}
            scale={0.02}
          />
          <group
            name="projector"
            position={[0.42, 0.9, 0.4]}
            rotation={[-1.58, 0.02, 0.45]}
            scale={0.003}
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
          </group>
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
            name="Rectangle003_15_-_Defaultawda_0"
            castShadow
            receiveShadow
            geometry={nodes["Rectangle003_15_-_Defaultawda_0"].geometry}
            material={materials.lambert4}
            position={[2.14, 0.88, -0.47]}
            rotation={[3.14, 0.69, -3.12]}
            scale={0.02}
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
            name="paper2"
            castShadow
            receiveShadow
            geometry={nodes.paper2.geometry}
            material={nodes.paper2.material}
            position={[0.32, 0.60, -0.49]}
            rotation={[3.12, 0.14, -Math.PI]}
            scale={0.02}
          />
          <mesh
            name="towel"
            castShadow
            receiveShadow
            geometry={nodes.towel.geometry}
            material={materials["board1.002"]}
            position={[0.49, 0.80, -0.3]}
            rotation={[3.01, 0.79, 3.12]}
            scale={0.01}
          />
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
            name="rolledPaper1"
            castShadow
            receiveShadow
            geometry={nodes.rolledPaper1.geometry}
            material={nodes.rolledPaper1.material}
            position={[0.59, 0.63, -0.49]}
            rotation={[0.06, 0.29, 0.24]}
            scale={0.02}
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
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.014"]}
            position={[-1.81, 0.66, 0.77]}
            scale={-0.02}
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
            position={[0.465, 0.88, -0.6]}
            rotation={[-0.01, 1.34, 3.13]}
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

useGLTF.preload("/NewBoxPrpject5.glb");

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