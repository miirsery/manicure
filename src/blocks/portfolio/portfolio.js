document.addEventListener('DOMContentLoaded', () => {
    const portfolioButton = document.querySelector('.portfolio__button')
    const hiddenItems = document.querySelectorAll('.portfolio__content-item--hidden')
    portfolioButton.addEventListener('click', () => {
        // portfolioContent.classList.contains('acitve')
        // if (portfolioContent.classList.contains('acitve')) {
        //     portfolioContent.classList.remove('acitve')
        //     hiddenItems.classList.remove('visible')
        // } else {
        //     portfolioContent.classList.add('acitve')
        //     hiddenItems.classList.add('visible')
        // }
        hiddenItems.forEach(item => {
            if (item.classList.contains('visible')) {
                item.classList.remove('visible')
            } else {
                item.classList.add('visible')
            }
        })
    })
})