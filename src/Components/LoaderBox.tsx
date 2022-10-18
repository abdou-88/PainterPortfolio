import { useEffect, useState } from "react";

import "../assets/Loader.css";

function LoaderBox() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <input id="package" type="checkbox" />

      <input
        id="two"
        type="radio"
        name="size"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />

      <label className="close" htmlFor="package"></label>
      <label className="open" htmlFor="package"></label>

      <div className="scene">
        <div className="package__wrapper">
          <div className="package">
            <div className="package__content">
              <img
                className="package__icon package__icon--1"
                src="easel.png"
              />
              <img
                className="package__icon package__icon--2"
                src="Brush.png"
              />
              <img
                className="package__icon package__icon--3"
                src="colorboard.png"
              />
            </div>

            <div className="package__side package__side--main">
              <div className="package__flap package__flap--top">
                <div className="package__tape package__tape--top"></div>
              </div>
              <div className="package__flap package__flap--bottom">
                <div className="package__tape package__tape--bottom"></div>
              </div>
              <div className="package__side package__side--tabbed">
                <img className="package__branding" src="Recycle.png" />
                <div className="package__flap package__flap--top"></div>
                <div className="package__flap package__flap--bottom"></div>
              </div>

              <div className="package__side package__side--extra">
                <div className="package__flap package__flap--top"></div>

                <div className="package__flap package__flap--bottom"></div>

                <div className="package__side package__side--flipped">
                  <span className="package__direction">
                    <svg viewBox="0 0 256 512">
                      <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                    </svg>

                    <span> Loading...</span>

                    <svg viewBox="0 0 256 512">
                      <path d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"></path>
                    </svg>
                  </span>

                  {/* <!-- eyes box --> */}
                  <span className="package__label package__label--shadow"></span>
                  <span className="package__label package__label--shadow2"></span>

                  {/* <!-- ////////////////// --> */}

                  <div className="package__flap package__flap--top"></div>
                  <div className="package__flap package__flap--bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "60%", fontSize: "55px" }}>66%</div>
          <div id="loaderContainer">
            <div id="loaderBar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoaderBox;
