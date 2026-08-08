'use client'
import ScrollReveal from "@/providers/ScrollReveal"
import { motion } from "motion/react"

const AboutMe = () => {
    return (
        <div className="py-25">
            <motion.h1
                initial={{ opacity: 0, y: -45, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                exit={{
                    opacity: 0,
                    y: -45,
                    filter: 'blur(10px)'
                }}
                viewport={{ amount: 1 }}
                className="title-text text-5xl text-center font-semibold">About Me</motion.h1>

            <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={2}
                blurStrength={10}
                textClassName="about-text pt-12"
            >
                I'm Harsh Asoriya, a Full Stack MERN Developer based in Mumbai. I enjoy building modern web applications with a focus on clean design, smooth interactions, and scalable architecture. Whether it's a business website or a full-stack product, I like turning ideas into fast, user-focused digital experiences.
            </ScrollReveal>
        </div>
    )
}

export default AboutMe