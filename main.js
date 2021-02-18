//Nav-Bar Animation
const navSlide = () => {
    const burger = document.getElementById('burger')
    const nav = document.getElementById('nav')
    const navLinks = document.querySelectorAll('.nav-links li')
    const html = document.querySelector("html")
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
            if (nav.getAttribute("class").indexOf('nav-active') > -1){
                html.style.overflowY = 'hidden'
            } else {
                html.style.overflowY = 'visible'
            }
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




