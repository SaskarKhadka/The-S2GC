let PCContentID = document.getElementById("PC-content-value");
function loadPC() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  PCContentID.innerHTML = busValue;
  PCLoadColors();
}

function incrementPC() {
  PCContentID.innerHTML++;
  PCIncrementColors();
}

function clearPC() {
  PCContentID.innerHTML = "0000";
  PCClearColors();
}

function PCtoBUS() {
  document.getElementById("bus-content-value").innerHTML =
    PCContentID.innerHTML;
  PCtoBusColors();
}

// //test
// loadPC("1111");
// incrementPC();
// clearPC();
// PCtoBUS();
