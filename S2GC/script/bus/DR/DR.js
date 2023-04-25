let DRContentID = document.getElementById("DR-content-value");
function loadDR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  DRContentID.innerHTML = busValue;
  DRLoadColors();
}

function incrementDR() {
  DRContentID.innerHTML++;
  DRIncrementColors();
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
