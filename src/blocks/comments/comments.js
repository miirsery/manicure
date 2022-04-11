import Swiper, { Autoplay, Navigation, Pagination } from "swiper"

import "swiper/swiper.scss"
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper(".comments__swiper", {
        slidesPerView: 1,
        modules: [Autoplay, Navigation, Pagination],
        // speed: 500,
        // loop: true,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    })
})
