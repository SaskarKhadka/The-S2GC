function memoryWrite() {
  const memoryCellIdHex = Arithmetics.createStandardSize(
    parseInt(getValue(arId)).toString(16).toUpperCase(),
    4
  );
  let memoryCell = document.getElementById(memoryCellIdHex);
  let busValue = document.getElementById(busId).innerHTML;
  memoryCell.innerHTML = busValue;
  memoryCell.classList.add("edited");
  memoryWriteColors();
}

function memoryRead(toDR = false) {
  const arValue = document.getElementById(arId).innerHTML;
  let memoryValue = document.getElementById(
    Arithmetics.createStandardSize(
      parseInt(arValue).toString(16).toUpperCase(),
      4
    )
  ).innerHTML;
  if (toDR) {
    let memoryValBin;
    let sign;
    if (memoryValue[0] == "+" || memoryValue[0] == "-") {
      sign = memoryValue[0] == "+" ? "0" : "1";
      memoryValBin = Arithmetics.decimalToBinary(memoryValue.slice(1));
    } else {
      sign = "0";
      memoryValBin = Arithmetics.decimalToBinary(memoryValue);
    }
    const memoryValDec = Arithmetics.binaryToDecimal(
      Arithmetics.createStandardSize(memoryValBin, 31)
    );
    document.getElementById(busId).innerHTML = sign + memoryValDec;
  } else {
    let memoryValBin = Arithmetics.decimalToBinary(memoryValue);

    document.getElementById(busId).innerHTML = Arithmetics.binaryToDecimal(
      Arithmetics.createStandardSize(memoryValBin, 32)
    );
  }
  memoryReadColors();
}

// //test
// memoryWrite("1111");
// setTimeout(() => {
//   signalOff();
//   let value = memoryRead();
//   document.getElementById("Bus-content-value").innerHTML = value;
// }, 4000);
