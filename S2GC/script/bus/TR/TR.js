let TRContentID = document.getElementById("TR-content-value");
function loadTR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  TRContentID.innerHTML = busValue;
  TRLoadColors();
}

function incrementTR() {
  TRContentID.innerHTML++;
  TRIncrementColors();
}

function clearTR() {
  TRContentID.innerHTML = "0000";
  TRClearColors();
}

function TRtoBUS() {
  document.getElementById("bus-content-value").innerHTML =
    TRContentID.innerHTML;
  TRtoBusColors();
}

// //test
// loadTR("1111");
// incrementTR();
// clearTR();
// TRtoBUS();
