function DRtoALU() {
  document.getElementById("ALU-content-value").innerHTML =
    document.getElementById("DR-content-value").innerHTML;
  DRtoALUColors();
}

function BtoALU() {
  document.getElementById("ALU-content-value").innerHTML =
    document.getElementById("B-content-value").innerHTML;
  BtoALUColors();
}

function ALUtoB() {
  document.getElementById("B-content-value").innerHTML =
    document.getElementById("ALU-content-value").innerHTML;
  ALUtoBColors();
}

function ACtoALU() {
  document.getElementById("ALU-content-value").innerHTML =
    document.getElementById("AC-content-value").innerHTML;
  ACtoALUColors();
}

function ALUtoAC() {
  document.getElementById("AC-content-value").innerHTML =
    document.getElementById("ALU-content-value").innerHTML;
  ALUtoACColors();
}

function ALUtoC() {
  ALUtoCColors();
  toggeFF("C");
}
function ALUtoV() {
  ALUtoVColors();
  toggeFF("V");
}
function ALUtoS() {
  ALUtoSColors();
  toggeFF("S");
}
function ALUtoZ() {
  ALUtoZColors();
  toggeFF("Z");
}

// DRtoALU();
// BtoALU();
// ACtoALU();
// ALUtoB();
// ALUtoAC();
// ALUtoC();
// ALUtoS();
// ALUtoV();
// ALUtoZ();
