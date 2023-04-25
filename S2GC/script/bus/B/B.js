let BContentID = document.getElementById("B-content-value");
function loadB() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  BContentID.innerHTML = busValue;
  BLoadColors();
}

function incrementB() {
  BContentID.innerHTML++;
  BIncrementColors();
}

function clearB() {
  BContentID.innerHTML = "0000";
  BClearColors();
}

function BtoBUS() {
  document.getElementById("bus-content-value").innerHTML = BContentID.innerHTML;
  BtoBusColors();
}

// //test
// loadB("1111");
// incrementB();
// clearB();
// BtoBUS();
