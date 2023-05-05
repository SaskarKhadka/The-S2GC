class ExecuteMRIOperations {
  #mriOperations;

  constructor() {
    this.#mriOperations = {
      D0T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D0T7: [
        this.#acDRToALU,
        this.#andACandDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D1T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D1T7: [
        this.#acDRToALU,
        this.#orACandDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D2T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D2T7: [
        this.#acDRToALU,
        this.#xorACandDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D3T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D3T7: [this.#acDRToALU, this.#andACandDR, this.#aluToAC],
      D3T8: [
        this.#acToALU,
        this.#complementAC,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D4T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D4T7: [this.#acDRToALU, this.#orACandDR, this.#aluToAC],
      D4T8: [
        this.#acToALU,
        this.#complementAC,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D5T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D5T7: [
        this.#drToALU,
        this.#transferDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D6T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D6T7: [this.#drToALU, this.#transferDR, this.#aluToB, this.#resetCounter],
      D7T6: [this.#acToBus, this.#busToRam, this.#resetCounter],
      D8T6: [this.#bToBus, this.#busToRam, this.#resetCounter],
      D9T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D9T7: [this.#incrementDR],
      D9T8: [this.#drToBus, this.#busToRam],
      D9T9: this.#isDRZero()
        ? [this.#incrementPC, this.#resetCounter]
        : [this.#resetCounter],
      D10T6: [this.#arToBus, this.#busToPC, this.#resetCounter],
      D11T6: [this.#pcToBus, this.#busToRam],
      D11T7: [this.#incrementAR],
      D11T8: [this.#arToBus, this.#busToPC, this.#resetCounter],
      D12T6: [this.#ramToBus, this.#busToDR],
      D12T7: [this.#acToBus, this.#busToRam],
      D12T8: [
        this.#drToALU,
        this.#transferDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D13T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D13T7: [
        this.#acDRToALU,
        this.#addACandDR,
        this.#aluToAC,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D14T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D14T7: [this.#acToBus, this.#busToTR],
      D14T8: [this.#drToALU, this.#transferDR, this.#aluToAC],
      D14T9: [
        this.#acToALU,
        this.#complementAC,
        this.#aluToAC,
        this.#trToBus,
        this.#busToDR,
      ],
      D14T10: [this.#acDRToALU, this.#addACandDR, this.#aluToAC],
      D14T11: [this.#incrementAC, this.#aluToPSW, this.#resetCounter],
      D15T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D15T7: [
        this.#acDRToALU,
        this.#subACandDR,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D16T6: this.#isNotImmediateAddressing()
        ? [this.#ramToBus, this.#busToDR]
        : [],
      D16T7: [
        this.#acDRToALU,
        this.#subBandDR,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D17T6: this.#zState() ? [this.#arToBus, this.#busToPC] : [],
      D18T6: !this.#zState() ? [this.#arToBus, this.#busToPC] : [],
      D19T6:
        this.#sXORv() || this.#zState() ? [this.#arToBus, this.#busToPC] : [],
      D20T6: this.#sXORv() ? [this.#arToBus, this.#busToPC] : [],
      D21T6: !this.#sXORv() ? [this.#arToBus, this.#busToPC] : [],
      D22T6:
        !this.#sXORv() && !this.#zState() ? [this.#arToBus, this.#busToPC] : [],
    };
  }

  #isNotImmediateAddressing() {
    return i1FF.state() != "1" && i0FF.state() != "0";
  }

  #zState() {
    return zFF.state() == "1";
  }

  #sXORv() {
    return sFF.state() != vFF.state();
  }

  #isDRZero() {
    const drValue = dataReg.VALUE();
    const result = Arithmetics.binaryToDecimal(drValue);
    return result == 0;
  }

  #ramToBus() {
    ram.readFlag(true);
    const ramValue = ram.getValue();
    bus.setValue(ramValue);
    memoryRead();
  }
  #xorACandDR() {
    // set ALU to xor
    const acValue = accumulator.VALUE();
    const drValue = dataReg.VALUE();
    alu.xor(acValue, drValue);
  }
  #andACandDR() {
    // set alu to and
    const acValue = accumulator.VALUE();
    const drValue = dataReg.VALUE();
    alu.and(acValue, drValue);
  }
  #orACandDR() {
    // set alu to or
    const acValue = accumulator.VALUE();
    const drValue = dataReg.VALUE();
    alu.or(acValue, drValue);
  }
  #addACandDR() {
    // set alu to add
    const acValue = accumulator.VALUE();
    const drValue = dataReg.VALUE();
    alu.add(acValue, drValue);
  }
  #subACandDR() {
    // set alu to sub
    // const acValue = accumulator.VALUE();
    // const drValue = dataReg.VALUE();
    // alu.xor(acValue, drValue);
    // TODO: SUB;
  }
  #subBandDR() {
    // set alu to sub
    // const acValue = accumulator.VALUE();
    // const drValue = dataReg.VALUE();
    // alu.xor(acValue, drValue);
  }
  #complementAC() {
    // set alu to complement
    const acValue = accumulator.VALUE();
    alu.complement(acValue);
  }

  #drToALU() {
    DRtoALU();
  }
  #aluToAC() {
    ALUtoAC();
  }
  #aluToB() {
    ALUtoB();
  }
  #acToALU() {
    ACtoALU();
  }
  #acDRToALU() {
    ACtoALU();
    DRtoALU();
  }
  #transferDR() {
    // set ALU to trasnfer
  }

  #aluToPSW() {
    // const drValue = dataReg.VALUE();
    // const acValue = accumulator.VALUE();
    // const aluValue = alu.value();
  }
  #drToBus() {
    const drValue = dataReg.VALUE();
    bus.setValue(drValue);
    DRtoBUS();
  }

  #acToBus() {
    const acValue = accumulator.VALUE();
    bus.setValue(acValue);
    ACtoBUS();
  }
  #busToRam() {
    ram.writeFlag(true);
    const busValue = bus.value();
    ram.setValue(busValue);
    memoryWrite();
  }
  #bToBus() {
    const bValue = bReg.VALUE();
    bus.setValue(bValue);
    BtoBUS();
  }
  #busToDR() {
    dataReg.ldFlag(true);
    const busValue = bus.value();
    dataReg.loadValue(busValue);
    loadDR();
  }
  #incrementDR() {
    dataReg.inrFlag(true);
    dataReg.increamentValue();
    incrementDR();
  }
  #incrementPC() {
    programCounter.inrFlag(true);
    programCounter.increamentValue();
    incrementPC();
  }
  #arToBus() {
    const arValue = addressReg.VALUE();
    bus.setValue(arValue);
    ARtoBUS();
  }
  #busToPC() {
    programCounter.ldFlag(true);
    const busValue = bus.value();
    programCounter.loadValue(busValue);
    loadPC();
  }
  #pcToBus() {
    const pcValue = programCounter.VALUE();
    bus.setValue(pcValue);
    PCtoBUS();
  }
  #incrementAR() {
    addressReg.inrFlag(true);
    addressReg.increamentValue();
    incrementAR();
  }

  #busToTR() {
    temporaryReg.ldFlag(true);
    const busValue = bus.value();
    temporaryReg.loadValue(busValue);
    loadTR();
  }

  #trToBus() {
    const trValue = temporaryReg.VALUE();
    bus.setValue(trValue);
    TRtoBUS();
  }

  #incrementAC() {
    accumulator.inrFlag(true);
    accumulator.clearValue();
    incrementAC();
  }
  #resetCounter() {
    sequenceCounter.clrFlag(true);
    sequenceCounter.clearValue();
    // clear SC
  }

  performOperations(condition) {
    if (this.#mriOperations[condition] == undefined) throw "Invalid operation";
    let operations = this.#mriOperations[condition];
    for (let operation of operations) {
      operation();
      signalOff();
    }
  }
}
