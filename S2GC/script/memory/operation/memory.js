let memoryCellId = document.getElementById("AR-content-value").innerHTML;
function memoryWrite(value) {
  let memoryCell = document.getElementById(memoryCellId);
  memoryCell.innerHTML = value;
  memoryCell.classList.add("edited");
  memoryWriteColors();
}

function memoryRead() {
  let memoryValue = document.getElementById(memoryCellId).innerHTML;
  memoryReadColors();
  return memoryValue;
}

// //test
// memoryWrite("1111");
// setTimeout(() => {
//   signalOff();
//   let value = memoryRead();
//   document.getElementById("Bus-content-value").innerHTML = value;
// }, 4000);
