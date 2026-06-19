import { useInView } from "react-intersection-observer";
import ReactPlayer from 'react-player'
import styles from '../../sections/Projects-section/Projects.module.scss'


const VideoCard = ({project}) => {
    

    const {ref, inView} = useInView({
        threshold: 0.5,
    })

    // useEffect(()=> {
    //     if(!videoRef.current) return;

    //     if(inView) {
    //         videoRef.current.play().catch(()=> {})
    //     }
    //     else {
    //         videoRef.current.pause()
    //     }
    // },[inView])

  return (
    <div ref={ref} className={styles.videoContainer}>
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
    </div>
  )
}

export default VideoCard