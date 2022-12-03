import { FC } from "react";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, OrthographicCamera, Scroll, ScrollControls } from "@react-three/drei";
import LoaderBox from "./LoaderBox";
import Box from "./Models/Box";
import { Chair } from "./Models/Chair";
import { ChairAvatar } from "./Models/ChairAvatar";
import LeftContent from "./OverLay/LeftContent";
import { useGlobalContext } from "./GlobalContext";


interface CanvasProps { }

const MainCanvas: FC<CanvasProps> = ({ }) => {
  const refCanvas: any = useRef(null);
  const { activeBox, contentBox } = useGlobalContext();

  return (

    <Canvas
      ref={refCanvas}
      dpr={[1, 2]}
      shadows
      
      className="test3"
    >
      {/* <OrthographicCamera makeDefault zoom={200} /> */}
      <ambientLight intensity={0.5} />
     
      <Suspense fallback={<LoaderBox />}>
    
        <spotLight
          angle={0.24}
          color="#fff"
          penumbra={1}
          position={[0, 0, 0]}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.001}
          castShadow
        />

        <spotLight
          angle={0.24}
          color="#eab37b"
          penumbra={1}
          position={[15, 30, -30]}
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
          pages={10}
        >
          
          
          <LeftContent active={activeBox} headerText={contentBox} />
          <Box scale={2} position={[0, 0, 0]} />



        </ScrollControls>

      </Suspense>
    </Canvas>

  );
};

export default MainCanvas;







