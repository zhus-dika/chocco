const menu = document.querySelector('menu'),
menuItem = document.querySelector('.accordeon__item'),
menuListLength = menuItem.length;
console.log(menuListLength);

menu.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < menuListLength; i++){
        menuItem[i].classList.remove('.accordeon__item-hidden');
    }
});