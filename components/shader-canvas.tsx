"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import * as THREE from "three";

const VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uMouse;
  uniform vec3 uA;
  uniform vec3 uB;
  uniform vec3 uC;
  uniform float uVig;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 345.45));
    p += dot(p, p + 34.345);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.55;
    mat2 m = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p * 2.0 + 0.15;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 uv = vUv;
    vec2 p = uv * vec2(aspect, 1.0) * 1.5;
    float t = uTime * 0.06;
    vec2 m = (uMouse - 0.5) * 0.9;

    vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t * 0.8));
    vec2 r = vec2(
      fbm(p + 2.1 * q + vec2(1.7, 9.2) + m * 1.4 + 0.35 * t),
      fbm(p + 2.3 * q + vec2(8.3, 2.8) - m * 0.8 - 0.25 * t)
    );
    float f = fbm(p + 2.4 * r);

    vec3 col = mix(uA, uB, smoothstep(0.15, 0.95, f * 1.4));
    col = mix(col, uC, smoothstep(0.6, 1.05, r.y * 1.1) * 0.8);
    col = mix(col, uC * 0.9, smoothstep(0.7, 1.0, q.x) * 0.25);

    float vig = smoothstep(1.15, 0.3, length((uv - 0.5) * vec2(aspect * 0.85, 1.0)));
    col *= mix(1.0 - uVig, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

type Palette = readonly [string, string, string];

const DEFAULT_PALETTE: Palette = ["#f2f0e6", "#a7c4ae", "#dff06a"];

function Quad({
  palette,
  speed,
  vignette,
}: {
  palette: Palette;
  speed: number;
  vignette: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const target = useRef(new THREE.Vector2(0.5, 0.5));
  const size = useThree((s) => s.size);

  const [uniforms] = useState(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uRes: { value: new THREE.Vector2(1, 1) },
    uVig: { value: vignette },
    uA: { value: new THREE.Color(palette[0]) },
    uB: { value: new THREE.Color(palette[1]) },
    uC: { value: new THREE.Color(palette[2]) },
  }));

  const materialArgs = useMemo(
    () => ({
      vertexShader: VERT,
      fragmentShader: FRAG,
      depthTest: false,
      depthWrite: false,
      uniforms,
    }),
    [uniforms]
  );

  useFrame((_, dt) => {
    const mat = meshRef.current?.material as THREE.ShaderMaterial | undefined;
    if (!mat) return;
    mat.uniforms.uTime.value += Math.min(dt, 0.05) * speed;
    mat.uniforms.uMouse.value.lerp(target.current, 0.045);
    mat.uniforms.uRes.value.set(size.width, size.height);
  });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(
        e.clientX / window.innerWidth,
        1 - e.clientY / window.innerHeight
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial args={[materialArgs]} />
    </mesh>
  );
}

export default function ShaderCanvas({
  palette = DEFAULT_PALETTE,
  speed = 1,
  vignette = 0.12,
  className = "",
  style,
}: {
  palette?: Palette;
  speed?: number;
  vignette?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className={className} style={style}>
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance" as WebGLPowerPreference,
        }}
      >
        <Quad palette={palette} speed={speed} vignette={vignette} />
      </Canvas>
    </div>
  );
}
