document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.querySelector('.about__showmore')
    const aboutTextHidden = document.querySelector('.about__mobile-text--hidden')

    aboutButton.addEventListener('click', () => {
        if (aboutTextHidden.classList.contains('active')) {
            aboutTextHidden.classList.remove('active')
        } else {
            aboutTextHidden.classList.add('active')
        }
    })
})