const tabs = document.querySelectorAll("[data-tab-target]"),
    tabContents = document.querySelectorAll('[data-tab-content]'),
    menuBtn = document.querySelector('.fa-bars'),
    closeMenu = document.querySelector('.fa-xmark'),
    listGroup = document.querySelector('.list-group');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active-tab')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active-link')
        })

        tab.classList.add('active-link')
        target.classList.add('active-tab')
    })
});

menuBtn.addEventListener('click', () => {
    if (listGroup.style.right !== '0') {
        $(listGroup).animate({ right: '0px' }, 200)
    }
})

closeMenu.addEventListener('click', () => {
    if (listGroup.style.right !== '-300') {
        $(listGroup).animate({ right: '-300px' }, 200)
    }
})

