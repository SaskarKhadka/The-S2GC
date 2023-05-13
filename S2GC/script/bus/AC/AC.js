let ACContentID = document.getElementById("AC-content-value");
function loadAC() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  ACContentID.innerHTML = busValue;
  ACLoadColors();
}

function incrementAC() {
  const acValue = parseInt(getValue(acId));
  if (acValue == 0) {
    ACContentID.innerHTML = "+1";
  } else {
    if (acValue < 0) {
      ACContentID.innerHTML++;
    } else {
      ACContentID.innerHTML = "+" + (acValue + 1).toString();
    }
    ACIncrementColors();
  }
}

function clearAC() {
  ACContentID.innerHTML = "0000";
  ACClearColors();
}

function ACtoBUS() {
  document.getElementById("bus-content-value").innerHTML =
    ACContentID.innerHTML;
  ACtoBusColors();
}

// //test
// loadAC("1111");
// incrementAC();
// clearAC();
// ACtoBUS();
