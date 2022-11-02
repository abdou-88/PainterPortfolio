import { FC } from "react";

import "../../assets/scroll.css";
import scrolldown from "/scrolldown.png";

interface ScrollProps {
  active: boolean;
}

const ScrollDiv: FC<ScrollProps> = ({ active }) => {
  return (
    <div
      className={active ? "text-wrapperScroll-hovered" : "text-wrapperScroll"}
    >
      <h3>Scroll</h3>
      <img
        style={{
          position: "absolute",
          right: "0px",
          top: "40%",
        }}
        src={scrolldown}
      />
    </div>
  );
};

export default ScrollDiv;
