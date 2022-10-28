import { FC } from "react";


import scrolldown from "/scrolldown.png";

interface ScrollProps {
  active: boolean;
}

const ScrollDiv: FC<ScrollProps> = ({ active }) => {
  return (
    
      <div className=" text-wrapperScroll">
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
