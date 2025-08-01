// const icon = document.querySelector('.icon')
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
//     // let isScrolling = false
//     if (window.scrollY > 500) {
//         icon.classList.add('show');
//         // if (!isScrolling) {

//         gsap.to(icon, {
//             y: -10,
//             duration: 1,
//             ease: 'circInOut',
//             backgroundColor: 'red',
//             repeat: -1,
//             yoyo: true
//         })
//         // }
//         // isScrolling = true
//     } else {
//         icon.classList.remove('show');
//     }

// })
const icon = document.querySelector('.icon');
let isAnimating = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        icon.classList.add('show');

        if (!isAnimating) {
            isAnimating = true;
            gsap.to(icon, {
                y: -10,
                duration: 1.5,
                ease: 'linear',
                repeat: -1,
                yoyo: true
            });
        }
    } else {
        icon.classList.remove('show');
        gsap.killTweensOf(icon);
        gsap.set(icon, { y: 0 });
        isAnimating = false;
    }
});


icon.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
