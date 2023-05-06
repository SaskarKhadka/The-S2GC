let OUTRContentID = document.getElementById("OUTR-content-value");
function loadOUTR() {
  let busValue = document.getElementById("bus-content-value").innerHTML;
  const busValueBin = Arithmetics.decimalToBinary(parseInt(busValue));

  OUTRContentID.innerHTML = Arithmetics.binaryToDecimal(
    busValueBin.slice(busSize - outrSize)
  );
  OUTRLoadColors();
}

// //test
// loadOUTR("1111");
