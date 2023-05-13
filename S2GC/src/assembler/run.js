async function executeFetchCycle() {
  let state = stateDecoder.selectOutput(seqCounter.VALUE());
  while (parseInt(state) < 3) {
    await fetchOps.performOperations(`T${state}`);
    seqCounter.inrFlag(true);
    seqCounter.increamentValue();
    state = stateDecoder.selectOutput(seqCounter.VALUE());
  }
}

async function executeDecodeCycle() {
  let state = stateDecoder.selectOutput(seqCounter.VALUE());

  while (parseInt(state) < 5) {
    await decodeOps.performOperations(`T${state}`);
    seqCounter.inrFlag(true);
    seqCounter.increamentValue();
    state = stateDecoder.selectOutput(seqCounter.VALUE());
  }
}

async function executeEffectiveAddressResolver() {
  let state = stateDecoder.selectOutput(seqCounter.VALUE());
  let i0Val = getValue(i0Id);
  let i1Val = getValue(i1Id);
  let condition = "D31'";
  condition += i1Val == "1" ? "I1" : "I1'";
  condition += i0Val == "1" ? "I0" : "I0'";
  condition += `T${state}`;
  while (parseInt(state) == 5) {
    await resolveEffecAddOps.performOperations(condition);
    seqCounter.inrFlag(true);
    seqCounter.increamentValue();
    state = stateDecoder.selectOutput(seqCounter.VALUE());
  }
}

async function executeRRIOperationCycle() {
  let state = stateDecoder.selectOutput(seqCounter.VALUE());
  let instType = instTypeDecoder.currOutput();
  let i0Val = getValue(i0Id);
  let i1Val = getValue(i1Id);
  let condition = `D${instType}`;
  condition += i1Val == "1" ? "I1" : "I1'";
  condition += i0Val == "1" ? "I0" : "I0'";
  condition += `T${state}`;
  let irValue = Arithmetics.decimalToBinary(getValue(irId)).slice(5);
  let onesPosition = irValue.length - 1 - irValue.indexOf("1");
  condition += `B${onesPosition}`;
  if (parseInt(state) == 5) {
    await rriOps.performOperations(condition);
  }
}

async function executeMRIOperationCycle() {
  let state = stateDecoder.selectOutput(seqCounter.VALUE());
  let instType = instTypeDecoder.currOutput();
  while (parseInt(state) > 5) {
    await mriOps.performOperations(`D${instType}T${state}`);
    if (seqCounter.VALUE() == "0000") break;
    seqCounter.inrFlag(true);
    seqCounter.increamentValue();
    state = stateDecoder.selectOutput(seqCounter.VALUE());
  }
}

function loadInstructionToMemory() {
  const instructions = assembler.getInstructions();
  let memAddress = 4096;
  for (let instruction of instructions) {
    // console.log(memAddress.toString(16));
    document.getElementById(memAddress.toString(16).toUpperCase()).innerHTML =
      Arithmetics.binaryToDecimal(instruction);
    memAddress++;
  }
}
// async function simulate() {

// }

async function runInstructions() {
  loadInstructionToMemory();
  document.getElementById(ssId).innerHTML = "1";
  while (true) {
    await executeFetchCycle();
    await executeDecodeCycle();
    let instType = instTypeDecoder.currOutput();
    if (instType == "31") {
      await executeRRIOperationCycle();
    } else {
      await executeEffectiveAddressResolver();
      await executeMRIOperationCycle();
    }
    if (getValue(ssId) == "0") break;
  }
  resetBusArchitecture();

  // await simulate();
}

const button = document.getElementById("run-button");
button.addEventListener("click", runInstructions);
