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
    formData.append("name", form.elements.name);
    formData.append("phone", form.elements.phone);
    formData.append("comment", form.elements.comment);
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
