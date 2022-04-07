const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector(".modal");

closeButton.addEventListener("click", function () {
  modal.classList.remove("active");
});

openButton.addEventListener("click", function () {
  modal.classList.add("active");
});
