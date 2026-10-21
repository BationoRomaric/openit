import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarfieldPoints() {
  const ref = useRef<THREE.Points>(null);
  const { size, viewport } = useThree();

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(25000 * 3);
    const colors = new Float32Array(25000 * 3);

    for (let i = 0; i < 25000; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 1500;
      positions[i3 + 1] = (Math.random() - 0.5) * 1500;
      positions[i3 + 2] = (Math.random() - 0.5) * 1500;

      const color = new THREE.Color();
      color.setHSL(0.55 + Math.random() * 0.15, 0.8, 0.6 + Math.random() * 0.4);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x = state.clock.elapsedTime * 0.015;
    ref.current.rotation.y = state.clock.elapsedTime * 0.025;
    ref.current.rotation.z = state.clock.elapsedTime * 0.01;

    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 30;
    ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 30;
  });

  const scale = viewport.width < 768 ? 1.2 : 1.8;

  return (
    <Points
      ref={ref}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={1.8 * scale}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function NebulaLayer() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x = state.clock.elapsedTime * 0.008;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={3}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.15}
      />
    </Points>
  );
}

function CameraController() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    camera.position.x = Math.sin(t * 0.08) * 80;
    camera.position.y = Math.cos(t * 0.08) * 80;
    camera.position.z = 60 + Math.sin(t * 0.04) * 40;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Starfield3D() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 60], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <CameraController />
        <StarfieldPoints />
        <NebulaLayer />
      </Canvas>
    </div>
  );
}