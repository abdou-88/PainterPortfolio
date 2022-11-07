import gsap from "gsap";

export function ScrollAnimation(
  offset: number,
  setActiveBox: Function,
  setContentBox: Function,
  state: any
) {
  //first movement to zoom in to the character
  if (offset <= 0.1) {
    changeCamP(4, 7, 9, state), state;
  } else if (offset > 0.1 && offset <= 0.125) {
    changeCamP(1, 2, 1, state);
    setActiveBox(true);
    setContentBox("Boxfolio");
  } else if (offset > 0.125 && offset <= 0.15) {
    changeCamP(-1, 1.5, 1, state);
    setActiveBox(false);
  } else if (offset > 0.15 && offset <= 0.175) {
    changeCamP(-1, 1, -1, state);
  } else if (offset > 0.175 && offset <= 0.2) {
    changeCamP(1, 1, -1, state);
    changeScenP(0, 0, 0, state);
    setActiveBox(false);
    // going to selected works area   - second area
  } else if (offset > 0.2 && offset <= 0.25) {
    setActiveBox(true);
    setContentBox("Projects");
    changeCamP(1, 1, -1, state);
    changeScenP(0, 0, 4, state);    
  } else if (offset > 0.25 && offset <= 0.3) {
    setActiveBox(false);    
    changeCamP(1, 1, 1, state);
    changeScenP(0, 0, 4, state);
    // going to news area - 3rd area
  } else if (offset > 0.3 && offset <= 0.35) {
    setContentBox("news");
    setActiveBox(true);
    changeCamP(1, 2, 1, state);
    changeScenP(-4, 0, 0, state);    
  } else if (offset > 0.35 && offset <= 0.4) {
    setActiveBox(false);
    changeCamP(-1, 1, 1, state);    
    changeScenP(-4, 0, 0, state);
    // going to media area - 4th area
  } else if (offset > 0.4 && offset <= 0.45) {
    setContentBox("Media");
    setActiveBox(true);
    changeCamP(-1, 1, 1, state);
    changeScenP(4, 0, 0, state);    
  } else if (offset > 0.45 && offset <= 0.5) {
    setActiveBox(false);
    changeCamP(-1, 1, -1, state);
    changeScenP(4, 0, 0, state);  
    // going to contact area - 5th area
  } else if (offset > 0.5 && offset <= 0.55) {
    setContentBox("Contact");
    setActiveBox(true);
    changeCamP(1, 1, -1, state);
    changeScenP(0, 0, -4, state);
  } else if (offset > 0.55 && offset <= 0.6) {
    setActiveBox(false);
    changeCamP(1, 1, 1, state);
    
  }
}

function changeScenP(x: number, y: number, z: number, state: any) {
  gsap.to(state.scene.position, {
    z,
    y,
    x,

    duration: 1.5,
    onUpdate: function () {
      state.camera.lookAt(0, 0, 0);
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
      state.camera.lookAt(0, 0, 0);
    },
  });
}
