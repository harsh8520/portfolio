// providers/SmoothScroll.jsx

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.045,
                wheelMultiplier: 1,
                smoothWheel: true,
                syncTouch: true,
                touchMultiplier: 1,
                syncTouchLerp: 0.07
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;