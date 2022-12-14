import "./App.css";


import Menu from "./Components/Menu";

import MainCanvas from "./Components/MainCanvas";
import Footer from "./Components/Footer";



import { useState } from "react";
import { MyGlobalContext, useGlobalContext } from "./Components/GlobalContext";
import LeftContent from "./Components/OverLay";

import PopUp from "./Components/PopUp";
import ScrollTimeLine from "./Components/ScrollTimeLine";


function Overlay() {
  const { activeBox, contentBox } = useGlobalContext();

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>

      <LeftContent active={activeBox} headerText={contentBox} />
      <Footer />
    </div>
  )
}




export default function App() {

  const [activeBox, setActiveBox] = useState<boolean>(true);
  const [contentBox, setContentBox] = useState<string>("boxfolio");
  const [popup, setPopup] = useState<boolean>(false);
  const [scOffSet, setScOffSet] = useState<number>(0);

  return (
    <MyGlobalContext.Provider value={{ activeBox, setActiveBox, contentBox, setContentBox, popup, setPopup, scOffSet, setScOffSet }}>

      <PopUp imgSrc='#' />

      <div>
        <div className="container">

          <div className="main" style={{ height:'89vh', width: '100vw' }}>
            <MainCanvas />
          </div>

          <div className="header">
            <Menu active={activeBox} />
          </div>

        </div>
      </div>

      <Overlay />
      <ScrollTimeLine />

    </MyGlobalContext.Provider>
  );
}

