const cancelButton = document.getElementById("btn1");
const okButton = document.getElementById("btn2");
const refreshButton = document.getElementById("refresh-icon");

refreshButton.addEventListener("click", function () {
  const rect = refreshButton.getBoundingClientRect();
  const top = rect.top + window.pageYOffset;
  confirmationBox.style.top = `${top + 170}px`;
  document.getElementById("confirm-title").innerHTML =
    "Code Editor will be cleared!";
  okButton.addEventListener("click", okButtonClick);
  cancelButton.addEventListener("click", cancelButtonClick);
  showConfirmationBox();
  function okButtonClick(event) {
    event.preventDefault();
    document.getElementById("code-editor").value = "";
    document.getElementById("line-number").value = "";
    toggleButtonState();
    hideConfirmationBox();
    createToast("success", "Code Editor Cleared!");
    okButton.removeEventListener("click", okButtonClick);
    cancelButton.removeEventListener("click", cancelButtonClick);
  }
  function cancelButtonClick(event) {
    event.preventDefault();
    hideConfirmationBox();
    createToast("error", "Code Editor Clear Cancled!");
    okButton.removeEventListener("click", okButtonClick);
    cancelButton.removeEventListener("click", cancelButtonClick);
  }
});
