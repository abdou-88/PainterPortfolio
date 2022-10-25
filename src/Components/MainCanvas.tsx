import React, { FC } from "react";
import * as THREE from "three";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  
  useScroll,
  useGLTF,
  useAnimations,
 
} from "@react-three/drei";
import LoaderBox from "./LoaderBox";

interface CanvasProps {
  
}

const MainCanvas: FC<CanvasProps> = ({}) => {
  return (
    <>
      <Canvas
        style={{ position: "absolute" }}
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.03} />
        <fog attach="fog" args={["#dba776", 5, 18]} />
        <Suspense fallback={<LoaderBox />}>
          <spotLight
            angle={0.14}
            color="#eab37b"
            penumbra={1}
            position={[25, 50, -20]}
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.001}
            castShadow
          />

          {/* Wrap contents you want to scroll into <ScrollControls> */}
          <ScrollControls
            style={{
              msOverflowStyle: "none",
              /* IE and Edge */ scrollbarWidth: "none",
            }}
            pages={2}
          >
            {/* <Rig> */}
            <Box scale={2} position={[0, 0, 0]} />
            {/* </Rig> */}
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default MainCanvas;



////// box componant//////////

export function Box(props: JSX.IntrinsicElements["group"]) {
  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/cleanerversion.glb");

  const { actions }: any = useAnimations(animations, group);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useEffect(() => void (actions["Take 001"].play().paused = true), [actions]);

  useEffect(() => console.log(scroll), []);

  useFrame((state, delta) => {
    const action: any = actions["Take 001"];
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = scroll.offset;
    action.time = THREE.MathUtils.damp(
      action.time,
      action.getClip().duration * offset,
      100,
      delta
    );
    state.camera.position.set(
      Math.sin(offset) * 10,
      Math.atan(offset * Math.PI * 2) * 6,
      Math.cos((offset * Math.PI) / 3) * -10
    );

    state.camera.position.set(
      Math.sin(offset) * 5,
      Math.atan(offset * Math.PI) * 6,
      Math.cos(offset * Math.PI) * -10
    );
    state.camera.lookAt(0, 3, 0);
  });
  return (
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
            <mesh
              name="EyesSide"
              castShadow
              receiveShadow
              // @ts-ignore
              geometry={nodes.EyesSide.geometry}
              material={materials.lambert2}
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
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cleanerversion.glb");


///////////////// this is to check later if i ll add it to the final project or not//////////////

function Rig({ children }: any) {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  useFrame(({ camera, clock }) => {
    outer.current.position.y = THREE.MathUtils.lerp(
      outer.current.position.y,
      0,
      0.01
    );
    inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI;
    inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 10;
    inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2;
  });
  return (
    <group position={[0, -50, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
}
