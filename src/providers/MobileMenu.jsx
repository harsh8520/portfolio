import { motion } from "motion/react";
import { Link } from "next-transition-router";
import Image from "next/image";

const MobileMenu = ({ setIsOpen, iconSize, isOpen }) => {

    const iconContainerVariants = {
        hidden: {
            x: 15,
            opacity: 0.3
        },

        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,

                staggerChildren: 0.08,
                delayChildren: 0.45,
            },
        },

        exit: {
            x: -15,
            opacity: 0.01,
            transition: {
                duration: 0.5,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const menuVariants = {
        hidden: {
            x: 15,
            opacity: 1,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            }
        },
        exit: {
            x: -15,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }

    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            x: 15,
        },

        visible: {
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },

        exit: {
            opacity: 0,
            filter: "blur(10px)",
            x: -15,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        },
    };

    const iconVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            y: 15,
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
            y: 15,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        },
    }

    return (
        <motion.div
            variants={iconContainerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'



            className="fixed pt-20 px-12 pb-8 flex flex-col gap-12 bg-(--primary) w-full z-10">
            <motion.nav
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"

                className="flex flex-col gap-8 text-4xl justify-center">

                <motion.div onClick={() => setIsOpen(!isOpen)} variants={itemVariants}>
                    <Link href="/" >Home</Link>
                </motion.div>

                <motion.div onClick={() => setIsOpen(!isOpen)} variants={itemVariants}>
                    <Link href="/#about">About</Link>
                </motion.div>

                <motion.div onClick={() => setIsOpen(!isOpen)} variants={itemVariants}>
                    <Link href="/#services">Services</Link>
                </motion.div>

                <motion.div onClick={() => setIsOpen(!isOpen)} variants={itemVariants}>
                    <Link href="/projects">Projects</Link>
                </motion.div>
            </motion.nav>

            <div className="w-fit flex gap-8 flex-wrap">
                <motion.a
                    variants={iconVariants}


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
                </motion.a>

                <motion.a
                    variants={iconVariants}


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
                </motion.a>

                <motion.a
                    variants={iconVariants}


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
                </motion.a>
            </div>
        </motion.div>
    )
}

export default MobileMenu