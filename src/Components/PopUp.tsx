import { FC, useState, } from "react";

import "../assets/PopUp.css";
import { useGlobalContext } from "./GlobalContext";

interface PopProps {
    imgSrc?: string;
    
}

const PopUp: FC<PopProps> = ({ imgSrc }) => {
    const { popup, setPopup } = useGlobalContext();



    return (
        <>
            <div id="modal-container" onClick={() => setPopup(false)} className={popup ? "popup" : "popup out"}>
                <div className="modal-background">
                    <div className="modal">
                        <div className={"closeBtn"}><span>X</span></div>
                        <img src={imgSrc} />


                    </div>
                </div>
            </div>

           

        </>
    );
};

export default PopUp;
