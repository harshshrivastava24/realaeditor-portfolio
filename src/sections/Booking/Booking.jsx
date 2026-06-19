// import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Booking.module.scss'
import { RiInstagramLine} from '@remixicon/react';
import Cal, { getCalApi } from '@calcom/embed-react';



const Booking = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: { brandColor: "#000000" }
                },
                hideEventTypeDetails: true,
                layout: "month_view"
            });
        })();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 100);

        return () => clearTimeout(timer)
    }, [])

    return (
        <section className={styles.bookingSection}>
            <div className={styles.booking}>
                <div className={styles.left}>
                    <div className={`${styles.heading} ${isLoaded ? styles.animated : ''}`}>Contact us</div>

                    <div className={styles.leftText}>
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
                                <a href="#" aria-label='Instagram' className={styles.icon}><RiInstagramLine className={styles.btns} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <Cal
                        calLink="temp-acc/30min"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "scroll"
                        }}
                        config={{
                            layout: "month_view",
                            theme: "dark"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Booking