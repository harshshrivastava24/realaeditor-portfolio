// import React from 'react'

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer";

const VideoCard = ({src}) => {
    const videoRef = useRef(null);

    const {ref, inView} = useInView({
        threshold: 0.5,
    })

    useEffect(()=> {
        if(!videoRef.current) return;

        if(inView) {
            videoRef.current.play().catch(()=> {})
        }
        else {
            videoRef.current.pause()
        }
    },[inView])

  return (
    <div ref={ref}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />
    </div>
  )
}

export default VideoCard