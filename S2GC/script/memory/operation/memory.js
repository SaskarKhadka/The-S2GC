let memoryCellId = document.getElementById("AR-content-value").innerHTML;
function memoryWrite() {
  const memoryCellIdHex = Arithmetics.createStandardSize(
    parseInt(memoryCellId).toString(16).toUpperCase(),
    4
  );
  let memoryCell = document.getElementById(memoryCellIdHex);
  let busValue = document.getElementById(busId).innerHTML;
  memoryCell.innerHTML = busValue;
  memoryCell.classList.add("edited");
  memoryWriteColors();
}

function memoryRead() {
  let memoryValue = document.getElementById(
    Arithmetics.createStandardSize(
      parseInt(memoryCellId).toString(16).toUpperCase(),
      4
    )
  ).innerHTML;
  document.getElementById(busId).innerHTML = memoryValue;
  memoryReadColors();
}

// //test
// memoryWrite("1111");
// setTimeout(() => {
//   signalOff();
//   let value = memoryRead();
//   document.getElementById("Bus-content-value").innerHTML = value;
// }, 4000);
