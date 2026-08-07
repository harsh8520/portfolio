
import SplitText from "@/providers/SplitText";
import Herotext from "@/providers/Herotext";

export default function HeroSection() {
    
    return (
        <>
            <div className="">
                <SplitText
                    text="BUILDING "
                    className="title-text font-semibold text-4xl tracking-tight leading-8"
                    delay={15}
                    duration={0.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.6}
                    rootMargin="-100px"
                    textAlign="left"
                    tag="h1"
                    showCallBack
                />
                <SplitText
                    text="&nbsp; MODERN"
                    className="text-(--accent-color) title-text font-semibold text-4xl tracking-tight leading-8"
                    delay={15}
                    duration={0.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.6}
                    rootMargin="-100px"
                    textAlign="left"
                    tag="h1"
                    showCallBack
                />
                <SplitText
                    text="DIGITAL EXPERIENCES"
                    className="title-text font-semibold text-4xl tracking-tight leading-8"
                    delay={15}
                    duration={1.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.6}
                    rootMargin="-100px"
                    textAlign="left"
                    tag="h1"
                    showCallBack
                />
                {/* <h1 className="title-text font-semibold text-4xl tracking-tight leading-8">BUILDING <span>MODERN</span> DIGITAL EXPERIENCES</h1> */}
                {/* <p className="para-text font-light text-xl">FULL STACK MERN DEVELOPER</p> */}

                <SplitText
                    text="FULL STACK MERN DEVELOPER"
                    className="para-text font-light text-xl tracking-tight leading-8"
                    delay={20}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                    tag="p"
                    showCallBack
                />
            </div>

            <Herotext />
        </>
    )
}