// import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './MouseFollow.module.scss';
const MouseFollow = () => {
    const followerRef = useRef(null);

    const mousePos = useRef({x:0, y:0});
    const followerPos = useRef({x:0, y:0})

    useEffect(() => {
        const follower = followerRef.current;
        if (!follower) return;

        let animationFrameId;

        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;

            if(follower.style.opacity!= '1') follower.style.opacity = '1'
            // follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0px)`;
        }

        const render = () => {
            const ease = 0.1;

            followerPos.current.x += (mousePos.current.x- followerPos.current.x)*ease
            followerPos.current.y += (mousePos.current.y- followerPos.current.y)*ease

            follower.style.left = `${followerPos.current.x}px`
            follower.style.top = `${followerPos.current.y}px`

            animationFrameId = requestAnimationFrame(render);
        }

        window.addEventListener("mousemove", handleMouseMove)

        animationFrameId = requestAnimationFrame(render)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])
    return (
        <div ref={followerRef} className={styles.follower}></div>
    )
}

export default MouseFollow