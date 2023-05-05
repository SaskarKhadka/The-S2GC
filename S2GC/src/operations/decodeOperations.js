class DecodeOperations {
  #decodeOperations;

  constructor() {
    this.#decodeOperations = {
      "R'T3": [this.#decodeAddressingModeAndInstructionType],
      "R'T4": [this.#irToBus, this.#busToAR],
    };
  }
  #decodeAddressingModeAndInstructionType() {
    const irData = instructionReg.VALUE();
    changeStateFF("I1", irData[0]);
    i1FF.changeState(irData[0]);
    changeStateFF("I0", irData[1]);
    i0FF.changeState(irData[1]);
    const inst = instructionReg.VALUE(2, 7);
    instDecoder.selectOutput(inst);
  }
  #irToBus() {
    const irData = instructionReg.VALUE();
    bus.setValue(irData);
    IRtoBus();
  }

  #busToAR() {
    const operand = bus.value().splice(19);
    addressReg.inrFlag(true);
    addressReg.loadValue(operand);
    loadAR();
  }

  performOperations(condition) {
    if (this.#decodeOperations[condition] == undefined)
      throw "Invalid decode operation";
    let operations = this.#decodeOperations[condition];
    for (let operation of operations) {
      operation();
      signalOff();
    }
  }
}
