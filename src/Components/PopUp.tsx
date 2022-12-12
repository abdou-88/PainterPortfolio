import { FC, useState, } from "react";

import "../assets/PopUp.css";

interface PopProps {
    imgSrc?: string;
    activeP: boolean;
}

const PopUp: FC<PopProps> = ({ activeP }) => {
    const [active, setActive] = useState(activeP);

    return (
        <>
            <div id="modal-container" onClick={() => setActive(false)} className={active ? "popup" : "popup out"}>
                <div className="modal-background">
                    <div className="modal">

                        <img src='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg' />


                    </div>
                </div>
            </div>

           

        </>
    );
};

export default PopUp;
