import  { FC, useState } from "react";

import menuBGUp from "/menubgUp.png";
import menuBGUpleft from "/menubgUpleft.png";

import "../../assets/menu.css";

interface MenuProps {
  active: boolean;
}

const Menu: FC<MenuProps> = ({ active }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <img
        className={active ? "menuBGUp-hovered" : "menuBGUp"}
        src={menuBGUp}
      />
      <div
        id="nav-icon"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>


        <div className={open ? "mcd-menu opened" : "mcd-menu"} >
       
          <div style={{ left: "100px" }}>
            <a href="" className="" >
              <strong>home</strong>
              <small>---------------</small>
            </a>
          </div>
          <div style={{ left: "170px" }}>
            <a href="" className="" >
              <strong>About me</strong>
              <small>--------------------------</small>
            </a>
          </div>
          <div style={{ left: "275px" }}>
            <a href="" className="" >
              <strong>news</strong>
              <small>--------------</small>
            </a>
          </div>
          <div style={{ left: "340px" }}>
            <a href="" className="active" >
              <strong>media</strong>
              <small>----------------</small>
            </a>
          </div>
          <div style={{ left: "410px" }}>
            <a href="" className="" >
              <strong>contact</strong>
              <small>------------------------</small>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Menu;
