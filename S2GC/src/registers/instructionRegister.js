class InstructionRegister {
  #size;
  #value;
  #ld;
  constructor(size) {
    this.#size = size;
    this.#value = Arithmetics.createStandardSize("0", this.#size);
    this.#ld = false;
  }

  VALUE() {
    return this.#value;
  }

  LD() {
    return this.#value;
  }

  ldFlag(newVal) {
    this.#ld = newVal;
  }

  loadValue(newVal) {
    if (this.#ld) {
      this.#ld = false;
      if (newVal.length > this.#size) {
        this.#value = newVal.substring(newVal.length - this.#size);
      } else if (newVal.length < this.#size) {
        newVal = Arithmetics.createStandardSize(newVal, this.#size);
        this.#value = newVal;
      } else {
        this.#value = newVal;
      }
    } else {
      throw "Cannot load Instruction Register";
    }
  }
}
