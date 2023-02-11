
import { FC, useEffect, useState } from "react";


import "../assets/ScrollTimeLine.css";

import iconsClosed from "/closedboxicon.png";
import iconsOpened from "/openedboxicon.png";
import arrow from '/arrowTimeLine.png';



const timeLineBalls = (n: number, onClick: Function, current: number) => (

    Array(n).fill(0).map((i, index) => (
        <div
            key={index}
            className={`timeline__ball ${current >= (index / (n - 1)) ? 'active' : null}`}
            onClick={() => onClick((index) / (n - 1))}
        >
            <img className="iconTimeLine" src={current >= ((index / (n - 1))-0.01) ? iconsOpened : iconsClosed} />
        </div>
    ))
);

const ScrollTimeLine: FC<{}> = () => {

    const [ scOffSet, setScOffSet ] = useState(0);


    const intermediaryBalls = 5;
    const calculatedWidth = ((scOffSet) * 100) 

    useEffect(() => {
      document.addEventListener(
        "wheel",
        (event) => {
          const delta = Math.sign(event.deltaY);
          console.info(delta);
          if (delta == 1 ){
            setScOffSet(scOffSet + 0.02);
          }else{
            setScOffSet(scOffSet - 0.02);
          }
        },
        false
      );

      
    });
    return (

        <div className="timeline">
            <div className="timeline__progress" style={{ width: `${calculatedWidth}%` }} >
                <img style={{ float: "right", position: "relative", width: "30px", height: "30px" }} src={arrow} />
            </div>
            {timeLineBalls(intermediaryBalls, setScOffSet, scOffSet)}
        </div>

    );
};

export default ScrollTimeLine;
