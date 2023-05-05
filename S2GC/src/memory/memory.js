const addressReg = new AddressRegister(13);

class RAM {
  #locations;
  #locationNo;
  #write;
  #read;
  #wordSize;
  #totalLocations;
  constructor() {
    this.#locations = {};
    this.#locationNo = "0000000000000";
    this.#write = false;
    this.#read = false;
    this.#wordSize = 32;
    this.#totalLocations = Math.pow(2, 13);
  }

  write() {
    return this.#write;
  }

  read() {
    return this.#read;
  }

  writeFlag(state) {
    this.#write = state;
  }

  readFlag(state) {
    this.#read = state;
  }

  setValue(value) {
    if (this.#write) {
      this.#write = false;
      let location = addressReg.VALUE();
      this.#locations[location] = value;
    } else {
      throw "Cannot write to RAM";
    }
  }

  getValue() {
    if (this.#read) {
      this.#read = false;

      let location = addressReg.VALUE();
      return this.#locations[location] == null
        ? Arithmetics.createStandardSize("0", this.#wordSize)
        : this.#locations[location];
    } else {
      throw "Cannot read from RAM";
    }
  }

  setInstructions(instructions) {
    if (this.#write) {
      this.#write = false;
      for (instruction in instructions) {
        this.#locations[this.#locationNo] = instruction;
        increamentLocationNo();
      }
      resetLocationNo();
    } else {
      throw "Cannot write to RAM";
    }
  }

  increamentLocationNo() {
    this.#locationNo = Arithmetics.increament(this.#locationNo)[0];
  }

  resetLocationNo() {
    this.#locationNo = "0000000000000";
  }
}
