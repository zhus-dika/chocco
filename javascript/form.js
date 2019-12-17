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
form = document.querySelector(".order__form-tag");

sendButton.addEventListener('click', e => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("name", form.elements.name);
    formData.append("phone", form.elements.phone);
    formData.append("comment", form.elements.comment);
    formData.append("to", "zhus.dinara@gmail.com");
    var request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open("POST", "https://webdev-api.loftschool.com/sendmail");
    request.send(formData);
    request.addEventListener('load', () => {
        console.log(request.response);
    });
});
