const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const forwardButton = document.getElementById("forward");
const backwardButton = document.getElementById("backward");
const resetButton = document.getElementById("reset");

pauseButton.addEventListener("click", pauseSimulation);
playButton.addEventListener("click", playSimulation);
forwardButton.addEventListener("click", playForward);
backwardButton.addEventListener("click", playBackward);
resetButton.addEventListener("click", resetSimulation);

async function playSimulation() {
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
      }, 2000)
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
  signalOff();
  if (operationsIndex < myOperations.length - 1) {
    const currentState = getCurrentState();
    stack.push(currentState);
    operationsIndex++;
    const operation = myOperations[operationsIndex];
    operation[1]();
  } else {
    console.log("Overflow");
  }
}

function playBackward() {
  signalOff();
  if (operationsIndex > 0) {
    if (!stack.isEmpty()) {
      setCurrentState(stack.pop());
    }
    operationsIndex--;
    const colors = myColors[operationsIndex];
    console.log(colors);
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
    // console.log("Underflow");
  }
}

function pauseSimulation() {
  paused = true;
  console.log("paused");
}

function resetSimulation() {
  showConfirmationBox();
  okButton.addEventListener("click", function () {
    signalOff();
    hideConfirmationBox();
  });
  cancelButton.addEventListener("click", function () {
    hideConfirmationBox();
  });
}
