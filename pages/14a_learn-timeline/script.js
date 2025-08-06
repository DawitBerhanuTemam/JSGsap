import { gsap } from "gsap";

// Animate the cards in sequence
const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

tl.from(".card", {
    y: 100,
    opacity: 0,
    stagger: 0.2
})
    .from(".detail-page", {
        scale: 0.8,
        opacity: 0
    }, "-=0.4");
