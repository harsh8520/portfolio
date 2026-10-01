"use client";

import projectDetails from "@/data/projectDetails";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    const projectsRef = useRef(null);
    const imageRefs = useRef([]);

    const [activeProject, setActiveProject] = useState(0);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            imageRefs.current.forEach((image, index) => {

                if (!image) return;

                ScrollTrigger.create({
                    trigger: image,
                    start: "center center",

                    onEnter: () => {
                        setActiveProject(index);
                    },

                    onEnterBack: () => {
                        setActiveProject(index);
                    },
                });

            });

        }, projectsRef);

        return () => ctx.revert();

    }, []);

    const active = projectDetails[activeProject];

    return (
        <main ref={projectsRef} className="lg:px-65 lg:pt-50 px-4 py-20">

            <h1 className="title-text text-4xl lg:text-6xl font-medium sticky top-0 z-10">
                MY <span className="text-(--accent-color)">BUILDS</span>
            </h1>

            <div className="flex justify-center gap-12 py-8 w-full">

                {/* LEFT — IMAGES */}
                <div className="flex flex-col w-full">

                    {projectDetails.map((project, i) =>
                        <div
                            key={project.slug}
                            ref={(el) => {
                                imageRefs.current[i] = el;
                            }}
                            className="min-h-screen flex items-center justify-center"
                        >
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full"
                            />
                        </div>
                    )}

                </div>

                {/* RIGHT — CONTENT */}
                <div className="w-[40%]">

                    <div className="sticky top-0 h-screen flex items-center">

                        <div>

                            <h2 className="title-text text-4xl">
                                {active.title}
                            </h2>

                            <p className="para-text mt-2">
                                {active.category}
                            </p>

                            <p className="para-text mt-8">
                                {active.description}
                            </p>

                            <h3 className="title-text text-2xl mt-8">
                                Tech Stack
                            </h3>

                            <div className="flex gap-3 mt-4 flex-wrap">
                                {active.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="para-text"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}