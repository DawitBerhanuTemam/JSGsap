gsap.to('.card', {
  opacity: 1,
  scale: 1.3,
  background: '#ff0000',
  duration: 1.2,
  onComplete: () => {
    console.log('animation complete')
  }
})