import React, { FC } from "react";

import signature from "/signature1.png";
import CR from "/Cright.png";
import signtureBG from "/signturebg.png";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <>
      <img
        style={{
          position: "absolute",
          left: "0px",
          bottom: "0px",
        }}
        src={CR}
      />
     
      <img
        style={{
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
        src={signature}
      />
      <img
        style={{
          position: "absolute",
          left: "50%",
          bottom: "0px",
        }}
        src={signtureBG}
      />
       <a
        style={{
          position: "absolute",
          left: "25px",
          bottom: "1.5px",
          color: "#ccc",
          textDecoration: "none",
          fontFamily: "OpenSans",
        }}
        href="#"
      >
        A.Yousfi
      </a>
    </>
  );
};

export default Footer;
