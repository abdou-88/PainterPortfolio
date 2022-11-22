import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { FC, useRef } from "react";

import "../../assets/LeftContent.css";


interface LeftProps {
  active: boolean;
  headerText?: string;
}

const LeftContent: FC<LeftProps> = ({ active, headerText }) => {
  const data = useScroll();
  const ref:any = useRef()
  const { width: w, height: h } = useThree((state) => state.viewport)




  return (
    <>
   
   
      <Html zIndexRange={[10, 0]} fullscreen >

        <div className={active ? "section-header" : "section-header-nobefore"}>
          <div className="text-wrapper">
            <h1>{headerText}</h1>
            <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
          </div>
        </div>
    
      </Html>
    
    </>
    
  );
};

export default LeftContent;
