import { gsap } from "gsap";

gsap.fromTo(
    ".bar",
    { scaleY: 0.2, opacity: 0.5 },
    {
        scaleY: 1,
        opacity: 1,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        stagger: {
            each: 0.1,
            yoyo: true,
            repeat: -1
        }
    }
);
