"use client";

import { useTransitionState } from "next-transition-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";
import { Link } from "next-transition-router";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ProjectDetailClient = ({ project }) => {
    const descriptionRef = useRef(null)
    const techStackRef = useRef(null)
    const linksRef = useRef(null)
    const titleRef = useRef(null)

    const { isReady } = useTransitionState()

    useLayoutEffect(() => {
        if (!isReady) return;

        const splits = [];

        const ctx = gsap.context(() => {

            const paragraphs =
                descriptionRef.current.querySelectorAll("p");

            paragraphs.forEach((paragraph) => {
                const split = new SplitText(paragraph, {
                    type: "lines",
                });

                splits.push(split);

                gsap.from(split.lines, {
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power3.out",
                    delay: 0.2,

                    scrollTrigger: {
                        trigger: paragraph,
                        start: "top 70%",
                    },
                });

                gsap.to(titleRef.current, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    filter: 'blur(10px)',

                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 120px",
                        end: "top 10px",
                        scrub: true,
                    },
                });
            });

            const techItems =
                techStackRef.current.querySelectorAll(".tech-item");

            gsap.from(techItems, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                filter: "blur(10px)",
                delay: 0.3,

                scrollTrigger: {
                    trigger: techStackRef.current,
                    start: "top 80%",
                },
            });

            const links =
                linksRef.current.querySelectorAll(".project-link");

            gsap.from(links, {
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.3,

                scrollTrigger: {
                    trigger: linksRef.current,
                    start: "top 85%",
                },
            });

        }, descriptionRef);

        return () => {
            splits.forEach((split) => split.revert());
            ctx.revert();
        };

    }, [isReady]);

    return (
        <>
            <main className="lg:px-55 px-8 relative">
                <div className="pt-8 text-2xl sticky top-0 cursor-pointer z-3 w-fit">
                    <Link href="/" className="para-text text-(--accent-color)">
                        &lt; Back
                    </Link>
                </div>

                <h1 ref={titleRef} className="title-text text-3xl lg:text-6xl font-medium pt-22 lg:pt-20 fixed top-0 z-0">
                    {project.title}
                </h1>

                <div className="flex flex-col gap-20">
                    <div className="w-full flex flex-col z-2 gap-20 py-25 lg:py-30">
                        {project.images.map((img, i) => (
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    filter: 'blur(20px)',
                                    y: 20
                                }}
                                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, amount: 0.5 }}
                                src={img}
                                key={i}
                                className="shadow-xl w-full"
                            />
                        ))}
                    </div>

                    <div className="border-t-2 border-(--accent-color) h-80vh lg:h-[80vh] flex flex-col gap-8">
                        <div className="w-full lg:w-[80%] flex flex-col gap-8 pt-8" ref={descriptionRef} >
                            {project.description.map((para, i) => (
                                <p
                                    key={i}
                                    className="para-text font-light text-lg lg:text-2xl leading-10"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>

                        <h3 className="py-2 border-b-2 border-(--accent-color) text-3xl title-text font-normal">
                            Tech Stack
                        </h3>

                        <div className="flex flex-wrap gap-8 lg:justify-around pt-2 pointer-events-none select-none" ref={techStackRef}>
                            {project.techStack.map((tech, i) => (
                                <div
                                    key={i}
                                    className="para-text tech-item border border-(--accent-color) text-2xl py-2 px-6 rounded-full font-light"
                                >
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between lg:gap-24 py-15" ref={linksRef} >

                            {project.github && (
                                <Link
                                    href={project.github}
                                    className="flex justify-center items-center gap-4 lg:gap-4 project-link"
                                >
                                    <img
                                        src="/github-icon.svg"
                                        className="lg:w-10"
                                    />

                                    <p className="para-text text-xl lg:text-3xl">
                                        Github Repo
                                    </p>

                                    <img
                                        src="/Arrow_Up_Right.svg"
                                        className="lg:w-10"
                                    />
                                </Link>
                            )}

                            <Link
                                href={project.liveDemo}
                                className="flex justify-center items-center gap-6 project-link"
                            >
                                <p className="para-text text-xl lg:text-3xl">
                                    Live
                                </p>

                                <img
                                    src="/Arrow_Up_Right.svg"
                                    className="lg:w-10"
                                />
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
};

export default ProjectDetailClient;