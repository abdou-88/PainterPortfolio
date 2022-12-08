import { FC, } from "react";

import "../../assets/LeftContent.css";

interface LeftProps {
  active: boolean;
  headerText?: string;
}

const LeftContent: FC<LeftProps> = ({ active, headerText }) => {


  return (
    <div className={active ? "rotate-left-hovered" : "rotate-left"}>
      <div className={active ? "section-header" : "section-header-nobefore"}>
        <div className="text-wrapper">
          <h1>{headerText}</h1>
          <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
        </div>
      </div>
    </div >
   


  );
};

export default LeftContent;
