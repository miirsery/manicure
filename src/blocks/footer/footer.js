import { handleNavigateTo, scrollToId } from '../general'
window.addEventListener('load', function () {
    const footerItems = this.document.querySelectorAll('.footer__item')
    handleNavigateTo(footerItems)
})