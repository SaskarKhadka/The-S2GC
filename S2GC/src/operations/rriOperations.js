class RRIOperations {
  #rriOperations;
  constructor() {
    this.#rriOperations = {
      "D31I1'I0'T5": [this.#resetCounter],
      "D31I1'I0'T5B24": [this.#acToALU, this.#decrementAC, this.#aluToAC],
      "D31I1'I0'T5B23": [this.#bToALU, this.#decrementB, this.#aluToB],
      "D31I1'I0'T5B22": [this.#clearAC],
      "D31I1'I0'T5B21": [this.#clearB],
      "D31I1'I0'T5B20": [this.#acToALU, this.#complementAC, this.#aluToAC],
      "D31I1'I0'T5B19": [this.#bToALU, this.#complementB, this.#aluToB],
      "D31I1'I0'T5B18": [
        this.#acToALU,
        this.#ashrAC,
        this.#aluToAC,
        this.#updateC,
      ],
      "D31I1'I0'T5B17": [
        this.#acToALU,
        this.#ashlAC,
        this.#aluToAC,
        this.#updateCandV,
      ],
      "D31I1'I0'T5B16": [
        this.#bToALU,
        this.#ashrB,
        this.#aluToB,
        this.#updateC,
      ],
      "D31I1'I0'T5B15": [
        this.#bToALU,
        this.#ashlB,
        this.#aluToB,
        this.#updateCandV,
      ],
      "D31I1'I0'T5B14": [this.#incrementAC],
      "D31I1'I0'T5B13": [this.#incrementB],
      "D31I1'I0'T5B12": this.#cState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B11": !this.#cState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B10": this.#zState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B9": !this.#sState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B8": this.#vState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B7": !this.#vState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B6": this.#sState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B5": !this.#vState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B4":
        this.#sXORv() || this.#zState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B3": this.#sXORv() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B2":
        !this.#sXORv() && !this.#zState() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B1": !this.#sXORv() ? [this.#incrementPC] : [],
      "D31I1'I0'T5B0": [this.#resetSS],
    };
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
    return sFF.state() != vFF.state();
  }

  #resetCounter() {
    sequenceCounter.clrFlag(true);
    sequenceCounter.clearValue();
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
  #aluLastToC() {}
  #aluFirstToC() {}
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
