"use client"
import HamburgerIcon from "@/providers/HamburgerIcon";
import MobileMenu from "@/providers/MobileMenu";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SideNav() {
    const iconSize = 32
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div className="hidden fixed mt-45 ml-12 lg:flex flex-col gap-12">
                <nav className="flex flex-col gap-8 text-4xl justify-center">
                    <Link href="/">Home</Link>
                    <Link href="/#about">About</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/projects">Projects</Link>
                </nav>

                <div className="w-fit flex gap-8 flex-wrap">
                    <a
                        href="https://github.com/harsh8520"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/github-icon.svg"
                            alt="Github"
                            width={iconSize}
                            height={iconSize}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/harsh-asoriya-510b03216?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/linkedin-icon.svg"
                            alt="LinkedIn"
                            width={iconSize}
                            height={iconSize}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/harsh-asoriya-510b03216?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/instagram-icon.svg"
                            alt="Instagram"
                            width={iconSize}
                            height={iconSize}
                        />
                    </a>
                </div>
            </div>

            <div className="w-full flex justify-end">
                <button
                    className={`hamburger ${isOpen ? "open" : ""} z-11 lg:hidden`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Navigation"
                >
                    <HamburgerIcon />
                </button>
            </div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} iconSize={iconSize} />
                )}
            </AnimatePresence>
        </>
    );
}