class TemporaryRegister {
  constructor(size) {
    this._size = size;
    this._value = Arithmetics.createStandardSize("0", this._size);
    this._ld = false;
  }

  VALUE() {
    return this._value;
  }

  LD() {
    return this._value;
  }

  ldFlag(newVal) {
    this._ld = newVal;
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
      throw "Cannot load Temporary Register";
    }
  }
}
