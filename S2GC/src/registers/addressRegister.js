const Arithmetics = require("../arithmetics/arithmetics");

class AddressRegister {
  constructor(size) {
    this._size = size;
    this._value = Arithmetics.createStandardSize("0", this._size);
    this._ld = false;
    this._inr = false;
    this._clr = false;
  }

  VALUE() {
    return this._value;
  }

  LD() {
    return this._value;
  }

  INR() {
    return this._inr;
  }

  CLR() {
    return this._clr;
  }

  ldFlag(newVal) {
    this._ld = newVal;
  }

  inrFlag(newVal) {
    this._inr = newVal;
  }

  clrFlag(newVal) {
    this._clr = newVal;
  }

  loadValue(newVal) {
    if (this._ld) {
      this._ld = false;
      if (newVal.length > this._size) {
        this._value = newVal.substring(newVal.length - this._size);
      } else if (newVal.length < this._size) {
        newVal = Arithmetics.createStandardSize(newVal, this._size);
        this._value = newVal;
      } else {
        this._value = newVal;
      }
    } else {
      throw "Cannot load Address Register";
    }
  }

  increamentValue() {
    if (this._inr) {
      this._inr = false;
      this._value = Arithmetics.increament(this._value)[0];
    } else {
      throw "Cannot increament Address Register";
    }
  }

  clearValue() {
    if (this._clr) {
      this._clr = false;
      this._value = Arithmetics.createStandardSize("0", this._size);
    } else {
      throw "Cannot clear Address Register";
    }
  }
}
