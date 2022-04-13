import Swiper, { Autoplay, Navigation, Pagination } from "swiper"

import "swiper/swiper.scss"
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper(".comments__swiper", {
        slidesPerView: 1,
        modules: [Autoplay, Navigation, Pagination],
        speed: 500,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })

    const toggleButtons = document.querySelectorAll('.comments__button')
    const hiddenComments = document.querySelectorAll('.comments__text-item--hidden')
    const arrowsComments = document.querySelectorAll('.swiper-arrow')

    const handleToggleComment = (item, className) => {
        item.classList.toggle(className)
    }

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            hiddenComments.forEach(hiddenComment => handleToggleComment(hiddenComment, 'comments__text-item--active'))
        })
    })
    arrowsComments.forEach(arrow => {
        arrow.addEventListener('click', () => {
            hiddenComments.forEach(comment => {
                comment.classList.remove('comments__text-item--active')
            })
        })
    })

})
