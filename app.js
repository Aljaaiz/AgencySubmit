let closeBtn = document.getElementById('close')
let mobileMenu = document.getElementById('mobile-menu')
let hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})