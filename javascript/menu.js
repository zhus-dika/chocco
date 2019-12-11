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
const navList = document.querySelector(".nav__list"),
hamburgerMenu = document.querySelector(".hamburger-menu-link");
var boo = 'false';
hamburgerMenu.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    if (boo == 'false') {
        navList.style.display = 'flex';
        boo = 'true';
    }
    else {
        navList.style.display = 'none';
        boo = 'false';
    }
});

