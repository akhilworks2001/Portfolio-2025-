import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {

    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    console.log(props.isSmall)
    

    useGSAP(() => {
        gsap.to(
            targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true
            })
    })


  return (
      <mesh className="z-20" {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5} >
          <primitive object={scene} />
      </mesh>
  )
}

export default Target