import gsap from "gsap";
const toast = document.querySelector('.toast')
console.log(toast)
const showToastLoop = () => {
    gsap.to(toast, {
        y: -120,
        opacity: 1,
        scale: 1,
        duration: 1,
        onComplete: () => {
            gsap.to(toast, {
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: 'power1.in'
            })
            setTimeout(() => {
                showToastLoop()
            }, 1500);
        }
    })
}
showToastLoop()