const aboutButton = document.querySelector(".aboutButton");
const worksButton = document.querySelector(".worksButton");
const aboutText = document.querySelector(".aboutText");
const worksText = document.querySelector(".worksText");

aboutButton.addEventListener("click", function () {
  aboutText.classList.remove("textHidden");
  worksText.classList.add("textHidden");
});

worksButton.addEventListener("click", function () {
  aboutText.classList.add("textHidden");
  worksText.classList.remove("textHidden");
});
