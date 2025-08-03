import gsap from "gsap";
const repeat = document.querySelector('.repeat')
const FromAnimation = () => {
    gsap.from('.card', {
        stagger: 0.1,
        y: 60,
        opacity: 0,
        ease: 'power2.out',
        duration: .5,

    })
}
repeat.addEventListener('click', () => {
    FromAnimation().restart()
})