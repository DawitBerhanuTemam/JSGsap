import gsap from "gsap";
gsap.set('.gsap-box', {
    opacity: 0,
    scale: .6,
    y: -100,

})
gsap.to('.gsap-box', {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1,
    ease: "back.out(1.7)",
})