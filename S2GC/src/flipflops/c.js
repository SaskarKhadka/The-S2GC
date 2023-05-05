class CflipFlop {
  #state;
  constructor() {
    this.#state = "0";
  }

  state() {
    return this.#state;
  }

  set() {
    this.#state = "1";
  }

  reset() {
    this.#state = "0";
  }

  changeState(state) {
    this.#state = state;
  }

  complement() {
    this.#state = this.#state == "1" ? "0" : "1";
  }
}
