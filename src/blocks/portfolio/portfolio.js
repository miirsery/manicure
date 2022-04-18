document.addEventListener('DOMContentLoaded', () => {
    const portfolioButton = document.querySelector('.portfolio__button')
    const hiddenItems = document.querySelectorAll('.portfolio__content-item--hidden')
    portfolioButton.addEventListener('click', () => {
        hiddenItems.forEach(item => {
            if (item.classList.contains('visible')) {
                item.classList.remove('visible')
            } else {
                item.classList.add('visible')
            }
        })
    })
})