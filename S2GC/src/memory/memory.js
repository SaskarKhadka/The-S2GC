// const Arithmetics = require("../arithmetics/arithmetics")

// class RAM {

//     constructor() {
//       this.#locations = {};
//       this.#locationNo = "0000000000000";
//       this.#write = false;
//       this.#read = false;
//       this.#wordSize = 19;
//       this.#totalLocations = pow(2, 13).toInt();
//     }

//     write() { return this.#write; }

//     read() { return this.#read; }

//     writeFlag(state) {
//       this.#write = state;
//     }

//     readFlag(state) {
//       this.#read = state;
//     }

//     setValue(value) {
//       if (this.#write) {
//         this.#write = false;
//         let location =
//             Provider.of<AddressRegister>(context, listen: false).value;
//         this.#locations[location] = value;
//         notifyListeners();
//       } else {
//         throw "Cannot write to RAM";
//       }
//     }

//     getValue() {
//       if (this.#read) {
//         this.#read = false;
//         String location =
//             Provider.of<AddressRegister>(context, listen: false).value;
//         notifyListeners();
//         return this.#locations[location] == null
//             ? Arithmetics.createStandardSize("0", this.#wordSize)
//             : this.#locations[location];
//       } else {
//         throw "Cannot read from RAM";
//       }
//     }

//     setInstructions(instructions) {
//       if (this.#write) {
//         this.#write = false;
//         for (instruction in instructions) {
//           this.#locations[this.#locationNo] = instruction;
//           increamentLocationNo();
//         }
//         resetLocationNo();
//       } else {
//         throw "Cannot write to RAM";
//       }
//     }

//     increamentLocationNo() {
//       this.#locationNo = Arithmetics.increament(this.#locationNo)[0];
//     }

//     resetLocationNo() {
//       this.#locationNo = "0000000000000";
//     }

//   }
