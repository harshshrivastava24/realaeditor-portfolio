import { useInView } from "react-intersection-observer";
import ReactPlayer from 'react-player'
import styles from '../../sections/Projects-section/Projects.module.scss'
import { useState } from "react";


const VideoCard = ({project}) => {
    
    const [hasLoaded, setHasLoaded] = useState(false)

    const {ref, inView} = useInView({
        threshold: 0.5,

        onChange : (inViewStatus) => {
          if(inViewStatus && !hasLoaded) {
            setHasLoaded(true)
          }
        }
    })

  return (
    <div ref={ref} className={styles.videoContainer}>
      {hasLoaded ? (
        <ReactPlayer
      src={project.Url}
      playing= {inView}
      muted = {true}
      loop = {true}
      playsInline = {true}
      controls = {true}
      width="100%"
      height="100%"
      />
      ) : (
        <div style={{width: '100%', height: '100%', backgroundColor: '#121212'}}></div>
      )}
    </div>
  )
}

export default VideoCard