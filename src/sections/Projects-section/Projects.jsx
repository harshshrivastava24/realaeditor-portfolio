// import React from 'react'
import { useEffect, useRef, useState } from 'react'
// import ReactPlayer from 'react-player'
import styles from './Projects.module.scss'
import { RiArrowRightLine } from '@remixicon/react'
import VideoCard from '../../components/VideoCard/VideoCard'
const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [filter, setFilter] = useState("all")

  const carouselRef = useRef(null)

const scrollNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      const gapInpx = 24

      const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

      if (isAtEnd) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: clientWidth + gapInpx, 
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      try {

        const scriptUrl = "https://script.google.com/macros/s/AKfycbzVR2r-H36e9KWu-f_s6fuAwQSahz_2hjKVAi-_hzUOCvkoeJXRvOvSCSFBwsIrR1Hu/exec"

        const res = await fetch(scriptUrl, {
          method: "GET",
          redirect: "follow"
        })
        const data = await res.json()

        setProjects(data);

        setLoading(false)

      } catch (err) {
        console.log(err)

        setError("Failed to load Projects")
        setLoading(false);
      }
    }

    getProjects()
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100);
    return () => clearTimeout(timer)
  }, [])


  const filteredProjects = projects.filter((project) => {
    return filter === "all" || project.Category === filter;
  });


  if (loading) {
    return (
      <section className={styles.projectsSection}>
        <p>Loading Projects...</p>
      </section>
    )
  }


  if (error) {
    return (
      <section className={styles.projectsSection}>
        <p>{error}</p>
      </section>
    )
  }

  return (
    <section className={styles.projectsSection}>
      <div className={styles.top}>
        <div className={`${styles.head} ${isLoaded ? styles.animated : ''}`}>Projects</div>
        <h1>Selected Editing Work</h1>

        <div className={styles.filters}>
          <button onClick={() => setFilter("all")}>
            All
          </button>

          <button onClick={() => setFilter("Shorts")}>
            Short Form
          </button>

          <button onClick={() => setFilter("long")}>
            Long Form
          </button>
          <button onClick={() => setFilter("Saas")}>
            Saas
          </button>
        </div>
      </div>
      <div ref={carouselRef} className={styles.projects}>
        {filteredProjects.map((project) => {
          return (
            <VideoCard key={project.Url} project = {project}/>
          )
        })}
      </div>
      <div className={styles.swipeBtn}
      onClick={scrollNext}>
        <RiArrowRightLine/>
      </div>
    </section>
  )
}

export default Projects