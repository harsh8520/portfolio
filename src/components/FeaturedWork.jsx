'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const FeaturedWork = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const viewMoreRef = useRef(null)

    

    useLayoutEffect(() => {

        const section = sectionRef.current
        const viewMore = viewMoreRef.current

        if (!section || !viewMore) return

        // --------------------------------
        // HOVER ELEMENTS
        // --------------------------------

        const texts = viewMore.querySelectorAll('.view-text')
        const arrow = viewMore.querySelector('.view-arrow')

        gsap.set(arrow, {
            rotate: 0
        })

        const enter = () => {

            gsap.to(texts, {
                yPercent: -100,
                duration: 0.45,
                ease: 'power3.out'
            })

            gsap.to(arrow, {
                rotate: 45,
                duration: 0.45,
                ease: 'power3.out'
            })
        }

        const leave = () => {

            gsap.to(texts, {
                yPercent: 0,
                duration: 0.45,
                ease: 'power3.out'
            })

            gsap.to(arrow, {
                rotate: 0,
                duration: 0.45,
                ease: 'power3.out'
            })
        }

        // Add hover listeners
        viewMore.addEventListener('mouseenter', enter)
        viewMore.addEventListener('mouseleave', leave)
        


        // --------------------------------
        // GSAP
        // --------------------------------

        const ctx = gsap.context(() => {

            // PIN
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: '+=3000',
                pin: true,
            })


            // MAIN TIMELINE
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=3000',
                    scrub: true,
                }
            })


            // PROJECT 1
            tl.to(project1Ref.current, {
                x: '-300vw',
                duration: 1,
                ease: 'none',
            })


            // PROJECT 2
            tl.to(project2Ref.current, {
                x: '-300vw',
                duration: 1,
                ease: 'none',
            }, '-=0.6')


            // VIEW MORE
            tl.to(viewMore, {
                x: '-50%',
                opacity: 1,
                duration: 0.3,
                ease: 'none',
            })

        }, section)


        // --------------------------------
        // CLEANUP
        // --------------------------------

        return () => {

            viewMore.removeEventListener('mouseenter', enter)
            viewMore.removeEventListener('mouseleave', leave)
            ctx.revert()
        }

    }, [])

    return (
        <section className='relative h-screen overflow-hidden ' ref={sectionRef}>
            <div className='h-[80%] w-full relative top-[50%] translate-y-[-50%]  '>
                {/* TITLE */}
                <h2 className="absolute w-full text-center top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] font-semibold title-text text-5xl">
                    FEATURED WORK
                </h2>

                <div className='relative w-screen h-full '>
                    {/* PROJECT 1 */}
                    <Link
                        href='/projects/shiv-shakti'
                        ref={project1Ref}
                        className="absolute w-[150%] left-[95%]">
                        <img src="/project-1.png" />
                    </Link>



                    {/* PROJECT 2 */}
                    <Link
                        href='/projects/budget-quest-saga'
                        ref={project2Ref}
                        className="absolute w-[150%] bottom-0 right-[-200%]">
                        <img src="/project-2.png" />
                    </Link>
                </div>

                <Link
                    ref={viewMoreRef}
                    href="/projects"
                    className="
                            
                            flex
                            justify-center
                            items-center
                            w-max
                            gap-4
                            absolute
                            z-30
                            top-[60%]
                            left-[50%]
                            translate-x-[0%]
                            translate-y-[-50%]
                            opacity-0
                            cursor-pointer
                        "
                        
                >
                    {/* TEXT */}
                    <div className="relative h-max overflow-hidden">

                        {/* Current text */}
                        <h3 className="view-text block text-4xl w-fit font-semibold">
                            View More
                        </h3>

                        {/* Revealed text */}
                        <h3 className="view-text block absolute left-0 top-full text-4xl w-fit font-semibold">
                            View More
                        </h3>

                    </div>

                    {/* ARROW */}
                    <Image
                        className="view-arrow"
                        src="/Arrow_Up_Right.svg"
                        alt="View More"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        </section>
    )
}

export default FeaturedWork