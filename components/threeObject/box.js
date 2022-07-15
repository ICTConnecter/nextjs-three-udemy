import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";

export default function Box(props){
    const ref = useRef();
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    useFrame(() => (ref.current.rotation.x += 0.01));
  
    const {scale} = useSpring({
      scale: clicked ? 2 : 1,
      config: config.wobbly,
    })
  
    return (
      <animated.mesh
        {...props}
        ref={ref}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={scale}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </animated.mesh>
    );
  };