import gsap from "gsap";
const tabs = document.querySelectorAll('.tab')
const indicator = document.querySelector('.indicator')
const tabRow = document.querySelector('.tab-row')
const tabActive = document.querySelector('.tab.active')

const updateIndicator = (target) => {
    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRow.getBoundingClientRect();
    console.log(rowBounds)
    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left;
    console.log(width, offset, tabBounds, rowBounds)
    gsap.to(indicator, {
        x: offset,
        width: width,
        duration: .4,
        ease: 'back.out'
    })
}
tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach((t) => t.classList.remove('active'))
        tab.classList.add('active')
        updateIndicator(tab)
    })
})
updateIndicator(tabActive)