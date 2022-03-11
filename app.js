let closeBtn = document.getElementById('close')
let mobileMenu = document.getElementById('mobile-menu')
let hamburger = document.getElementById('hamburger')
let mobile_list = document.querySelectorAll('.mobile-list-item')

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})
mobile_list.forEach((item) => {
    item.addEventListener('click', function () {
        mobileMenu.classList.remove('active')
    })
})