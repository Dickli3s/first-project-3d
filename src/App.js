import { createRoot } from 'react-dom/client' 
import { Canvas, useFrame } from'@react-three/fiber'
import { useRef } from "react";
import { OrbitControls  } from '@react-three/drei'

import './App.css';
import React from "react";
 

function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01 
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[4, 4, 4]}/>
      <meshStandardMaterial color="white"/>
    </mesh>
  )
}


function App() {
  return (
    <div className="App">
      <Canvas>
        <RotatingBox />
        <ambientLight intensity={0.2}/>
        <directionalLight color={"blue"} position={[1, 1, 3]} />
        <OrbitControls />
      </Canvas> 
    </div>
  );

}

createRoot(document.getElementById('root')).render(<App />);
export default App;
