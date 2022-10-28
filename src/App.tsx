import "./App.css";

import Menu from "./Components/OverLay/Menu";

import MainCanvas from "./Components/MainCanvas";
import Footer from "./Components/OverLay/Footer";
import LeftContent from "./Components/OverLay/LeftContent";
import ScrollDiv from "./Components/OverLay/Scroll";

export default function App() {
  
  return (
    <div style={{ position: "relative" }}>
      <div className="container">

        <div className="header">
          <Menu active={false} />
        </div>

        <div className="main">
          <MainCanvas />
        </div>

        <div className="leftMain">
          <LeftContent active={true} />
        </div>
        <div className="rightMain">
         <ScrollDiv active = {true}/>
        </div>

        <div className="footer">
          <Footer />
        </div>

      </div>
    </div>
  );
}
