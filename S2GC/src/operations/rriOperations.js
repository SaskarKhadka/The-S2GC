class RRIOperations {
  #rriOperations;
  constructor() {
    this.#rriOperations = {
      // "D31I1'I0'T5": [this.#resetCounter],
      "D31I1'I0'T5B24": [
        [[this.#acToALU], [[ACtoALUColors, { needParams: false }, {}]]],
        [
          [this.#decrementAC],
          [[ALUoperationColors, { needParams: false }, {}]],
        ],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B23": [
        [[this.#bToALU], [[BtoALUColors, { needParams: false }, {}]]],
        [[this.#decrementB], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToB], [[ALUtoBColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B22": [
        [[this.#clearAC], [[ACClearColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B21": [
        [[this.#clearB], [[BClearColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B20": [
        [[this.#acToALU], [[ACtoALUColors, { needParams: false }, {}]]],
        [
          [this.#complementAC],
          [[ALUoperationColors, { needParams: false }, {}]],
        ],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B19": [
        [[this.#bToALU], [[BtoALUColors, { needParams: false }, {}]]],
        [
          [this.#complementB],
          [[ALUoperationColors, { needParams: false }, {}]],
        ],
        [[this.#aluToB], [[ALUtoBColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B18": [
        [[this.#acToALU], [[ACtoALUColors, { needParams: false }, {}]]],
        [[this.#ashrAC], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [[this.#updateC], [[ALUtoCColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B17": [
        [[this.#acToALU], [[ACtoALUColors, { needParams: false }, {}]]],
        [[this.#ashlAC], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToAC], [[ALUtoACColors, { needParams: false }, {}]]],
        [
          [this.#updateCandV],
          [
            [ALUtoCColors, { needParams: false }, {}],
            [ALUtoVColors, { needParams: false }, {}],
          ],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B16": [
        [[this.#bToALU], [[BtoALUColors, { needParams: false }, {}]]],
        [[this.#ashrB], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToB], [[ALUtoBColors, { needParams: false }, {}]]],
        [[this.#updateC], [[ALUtoCColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B15": [
        [[this.#bToALU], [[BtoALUColors, { needParams: false }, {}]]],
        [[this.#ashlB], [[ALUoperationColors, { needParams: false }, {}]]],
        [[this.#aluToB], [[ALUtoBColors, { needParams: false }, {}]]],
        [
          [this.#updateCandV],
          [
            [ALUtoCColors, { needParams: false }, {}],
            [ALUtoVColors, { needParams: false }, {}],
          ],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B14": [
        [[this.#incrementAC], [[ACIncrementColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B13": [
        [[this.#incrementB], [[BIncrementColors, { needParams: false }, {}]]],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B12": [
        [
          [this.#ifCIncrementPC],
          [[ifCPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B11": [
        [
          [this.#ifNotCIncrementPC],
          [[ifNotCPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B10": [
        [
          [this.#ifZIncrementPC],
          [[ifZPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B9": [
        [
          [this.#ifNotSIncrementPC],
          [[ifNotSPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B8": [
        [
          [this.#ifVIncrementPC],
          [[ifVPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B7": [
        [
          [this.#ifNotVIncrementPC],
          [[ifNotVPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B6": [
        [
          [this.#ifSIncrementPC],
          [[ifSPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B5": [
        [
          [this.#ifNotZIncrementPC],
          [[ifNotZPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B4": [
        [
          [this.#ifsXORvORzIncrementPC],
          [[ifsXORvORzPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B3": [
        [
          [this.#ifsXORvIncrementPC],
          [[ifsXORvPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B2": [
        [
          [this.#ifNotsXORvAndNotzIncrementPC],
          [[ifNotsXORvAndNotzPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B1": [
        [
          [this.#ifNotsXORvIncrementPC],
          [[ifNotsXORvPCIncrementColors, { needParams: false }, {}]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
      "D31I1'I0'T5B0": [
        [
          [this.#resetSS],
          [[activeBoxOn, { needParams: true }, { params: "FF-SS" }]],
        ],
        [[this.#resetCounter], [[SCClearColors, { needParams: false }, {}]]],
      ],
    };
  }

  #ifCIncrementPC() {
    if (getValue(cId) == "1") {
      incrementPC();
    }
  }

  #ifNotCIncrementPC() {
    if (getValue(cId) == "0") {
      incrementPC();
    }
  }

  #ifZIncrementPC() {
    if (getValue(zId) == "1") {
      incrementPC();
    }
  }

  #ifNotZIncrementPC() {
    if (getValue(zId) == "0") {
      incrementPC();
    }
  }

  #ifSIncrementPC() {
    if (getValue(sId) == "1") {
      incrementPC();
    }
  }

  #ifNotSIncrementPC() {
    if (getValue(sId) == "0") {
      incrementPC();
    }
  }

  #ifVIncrementPC() {
    if (getValue(vId) == "1") {
      incrementPC();
    }
  }

  #ifNotVIncrementPC() {
    if (getValue(vId) == "0") {
      incrementPC();
    }
  }

  #ifsXORvORzIncrementPC() {
    if (getValue(sId) != getValue(vId) || getValue(zId) == "1") {
      incrementPC();
    }
  }

  #ifNotsXORvAndNotzIncrementPC() {
    if (getValue(sId) == getValue(vId) && getValue(zId) == "0") {
      incrementPC();
    }
  }

  #ifsXORvIncrementPC() {
    if (getValue(sId) != getValue(vId)) {
      incrementPC();
    }
  }

  #ifNotsXORvIncrementPC() {
    if (getValue(sId) == getValue(vId)) {
      incrementPC();
    }
  }

  #zState() {
    return document.getElementById(zId).innerHTML == "1";
  }

  #cState() {
    return document.getElementById(cId).innerHTML == "1";
  }

  #sState() {
    return document.getElementById(sId).innerHTML == "1";
  }

  #vState() {
    return document.getElementById(vId).innerHTML == "1";
  }

  #sXORv() {
    return getValue(sId) != getValue(vId);
  }

  #resetCounter() {
    seqCounter.clrFlag(true);
    seqCounter.clearValue();
  }
  #aluToAC() {
    ALUtoAC();
  }
  #decrementAC() {
    setALUOperation("DEC AC");
  }
  #acToALU() {
    ACtoALU();
  }
  #aluToB() {
    ALUtoB();
  }
  #decrementB() {
    setALUOperation("DEC B");
  }
  #incrementAC() {
    incrementAC();
  }
  #incrementB() {
    incrementB();
  }
  #bToALU() {
    BtoALU();
  }
  #clearAC() {
    clearAC();
  }
  #clearB() {
    clearB();
  }
  #complementAC() {
    setALUOperation("COMPLEMENT AC");
  }
  #complementB() {
    setALUOperation("COMPLEMENT B");
  }
  #ashrAC() {
    setALUOperation("ASHR AC");
  }
  #ashlAC() {
    setALUOperation("ASHL AC");
  }
  #ashrB() {
    setALUOperation("ASHR B");
  }
  #ashlB() {
    setALUOperation("ASHL B");
  }

  #incrementPC() {
    incrementPC();
  }
  #resetSS() {
    changeState("SS", "0");
  }
  #updateC() {
    changeState("C", getValue(aluCarryId));
  }
  #updateCandV() {
    changeState("C", getValue(aluCarryId));
    changeState("V", getValue(aluOverflowId));
  }

  async performOperations(condition) {
    // console.log(condition);
    if (this.#rriOperations[condition] == undefined) throw "Invalid operation";
    let operations = this.#rriOperations[condition];
    for (let operation of operations) {
      myOperations.push([condition, operation[0][0]]);
      myColors.push(operation[1]);
      operation[0][0]();
      // await new Promise((resolve) =>
      // setTimeout(() => {
      // signalOff();
      // resolve();
      // }, 50)
      // );
      // signalOff();
    }
  }
}
