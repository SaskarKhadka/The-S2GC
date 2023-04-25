let OUTRContentID = document.getElementById("OUTR-content-value");
function loadOUTR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  OUTRContentID.innerHTML = busValue;
  OUTRLoadColors();
}

// //test
// loadOUTR("1111");
