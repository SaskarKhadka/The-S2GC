class ResolveEffectiveAddressOperations {
  #decodeOperations;
  constructor() {
    this.#decodeOperations = {
      "D31'I1'I0'T5": [],
      "D31'I1I0'T5": [this.#irToBus, this.#busToDR],
      "D31'I1I0T5": [this.#ramToBus, this.#busToAR],
    };
  }

  #irToBus() {
    IRtoBUS();
  }

  #busToDR() {
    let busValue = getValue(busId);
    busValue = Arithmetics.decimalToBinary(busValue).slice(7);
    const sign = busValue[0] == "1" ? "-" : "+";
    const value = Arithmetics.binaryToDecimal(busValue.slice(1));
    if (value == 0) {
      document.getElementById(drId).innerHTML = "0";
    } else {
      document.getElementById(drId).innerHTML = sign + value;
    }
    DRLoadColors();
  }

  #ramToBus() {
    memoryRead();
  }

  #busToAR() {
    loadAR();
  }

  async performOperations(condition) {
    if (this.#decodeOperations[condition] == undefined)
      throw "Invalid operation";
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
