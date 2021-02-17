//Nav-Bar Animation
const navSlide = () => {
    const burger = document.getElementById('burger')
    const nav = document.getElementById('nav')
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach( (link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.4}s`
                }
    })
    burger.classList.toggle('toggle')
  })
}

navSlide()

//aos Library

AOS.init()




