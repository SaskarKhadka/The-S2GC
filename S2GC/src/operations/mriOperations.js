class MRIOperations {
  #mriOperations;

  /**
   * RESET COUNTER COLORS
   * ALU OPERATION COLORS
   * if colors
   */

  constructor() {
    this.#mriOperations = {
      D0T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D0T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#andACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D1T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D1T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#orACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D2T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D2T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#xorACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D3T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D3T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#andACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
      ],
      D3T8: [
        [[this.#acToALU], [[ACtoALUColors, { needParams: false }, {}]]],
        [
          [this.#complementAC],
          [[ALUoperationColors, { needParams: false }, {}]],
        ],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D4T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D4T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#orACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
      ],
      D4T8: [
        [[this.#acToALU], [[ACtoALUColors, { needParams: false }, {}]]],
        [
          [this.#complementAC],
          [[ALUoperationColors, { needParams: false }, {}]],
        ],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D5T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D5T7: [
        [[this.#drToALU], [[DRtoALUColors, { needParams: false }, {}]]],
        [[this.#transferDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D6T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D6T7: [
        [[this.#drToALU], [[DRtoALUColors, { needParams: false }, {}]]],
        [[this.#transferDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToB], [[ALUtoBColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D7T6: [
        [[this.#acToBus], [[ACtoBusColors, { needParams: false }, {}]]],
        [[this.#busToRam], [[memoryWriteColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D8T6: [
        [[this.#bToBus], [[BtoBusColors, { needParams: false }, {}]]],
        [[this.#busToRam], [[memoryWriteColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D9T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D9T7: [
        [[this.#incrementDR], [[DRIncrementColors, { needParams: false }, {}]]],
      ],
      D9T8: [
        [[this.#drToBus], [[DRtoBusColors, { needParams: false }, {}]]],
        [[this.#busToRam], [[memoryWriteColors, { needParams: false }, {}]]],
      ],
      D9T9: [
        [
          [this.#ifDRZeroIncrementPC],
          [[ifDRZeroPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D10T6: [
        [[this.#arToBus], [[ARtoBusColors, { needParams: false }, {}]]],
        [[this.#busToPC], [[PCLoadColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D11T6: [
        [[this.#pcToBus], [[PCtoBusColors, { needParams: false }, {}]]],
        [[this.#busToRam], [[memoryWriteColors, { needParams: false }, {}]]],
      ],
      D11T7: [
        [[this.#incrementAR], [[ARIncrementColors, { needParams: false }, {}]]],
      ],
      D11T8: [
        [[this.#arToBus], [[ARtoBusColors, { needParams: false }, {}]]],
        [[this.#busToPC], [[PCLoadColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D12T6: [
        [[this.#ramToBus], [[memoryReadColors, { needParams: false }, {}]]],
        [[this.#busToDR], [[DRLoadColors, { needParams: false }, {}]]],
      ],
      D12T7: [
        [[this.#acToBus], [[ACtoBusColors, { needParams: false }, {}]]],
        [[this.#busToRam], [[memoryWriteColors, { needParams: false }, {}]]],
      ],
      D12T8: [
        [[this.#drToALU], [[DRtoALUColors, { needParams: false }, {}]]],
        [[this.#transferDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D13T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D13T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#addACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [
          [this.#aluToPSW],
          [
            [ALUtoCColors, { needParams: false }, {}],
            [ALUtoZColors, { needParams: false }, {}],
            [ALUtoVColors, { needParams: false }, {}],
            [ALUtoSColors, { needParams: false }, {}],
          ],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D14T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
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
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#subACandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [
          [this.#aluToPSW],
          [
            [ALUtoCColors, { needParams: false }, {}],
            [ALUtoZColors, { needParams: false }, {}],
            [ALUtoVColors, { needParams: false }, {}],
            [ALUtoSColors, { needParams: false }, {}],
          ],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D15T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D15T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [
          [this.#testACandDR],
          [[ALUoperationColors, { needParams: false }, {}]],
        ],
        [
          [this.#aluToPSW],
          [
            [ALUtoCColors, { needParams: false }, {}],
            [ALUtoZColors, { needParams: false }, {}],
            [ALUtoVColors, { needParams: false }, {}],
            [ALUtoSColors, { needParams: false }, {}],
          ],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D16T6: [
        [
          [this.#ifNotImmedAddRamToBus],
          [[ifNotImmedAddMemoryReadColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotImmedAddBusToDR],
          [[ifNotImmedAddDRLoadColors, { needParams: false }, {}]],
        ],
      ],
      D16T7: [
        [
          [this.#acDRToALU],
          [
            [DRtoALUColors, { needParams: false }, {}],
            [ACtoALUColors, { needParams: false }, {}],
          ],
        ],
        [[this.#testBandDR], [[ALUoperationColors, { needParams: false }, {}]]],
        [
          [this.#aluToPSW],
          [
            [ALUtoCColors, { needParams: false }, {}],
            [ALUtoZColors, { needParams: false }, {}],
            [ALUtoVColors, { needParams: false }, {}],
            [ALUtoSColors, { needParams: false }, {}],
          ],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D17T6: [
        [
          [this.#ifZisSetARToBus],
          [[ifZisSetARtoBusColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifZisSetBusToPC],
          [[ifZisSetPCLoadColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D18T6: [
        [
          [this.#ifZisResetARToBus],
          [[ifZisResetARtoBusColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifZisResetBusToPC],
          [[ifZisResetPCLoadColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D19T6: [
        [
          [this.#ifsXORvORzARToBus],
          [[ifsXORvORzARtoBusColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifsXORvORzBusToPC],
          [[ifsXORvORzPCLoadColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D20T6: [this.#ifsXORvARToBus, this.#ifsXORvBusToPC, this.#resetCounter],
      D21T6: [
        [
          [this.#ifNotsXORvARToBus],
          [[ifNotsXORvARtoBusColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotsXORvBusToPC],
          [[ifNotsXORvPCLoadColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      D22T6: [
        [
          [this.#ifNotsXORvAndNotzARToBus],
          [[ifNotsXORvAndNotzARtoBusColors, { needParams: false }, {}]],
        ],
        [
          [this.#ifNotsXORvAndNotzBusToPC],
          [[ifNotsXORvAndNotzPCLoadColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
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
      myOperations.push([condition, operation[0][0]]);
      myColors.push(operation[1]);
      operation[0][0]();
      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     signalOff();
      //     resolve();
      //   }, 50)
      // );
    }
  }
}
