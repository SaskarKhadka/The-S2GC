var aboutModal = document.getElementById("about-modal");
var modalContent = document.getElementById("about-modal-content");

document.getElementById("about-btn").addEventListener("click", function () {
  aboutModal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});

document
  .getElementsByClassName("about-close")[0]
  .addEventListener("click", function () {
    aboutModal.style.display = "none";
  });
