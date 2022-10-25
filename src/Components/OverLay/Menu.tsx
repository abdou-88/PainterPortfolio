import React, { FC } from "react";

import menuBGUp from "/menubgUp.png";
import menuBGUpleft from "/menubgUpleft.png";

interface MenuProps {
  active: boolean;
}

const Menu: FC<MenuProps> = ({ active }) => {
  return (
    <>
      <div className="hamburger-icon"></div>
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
