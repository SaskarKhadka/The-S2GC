function play() {
  console.log("play");
}
function playForward() {
  console.log("playForward");
}
function playBackward() {
  console.log("playBackward");
}
function pause() {
  console.log("pause");
}

function reset() {
  showConfirmationBox();
  okButton.addEventListener("click", function () {
    signalOff();
    hideConfirmationBox();
  });
  cancelButton.addEventListener("click", function () {
    hideConfirmationBox();
  });
}
