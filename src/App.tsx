import "./App.css";

import Menu from "./Components/OverLay/Menu";

import MainCanvas from "./Components/MainCanvas";
import Footer from "./Components/OverLay/Footer";
import LeftContent from "./Components/OverLay/LeftContent";
import ScrollDiv from "./Components/OverLay/Scroll";

import { useEffect, useRef, useState } from "react";
import { MyGlobalContext } from "./Components/GlobalContext";





export default function App() {

const [activeBox, setActiveBox] = useState<boolean>(true);
  
  return (
    <MyGlobalContext.Provider value={{ activeBox, setActiveBox }}>
      <div>
        <div className="container">
          <div className="main">
            <MainCanvas />
          </div>
          <div className="leftMain">
            <LeftContent active={activeBox} />
          </div>
          <div className="rightMain">
            <ScrollDiv active={activeBox} />
          </div>
          <div className="header">
            <Menu active={activeBox} />
          </div>
          <div className="footer">
            <Footer active={activeBox} />
          </div>
        </div>
      </div>
    </MyGlobalContext.Provider>
  );
}



const Content = (props:any) => {
  const [contentHover, setContentHover] = useState(false);
  const contentRef:any = useRef(null);

  useEffect(() => {
   const handleScrolling = (event:any) => {
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

