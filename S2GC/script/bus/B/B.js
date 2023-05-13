let BContentID = document.getElementById("B-content-value");
function loadB() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  BContentID.innerHTML = busValue;
  BLoadColors();
}

function incrementB() {
  const bValue = parseInt(getValue(bId));
  if (bValue == 0) {
    BContentID.innerHTML = "+1";
  } else {
    if (bValue < 0) {
      BContentID.innerHTML++;
    } else {
      BContentID.innerHTML = "+" + (bValue + 1).toString();
    }
    BIncrementColors();
  }
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
