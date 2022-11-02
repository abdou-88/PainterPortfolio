import React, { FC } from "react";

import signature from "/signature1.png";
import CR from "/Cright.png";
import signtureBG from "/signturebg.png";
import "../../assets/Footer.css";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <img className="Cright" src={CR} />
      <img className="signature" src={signature} />
      <img className="signatureBG" src={signtureBG} />
      <a className="linkcright" href="#">A.Yousfi</a>
    </>
  );
};

export default Footer;
