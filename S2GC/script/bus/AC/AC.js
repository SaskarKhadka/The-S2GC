let ACContentID = document.getElementById("AC-content-value");
function loadAC() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  ACContentID.innerHTML = busValue;
  ACLoadColors();
}

function incrementAC() {
  ACContentID.innerHTML++;
  ACIncrementColors();
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
