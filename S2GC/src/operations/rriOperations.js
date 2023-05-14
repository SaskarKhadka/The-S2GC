class RRIOperations {
  #rriOperations;
  constructor() {
    this.#rriOperations = {
      // "D31I1'I0'T5": [this.#resetCounter],
      "D31I1'I0'T5B24": [
        this.#acToALU,
        this.#decrementAC,
        this.#aluToAC,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B23": [
        this.#bToALU,
        this.#decrementB,
        this.#aluToB,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B22": [this.#clearAC, this.#resetCounter],
      "D31I1'I0'T5B21": [this.#clearB, this.#resetCounter],
      "D31I1'I0'T5B20": [
        this.#acToALU,
        this.#complementAC,
        this.#aluToAC,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B19": [
        this.#bToALU,
        this.#complementB,
        this.#aluToB,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B18": [
        this.#acToALU,
        this.#ashrAC,
        this.#aluToAC,
        this.#updateC,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B17": [
        this.#acToALU,
        this.#ashlAC,
        this.#aluToAC,
        this.#updateCandV,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B16": [
        this.#bToALU,
        this.#ashrB,
        this.#aluToB,
        this.#updateC,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B15": [
        this.#bToALU,
        this.#ashlB,
        this.#aluToB,
        this.#updateCandV,
        this.#resetCounter,
      ],
      "D31I1'I0'T5B14": [this.#incrementAC, this.#resetCounter],
      "D31I1'I0'T5B13": [this.#incrementB, this.#resetCounter],
      "D31I1'I0'T5B12": [this.#ifCIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B11": [this.#ifNotCIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B10": [this.#ifZIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B9": [this.#ifNotSIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B8": [this.#ifVIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B7": [this.#ifNotVIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B6": [this.#ifSIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B5": [this.#ifNotZIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B4": [this.#ifsXORvORzIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B3": [this.#ifsXORvIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B2": [this.#ifNotsXORvAndNotzIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B1": [this.#ifNotsXORvIncrementPC, this.#resetCounter],
      "D31I1'I0'T5B0": [this.#resetSS, this.#resetCounter],
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
    if (this.#rriOperations[condition] == undefined) throw "Invalid operation";
    let operations = this.#rriOperations[condition];
    for (let operation of operations) {
      myOperations.push([condition, operation]);
      operation();
      signalOff();
      // await new Promise((resolve) =>
      // setTimeout(() => {
      // signalOff();
      // resolve();
      // }, 50)
      // );
    }
  }
}
