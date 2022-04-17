window.addEventListener('load', function () {
    let menu = document.querySelector('.burger-menu__wrapper');

    if (window.location.hash != '') {
        scrollToId(window.location.hash);
    }

    const items = menu.querySelectorAll('.burger-menu__link')
    handleNavigateTo(items)
});

export function handleNavigateTo(values) {
    values.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            clearItems(values)
            scrollToId(item.hash);
            item.classList.remove('active')
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            } else {
                item.classList.add('active')
            }
        })
    })
}

function clearItems(values) {
    values.forEach(item => {
        item.classList.remove('active')
    })
}

function scrollToId(id) {
    let target = document.querySelector(id);

    if (target !== null) {
        let pos = target.offsetTop - 150;

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
}
