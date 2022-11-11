import { FC, useState } from "react";

import menuBGUp from "/menubgUp.png";

import "../../assets/menu.css";

interface MenuProps {
  active: boolean;
}


const Menu: FC<MenuProps> = ({ active }) => {
  const [open, setOpen] = useState(true);

  const [activeItem, setActiveItem] = useState([false, true, false, false, false]);


  const MBclick = (index: number) => {
    let items = [false, false, false, false, false];
    items[index] = true;
    setActiveItem(items);
    

  }
  const MButton = (name: string, active: boolean, index: number) => {
    return (
      <div onClick={(e) => { MBclick(index) }}>
        <a href="#" className={active ? "active" : ""} >
          <strong>{name}</strong>
          <small>------------------------</small>
        </a>
      </div>

    );
  }

  return (
    <>
      <img
        className={active ? "menuBGUp-hovered" : "menuBGUp"}
        src={menuBGUp}
      />

      <div
        id="nav-icon"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <div className={open ? "mcd-menu opened" : "mcd-menu"} >
        {MButton("Home", activeItem[0], 0)}
        {MButton("About me", activeItem[1], 1)}
        {MButton("news", activeItem[2], 2)}
        {MButton("media", activeItem[3], 3)}
        {MButton("contact", activeItem[4], 4)}
      </div>
    </>
  );
};

export default Menu;

