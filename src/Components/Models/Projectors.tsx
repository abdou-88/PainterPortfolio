
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Projector(props:any) {
    const { nodes, materials } = useGLTF("/cinema_projector.glb");
    return (
        <group scale={0.26} position={[-4.5, 0.18, -10]} {...props} dispose={null}>
            <group
                position={[15.81, 0, 36.39]}
                rotation={[-Math.PI / 2, 0, -2.55]}
                scale={0.01}
            >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[2.28, 18.78, 11.97]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[1, 1, 0.23]}
                    >
                        <group position={[0, 0, -4.76]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder001_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.28, 79.21, 11.86]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[1, 1, 0.23]}
                    >
                        <group position={[0, 0, -4.76]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder002_Material_#31_0"].geometry}
                                material={materials.Material_31}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.35, 42.63, 11.87]}
                        rotation={[-Math.PI / 2, 0, 2.09]}
                    >
                        <group
                            position={[4.11, -26.08, -1.7]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl004_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[3.14, -3.72, 36.64]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl005_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.37, 36.41]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box008_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.48, -24.02]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box009_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.43, -3.83, -23.79]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl006_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.35, 42.63, 11.87]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <group
                            position={[4.11, -26.08, -1.7]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl010_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[3.14, -3.72, 36.64]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl011_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.37, 36.41]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box016_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.48, -24.02]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box017_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.43, -3.83, -23.79]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl012_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.35, 42.63, 11.87]}
                        rotation={[-Math.PI / 2, 0, 2.09]}
                    >
                        <group position={[-0.06, -26.09, -1.68]} rotation={[-0.51, 0, 0]}>
                            <group position={[0, -0.13, -42.42]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box018_Material_#30_0"].geometry}
                                    material={materials.Material_30}
                                />
                            </group>
                        </group>
                        <group
                            position={[4.11, -26.08, -1.7]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl013_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group position={[-0.1, -26.1, -1.71]} rotation={[-2.35, 0, 0]}>
                            <group position={[0, -0.19, -0.67]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box019_Material_#30_0"].geometry}
                                    material={materials.Material_30}
                                />
                            </group>
                        </group>
                        <group
                            position={[3.14, -3.72, 36.64]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl014_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.37, 36.41]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box020_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.48, -24.02]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box021_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.43, -3.83, -23.79]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl015_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.35, 42.63, 11.87]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <group position={[-0.06, -26.09, -1.68]} rotation={[-0.51, 0, 0]}>
                            <group position={[0, -0.13, -42.42]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box026_Material_#30_0"].geometry}
                                    material={materials.Material_30}
                                />
                            </group>
                        </group>
                        <group
                            position={[4.11, -26.08, -1.7]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl019_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group position={[-0.1, -26.1, -1.71]} rotation={[-2.35, 0, 0]}>
                            <group position={[0, -0.19, -0.67]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box027_Material_#30_0"].geometry}
                                    material={materials.Material_30}
                                />
                            </group>
                        </group>
                        <group
                            position={[3.14, -3.72, 36.64]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl020_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.37, 36.41]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box028_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.48, -24.02]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box029_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.43, -3.83, -23.79]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl021_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.35, 42.63, 11.87]}
                        rotation={[-Math.PI / 2, 0, 2.09]}
                    >
                        <group
                            position={[4.11, -26.08, -1.7]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl022_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[3.14, -3.72, 36.64]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl023_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.37, 36.41]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box032_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.48, -24.02]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box033_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.43, -3.83, -23.79]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl024_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.35, 42.63, 11.87]}
                        rotation={[-Math.PI / 2, 0, -2.09]}
                    >
                        <group
                            position={[4.11, -26.08, -1.7]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl025_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[3.14, -3.72, 36.64]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl026_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.37, 36.41]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box036_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0.78, -3.48, -24.02]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                            scale={[1, 0.69, 0.79]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box037_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.43, -3.83, -23.79]}
                            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["ChamferCyl027_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.28, 18.89, 11.86]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder003_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[2.28, 96.91, 11.86]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder004_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[2.28, 98.91, 11.86]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder005_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group position={[5.95, 98.91, 11.86]} rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box042_Material_#31_0"].geometry}
                            material={materials.Material_31}
                        />
                    </group>
                    <group
                        position={[2.28, 97.79, 11.86]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder006_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-20.21, 40.94, -1.23]}
                        rotation={[-1.3, 0.44, -2.16]}
                    >
                        <group position={[0, -0.13, -42.42]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box010_Material_#30_0"].geometry}
                                material={materials.Material_30}
                            />
                        </group>
                    </group>
                    <group
                        position={[-22.29, 40.93, 2.39]}
                        rotation={[Math.PI, Math.PI / 6, -Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["ChamferCyl007_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group position={[-20.2, 40.92, -1.26]} rotation={[1.1, 0.66, 2.26]}>
                        <group position={[0, -0.19, -0.67]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box011_Material_#30_0"].geometry}
                                material={materials.Material_30}
                            />
                        </group>
                    </group>
                    <group
                        position={[-2.45, 79.27, 12.73]}
                        rotation={[Math.PI, Math.PI / 6, -Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["ChamferCyl008_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-0.96, 79.04, 10.86]}
                        rotation={[Math.PI, Math.PI / 6, -Math.PI]}
                        scale={[1, 0.69, 0.79]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box012_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-1.06, 18.6, 10.81]}
                        rotation={[Math.PI, Math.PI / 6, -Math.PI]}
                        scale={[1, 0.69, 0.79]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box013_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-2.18, 18.84, 12.06]}
                        rotation={[Math.PI, Math.PI / 6, -Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["ChamferCyl009_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[2.28, 154.51, 11.86]}
                        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    >
                        <group position={[0, 0, -27.53]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder007_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group position={[2.3, 187.18, 11.25]}>
                        <group position={[-0.01, 0, -14.61]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder008_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[24.42, 190.37, 11.86]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={2.04}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box043_Material_#31_0"].geometry}
                            material={materials.Material_31}
                        />
                    </group>
                    <group
                        position={[2.28, 190.17, 11.86]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[1, 1, 0.77]}
                    >
                        <group position={[0, 0, -27.53]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder009_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.28, 150.96, 11.86]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder010_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[2.3, 205.37, 14.22]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <group position={[0, 0, -39.5]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box044_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[7.6, 167.47, 21.83]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={[0.71, 0.67, 0.33]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box045_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-16.5, 191.12, -1.44]}
                        rotation={[Math.PI, -Math.PI / 2, 0]}
                        scale={[-1, 1, 0.02]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box051_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-16.5, 190.21, -3.26]}
                        rotation={[Math.PI, -Math.PI / 2, 0]}
                        scale={[-1, 1, 0.02]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box052_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-16.23, 185.69, -2.26]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[-1, 1, 1]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder012_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-16.5, 186.41, -3.18]}
                        rotation={[Math.PI, -Math.PI / 2, 0]}
                        scale={[-1, 1, 0.02]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box053_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-16.5, 185.52, -1.44]}
                        rotation={[Math.PI, -Math.PI / 2, 0]}
                        scale={[-1, 1, 0.02]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Box054_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                    <group
                        position={[-16.46, 188.58, -11.5]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                        scale={[-1, 1.43, 1]}
                    >
                        <group position={[0, 0, 4.8]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box055_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[20.95, 188.58, -9.47]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[1, 1, 1.08]}
                    >
                        <group
                            position={[-0.31, 2.02, 0]}
                            rotation={[Math.PI / 2, Math.PI / 2, 0]}
                            scale={[1, 1.33, 1]}
                        >
                            <group position={[0, 0, 4.8]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box048_Material_#27_0"].geometry}
                                    material={materials.Material_27}
                                />
                            </group>
                        </group>
                        <group
                            position={[-0.35, -8.04, -3.07]}
                            rotation={[Math.PI / 2, Math.PI / 2, 0]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box046_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-0.35, -6.29, -2.17]}
                            rotation={[Math.PI / 2, Math.PI / 2, 0]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box050_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group position={[-0.08, -7.22, -2.89]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder011_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-0.35, -6.21, 1.63]}
                            rotation={[Math.PI / 2, Math.PI / 2, 0]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box049_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-0.35, -8.04, 2.53]}
                            rotation={[Math.PI / 2, Math.PI / 2, 0]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box047_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.29, 209.54, -8.63]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <group
                            position={[3.07, -7.19, -3.65]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box057_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.17, -5.44, -3.11]}
                            rotation={[0.44, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box058_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-1.63, -5.36, -3.11]}
                            rotation={[0.44, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box059_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-2.53, -7.19, -3.65]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box060_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0, -4.85, -2.78]}
                            rotation={[0.44, 0, Math.PI / 2]}
                            scale={[1, 0.96, 1]}
                        >
                            <group position={[7.47, 0, 4.8]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box056_Material_#27_0"].geometry}
                                    material={materials.Material_27}
                                />
                            </group>
                        </group>
                        <group
                            position={[2.89, -6.37, -3.38]}
                            rotation={[0, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder013_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.29, 165.16, -8.63]}
                        rotation={[Math.PI / 2, 0, -Math.PI]}
                    >
                        <group
                            position={[3.07, -7.19, -3.65]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box061_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[2.17, -5.44, -3.11]}
                            rotation={[0.44, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box062_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-1.63, -5.36, -3.11]}
                            rotation={[0.44, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box063_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[-2.53, -7.19, -3.65]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[1, 1, 0.02]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Box064_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                        <group
                            position={[0, -4.85, -2.78]}
                            rotation={[0.44, 0, Math.PI / 2]}
                            scale={[1, 0.96, 1]}
                        >
                            <group position={[7.47, 0, 4.8]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["Box065_Material_#27_0"].geometry}
                                    material={materials.Material_27}
                                />
                            </group>
                        </group>
                        <group
                            position={[2.89, -6.37, -3.38]}
                            rotation={[0, -Math.PI / 2, 0]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Cylinder014_Material_#27_0"].geometry}
                                material={materials.Material_27}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.3, 187.18, 6.07]}
                        rotation={[Math.PI, 0, -Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Tube001_Material_#29_0"].geometry}
                            material={materials.Material_29}
                        />
                    </group>
                    <group
                        position={[2.3, 187.18, -4.61]}
                        rotation={[Math.PI, 0, -Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cylinder015_Material_#29_0"].geometry}
                            material={materials.Material_29}
                        />
                    </group>
                    <group
                        position={[2.3, 187.18, -3.62]}
                        rotation={[Math.PI, 0, 0]}
                        scale={[1, 0.86, 1]}
                    >
                        <group position={[0, 0, -3.49]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes["Sphere001_Material_#28_0"].geometry}
                                material={materials.Material_28}
                            />
                        </group>
                    </group>
                    <group
                        position={[2.3, 187.18, 0.67]}
                        rotation={[Math.PI, 0, -Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Tube002_Material_#27_0"].geometry}
                            material={materials.Material_27}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/cinema_projector.glb");

