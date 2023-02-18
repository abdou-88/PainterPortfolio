import { FC, useEffect, useState } from "react";

import {menuItems}  from "../Data/general"

import "../assets/menu.css";
import React from "react";

interface MenuProps {
  active: boolean;
}


const Menu: FC<MenuProps> = ({ active }) => {


  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState([true, false, false, false, false]);

 

  const MBclick = (index: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    let items = [false, false, false, false, false];
    items[index] = true;
    setActiveItem(items);
  

   
  }


  const MButtons = () => {

    var items:any = [];

    for (var i = 0; i < menuItems.length; i++) {

      const Aclass = activeItem[i] ? "active" : "";

      var Mdiv = React.createElement("div", {
        onClick: (e) => { MBclick(parseInt (e.currentTarget.id)) } , key: i , id: i       
      },
        React.createElement("a", { href: "#", className: Aclass },
          React.createElement("strong", {}, menuItems[i]),
          React.createElement("small", {}, "------------------------")
        )
      );
      
      items.push(Mdiv);
    }
 
    return (items);

  }

  return (
    <>
      <div className={open ? "mcd-menu opened" : "mcd-menu"} >
        {MButtons()}        
      </div>
     
      <div
        id="nav-icon"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </>
  );
};

export default Menu;

