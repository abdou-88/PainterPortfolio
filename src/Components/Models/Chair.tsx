
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
                position={[-0.7, 0.3, -0.5]}
                rotation = {[-1.57,0,1.5]}
                scale={0.0015}
            />
        </group>
    );
}

useGLTF.preload("/Chair.glb");