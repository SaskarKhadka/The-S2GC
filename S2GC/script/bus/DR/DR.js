let DRContentID = document.getElementById("DR-content-value");
function loadDR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;

  const sign = busValue[0];
  busValue = parseInt(busValue.slice(1));

  busValue = sign == "1" ? -1 * busValue : busValue;

  if (busValue > 2147483647) {
    const value = Arithmetics.createStandardSize(
      Arithmetics.decimalToBinary(busValue),
      31
    );
    busValue = Arithmetics.binaryToDecimal(value).toString();
  } else if (busValue < -2147483647) {
    const value = Arithmetics.createStandardSize(
      Arithmetics.decimalToBinary(busValue.slice(1)),
      31
    );
    busValue = Arithmetics.binaryToDecimal(value).toString();
  }
  if (busValue == 0) {
    DRContentID.innerHTML = "0000";
  } else if (busValue > 0) {
    DRContentID.innerHTML = "+" + busValue.toString();
  } else {
    DRContentID.innerHTML = busValue.toString();
  }
  DRLoadColors();
}

function incrementDR() {
  const drValue = parseInt(getValue(drId));
  if (drValue == 0) {
    ACContentID.innerHTML = "+1";
  } else {
    if (drValue < 0) {
      DRContentID.innerHTML++;
    } else {
      DRContentID.innerHTML = "+" + (drValue + 1).toString();
    }
    DRIncrementColors();
  }
}

function clearDR() {
  DRContentID.innerHTML = "0000";
  DRClearColors();
}

function DRtoBUS() {
  document.getElementById("bus-content-value").innerHTML =
    DRContentID.innerHTML;
  DRtoBusColors();
}

// //test
// loadDR("1111");
// incrementDR();
// clearDR();
// DRtoBUS();
