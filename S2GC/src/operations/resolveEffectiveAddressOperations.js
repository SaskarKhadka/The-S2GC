class ResolveEffectiveAddressOperations {
  #decodeOperations;
  constructor() {
    this.#decodeOperations = {
      "D31'I1'I0'T5": [],
      "D31'I1I0'T5": [
        [[this.#irToBus], [[IRtoBusColors, { needParams: false }, {}]]],
        [[this.#busToDR], [[DRLoadColors, { needParams: false }, {}]]],
      ],
      "D31'I1I0T5": [
        [[this.#ramToBus], [[memoryReadColors, { needParams: false }, {}]]],
        [[this.#busToAR], [[ARLoadColors, { needParams: false }, {}]]],
      ],
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
    // console.log(condition);
    if (this.#decodeOperations[condition] == undefined)
      throw "Invalid operation";
    let operations = this.#decodeOperations[condition];
    for (let operation of operations) {
      myOperations.push([condition, operation[0][0]]);
      myColors.push(operation[1]);
      operation[0][0]();
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
