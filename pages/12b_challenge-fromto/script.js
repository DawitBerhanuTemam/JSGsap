import gsap from "gsap";

document.querySelectorAll('.reactions button').forEach(button => {
    button.addEventListener('click', (e) => {
        const emoji = e.currentTarget.dataset.emoji;
        const emojiElem = document.createElement('span');
        emojiElem.textContent = emoji;
        emojiElem.className = 'floating-emoji';
        Object.assign(emojiElem.style, {
            position: 'absolute',
            left: `${e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2}px`,
            top: `${e.currentTarget.offsetTop}px`,
            fontSize: '2rem',
            pointerEvents: 'none',
            zIndex: 1000,
        });
        e.currentTarget.parentElement.appendChild(emojiElem);

        gsap.fromTo(emojiElem,
            {
                y: 0,
                scale: 1,
                rotation: 0,
                opacity: 1
            },
            {
                y: -100,
                scale: 1.5,
                rotation: 360,
                opacity: 0,
                duration: 1.2,
                ease: "power1.out",
                onComplete: () => emojiElem.remove()
            }
        );
    });
});
