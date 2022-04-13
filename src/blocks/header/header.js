import 'external-svg-loader'
const burgerButtons = document.querySelectorAll('.header__burger')
const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper')
const burgerMenu = document.querySelector('.burger-menu')
burgerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        if (burgerMenuWrapper.classList.contains('active')) {
            burgerMenuWrapper.classList.remove('active')
            burgerMenu.classList.remove('active')
        } else {
            burgerMenuWrapper.classList.add('active')
            burgerMenu.classList.add('active')
        }
    })
})

burgerMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('active')) {
        burgerMenuWrapper.classList.remove('active')
        burgerMenu.classList.remove('active')
    }
})