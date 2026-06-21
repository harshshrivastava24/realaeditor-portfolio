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

//  const scrollNext = () => {
//     carouselRef.current?.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

const scrollNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

      if (isAtEnd) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: clientWidth, 
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("https://sheetdb.io/api/v1/cz8coz0rwhpa1")
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

          <button onClick={() => setFilter("long-form")}>
            Long Form
          </button>
        </div>
      </div>
      <div ref={carouselRef} className={styles.projects}>
        {filteredProjects.map((project) => {
          return (
            // <div key={project.Url} className={styles.videoContainer}>
            //   <ReactPlayer
            //     src={project.Url}
            //     playing
            //     muted
            //     loop
            //     controls
            //     playsInline
            //     width="100%"
            //     height="100%"
            //   />
            // </div>
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