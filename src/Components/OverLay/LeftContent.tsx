import React, { FC } from "react";

import menuBGUp from "/menubgUp.png";
import menuBGUpleft from "/menubgUpleft.png";

interface LeftProps {
  active: boolean;
  content?: HTMLElement;
}

const LeftContent: FC<LeftProps> = ({ active }) => {
  return (
    <div className="section-header">
      <div className="text-wrapper">
        <h1>BoxFolio</h1>
        <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
      </div>
    </div>
  );
};

export default LeftContent;
