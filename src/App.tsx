import "./App.css";

import Menu from "./Components/OverLay/Menu";

import MainCanvas from "./Components/MainCanvas";
import Footer from "./Components/OverLay/Footer";

import ScrollDiv from "./Components/OverLay/Scroll";

import { useEffect, useRef, useState } from "react";
import { MyGlobalContext, useGlobalContext } from "./Components/GlobalContext";
import LeftContent from "./Components/OverLay/LeftContent";


function Overlay() {
  const { activeBox, contentBox } = useGlobalContext();

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <LeftContent active={activeBox} headerText={contentBox} />
      <Footer active={activeBox} />
    </div>
  )
}


export default function App() {

  const [activeBox, setActiveBox] = useState<boolean>(true);
  const [contentBox, setContentBox] = useState<string>("boxfolio");
  const [scrollSide, setScrollSide] = useState<string>("boxfolio");

  return (
    <MyGlobalContext.Provider value={{
      activeBox, setActiveBox, contentBox, setContentBox, scrollSide, setScrollSide
    }}>
      
      <div>
        <div className="container">
          <div className="main">
            <MainCanvas />
          </div>
         
          <div className="rightMain">
            <ScrollDiv active={activeBox} />
          </div>
          <div className="header">
            <Menu active={activeBox} />
          </div>
          <div className="footer">
            
          </div>
        </div>
      </div>
      <Overlay />
    </MyGlobalContext.Provider>
  );
}



const Content = (props: any) => {
  const [contentHover, setContentHover] = useState(false);
  const contentRef: any = useRef(null);

  useEffect(() => {
    const handleScrolling = (event: any) => {
      if (contentRef !== null) {
        if (contentHover === false) {
          contentRef.current.scrollTo({
            top: contentRef.current.scrollTop + event.deltaY,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    };
  });

  return (
    <div
      className="content"
      ref={contentRef}
      onMouseEnter={() => {
        setContentHover(true);
      }}
      onMouseLeave={() => {
        setContentHover(false);
      }}
    >
      {/* YOUR LIST OF CONTENT OR WHATEVER */}
    </div>
  );
};

