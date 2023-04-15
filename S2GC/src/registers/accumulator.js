const Arithmetics = require("../arithmetics/arithmetics");

class Accumulator {
  constructor(size) {
    this.#size = size;
    this.#value = Arithmetics.createStandardSize("0", this.#size);
    this.#ld = false;
    this.#inr = false;
    this.#clr = false;
  }

  set() {
    this.#inr = true;
  }

  VALUE() {
    return this.#value;
  }

  LD() {
    return this.#value;
  }

  INR() {
    return this.#inr;
  }

  CLR() {
    return this.#clr;
  }

  ldFlag(newVal) {
    this.#ld = newVal;
  }

  inrFlag(newVal) {
    this.#inr = newVal;
  }

  clrFlag(newVal) {
    this.#clr = newVal;
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
      throw "Cannot load ACCUMULATOR";
    }
  }

  increamentValue() {
    if (this.#inr) {
      this.#inr = false;
      this.#value = Arithmetics.increament(this.#value)[0];
    } else {
      throw "Cannot increament ACCUMULATOR";
    }
  }

  clearValue() {
    if (this.#clr) {
      this.#clr = false;
      this.#value = Arithmetics.createStandardSize("0", this.#size);
    } else {
      throw "Cannot clear ACCUMULATOR";
    }
  }
}

const ac = new Accumulator(5);
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
ac.set();
ac.increamentValue();
console.log(ac.VALUE());
