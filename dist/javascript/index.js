/************************form section*****************************/
function validateField (field) {
    filed.nextElementSibling.textContent = filed.validationMessage;
    return field.checkValidity();
}
function validateForm(orderForm) {
    let valid = true;
    if (!validateField(orderForm.elements.name) || 
    !validateField(orderForm.elements.phone) ||
    !validateField(orderForm.elements.email)
    ) {
        valid = false;
    }
}
const sendButton = document.querySelector('#order__form-button'),
form = document.querySelector("#order-form");

sendButton.addEventListener('click', e => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name", form.elements.name.value);
    formData.append("phone", form.elements.phone.value);
    formData.append("comment", form.elements.comment.value);
    formData.append("to", "zhus.dinara@gmail.com");
    var request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open("POST", "https://webdev-api.loftschool.com/sendmail");
    request.send(formData);
    request.addEventListener('load', () => {
        const successOverlay = createOverlay(request.response.message);
        console.log(request.response);
        document.body.appendChild(successOverlay);
    });
});

function createOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("container__overlay");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}
/************************reviews section*****************************/
const 
 sliderItem = document.querySelectorAll(".user__photo"),
 reviewsList= document.querySelector(".reviews__list"),
 item = document.querySelectorAll(".reviews__slider-item"),
 review= document.querySelectorAll(".user__review"),
 sliderListLength = sliderItem.length;
 var itemNum = 0;
 var stepRev = review[0].offsetWidth;
 for (let i = 0; i < sliderListLength; i++) {
    sliderItem[i].addEventListener("click", function(e) {
        e.preventDefault();
        var currentRight = 0;
        currentRight += i * stepRev;
        reviewsList.style.right = currentRight + "px";
        if (itemNum != i) {
          item[i].classList.add("slider__active");
          item[itemNum].classList.remove("slider__active");
          itemNum = i;
        }
    });
 }
 


/************************slider section*****************************/
const sliderHiddenMenu = document.querySelectorAll(".slider__hidden-menu"),
content = document.querySelectorAll(".slider__bars-img");
const contentLength = content.length;
for (let i = 0; i < contentLength; i++) {
    content[i].onmouseover = function(e) {
        e.preventDefault();
        e.stopPropagation();
        sliderHiddenMenu[i].style.display = 'block';
    };
    content[i].onmouseout = function(e) {
        e.preventDefault();
        e.stopPropagation();
        sliderHiddenMenu[i].style.display = 'none';
    };
}

/****** in desktop *****/
const 
 slider = document.querySelector(".slider__list-content"),
 left = document.querySelector(".left-arrow"),
 right = document.querySelector(".right-arrow");

 right.addEventListener("click", function(e) {
   loop("right",e);
 });
 left.addEventListener("click", function(e) {
  loop("left",e);
 });
 function loop (direction, e) {
   e.preventDefault();
   if (direction === "right") {
     slider.appendChild(slider.firstElementChild);
   } else {
     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
   }
 }
 
/************************team section*****************************/
const memberName = document.querySelectorAll(".member__name-link"),
teamMembers = document.querySelectorAll(".team__member");
membersNum = teamMembers.length;
var flag = [];
for (let i = 0; i < membersNum; i++) {
    flag[i] = 0;
    memberName[i].addEventListener('click', e=> {
        e.preventDefault();
        e.stopPropagation();
        if(!flag[i]){
          for (let j = 0; j < membersNum; j++) {
            if (flag[j]) {
              teamMembers[j].classList.remove('team__member-active');
              flag[j] = 0;
            }
          }
          teamMembers[i].classList.add('team__member-active');
          flag[i] = 1;
        } else {
          teamMembers[i].classList.remove('team__member-active');
          flag[i] = 0;
        }
    });
}

/************************menu section*****************************/
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

/*************************one page scroll***********************/

const sections = document.querySelectorAll('section'),
maincontent = document.querySelector('.main-content'),
scrollMenu = document.querySelectorAll('.fixed-menu__item'),
md = new MobileDetect(window.navigator.userAgent),
isMobile = md.mobile();
let inScroll = false;
const performTransition = sectionEq => {
  const transitionIsOver = 1000,
  mouseInertion = 300;
  if (!inScroll) {
    inScroll = true;
    const position = sectionEq * -100;
    sections.forEach(ele => {
      if (ele.classList.contains('active')) {
        ele.classList.remove('active');
      }
    });
    sections[sectionEq].classList.add('active');
    maincontent.style.transform = `translateY(${position}%)`;
  }
  setTimeout(() => {
    inScroll = false;
    sections.forEach(ele => {
      if (ele.classList.contains('visible')) {
        ele.classList.remove('fixed-menu__item--active');
      }
    });
    scrollMenu.forEach(ele => {
      if (ele.classList.contains('fixed-menu__item--active')) {
        ele.classList.remove('fixed-menu__item--active');
      }
    });
    scrollMenu[sectionEq].classList.add('fixed-menu__item--active');
  }, transitionIsOver + mouseInertion);
}
const scrollToSection = direction => {
  let activeSection, i = 0, num;
  sections.forEach(ele => {
    if (ele.classList.contains('active')) {
      activeSection = ele;
      num = i;
    }
    i++;
  });
  const prevSection = activeSection.previousElementSibling;
  const nextSection = activeSection.nextElementSibling;
  if (direction === 'next' && nextSection) {
    performTransition(num + 1);
  }
  if (direction === 'prev' && prevSection) {
    performTransition(num - 1);
  }
}
window.addEventListener('wheel', e => {
  const deltaY = e.deltaY;
  if (deltaY > 0) {
    scrollToSection('next');
  }
  if (deltaY < 0) {
    scrollToSection('prev');
  }
});
/*************for keyboard**************/
window.addEventListener('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  if (tagName != 'input' && tagName != 'textarea') {
    switch (e.key){
      case 'ArrowDown': {
        scrollToSection('next');
        break;
      }
      case 'ArrowUp': {
        scrollToSection('prev');
        break;
      }
    }
  }
});
/*************************for phones**************************/
if (isMobile) {
  $("body").swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ){
      const scrollDirection = direction == 'up' ? 'next': 'prev';
      scrollToSection(scrollDirection);
    }
  });
}

/********************** fixed menu ***************************/
const fixedMenuLinks = document.querySelectorAll('.fixed-menu__link'),
fixedMenuItems = document.querySelectorAll('.fixed-menu__item'),
sizeFixedMenuLinks = fixedMenuLinks.length;
for(let i = 0; i < sizeFixedMenuLinks;  i++) {
  fixedMenuLinks[i].addEventListener('click', e => {
    e.preventDefault();
    let secNum = fixedMenuLinks[i].getAttribute("data-scroll-to");
    performTransition(secNum);
  });
}
/***********************navigation in promo section*************************/
const navItems = document.querySelectorAll('.nav__item'),
sizeNavItems =  navItems.length;
for(let i = 0; i < sizeNavItems; i++) {
  navItems[i].addEventListener('click', e => {
    e.preventDefault();
    if (i == sizeNavItems - 1) i++;
    performTransition(i + 1);
  });
}
/***********************navigation in overlay*************************/
const navItemsHidden = document.querySelectorAll('.nav__item-hidden'),
sizeNavItemsHidden =  navItems.length;
for(let i = 0; i < sizeNavItemsHidden; i++) {
  navItemsHidden[i].addEventListener('click', e => {
    e.preventDefault();
    if (i == sizeNavItems - 1) i++;
    performTransition(i + 1);
  });
}

/******************************yandex map************************************/
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [51.1, 71.46],
              zoom: 11
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          
          /*myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '../pictures/map/map-icon.png',
              // Размеры метки.
              iconImageSize: [30, 42],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),*/
  
          myPlacemarkWithContent = new ymaps.Placemark([51.139375, 71.489745], {
              hintContent: 'Добро пожалвать!',
              balloonContent: 'Новогодняя акция!!! Спешите!',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: './pictures/map/map-icon.png',
              // Размеры метки.
              iconImageSize: [45, 55],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
          myMap.behaviors.disable('scrollZoom') 
      myMap.geoObjects
          .add(myPlacemarkWithContent);
  });