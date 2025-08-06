import { gsap } from 'gsap'

// Select the toast elements
const toastOne = document.querySelector('.toast.one');
const toastTwo = document.querySelector('.toast.two');

// Hide both toasts initially
gsap.set([toastOne, toastTwo], { y: 100, opacity: 0 });

// Animate the first toast in, then out, then the second toast in, then out
gsap.to(toastOne, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
        gsap.to(toastOne, {
            delay: 1.5,
            y: -100,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
                gsap.to(toastTwo, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(toastTwo, {
                            delay: 1.5,
                            y: -100,
                            opacity: 0,
                            duration: 0.6,
                            ease: "power2.in"
                        });
                    }
                });
            }
        });
    }
});
