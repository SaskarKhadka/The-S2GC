class FetchOperations {
  #fetchOperations;

  constructor() {
    this.#fetchOperations = {
      T0: [this.#pcToBus, this.#busToAR],
      T1: [this.#ramToBus, this.#busToIR],
      T2: [this.#incrementPC],
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
