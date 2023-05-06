function preProcessAC() {
  const acValue = document
    .getElementById(acId)
    .innerHTML.replace("+", "0")
    .replace("-", "1");

  return (
    acValue[0] +
    Arithmetics.createStandardSize(
      Arithmetics.decimalToBinary(acValue.slice(1)),
      31
    )
  );
}
function preProcessDR() {
  const drValue = document
    .getElementById(drId)
    .innerHTML.replace("+", "0")
    .replace("-", "1");

  return (
    drValue[0] +
    Arithmetics.createStandardSize(
      Arithmetics.decimalToBinary(drValue.slice(1)),
      31
    )
  );
}
function preProcessB() {
  const bValue = document
    .getElementById(bId)
    .innerHTML.replace("+", "0")
    .replace("-", "1");

  return (
    bValue[0] +
    Arithmetics.createStandardSize(
      Arithmetics.decimalToBinary(bValue.slice(1)),
      31
    )
  );
}

function binaryToDecimal(num) {
  const result = Arithmetics.binaryToDecimal(num.slice(1));
  const sign = num[0] == "+" ? "0" : "1";
  return sign + result.toString();
}

function performADD() {
  let result = Arithmetics.add(preProcessAC(), preProcessDR());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum);
  document.getElementById(aluValId).innerHTML = result;
}
function performSUB() {
  let result = Arithmetics.subtract(preProcessAC(), preProcessDR());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum);
  document.getElementById(aluValId).innerHTML = result;
}
function performXOR() {
  let result = Arithmetics.xor(preProcessAC(), preProcessDR());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performNOR() {
  let result = Arithmetics.nor(preProcessAC(), preProcessDR());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performAND() {
  let result = Arithmetics.and(preProcessAC(), preProcessDR());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performOR() {
  let result = Arithmetics.or(preProcessAC(), preProcessDR());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performNAND() {
  let result = Arithmetics.nand(preProcessAC(), preProcessDR());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performASHLAC() {
  let result = Arithmetics.ashl(preProcessAC());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.result);
  document.getElementById(aluValId).innerHTML = result;
}
function performASHLB() {
  let result = Arithmetics.ashl(preProcessB());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.result);
  document.getElementById(aluValId).innerHTML = result;
}
function performASHRAC() {
  let result = Arithmetics.ashr(preProcessAC());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  result = binaryToDecimal(result.result);
  document.getElementById(aluValId).innerHTML = result;
}
function performASHRB() {
  let result = Arithmetics.ashr(preProcessB());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  result = binaryToDecimal(result.result);
  document.getElementById(aluValId).innerHTML = result;
}
function performTRANSFERINPR() {
  document.getElementById(aluValId).innerHTML =
    document.getElementById(inprId).innerHTML;
}
function performTRANSFERDR() {
  document.getElementById(aluValId).innerHTML =
    document.getElementById(drId).innerHTML;
}
function performDECAC() {
  let result = Arithmetics.decreament(preProcessAC());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performDECB() {
  let result = Arithmetics.decreament(preProcessB());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performCOMPAC() {
  let result = Arithmetics.complement(preProcessAC());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performCOMPB() {
  let result = Arithmetics.complement(preProcessB());
  result = binaryToDecimal(result);
  document.getElementById(aluValId).innerHTML = result;
}
function performTESTAC() {
  let result = Arithmetics.subtract(preProcessAC(), preProcessDR());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum);
  document.getElementById(aluValId).innerHTML = result;
}
function performTESTB() {
  let result = Arithmetics.subtract(preProcessB(), preProcessDR());
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum);
  document.getElementById(aluValId).innerHTML = result;
}

const ops = {
  ADD: performAND,
  SUB: performSUB,
  XOR: performXOR,
  NOR: performNOR,
  AND: performAND,
  OR: performOR,
  NAND: performNAND,
  "ASHL B": performASHLB,
  "ASHL AC": performASHLAC,
  "ASHR B": performASHRB,
  "ASHR AC": performASHRAC,
  "TRANSFER INPR": performTRANSFERINPR,
  "TRANSFER DR": performTRANSFERDR,
  "DEC AC": performDECAC,
  "DEC B": performDECB,
  "COMPLEMENT AC": performCOMPAC,
  "COMPLEMENT B": performCOMPB,
  "TEST AC": performTESTAC,
  "TEST B": performTESTB,
};

function DRtoALU() {
  document.getElementById("ALU-content-value").innerHTML =
    document.getElementById("DR-content-value").innerHTML;
  DRtoALUColors();
}

function BtoALU() {
  document.getElementById("ALu-content-value").innerHTML =
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

function setALUOperation(value) {
  document.getElementById(aluOpId).innerHTML = value;
  ops[value]();
}

function ALUtoC() {
  ALUtoCColors();
  changeState("C", getValue(aluCarryId));
}
function ALUtoV() {
  ALUtoVColors();
  changeState("V", getValue(aluOverflowId));
}
function ALUtoS() {
  const aluValue = getValue(aluValId);
  let sValue = "0";
  if (parseInt(aluValue) == 0) {
    sValue = "0";
  } else {
    sValue = aluValue[0];
  }
  ALUtoSColors();
  changeState("S", sValue);
}
function ALUtoZ() {
  const aluValue = getValue(aluValId);

  ALUtoZColors();
  changeState("Z", parseInt(aluValue) == 0 ? "1" : "0");
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
