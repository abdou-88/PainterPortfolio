import { Html, useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

import "../assets/Loader.css";

const  LoaderBox = ()  => {
  const box: any = useRef();
  const { progress } = useProgress();

  useEffect(() => {
    window.onmousemove = function (e) {
      box.current != null
        ? (box.current.style.transform =
            "rotateX(-30deg) rotateY(" + e.clientX + "deg)")
        : null;
    };
  }, []);

  return (
    <Html  >
      <div className="percentage">  {progress.toFixed(0)}%</div>
    
      <div className="demo">

        <div className="circle">
          <div className="inner"></div>
        </div>
        <div className="circle">
          <div className="inner"></div>
        </div>
        <div className="circle">
          <div className="inner"></div>
        </div>
        <div className="circle">
          <div className="inner"></div>
        </div>
        <div className="circle">
          <div className="inner"></div>
        </div>
        
      </div>
     
    </Html>
  );
}

export default LoaderBox;
