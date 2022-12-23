import { FC, } from "react";
import menuBGUp from "/menubgUp.png";
import signtureBG from "/signturebg.png";
import scrolldown from "/scrolldown.png";

import "../assets/scroll.css";
import "../assets/LeftContent.css";

interface LeftProps {
  active: boolean;
  headerText?: string;
}

const LeftContent: FC<LeftProps> = ({ active, headerText }) => {


  return (
    <> 
      <div style ={{maxWidth: "50%" }}>  
        <img
        className={active ? "menuBGUp-hovered" : "menuBGUp"}
        src={menuBGUp}
        
      />
        <img
          className={active ? "signatureBG-hovered" : "signatureBG"}
          src={signtureBG}
        />

      </div>
     

      <div className={active ? "rotate-left-hovered" : "rotate-left"}>
        <div className={active ? "section-header" : "section-header-nobefore"}>
          <div className="text-wrapper">
            <h1>{headerText}</h1>
            <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
          </div>
        </div>
      </div >
      
      <div
        className={active ? "text-wrapperScroll-hovered" : "text-wrapperScroll"}
      >
        
        <div className="scroll-down3">
          <img
            style={{
              position: "absolute",
              right: "0px",
              
            }}
            src={scrolldown}
          />
        </div>
        
      </div>
      </>
    
   


  );
};

export default LeftContent;