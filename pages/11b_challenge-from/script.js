import gsap from "gsap";



const card = document.getElementById("card");
console.log(card)

if (card) {
    // Set initial state for 3D effect
    gsap.set(card, {
        transformStyle: "preserve-3d",
        perspective: 800,
    });
    gsap.set(".card-back", { rotationY: 180 });
    gsap.set(".card-face", { backfaceVisibility: "hidden" });

    // Flip on hover
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            rotationY: 180,
            duration: 0.7,
            ease: "power2.inOut",
            transformOrigin: "center center",
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            rotationY: 0,
            duration: 0.7,
            ease: "power2.inOut",
            transformOrigin: "center center",
        });
    });
} else {
    console.error('Element with id "card" not found.');
}
