class Bus {
  #size;
  #value;
  constructor(size) {
    this.#size = size;
    this.#value = Arithmetics.createStandardSize("0", size);
  }

  value() {
    return this.#value;
  }

  setValue(newVal) {
    if (newVal.length > this.#size) {
      this.#value = newVal.substring(newVal.length - this.#size);
    } else if (newVal.length < this.#size) {
      newVal = Arithmetics.createStandardSize(newVal, this.#size);
      this.#value = newVal;
    } else {
      this.#value = newVal;
    }
  }
}
