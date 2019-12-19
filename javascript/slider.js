/***************in slider********************/
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
 slider = document.querySelectorAll(".slider__content"),
 sliders = document.querySelector(".slider__list-content"),
 lengthItems = slider.length,
 left = document.querySelector(".left-arrow"),
 right = document.querySelector(".right-arrow");
 step = slider[0].offsetWidth;
 const minRight = 0;
 const maxRight = (lengthItems - 1) * step;
 let currentRight = 0; 
 right.addEventListener("click", function(e) {
   e.preventDefault();
   if (currentRight < maxRight) {
     currentRight += step;
   } else {
    currentRight = 0; 
   }
   sliders.style.right = currentRight + "px";
 });
 
 left.addEventListener("click", function(e) {
   e.preventDefault();
   if (currentRight > minRight) {
     currentRight -= step;
   } else {
     currentRight = maxRight; 
   }
   sliders.style.right = currentRight + "px";
 });

 /****** in tablets *****/
/*const 
leftTab = document.querySelector(".slider__img:before"),
rightTab = document.querySelector(".slider__img:after");
rightTab.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    sliders.style.right = currentRight + "px";
  }
});

leftTab.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    sliders.style.right = currentRight + "px";
  }
});*/
 