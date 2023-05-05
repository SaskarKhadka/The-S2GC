class FetchOperations {
  #fetchOperations;

  constructor() {
    this.#fetchOperations = {
      "R'T0": [this.#pcToBus, this.#busToAR],
      "R'T1": [this.#ramToBus, this.#busToIR],
      "R'T2": [this.#incrementPC],
    };
  }

  #pcToBus() {
    const pcValue = programCounter.VALUE();
    bus.setValue(pcValue);
    PCtoBUS();
  }

  #busToAR() {
    addressReg.ldFlag(true);
    const busValue = bus.value();
    addressReg.loadValue(busValue);
    BUStoAR();
  }

  #ramToBus() {
    ram.readFlag(true);
    const ramValue = ram.getValue();
    bus.setValue(ramValue);
    // call
  }

  #busToIR() {
    instructionReg.ldFlag(true);
    const busValue = bus.value();
    instructionReg.loadValue(busValue);
    loadIR();
  }

  #incrementPC() {
    programCounter.inrFlag(true);
    incrementPC();
    programCounter.increamentValue();
  }

  performOperations(condition) {
    if (this.#fetchOperations[condition] == undefined)
      throw "Invalid decode operation";
    let operations = this.#fetchOperations[condition];
    for (let operation of operations) {
      operation();
      signalOff();
    }
  }
}
