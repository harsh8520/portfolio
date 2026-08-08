// providers/SmoothScroll.jsx

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const SmoothScroll = ({ children }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.06,
                wheelMultiplier: 0.3,
                smoothWheel: true,
                
            }}
        >
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;