import React, { FC, useState } from "react";
import { StaticReadUsage } from "three";
import "../../assets/LeftContent.css";

interface LeftProps {
  active: boolean;
  headerText?: string;
}

const LeftContent: FC<LeftProps> = ({ active, headerText }) => {
  const { setActiveBox, setContentBox } = useGlobalContext();
  return (
    <div className={active ? "ex  rotate-left-hovered " : "ex  rotate-left"}>
      <div className={active ? "section-header" : "section-header-nobefore"}>
        <div className="text-wrapper">
          <h1>{headerText}</h1>
          <h3>This is a Boxfolio project designed and developed by A.Yousfi</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
