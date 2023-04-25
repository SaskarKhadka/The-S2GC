let ARContentID = document.getElementById("AR-content-value");
function loadAR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  ARContentID.innerHTML = busValue;
  ARLoadColors();
}

function incrementAR() {
  ARContentID.innerHTML++;
  ARIncrementColors();
}

function clearAR() {
  ARContentID.innerHTML = "0000";
  ARClearColors();
}

function ARtoBUS() {
  document.getElementById("bus-content-value").innerHTML =
    ARContentID.innerHTML;
  ARtoBusColors();
}

// //test
// loadAR("1111");
// signalOff();
// incrementAR();
// signalOff();
// clearAR();
// signalOff();
// ARtoBUS();
