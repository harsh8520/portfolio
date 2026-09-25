''
import SplitText from "@/providers/SplitText";
import Herotext from "@/components/Herotext";

export default function HeroSection() {

    return (
        <>

            <SplitText
                text="BUILDING"
                className="title-text font-semibold text-4xl lg:text-7xl tracking-tight leading-8 lg:leading-[0.8]"
                delay={25}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                tag="h1"
                showCallBack
            />
            <SplitText
                text="&nbsp;MODERN&nbsp;"
                className="text-(--accent-color) title-text font-semibold text-4xl lg:text-7xl tracking-tight leading-8 lg:leading-[0.8]"
                delay={25}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                tag="h1"
                showCallBack
            />
            <SplitText
                text="DIGITAL EXPERIENCES"
                className="title-text font-semibold text-4xl lg:text-7xl tracking-tight leading-8 lg:leading-[0.8]"
                delay={50}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                tag="h1"
                showCallBack
            />
            <br />
            <SplitText
                text="FULL STACK MERN DEVELOPER"
                className="para-text font-light text-xl lg:text-[32px] tracking-tight leading-8"
                delay={20}
                duration={1}
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


            <Herotext />
        </>
    )
}