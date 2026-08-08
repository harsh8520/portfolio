"use client"
import gsap from 'gsap'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'

const Herotext = () => {
    const textRef = useRef(null)

    useEffect(() => {
        const split = new SplitType(textRef.current, {
            types: "lines",
        });

        gsap.from(split.lines, {
            opacity: 0,
            y: 15,
            filter: "blur(10px)",
            stagger: 0.08,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });

        return () => {
            split.revert();
        };
    }, []);

    const variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
            }
        }
    }

    const childrenVariant = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            y: -15,
        },

        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },

        exit: {
            opacity: 0,
            filter: "blur(10px)",
            y: -15,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        },
    }

    return (
        <>
            <motion.div
                initial={{
                    y: -15,
                    opacity: 0,
                    filter: "blur(5px)"
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    ease: 'easeIn',
                    duration: 0.3,
                    delay: 0.4
                }}
            >
                <Image
                    src='/hero-image.jpeg'
                    alt="Image"
                    width={250}
                    height={250}
                    className="hero-image"
                />
            </motion.div>

            <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'

                className="py-8 para-text tracking-tight text-[16px] leading-8 font-medium">

                {/* <motion.p variants={childrenVariant} >I design and develop fast, scalable, and user-focused</motion.p>
                <motion.p variants={childrenVariant} >web applications using the <span>MERN</span> stack. From concept to</motion.p>
                <motion.p variants={childrenVariant} >deployment, I build digital experiences that combine clean</motion.p>
                <motion.p variants={childrenVariant} >design with solid engineering</motion.p> */}
                <p
                    variants={childrenVariant}
                    className="para-text"
                    ref={textRef}
                >
                    I design and develop fast, scalable, and user-focused web
                    applications using the <span className='accent'>MERN</span> stack. From concept to
                    deployment, I build digital experiences that combine clean
                    design with solid engineering.
                </p>
            </motion.div>
        </>
    )
}

export default Herotext