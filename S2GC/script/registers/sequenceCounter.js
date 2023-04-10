class SequenceCounter {
  constructor(size) {
    this._size = size;
    this._value = Arithmetics.createStandardSize("0", this._size);
    this._inr = false;
    this._clr = false;
  }

  VALUE() {
    return this._value;
  }

  INR() {
    return this._inr;
  }

  CLR() {
    return this._clr;
  }

  inrFlag(newVal) {
    this._inr = newVal;
  }

  clrFlag(newVal) {
    this._clr = newVal;
  }

  increamentValue() {
    if (this._inr) {
      this._inr = false;
      this._value = Arithmetics.increament(this._value)[0];
    } else {
      throw "Cannot increament Sequence Counter";
    }
  }

  clearValue() {
    if (this._clr) {
      this._clr = false;
      this._value = Arithmetics.createStandardSize("0", this._size);
    } else {
      throw "Cannot clear Sequence Counter";
    }
  }
}
