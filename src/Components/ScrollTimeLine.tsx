
import { FC, useState } from "react";


import "../assets/ScrollTimeLine.css";
import { useGlobalContext } from "./GlobalContext";
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

    const { scOffSet, setScOffSet } = useGlobalContext();


    const intermediaryBalls = 5;
    const calculatedWidth = ((scOffSet) * 100) 

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
