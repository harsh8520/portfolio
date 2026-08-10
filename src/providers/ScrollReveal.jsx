"use client"

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
    children,
    scrollContainerRef,

    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,

    baseScale = 3,
    baseY = 0,
    stagger = 0.15,

    animationStart = 'top 60%',
    animationEnd = 'top 20%',
    rotationEnd = 'bottom bottom',

    containerClassName = '',
    textClassName = ''
}) => {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';

        return text.split(' ').map((word, wordIndex) => (
            <span
                className="inline-block"
                key={wordIndex}
            >
                {word.split('').map((char, charIndex) => (
                    <span
                        className="inline-block letter"
                        key={charIndex}
                    >
                        {char}
                    </span>
                ))}

                {/* space between words */}
                {wordIndex < text.split(' ').length - 1 && '\u00A0'}
            </span>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        const ctx = gsap.context(() => {

            // --------------------------------
            // 1. ROTATION
            // --------------------------------

            gsap.fromTo(
                el,
                {
                    transformOrigin: '0% 50%',
                    rotate: baseRotation
                },
                {
                    rotate: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top 60%',
                        end: rotationEnd,
                        scrub: true
                    }
                }
            );


            // --------------------------------
            // 2. LETTER REVEAL + BLUR + SCALE
            // --------------------------------

            const letterElements = el.querySelectorAll('.letter');

            const letterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: animationStart,
                    end: animationEnd,
                    scrub: true,
                }
            });

            letterTimeline.fromTo(
                letterElements,
                {
                    opacity: baseOpacity,

                    // Your custom scale effect
                    scale: baseScale,

                    // Optional vertical movement
                    y: baseY,

                    filter: enableBlur
                        ? `blur(${blurStrength}px)`
                        : 'blur(0px)',
                },
                {
                    opacity: 1,

                    filter: 'blur(0px)',

                    // Your custom scale effect
                    scale: 1,

                    y: 0,

                    ease: 'none',

                    // Letter-by-letter
                    stagger: stagger,
                }
            );

        }, el);


        // Refresh after route changes/layout settles
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);


        return () => {
            clearTimeout(refreshTimer);
            ctx.revert();
        };

    }, [
        scrollContainerRef,
        enableBlur,
        baseOpacity,
        baseRotation,
        blurStrength,
        baseScale,
        baseY,
        stagger,
        animationStart,
        animationEnd,
        rotationEnd
    ]);


    return (
        <h2
            ref={containerRef}
            className={`my-5 ${containerClassName}`}
        >
            <p
                className={` w-full leading-[1.5] font-semibold ${textClassName}`}
            >
                {splitText}
            </p>
        </h2>
    );
};

export default ScrollReveal;