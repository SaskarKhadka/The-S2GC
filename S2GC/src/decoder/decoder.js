const Arithmetics = require("../arithmetics/arithmetics");

class Decoder {
  constructor(selectL) {
    this.#selectLines = selectL;
    this.#outputs = Math.pow(2, this.#selectLines);
    this.#currOutput = "0";
  }

  currOutput() {
    return this.#currOutput;
  }

  selectOutput(selectLine) {
    if (selectLine.length > this.#selectLines) {
      throw "Error";
    }
    this.#currOutput = Arithmetics.binaryToDecimal(selectLine).to();
    return this.#currOutput;
  }
}
