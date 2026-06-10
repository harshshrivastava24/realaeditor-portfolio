// import React from 'react'
import styles from './Services.module.scss'

const Services = () => {
  const services_list = [
    {
      imgURL: "https://images.unsplash.com/photo-1780678839543-1abf5a0b8d71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sound Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      imgURL: "https://images.unsplash.com/photo-1780678839543-1abf5a0b8d71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sound Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      imgURL: "https://images.unsplash.com/photo-1780678839543-1abf5a0b8d71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sound Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ]
  return (
    <div className={styles.services}>
        <div className={styles.head}>
          <div className={styles.heading}>Services</div>
          <p>Everything you need to scale your content.</p>
        </div>
       <div className={styles.cards}>
        {services_list.map((elem)=>{
         return (
          <div className={styles.card}>
            <img src={elem.imgURL} alt="" />
            <div className={styles.title}>
              <h2>{elem.title}</h2>
            </div>
            <div className={styles.text}>
              <p>{elem.desc}</p>
            </div>
        </div>
         )
       })}
       </div>
    </div>
  )
}

export default Services