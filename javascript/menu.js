/***************in promo section full screen menu********************/
function openNav() {
    document.querySelector(".promo__hidden-menu").style.width = "100%";
    document.querySelector("html").style.overflow = 'hidden';
}

function closeNav() {
    document.querySelector(".promo__hidden-menu").style.width = "0%";
    document.querySelector("html").style.overflow = 'visible';
}

/***************in menu section********************/
const menu = document.querySelector(".menu"),
 visibleMenuItem = document.querySelectorAll(".accordeon__item-visible"),
 hiddenMenuItem = document.querySelectorAll(".accordeon__item-hidden"),
 menuListLength = hiddenMenuItem.length;
 menu.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < menuListLength; i++){
        hiddenMenuItem[i].style.display = 'none';
    }
});

for (let i = 0; i < menuListLength; i++){
    visibleMenuItem[i].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        for (let j = 0; j < menuListLength; j++) {
            if (hiddenMenuItem[j].style.display == 'flex') {
                hiddenMenuItem[j].style.display = 'none';
            }
        }
        hiddenMenuItem[i].style.display = 'flex';
    });
}


