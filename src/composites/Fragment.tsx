"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { Color } from "three";
import colors from "tailwindcss/colors";

const vertexShader = `
uniform float u_time;

varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 2.0) * 0.1;
  modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 1.0) * 0.1;
  
  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`

const fragmentShader = `
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;


void main() {
  vec2 normalizedPixel = gl_FragCoord.xy/1000.0;
  vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5); 
  gl_FragColor = vec4(color, 1.0);
}
`

type Props = {
  colorA: string,
  colorB: string
}

const MovingPlane: React.FC<Props> = ({ colorA, colorB }) => {
  const mesh = useRef<any>();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color(colorA) },
      u_colorB: { value: new Color(colorB) },
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 1;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry 
        args={[1, 1, 16, 16]} 
      />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

  
export const Scene: React.FC<Props> = ( props ) => (
    <Canvas style={{height: '100vh', width: '100vw'}} camera={{ position: [0.0, 0.3, 0.0] }}>
        <MovingPlane {...props} />
    </Canvas>
)