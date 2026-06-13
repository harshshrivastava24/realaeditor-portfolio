// import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Booking.module.css'
import { RiInstagramLine, RiTwitterXLine } from '@remixicon/react';
import { InlineWidget } from 'react-calendly';

const Booking = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 100);

        return () => clearTimeout(timer)
    }, [])

    return (
        <section className={styles.bookingSection}>
            <div className={`${styles.heading} ${isLoaded ? styles.animated : ''}`}>Contact us</div>
            <div className={styles.booking}>
                <div className={styles.left}>
                    
                        <div className={styles.text}>
                            <h2>Book a Call</h2>
                            <p>Schedule a quick call to discuss your content, editing needs, and workflow. We’ll go over your goals and how we can support your channel.</p>
                        </div>
                        <div className={styles.mail}>
                            <h3>Email</h3>
                            <p>realaedits@gmail.com</p>
                        </div>
                    

                    <div className={styles.socials}>
                        <h3>Follow me on</h3>
                        <div className={styles.icons}>
                            <a href="#" className={styles.icon}><RiInstagramLine className={styles.btns} /></a>
                            <a href="#" className={styles.icon}><RiTwitterXLine className={styles.btns} /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <InlineWidget url='https://calendly.com/temp_calendly/30min'
                    styles={{ width: '100%', height: '100%' }}
                    pageSettings={{
                        backgroundColor:'0d0d0d',
                        primaryColor: 'ff0000',
                        textColor: 'f5f5f5',
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true
                    }}/>
                </div>
            </div>
        </section>
    )
}

export default Booking