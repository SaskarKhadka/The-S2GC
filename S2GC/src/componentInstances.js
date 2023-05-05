/**
 * Instances for flipflops, regsiters and decoders
 */

const stateDecoder = new Decoder(4);
const instDecoder = new Decoder(5);
const accumulator = new Accumulator(32);
const bReg = new BRegister(32);
const dataReg = new DataRegister(32);
const instructionReg = new InstructionRegister(32);
const programCounter = new ProgramCounter(13);
const sequenceCounter = new SequenceCounter(4);
const temporaryReg = new TemporaryRegister(32);
const alu = new ALU(32);
const ram = new RAM();
const cFF = new CflipFlop();
const fgiFF = new CflipFlop();
const fgoFF = new CflipFlop();
const i0FF = new CflipFlop();
const i1FF = new CflipFlop();
const ienFF = new CflipFlop();
const rFF = new CflipFlop();
const sFF = new CflipFlop();
const ssFF = new CflipFlop();
const vFF = new CflipFlop();
const zFF = new CflipFlop();
const bus = new Bus();
