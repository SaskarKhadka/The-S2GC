function preProcessAC(forADDSUB = false) {
  let acValue = getValue(acId);

  if (parseInt(acValue) == 0) {
    return Arithmetics.createStandardSize("0", 32);
  } else {
    if (forADDSUB) {
      if (acValue[0] == "-") {
        return Arithmetics.twosComplement(
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(acValue.slice(1)),
            32
          )
        );
      } else {
        acValue = document.getElementById(acId).innerHTML.replace("+", "0");

        return (
          acValue[0] +
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(acValue.slice(1)),
            31
          )
        );
      }
    } else {
      acValue = document
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
  }
}
function preProcessDR(forADDSUB = false) {
  let drValue = getValue(drId);

  if (parseInt(drValue) == 0) {
    return Arithmetics.createStandardSize("0", 32);
  } else {
    if (forADDSUB) {
      if (drValue[0] == "-") {
        return Arithmetics.twosComplement(
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(drValue.slice(1)),
            32
          )
        );
      } else {
        drValue = document.getElementById(drId).innerHTML.replace("+", "0");

        return (
          drValue[0] +
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(drValue.slice(1)),
            31
          )
        );
      }
    } else {
      drValue = document
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
  }
}
function preProcessB(forADDSUB = false) {
  let bValue = getValue(bId);

  if (parseInt(bValue) == 0) {
    return Arithmetics.createStandardSize("0", 32);
  } else {
    if (forADDSUB) {
      if (bValue[0] == "-") {
        return Arithmetics.twosComplement(
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(bValue.slice(1)),
            32
          )
        );
      } else {
        bValue = document.getElementById(bId).innerHTML.replace("+", "0");

        return (
          bValue[0] +
          Arithmetics.createStandardSize(
            Arithmetics.decimalToBinary(bValue.slice(1)),
            31
          )
        );
      }
    } else {
      bValue = document
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
  }
}

function binaryToDecimal(num, forADDSUB = false) {
  if (forADDSUB) {
    if (num[0] == "1") {
      let result = Arithmetics.twosComplement(num);
      result = Arithmetics.binaryToDecimal(result.slice(1));
      return "1" + result.toString();
    } else {
      const result = Arithmetics.binaryToDecimal(num.slice(1));
      if (result == 0) return "0000";
      else return "0" + result.toString();
    }
  } else {
    const result = Arithmetics.binaryToDecimal(num.slice(1));
    if (result == 0) return "0000";
    else return "0" + result.toString();
  }
}

function performADD() {
  let result = Arithmetics.add(preProcessAC(true), preProcessDR(true));
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum, true);
  document.getElementById(aluValId).innerHTML = result;
}
function performSUB() {
  let result = Arithmetics.subtract(preProcessAC(true), preProcessDR(true));
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum, true);
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
  let result = Arithmetics.decreament(preProcessAC(true));
  result = binaryToDecimal(result, true);
  document.getElementById(aluValId).innerHTML = result;
}
function performDECB() {
  let result = Arithmetics.decreament(preProcessB(true));
  result = binaryToDecimal(result, true);
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
  let result = Arithmetics.subtract(preProcessAC(true), preProcessDR(true));
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum, true);
  document.getElementById(aluValId).innerHTML = result;
}

function performTESTB() {
  let result = Arithmetics.subtract(preProcessB(true), preProcessDR(true));
  document.getElementById(aluCarryId).innerHTML = result.carry;
  document.getElementById(aluOverflowId).innerHTML = result.overflow;
  result = binaryToDecimal(result.sum, true);
  document.getElementById(aluValId).innerHTML = result;
}

const ops = {
  ADD: performADD,
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
  document.getElementById("ALU-content-value").innerHTML =
    document.getElementById("B-content-value").innerHTML;
  BtoALUColors();
}

function ALUtoB() {
  const aluValue = getValue(aluValId);
  if (parseInt(aluValue) == 0) {
    document.getElementById("B-content-value").innerHTML = aluValue;
  } else if (aluValue.includes("+") || aluValue.includes("-")) {
    document.getElementById("B-content-value").innerHTML = aluValue;
  } else {
    const sign = aluValue[0] == 1 ? "-" : "+";
    const value = aluValue.slice(1);
    document.getElementById("B-content-value").innerHTML = sign + value;
  }
  ALUtoBColors();
}

function ACtoALU() {
  document.getElementById("ALU-content-value").innerHTML =
    document.getElementById("AC-content-value").innerHTML;
  ACtoALUColors();
}

function ALUtoAC() {
  const aluValue = getValue(aluValId);
  if (parseInt(aluValue) == 0) {
    document.getElementById("AC-content-value").innerHTML = aluValue;
  } else if (aluValue.includes("+") || aluValue.includes("-")) {
    document.getElementById("AC-content-value").innerHTML = aluValue;
  } else {
    const sign = aluValue[0] == 1 ? "-" : "+";
    const value = aluValue.slice(1);
    document.getElementById("AC-content-value").innerHTML = sign + value;
  }

  ALUtoACColors();
}

function setALUOperation(value) {
  document.getElementById(aluOpId).innerHTML = value;
  ops[value]();
  ALUoperationColors();
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
