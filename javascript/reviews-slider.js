const 
 sliderItem = document.querySelectorAll(".user__photo"),
 reviewsList= document.querySelector(".reviews__list"),
 review= document.querySelectorAll(".user__review"),
 sliderListLength = sliderItem.length;
 var stepRev = review[0].offsetWidth;
 var item = 0;
 sliderItem[item].style.border = "6px solid #0f5a47";
 for (let i = 0; i < sliderListLength; i++) {
    sliderItem[i].addEventListener("click", function(e) {
        e.preventDefault();
        var currentRight = 0;
        currentRight += i * stepRev;
        reviewsList.style.right = currentRight + "px";
        sliderItem[i].style.border = "6px solid #0f5a47";
        if (item != i)
            sliderItem[item].style.border = "6px solid transparent";
        item = i;
    });
 }
 

