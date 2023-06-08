const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");
const resetButton = document.getElementById("reset");

const pauseIcon = document.getElementById("pause-icon");
const playIcon = document.getElementById("play-icon");
const forwardIcon = document.getElementById("forward-icon");
const backwardIcon = document.getElementById("backward-icon");
const resetIcon = document.getElementById("reset-icon");

pauseButton.addEventListener("click", pauseSimulation);
playButton.addEventListener("click", playSimulation);
forwardButton.addEventListener("click", playForward);
backwardButton.addEventListener("click", playBackward);
resetButton.addEventListener("click", resetSimulation);

function addDisableClassList() {
  playButton.classList.add("disabled-div");
  pauseButton.classList.add("disabled-div");
  forwardButton.classList.add("disabled-div");
  backwardButton.classList.add("disabled-div");
  resetButton.classList.add("disabled-div");

  playIcon.classList.add("disabled-icon");
  pauseIcon.classList.add("disabled-icon");
  forwardIcon.classList.add("disabled-icon");
  backwardIcon.classList.add("disabled-icon");
  resetIcon.classList.add("disabled-icon");
}
function removeDisableClassList() {
  playButton.classList.remove("disabled-div");
  pauseButton.classList.remove("disabled-div");
  forwardButton.classList.remove("disabled-div");
  backwardButton.classList.remove("disabled-div");
  resetButton.classList.remove("disabled-div");

  playIcon.classList.remove("disabled-icon");
  pauseIcon.classList.remove("disabled-icon");
  forwardIcon.classList.remove("disabled-icon");
  backwardIcon.classList.remove("disabled-icon");
  resetIcon.classList.remove("disabled-icon");
}
function disablePlay() {
  playButton.classList.add("disabled-div");
  playIcon.classList.add("disabled-icon");
}
function disablePause() {
  pauseButton.classList.add("disabled-div");
  pauseIcon.classList.add("disabled-icon");
}
addDisableClassList();

async function playSimulation() {
  removeDisableClassList();
  disablePlay();
  // play = true;
  paused = false;
  while (!paused) {
    signalOff();
    const currentState = getCurrentState();
    stack.push(currentState);
    operationsIndex++;
    const operations = myOperations[operationsIndex];
    operations[1]();
    await new Promise((resolve) =>
      setTimeout(() => {
        // signalOff();
        resolve();
      }, 200)
    );
  }
  // while (!paused && !queue.isEmpty()) {
  //   const operations = queue.dequeue();
  //   operations[1]();
  //   await new Promise((resolve) =>
  //     setTimeout(() => {
  //       signalOff();
  //       resolve();
  //     }, 2000)
  //   );
  //   stack.push(operations);
  // }
}
function playForward() {
  removeDisableClassList();
  signalOff();
  if (operationsIndex < myOperations.length - 1) {
    const currentState = getCurrentState();
    stack.push(currentState);
    operationsIndex++;
    const operation = myOperations[operationsIndex];
    operation[1]();
  } else {
    createToast("Warning", "Microoperation Stack Overflow!");
  }
}

function playBackward() {
  removeDisableClassList();
  signalOff();
  if (operationsIndex > 0) {
    if (!stack.isEmpty()) {
      setCurrentState(stack.pop());
    }
    operationsIndex--;
    const colors = myColors[operationsIndex];
    for (let color of colors) {
      const colorFunc = color[0];
      if (color[1].needParams) {
        colorFunc(color[2].params);
      } else {
        colorFunc();
      }
    }
    // operation[1]();
  } else {
    operationsIndex = -1;
    createToast("warning", "Microoperation Stack Underflow!");
  }
}

function pauseSimulation() {
  removeDisableClassList();
  disablePause();
  paused = true;
}

function resetSimulation() {
  const rect = refreshButton.getBoundingClientRect();
  const top = rect.top + window.pageYOffset;
  confirmationBox.style.top = "50%";
  document.getElementById("confirm-title").innerHTML = "Reset Bus Architecture";
  showConfirmationBox();
  okButton.addEventListener("click", okButtonClick);
  cancelButton.addEventListener("click", cancelButtonClick);
  function okButtonClick(event) {
    event.preventDefault();
    pauseSimulation();
    addDisableClassList();
    hideConfirmationBox();
    resetBusArchitecture();
    signalOff();
    createToast("success", "Reset Bus Architecture Succesful");
    okButton.removeEventListener("click", okButtonClick);
    cancelButton.removeEventListener("click", cancelButtonClick);
  }
  function cancelButtonClick(event) {
    event.preventDefault();
    hideConfirmationBox();
    createToast("error", "Reset Bus Architecture Cancled");
    okButton.removeEventListener("click", okButtonClick);
    cancelButton.removeEventListener("click", cancelButtonClick);
  }
}
