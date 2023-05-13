class Stack {
  #arr;
  #currIndex;
  constructor() {
    this.#arr = [];
    this.#currIndex = -1;
  }

  isEmpty() {
    return this.#currIndex == -1;
  }

  pop() {
    if (!this.isEmpty()) {
      const data = this.#arr[this.#currIndex];
      this.#currIndex--;
      return data;
    } else {
      throw "Stack underflow";
    }
  }

  push(microOp) {
    this.#currIndex++;
    this.#arr[this.#currIndex] = microOp;
  }

  reset() {
    this.#arr = [];
    this.#currIndex = -1;
  }
}
