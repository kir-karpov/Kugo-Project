
const modalToggle = document.querySelectorAll("[data-toggle=modal]");
const modalClose = document.querySelector(".icon-close");
const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");
modalClose.addEventListener ("click", (event) => {
  event.preventDefault();
  modal.classList.remove("is-open");
});
document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
      modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "Escape" && modal.classList.contains("is-open")) {
    modal.classList.toggle("is-open");
  }
});



const forms = document.querySelectorAll("form"); // Собираем формы
forms.forEach((form) => {
  const validation = new JustValidate(form, {
    errorFieldCssClass: "is-invalid",
  });
  validation
    .addField("[name=userphone]", [
      {
        rule: "required",
        errorMessage: "Укажите номер телефона",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "Максимально 15 символов",
      },
    ])
    .addField("[name=useremail]", [
      {
        rule: "required",
        errorMessage: "Укажите почтовый ящик",
      },
    ])
    
    .onSuccess((event) => {
      const thisForm = event.target; // наша форма
      const formData = new FormData(thisForm); // данные из нашей формы
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"), {
          method: thisForm.getAttribute("method"),
          body: formData,
        }).then((response) => {
          if (response.ok) {
            thisForm.reset();
            alert("Форма отправлена!)");
          } else {
            alert(response.statusText);
          }
        });
      };
      ajaxSend(formData);
    });
});
