const cancelButton = document.getElementById("btn1");
const okButton = document.getElementById("btn2");

function refreshEditor() {
  showConfirmationBox();

  okButton.addEventListener("click", function () {
    document.getElementById("code-editor").value = "Code Editor...";
    hideConfirmationBox();
  });

  cancelButton.addEventListener("click", function () {
    hideConfirmationBox();
  });
}
