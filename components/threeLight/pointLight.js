import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { PointLightHelper } from "three";

var x = 0;
var y = 0;
var z = 0;

export default function PointLight(props) {
  const ref = useRef();

  // アニメーション
  var correctionX = props.position[0];
  var correctionY = props.position[1];
  var correctionZ = props.position[2];

  useFrame(() => {
    ref.current.position.x = 10 * Math.sin(x) + correctionX;
    ref.current.position.y = 10 * Math.sin(y) + correctionY;
    ref.current.position.z = 10 * Math.cos(z) + correctionZ;
    x += 0.025;
    y += 0.0125;
    z += 0.025;
  });

  // ヘルパー
  const sphereSize = 1;
  const scene = useThree();
  useEffect(() => {
    var pointLightHelper = new PointLightHelper(ref.current, sphereSize);
    scene.scene.add(pointLightHelper);
  });

  return <pointLight ref={ref} intensity={1} />;
}
