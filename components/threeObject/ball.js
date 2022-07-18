import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";
import { TextureLoader } from "three";

export default function Ball(props) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  // テクスチャーの適用
  const earthTexture = useLoader(TextureLoader, "/img/earth.jpg")

  return (
    <animated.mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry args={[4, 64, 32]} />
      <meshPhysicalMaterial map={earthTexture} />
    </animated.mesh>
  );
}
