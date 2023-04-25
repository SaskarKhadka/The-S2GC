let INPRContentValue = document.getElementById("ALU-content-value").innerHTML;
function INPRtoALU() {
  let ALUContentID = document.getElementById("ALU-content-value");
  ALUContentID.innerHTML = INPRContentValue;
  INPRColors();
}

// //test
// INPRtoALU();
