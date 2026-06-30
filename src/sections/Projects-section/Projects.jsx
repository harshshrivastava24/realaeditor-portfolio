// import React from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.scss'
import { RiArrowRightLine } from '@remixicon/react'
import VideoCard from '../../components/VideoCard/VideoCard'

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Short Form', value: 'Shorts' },
  { label: 'Long Form', value: 'long' },
  { label: 'SaaS', value: 'Saas' }
];

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [filter, setFilter] = useState("all")

  const [showall, setShowAll] = useState(false)

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
      const cachedData = sessionStorage.getItem("portfolio_projects")

      if (cachedData) {
        setProjects(JSON.parse(cachedData));
        setLoading(false)
        return;
      }
      try {
        const scriptUrl = "https://script.google.com/macros/s/AKfycbzVR2r-H36e9KWu-f_s6fuAwQSahz_2hjKVAi-_hzUOCvkoeJXRvOvSCSFBwsIrR1Hu/exec"

        const res = await fetch(scriptUrl, {
          method: "GET",
          redirect: "follow"
        })
        const data = await res.json()

        setProjects(data);

        sessionStorage.setItem("portfolio_projects", JSON.stringify(data))
        setLoading(false)

      } catch (err) {
        console.log(err)

        if (!cachedData) {
          setError("Failed to load Projects")
          setLoading(false);
        }
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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setShowAll(false)
  }

  const filteredProjects = projects.filter((project) => {
    return filter === "all" || project.Category === filter;
  });

  const displayedProjects = (filter === "all" && !showall) ? filteredProjects.slice(0, 6)
    : filteredProjects;

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
    <section id='projects' className={styles.projectsSection}>
      <div className={styles.top}>
        <div className={`${styles.head} ${isLoaded ? styles.animated : ''}`}>Projects</div>
        <h1>Selected Editing Work</h1>

        <div className={styles.filters}>
          {CATEGORIES.map((cat)=> (
            <button
            key={cat.value}
            onClick={()=> handleFilterChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div ref={carouselRef} className={styles.projects}>
        {displayedProjects.map((project) => {
          return (
            <VideoCard key={project.Url} project={project} />
          )
        })}
      </div>
      <div className={styles.swipeBtn}
        onClick={scrollNext}>
        <RiArrowRightLine />
      </div>

      {filter === "all" && !showall && filteredProjects.length > 6 && (
        <div className={styles.actionContainer}>
          <button onClick={() => setShowAll(true)} className={styles.seeMoreBtn}>See More</button>
        </div>
      )}
    </section>
  )
}

export default Projects