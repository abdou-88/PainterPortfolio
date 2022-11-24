import { Html, useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import loadimg from "/Loading.png";
import "../assets/Loader.css";

function LoaderBox() {
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
    <Html position={[-3.2, 1.55, 0]} style={{ textAlign: "center" }}>
      <div>
       {/* loader bar and percentage  */}
        <div>
          <img src={loadimg} />
          <div className="containerpercentage">
            <div className="bottom-left">{progress.toFixed(0)}%</div>
          </div>
        </div>

        <div id="loaderContainer">
          <div id="loaderBar"></div>
        </div>
      </div>
    </Html>
  );
}

export default LoaderBox;
