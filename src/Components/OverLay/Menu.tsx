import  { FC, useState } from "react";

import menuBGUp from "/menubgUp.png";
import menuBGUpleft from "/menubgUpleft.png";

import "../../assets/menu.css";

interface MenuProps {
  active: boolean;
}

const Menu: FC<MenuProps> = ({ active }) => {
  const [open, setOpen] = useState(!active);
  return (
    <>
      <div
        id="nav-icon"
        className={open ? "" : "open"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <img
        style={{
          position: "absolute",
          left: "50%",
          top: "0px",
        }}
        src={menuBGUp}
      />
    </>
  );
};

export default Menu;
