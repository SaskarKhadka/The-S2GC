class ALU {
  #size;
  #value;

  constructor(size) {
    this.#size = size;
    this.#value = Arithmetics.createStandardSize("0", this.#size);
  }

  value() {
    return this.#value;
  }

  setValue(newVal) {
    if (newVal.length > this.#size) {
      this.#value = newVal.slice(newVal.length - this.#size);
    } else if (newVal.length < this.#size) {
      newVal = Arithmetics.createStandardSize(newVal, this.#size);
      this.#value = newVal;
    } else {
      this.#value = newVal;
    }
  }

  and(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "0" || num2[i] == "0" ? "0" : "1";
    }
    this.#value = result;
  }

  or(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "1" || num2[i] == "1" ? "1" : "0";
    }
    this.#value = result;
  }

  xor(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == num2[i] ? "0" : "1";
    }
    this.#value = result;
  }

  nand(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "0" || num2[i] == "0" ? "1" : "0";
    }
    this.#value = result;
  }

  nor(num1, num2) {
    let result = "";
    for (let i = 0; i < num1.length; i++) {
      result += num1[i] == "1" || num2[i] == "1" ? "0" : "1";
    }
    this.#value = result;
  }

  complement() {
    let result = "";
    for (let i = 0; i < this.#value.length; i++) {
      result += this.#value[i] == "1" ? "0" : "1";
    }
    this.#value = result;
  }

  add(num1, num2) {
    let result = Arithmetics.add(num1, num2);
    this.#value = result[0];
    cFF.changeState(result[1].toString());
  }

  circularShiftLeft() {
    let result = this.#value.slice(1);
    let eState = cFF.state;
    result += eState;
    cFF.changeState(result[0].toString());
    this.#value = result;
  }

  circularShiftRight() {
    let result = this.#value.slice(0, this.#value.length - 1);
    let eState = cFF.state;
    result = eState + result;
    cFF.changeState(this.#value[this.#value.length - 1]);
    this.#value = result;
  }
}
