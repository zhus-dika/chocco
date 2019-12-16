const memberDescription = document.querySelectorAll(".member__description"),
memberName = document.querySelectorAll(".member__name-link");
membersNum = memberDescription.length;
var flag = [];
for (let i = 0; i < membersNum; i++) {
    flag[i] = 0;
    memberName[i].addEventListener('click', e=> {
        e.preventDefault();
        e.stopPropagation();
        if (flag[i]) {
            memberDescription[i].style.height= '0';            
            flag[i] = 0;
        } else {
            memberDescription[i].style.height= 'auto';
            flag[i] = 1;
        }
    });
}