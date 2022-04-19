import { handleNavigateTo } from '../general'
window.addEventListener('load', function () {
    const footerItems = this.document.querySelectorAll('.footer__item')
    handleNavigateTo(footerItems)
    const footerButton = this.document.querySelector('.footer__mobile-button')
    footerButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})