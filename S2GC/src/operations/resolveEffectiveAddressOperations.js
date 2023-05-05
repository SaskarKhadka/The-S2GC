class ResolveEffectiveAddressOperations {
  #deocdeOperations;
  constructor() {
    this.#deocdeOperations = {
      "D31'I1'I0'T5": [],
      "D31'I1I0'T5": [this.#irToBus, this.#busToDR],
      "D31'I1I0T5": [this.#ramToBus, this.#busToAR],
    };
  }

  #irToBus() {
    const irValue = instructionReg.VALUE();
    bus.setValue(irValue);
    IRtoBUS();
  }

  #busToDR() {
    dataReg.ldFlag(true);
    const busValue = bus.value().splice(7);
    dataReg.loadValue(busValue);
    loadDR();
  }

  #ramToBus() {
    ram.readFlag(true);
    const ramValue = ram.getValue();
    bus.setValue(ramValue);
    memoryRead();
  }

  #busToAR() {
    addressReg.ldFlag(true);
    const busValue = bus.value();
    addressReg.loadValue(busValue);
  }
}
