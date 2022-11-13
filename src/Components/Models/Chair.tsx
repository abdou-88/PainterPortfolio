
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
                position={[0.001026, 0.57, 0]}
                rotation = {[-1.57,0,0]}
                scale={0.003}
            />
        </group>
    );
}

useGLTF.preload("/Chair.glb");