const instTypeDecoder = new Decoder(5);
const seqCounter = new SequenceCounter(4);

class DecodeOperations {
  #decodeOperations;

  constructor() {
    this.#decodeOperations = {
      T3: [this.#decodeAddressingModeAndInstructionType],
      T4: [this.#ifNotImmedAddIRtoBus, this.#ifNotImmedAddBusToAR],
    };
  }

  #isNotImmediateAddressing() {
    return getValue(i1Id) + getValue(i0Id) != "10";
  }

  #ifNotImmedAddIRtoBus() {
    if (getValue(i1Id) + getValue(i0Id) != "10") {
      IRtoBUS();
    }
  }
  #ifNotImmedAddBusToAR() {
    if (getValue(i1Id) + getValue(i0Id) != "10") {
      loadAR();
    }
  }

  #decodeAddressingModeAndInstructionType() {
    const irData = document.getElementById(irId).innerHTML;
    let irBin = Arithmetics.decimalToBinary(irData);
    irBin = Arithmetics.createStandardSize(irBin, 32);
    changeState("I1", irBin[0]);
    changeState("I0", irBin[1]);
    const inst = irBin.slice(2, 7);
    instTypeDecoder.selectOutput(inst);
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
        }, 50)
      );
    }
  }
}
