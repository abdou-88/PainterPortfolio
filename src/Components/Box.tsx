import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useGLTF, useAnimations } from "@react-three/drei";
import { Vector3 } from "three";

export default function Box(props: JSX.IntrinsicElements["group"]) {
  const scroll = useScroll();
  const group: any = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF("/boxwithmainscene.glb");

  const { actions }: any = useAnimations(animations, group);

   const { size } = useThree();
   const [page, setPage] = useState(0);

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  useEffect(() => void (
    actions["Take 001"].play().paused = true
    
    ), [actions]);

     useEffect(() => {
      
       scroll.el.scrollLeft = size.width * (page - 1);
       
     }, [page, scroll.el, size.width]);



  useFrame((state, delta) => {
    const action: any = actions["Take 001"];
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = scroll.offset;
   
    action.time = THREE.MathUtils.damp(
      action.time,
      action.getClip().duration * (offset*2),
      100,
      delta
    );
      if (offset <= 0.50){
        
        state.camera.position.set(
          Math.sin(offset*2) * 10,
          Math.atan(offset * 2  * Math.PI * 2) * 6,
          Math.cos((offset * 2 * Math.PI) / 3) * -10
        );

        state.camera.position.set(
          Math.sin(offset*2) * 5,
          Math.atan(offset * 2 * Math.PI) * 6,
          Math.cos(offset * 2 * Math.PI) * -10
        );

   
        console.log(state.camera.position);
      }
       if (offset >= 0.5) {
        
         state.camera.position.set(
           Math.sin(offset * 2) * 5,
           Math.atan(offset * 2 * Math.PI) * 6,
           Math.cos(offset * 2 * Math.PI) * -10
         );
             state.camera.position.set(
               offset / 10,
               Math.atan(offset * 2 * Math.PI) * 6,
               Math.cos(offset * 2 * Math.PI) * -10
             );

       }
       state.camera.lookAt(0, 2, 0);
   
    
  });
  

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="fullBox" position={[0.02, 0.98, 0.03]}>
            <group name="backCover" position={[-0.02, 0.89, -0.96]}>
              <mesh
                name="backCoverMesh"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.backCoverMesh.geometry}
                material={materials.lambert4}
                position={[-0.02, 1.22, -1.12]}
              />
            </group>
            <group name="frontCover" position={[-0.02, 0.89, 0.89]}>
              <mesh
                name="frontCoverMesh"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.frontCoverMesh.geometry}
                material={materials.lambert4}
                position={[0.01, 1.13, 1.21]}
              />
            </group>
            <group name="Box" position={[-0.02, -1.28, -0.03]}>
              <mesh
                name="emptySide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.emptySide.geometry}
                material={materials.lambert2}
                position={[-0.83, 0.52, 0.01]}
              />
              <mesh
                name="EyesSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.EyesSide.geometry}
                material={materials.lambert2}
                position={[-0.02, 0.52, -0.82]}
              />
              <mesh
                name="RecycleSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.RecycleSide.geometry}
                material={materials.lambert2}
                position={[0.01, 0.52, 0.84]}
              />
              <mesh
                name="UpArrowSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.UpArrowSide.geometry}
                material={materials.lambert2}
                position={[0.83, 0.52, -0.01]}
              />
              <mesh
                name="bottomSide"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.bottomSide.geometry}
                material={materials.lambert2}
              />
            </group>
          </group>
          <group
            name="Armature"
            position={[0, 0.2, 0]}
            rotation={[1.64, -0.02, -3.14]}
            scale={0}
          >
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="result_mesh"
              // @ts-ignore
              geometry={nodes.result_mesh.geometry}
              material={materials["Material.002"]}
              // @ts-ignore
              skeleton={nodes.result_mesh.skeleton}
            />
          </group>
          <group
            name="Sketchfab_model"
            position={[0, 0.28, -0.02]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0}
          >
            <group name="chairobjcleanermaterialmergergles">
              <mesh
                name="Object_2"
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.Object_2.geometry}
                material={materials["default"]}
                position={[-1.21, -9.65, 8.77]}
                scale={0.96}
              />
            </group>
          </group>
          <mesh
            name="MainPaint"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.MainPaint.geometry}
            material={materials["Material.001"]}
            position={[-0.01, 0.46, -0.73]}
            rotation={[1.54, 0, 0]}
            scale={0.26}
          />
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes.Cube.geometry}
            material={materials["Material.003"]}
            position={[0, 0.45, -0.02]}
            rotation={[-0.23, 0, 0]}
            scale={-0.03}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/boxwithmainscene.glb");




// const Setup = () => {
//   const ref = useRef();
//   const snap = useSnapshot(state);

//   const scroll = useScroll();
//   const { size } = useThree();
//   const page = state.clicked;

//   useEffect(() => {
//     console.log(state.page);
//     scroll.el.scrollLeft = size.width * (page - 1);
//   }, [page, scroll.el, size.width]);

//   useFrame((state) => {
//     const step = 0.1;
//     switch (snap.clicked) {
//       case 1:
//         state.camera.lookAt(new Vector3(2.2, -0.4, -12.8));
//         state.camera.position.lerp(new Vector3(5.1, 0.1, 4.6), step);
//         state.camera.updateProjectionMatrix();
//         break;
//       case 2:
//         state.camera.lookAt(new Vector3(7, -2.9, -12.8));
//         state.camera.position.lerp(new Vector3(10.0, 0.58, 4.3), step);
//         state.camera.updateProjectionMatrix();
//         break;
//       case 3:
//         state.camera.lookAt(new Vector3(9, -0, -12.8));
//         state.camera.position.lerp(new Vector3(16.4, 0.5, 3.7), step);
//         state.camera.updateProjectionMatrix();
//         break;
//       case 4:
//         state.camera.lookAt(new Vector3(11.7, 0, -12.8));
//         state.camera.position.lerp(new Vector3(10.0, 0.58, 4.3), step);
//         state.camera.updateProjectionMatrix();
//         break;
//       case 5:
//         state.camera.lookAt(new Vector3(16.03, 0, 0));
//         state.camera.position.lerp(new Vector3(25.5, 0.5, 3.3), step);
//         state.camera.updateProjectionMatrix();
//         break;
//       default:
//         cameraPositionCurve.getPoint(scroll.offset, state.camera.position);
//         cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt);
//         state.camera.lookAt(cameraLookAt);
//         break;
//     }
//   });

//   return (
//     <>
//       <Model />
//     </>
//   );
// };