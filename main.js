
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

