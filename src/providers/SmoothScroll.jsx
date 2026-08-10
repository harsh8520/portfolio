// providers/SmoothScroll.jsx

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.06,
                wheelMultiplier: 0.8,
                smoothWheel: true,
                syncTouch: true,
                syncTouchLerp: 0.1,
                touchMultiplier: 0.8,
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;