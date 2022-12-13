import  { FC } from "react";
import menuBGUp from "/menubgUp.png";
import signtureBG from "/signturebg.png";

import signature from "/signature1.png";
import CR from "/Cright.png";

import "../../assets/Footer.css";
interface FooterProps {
  active: boolean;
}

const Footer: FC<FooterProps> = ({ active }) => {
  return (
    <>
      <img
        className={active ? "signatureBG-hovered" : "signatureBG"}
        src={signtureBG}
      />
      <img
        className={active ? "menuBGUp-hovered" : "menuBGUp"}
        src={menuBGUp}
      />
      <img className="signature" src={signature} />
      <img className="Cright" src={CR} />
      <a className="linkcright" href="#">
        A.Yousfi
      </a>
    </>
  );
};

export default Footer;
