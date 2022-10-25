

import "./App.css";

import Menu from './Components/OverLay/Menu'


import scrolldown from "/scrolldown.png";
import MainCanvas from './Components/MainCanvas';
import Footer from './Components/OverLay/Footer';

export default function App() {
  //onst depthBuffer:any = useDepthBuffer({ frames: 1 });
  return (
    <div style={{ position: "relative" }}>
      <div className="container">
        
        <div className="header"><Menu active= {false} /></div>


        <div className="main"><MainCanvas/></div>

        <div className="leftMain">
          <div className="section-header">
            <div className="text-wrapper">
              <h1>BoxFolio</h1>
              <h3>
                This is a Boxfolio project designed and developed by A.Yousfi
              </h3>
            </div>
          </div>
        </div>
        <div className="rightMain">
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
        </div>

        <div className="footer">
        <Footer/>
        </div>
      </div>
    </div>
  );
}



 


