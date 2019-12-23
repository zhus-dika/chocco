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
const memberDescription = document.querySelectorAll(".member__description"),
memberName = document.querySelectorAll(".member__name-link"),
afterIcon = document.querySelectorAll(".member__name-after__icon");
membersNum = memberDescription.length;
var flag = [];
for (let i = 0; i < membersNum; i++) {
    flag[i] = 0;
    memberName[i].addEventListener('click', e=> {
        e.preventDefault();
        e.stopPropagation();
        if (flag[i]) {
            memberDescription[i].style.height= '0'; 
            afterIcon[i].style.transform = 'rotate(0deg)';           
            flag[i] = 0;
        } else {
            memberDescription[i].style.height= 'auto';
            afterIcon[i].style.transform = 'rotate(180deg)';
            flag[i] = 1;
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






