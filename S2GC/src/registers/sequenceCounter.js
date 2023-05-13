class SequenceCounter {
  #size;
  #value;
  #clr;
  #inr;
  constructor(size) {
    this.#size = size;
    this.#value = Arithmetics.createStandardSize("0", this.#size);
    this.#inr = false;
    this.#clr = false;
  }

  VALUE() {
    return this.#value;
  }

  INR() {
    return this.#inr;
  }

  CLR() {
    return this.#clr;
  }

  inrFlag(newVal) {
    this.#inr = newVal;
  }

  clrFlag(newVal) {
    this.#clr = newVal;
  }

  setValue(value) {
    this.#value = value;
  }

  increamentValue() {
    if (this.#inr) {
      this.#inr = false;
      this.#value = Arithmetics.increament(this.#value);
    } else {
      throw "Cannot increament Sequence Counter";
    }
  }

  clearValue() {
    if (this.#clr) {
      this.#clr = false;
      this.#value = Arithmetics.createStandardSize("0", this.#size);
    } else {
      throw "Cannot clear Sequence Counter";
    }
  }
}
