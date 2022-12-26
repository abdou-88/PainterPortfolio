import  { FC } from "react";

import signature from "/signature1.png";
import CR from "/Cright.png";

import "../assets/Footer.css";
interface FooterProps {
  
}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <a className="linkcright" href="https://abdou-88.github.io">
        A.Yousfi
      </a>
      <img className="signature" src={signature} />
      <img className="Cright" src={CR} />
      
    </>
  );
};

export default Footer;
