class FetchOperations {
  #fetchOperations;

  constructor() {
    this.#fetchOperations = {
      T0: [
        [[this.#pcToBus], [[PCtoBusColors, { needParams: false }, {}]]],
        [[this.#busToAR], [[ARLoadColors, { needParams: false }, {}]]],
      ],
      T1: [
        [[this.#ramToBus], [[memoryReadColors, { needParams: false }, {}]]],
        [[this.#busToIR], [[IRLoadColors, { needParams: false }, {}]]],
      ],
      T2: [
        [[this.#incrementPC], [[PCIncrementColors, { needParams: false }, {}]]],
      ],
    };
  }

  #pcToBus() {
    PCtoBUS();
  }

  #busToAR() {
    loadAR();
  }

  #ramToBus() {
    memoryRead();
  }

  #busToIR() {
    loadIR();
  }

  #incrementPC() {
    incrementPC();
  }

  async performOperations(condition) {
    if (this.#fetchOperations[condition] == undefined)
      throw "Invalid decode operation";
    let operations = this.#fetchOperations[condition];
    for (let operation of operations) {
      // myOperations.push([condition, operation]);
      // operation();

      myOperations.push([condition, operation[0][0]]);
      myColors.push(operation[1]);
      operation[0][0]();

      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     signalOff();
      //     resolve();
      //   }, 50)
      // );
      signalOff();
    }
  }
}
