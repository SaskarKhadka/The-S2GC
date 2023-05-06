class DecodeOperations {
  #decodeOperations;

  constructor() {
    this.#decodeOperations = {
      "R'T3": [this.#decodeAddressingModeAndInstructionType],
      "R'T4": this.#isNotImmediateAddressing()
        ? [this.#irToBus, this.#busToAR]
        : [],
    };
  }

  #isNotImmediateAddressing() {
    return getValue(i1Id) != "1" || getValue(i0Id) != "0";
  }

  #decodeAddressingModeAndInstructionType() {
    const irData = getValue(irId);
    changeState("I1", irData[0]);
    changeState("I0", irData[1]);
    const irBin = Arithmetics.decimalToBinary(irData);
    const inst = Arithmetics.createStandardSize(irBin, 32).slice(2, 7);
    instDecoder.selectOutput(inst);
  }
  #irToBus() {
    IRtoBUS();
  }

  #busToAR() {
    loadAR();
  }

  async performOperations(condition) {
    if (this.#decodeOperations[condition] == undefined)
      throw "Invalid decode operation";
    let operations = this.#decodeOperations[condition];
    for (let operation of operations) {
      operation();
      await new Promise((resolve) =>
        setTimeout(() => {
          signalOff();
          resolve();
        }, 2000)
      );
    }
  }
}
