'use client'
import ScrollReveal from "@/providers/ScrollReveal"
import WarpText from "@/providers/Warptext"
import { motion } from "motion/react"

const AboutMe = () => {
    return (
        <div className="py-35 flex flex-col justify-center gap-8">
            {/* <motion.h1
                initial={{ opacity: 0, y: -45, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}

                viewport={{ once: true, amount: 1 }}
                className="title-text text-5xl text-center font-semibold">About Me</motion.h1> */}
            <WarpText
                text="About Me"
                color="#393E41"
                warpStrength={0.08}
                warpScale={1.7}
                speed={0.55}
                pointerInfluence={0.42}
                pointerStrength={0.38}
                refraction={0.018}
                ripple
                fontSize={80}
                fontWeight={800}


                letterSpacing={-0.06}
                lineHeight={0.9}
            />

            <div className="w-full flex justify-center items-center">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur
                    baseRotation={0}
                    blurStrength={2}
                    baseScale={3}
                    stagger={0.03}
                    animationStart="top 70%"
                    animationEnd="top 35%"
                    textClassName="about-text pt-0 h-fit lg:w-250"
                >
                    I'm Harsh Asoriya, a Full Stack MERN Developer based in Mumbai. I enjoy building modern web applications with a focus on clean design, smooth interactions, and scalable architecture. Whether it's a business website or a full-stack product, I like turning ideas into fast, user-focused digital experiences.
                </ScrollReveal>
            </div>

        </div>
    )
}

export default AboutMe