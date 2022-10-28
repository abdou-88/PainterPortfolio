import { FC } from "react";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useGLTF } from "@react-three/drei";
import LoaderBox from "./LoaderBox";
import Box from "./Box";

interface CanvasProps {}

const MainCanvas: FC<CanvasProps> = ({}) => {
  return (
   
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
                scrollbarWidth: "none",               
            }}
            infinite={false}
            pages={2}
          >
            {/* <Rig> */}
            <Box scale={2} position={[0, 0, 0]} />
            {/* </Rig> */}
          </ScrollControls>
        </Suspense>
      </Canvas>
    
  );
};

export default MainCanvas;

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
    // inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) ;
    inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) ;
    inner.current.position.y = -5 + Math.sin( 2) ;
  });
  return (
    <group position={[0, 20, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
}







