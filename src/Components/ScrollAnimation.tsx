import gsap from "gsap";

export function ScrollAnimation(
  offset: number,
  setActiveBox: Function,
  setContentBox: Function,
  state: any,
  box: any
) {
  //first movement to zoom in to the character
  if (offset <= 0.1) { 
    changeCamP(4, 7, 9, state), state;
  } else if (offset > 0.1 && offset <= 0.125) {
    changeCamP(0, 2, 3, state);
    setActiveBox(true);
    setContentBox("BoxfolIo");
  } else if (offset > 0.125 && offset <= 0.15) {
    changeCamP(-1.5, 1.5, 1, state);
    setActiveBox(false);
  } else if (offset > 0.15 && offset <= 0.175) {
    changeCamP(-2, 1.5, -0.5, state);
  } else if (offset > 0.175 && offset <= 0.2) {
    changeCamP(1.6, 1.5, -0.5, state);
    changeScenP(0, 0, 0, state, box);
    setActiveBox(false);
    // going to selected works area   - second area
  } else if (offset > 0.2 && offset <= 0.3) {
    setActiveBox(true);
    setContentBox("My WOrk");
    changeCamP(1, 1.3, 1, state);
    changeScenP(0, 0, 2, state, box);    
  } else if (offset > 0.3 && offset <= 0.4) {
    setActiveBox(false);    
    changeCamP(0, 2, 2, state);
    changeScenP(0, 0, 2, state, box);
    // going to news area - 3rd area
  } else if (offset > 0.4 && offset <= 0.5) {
    setContentBox("News");
    setActiveBox(true);
    changeCamP(1, 2, 1, state);
    changeScenP(-2, 0, 0, state, box);    
  } else if (offset > 0.5 && offset <= 0.6) {
    setActiveBox(false);
    changeCamP(-1, 1.5, 1.5, state);    
    changeScenP(-2, 0, 0, state, box);
    // going to media area - 4th area
  } else if (offset > 0.6 && offset <= 0.7) {
    setContentBox("MEdia");
    setActiveBox(true);
    changeCamP(-1.5, 2, 1, state);
    changeScenP(2, 0, 0, state, box);    
  } else if (offset > 0.7 && offset <= 0.8) {
    setActiveBox(false);
    changeCamP(-1, 1, -1, state);
    changeScenP(2, 0, 0, state, box);  
    // going to contact area - 5th area
  } else if (offset > 0.8 && offset <= 0.9) {
    setContentBox("Contact");
    setActiveBox(true);
    changeCamP(1, 2, -1, state);
    changeScenP(0, 0, -2, state, box);
  } else if (offset > 0.9 && offset <= 1) {
    setActiveBox(false);
    changeCamP(0.5, 2, 1, state);
    
  }
}

function changeScenP(x: number, y: number, z: number, state: any, box:any) {
 
  gsap.to(box.current.position, {
    z,
    y,
    x,

    duration: 1.5,
    onUpdate: function () {
      state.camera.lookAt(0, 1, 0);
    },
  });
}
function changeCamP(x: number, y: number, z: number, state: any) {
  gsap.to(state.camera.position, {
    z,
    y,
    x,

    duration: 1.5,
    onUpdate: function () {
      state.camera.lookAt(0, 1, 0);
    },
  });
}
