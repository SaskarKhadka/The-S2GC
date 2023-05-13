class MRIOperations {
  #mriOperations;

  constructor() {
    this.#mriOperations = {
      D0T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D0T7: [
        this.#acDRToALU,
        this.#andACandDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D1T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D1T7: [
        this.#acDRToALU,
        this.#orACandDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D2T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D2T7: [
        this.#acDRToALU,
        this.#xorACandDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D3T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D3T7: [this.#acDRToALU, this.#andACandDR, this.#aluToAC],
      D3T8: [
        this.#acToALU,
        this.#complementAC,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D4T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D4T7: [this.#acDRToALU, this.#orACandDR, this.#aluToAC],
      D4T8: [
        this.#acToALU,
        this.#complementAC,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D5T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D5T7: [
        this.#drToALU,
        this.#transferDR,
        this.#aluToAC,
        this.#resetCounter,
      ],
      D6T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D6T7: [this.#drToALU, this.#transferDR, this.#aluToB, this.#resetCounter],
      D7T6: [this.#acToBus, this.#busToRam, this.#resetCounter],
      D8T6: [this.#bToBus, this.#busToRam, this.#resetCounter],
      D9T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D9T7: [this.#incrementDR],
      D9T8: [this.#drToBus, this.#busToRam],
      D9T9: [this.#ifDRZeroIncrementPC, this.#resetCounter],
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
      D13T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D13T7: [
        this.#acDRToALU,
        this.#addACandDR,
        this.#aluToAC,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D14T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      // D14T7: [this.#acToBus, this.#busToTR],
      // D14T8: [this.#drToALU, this.#transferDR, this.#aluToAC],
      // D14T9: [
      //   this.#acToALU,
      //   this.#complementAC,
      //   this.#aluToAC,
      //   this.#trToBus,
      //   this.#busToDR,
      // ],
      // D14T10: [this.#acDRToALU, this.#addACandDR, this.#aluToAC],
      // D14T11: [this.#incrementAC, this.#aluToPSW, this.#resetCounter],
      D14T7: [
        this.#acDRToALU,
        this.#subACandDR,
        this.#aluToAC,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D15T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D15T7: [
        this.#acDRToALU,
        this.#testACandDR,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D16T6: [this.#ifNotImmedAddRamToBus, this.#ifNotImmedAddBusToDR],
      D16T7: [
        this.#acDRToALU,
        this.#testBandDR,
        this.#aluToPSW,
        this.#resetCounter,
      ],
      D17T6: [this.#ifZisSetARToBus, this.#ifZisSetBusToPC, this.#resetCounter],
      D18T6: [
        this.#ifZisResetARToBus,
        this.#ifZisResetBusToPC,
        this.#resetCounter,
      ],
      D19T6: [
        this.#ifsXORvORzARToBus,
        this.#ifsXORvORzBusToPC,
        this.#resetCounter,
      ],
      D20T6: [this.#ifsXORvARToBus, this.#ifsXORvBusToPC, this.#resetCounter],
      D21T6: [
        this.#ifNotsXORvARToBus,
        this.#ifNotsXORvBusToPC,
        this.#resetCounter,
      ],
      D22T6: [
        this.#ifNotsXORvAndNotzARToBus,
        this.#ifNotsXORvAndNotzBusToPC,
        this.#resetCounter,
      ],
    };
  }

  #ifNotsXORvAndNotzARToBus() {
    if (getValue(sId) == getValue(zId) && getValue(zId) == "0") {
      ARtoBUS();
    }
  }

  #ifNotsXORvAndNotzBusToPC() {
    if (getValue(sId) == getValue(zId) && getValue(zId) == "0") {
      loadPC();
    }
  }

  #ifsXORvORzARToBus() {
    if (getValue(sId) != getValue(zId) || getValue(zId) == "1") {
      ARtoBUS();
    }
  }

  #ifsXORvORzBusToPC() {
    if (getValue(sId) != getValue(zId) || getValue(zId) == "1") {
      loadPC();
    }
  }

  #ifsXORvARToBus() {
    if (getValue(sId) != getValue(zId)) {
      ARtoBUS();
    }
  }

  #ifNotsXORvARToBus() {
    if (getValue(sId) == getValue(zId)) {
      ARtoBUS();
    }
  }

  #ifsXORvBusToPC() {
    if (getValue(sId) != getValue(zId)) {
      loadPC();
    }
  }

  #ifNotsXORvBusToPC() {
    if (getValue(sId) == getValue(zId)) {
      loadPC();
    }
  }

  #ifZisSetARToBus() {
    if (getValue(zId) == "1") {
      ARtoBUS();
    }
  }

  #ifZisResetARToBus() {
    if (getValue(zId) == "0") {
      ARtoBUS();
    }
  }

  #ifZisSetBusToPC() {
    if (getValue(zId) == "1") {
      loadPC();
    }
  }

  #ifZisResetBusToPC() {
    if (getValue(zId) == "0") {
      loadPC();
    }
  }

  #isNotImmediateAddressing() {
    return getValue(i1Id) + getValue(i0Id) != "10";
  }

  #ifNotImmedAddRamToBus() {
    if (getValue(i1Id) + getValue(i0Id) != "10") {
      memoryRead(true);
    }
  }
  #ifNotImmedAddBusToDR() {
    if (getValue(i1Id) + getValue(i0Id) != "10") {
      loadDR();
    }
  }

  #zState() {
    return getValue(zId) == "1";
  }

  #sXORv() {
    return getValue(sId) != getValue(zId);
  }

  #isDRZero() {
    const drValue = getValue(drId);
    return parseInt(drValue) == 0;
  }

  #ramToBus() {
    memoryRead(true);
  }

  #xorACandDR() {
    setALUOperation("XOR");
  }

  #andACandDR() {
    setALUOperation("AND");
  }

  #subACandDR() {
    setALUOperation("SUB");
  }

  #orACandDR() {
    setALUOperation("OR");
  }

  #addACandDR() {
    setALUOperation("ADD");
    //
  }

  #testACandDR() {
    setALUOperation("TEST AC");
  }

  #testBandDR() {
    setALUOperation("TEST B");
  }

  #complementAC() {
    setALUOperation("COMPLEMENT AC");
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
    setALUOperation("TRANSFER DR");
  }

  #aluToPSW() {
    ALUtoC();
    ALUtoV();
    ALUtoS();
    ALUtoZ();
  }

  #drToBus() {
    DRtoBUS();
  }

  #acToBus() {
    ACtoBUS();
  }

  #busToRam() {
    memoryWrite();
  }

  #bToBus() {
    BtoBUS();
  }

  #busToDR() {
    loadDR();
  }

  #incrementDR() {
    incrementDR();
  }

  #ifDRZeroIncrementPC() {
    const drValue = getValue(drId);
    if (parseInt(drValue) == 0) {
      incrementPC();
    }
  }

  #arToBus() {
    ARtoBUS();
  }

  #busToPC() {
    loadPC();
  }

  #pcToBus() {
    PCtoBUS();
  }

  #incrementAR() {
    incrementAR();
  }

  #busToTR() {
    loadTR();
  }

  #trToBus() {
    TRtoBUS();
  }

  #incrementAC() {
    incrementAC();
  }

  #resetCounter() {
    seqCounter.clrFlag(true);
    seqCounter.clearValue();
    // clear SC
  }

  async performOperations(condition) {
    if (this.#mriOperations[condition] == undefined) throw "Invalid operation";
    let operations = this.#mriOperations[condition];
    for (let operation of operations) {
      operation();
      await new Promise((resolve) =>
        setTimeout(() => {
          signalOff();
          resolve();
        }, 50)
      );
    }
  }
}
