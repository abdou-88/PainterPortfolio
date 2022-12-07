import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useRef } from "react";

import gsap from "gsap";

import "../../assets/LeftContent.css";


interface LeftProps {
  active: boolean;
  headerText?: string;
}

const LeftContent: FC<LeftProps> = ({ active, headerText }) => {

  const ref: any = useRef()
  // const scrollHtml = useScroll();


  // useFrame((state, delta) => {

  //   const offset = scrollHtml.offset;

  //   // The offset is between 0 and 1, you can apply it to your models any way you like

  //   if (offset <= 0.1) {

  //     console.log(scrollHtml);
  //   } else if (offset > 0.1 && offset <= 0.125) {

  //     console.log(scrollHtml);
  //   }


  // });


  return (



    <Html  as = "div" ref={ref} style={{ position: "absolute" }} zIndexRange={[10, 0]} fullscreen >

      <div className={active ? "section-header" : "section-header-nobefore"}>
        <div className="text-wrapper">
          <h1>{headerText}</h1>
          <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
        </div>
      </div>

    </Html>



  );
};

export default LeftContent;
