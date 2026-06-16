// import React from 'react'
import { useEffect, useState } from 'react'
// import ReactPlayer from 'react-player'
import styles from './Projects.module.scss'
import VideoCard from '../../components/VideoCard/VideoCard'
const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [filter, setFilter] = useState("all")

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
      <div className={styles.projects}>
        {filteredProjects.map((project) => {
          return (
            <div key={project.Url} className={styles.videoContainer}>
              <VideoCard src = {project.Url}/>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects