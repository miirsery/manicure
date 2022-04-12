const burgerButtons = document.querySelectorAll('.header__burger')
const burgerMenu = document.querySelector('.burger-menu')
burgerButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active')
        } else {
            burgerMenu.classList.add('active')
        }
    })
})
