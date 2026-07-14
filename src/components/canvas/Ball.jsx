import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { canvasQueue } from "../../utils/CanvasQueue";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, index }) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const ballId = useRef(`ball-${index}-${Date.now()}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Request permission to render from the queue
      canvasQueue.request(ballId.current, (allowed) => {
        if (allowed) {
          setCanRender(true);
        }
      });
    } else {
      // Release the slot when not visible
      if (canRender) {
        canvasQueue.release(ballId.current);
        setCanRender(false);
      }
    }

    return () => {
      canvasQueue.release(ballId.current);
    };
  }, [isVisible, canRender]);

  return (
    <div ref={containerRef} className="w-28 h-28">
      {canRender ? (
        <Canvas
          frameloop='always'
          dpr={[1, 2]}
          gl={{ 
            preserveDrawingBuffer: true,
            antialias: false,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={4}
            />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full opacity-50">
          <div className="w-12 h-12 rounded-full border-4 border-gray-600 border-t-violet-500 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default BallCanvas;