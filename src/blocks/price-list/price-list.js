import Swiper, { Autoplay, Navigation } from "swiper"

import "swiper/swiper.scss"
import 'swiper/modules/navigation/navigation.scss'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper(".price-list__swiper", {
        slidesPerView: 1,
        modules: [Autoplay, Navigation],
        speed: 500,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
})