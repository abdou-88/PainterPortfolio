
import { useGLTF } from "@react-three/drei";




export function Chair(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/Chair.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                // @ts-ignore
                geometry={nodes.ChairOb.geometry}
                material={materials["default"]}
                position={[0.001026, 0.285, 0.015]}
                rotation = {[-1.57,0,0]}
                scale={0.0014}
            />
        </group>
    );
}

useGLTF.preload("/Chair.glb");