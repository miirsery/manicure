import Swiper, { Autoplay, Navigation, Pagination } from "swiper"

import "swiper/swiper.scss"
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

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

    new Swiper(".portfolio__swiper", {
        slidesPerView: 1,
        modules: [Autoplay, Navigation, Pagination],
        speed: 500,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-portfolio-button-next",
            prevEl: ".swiper-portfolio-button-prev",
        },
        pagination: {
            el: '.swiper-portfolio-pagination'
        }
    })
})