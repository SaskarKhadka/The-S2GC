let IRContentID = document.getElementById("IR-content-value");
function loadIR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  IRContentID.innerHTML = busValue;
  IRLoadColors();
}

function IRtoBUS() {
  document.getElementById("bus-content-value").innerHTML =
    IRContentID.innerHTML;
  IRtoBusColors();
}

// //test
// loadIR("1111");
// IRtoBUS();
