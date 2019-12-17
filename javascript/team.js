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
