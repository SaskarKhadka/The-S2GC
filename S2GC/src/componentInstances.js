/**
 * Instances for flipflops, regsiters and decoders
 */

const stateDecoder = new Decoder(4);
const decodeOps = new DecodeOperations();
const fetchOps = new FetchOperations();
const resolveEffecAddOps = new ResolveEffectiveAddressOperations();
const rriOps = new RRIOperations();
const mriOps = new MRIOperations();

function resetMemory(editedMemValues) {
  const newEditedMemValues = document.querySelectorAll(".edited");
  for (let element of newEditedMemValues) {
    element.innerHTML = "00";
    element.classList.remove("edited");
  }
  for (const [key, value] of Object.entries(editedMemValues)) {
    document.getElementById(key).innerHTML = value;
    document.getElementById(key).classList.add("edited");
  }
}

function resetBusArchitecture() {
  document.getElementById(pcId).innerHTML = "4096";
  document.getElementById(drId).innerHTML = "0";
  document.getElementById(acId).innerHTML = "0";
  document.getElementById(arId).innerHTML = "0";
  document.getElementById(bId).innerHTML = "0";
  document.getElementById(irId).innerHTML = "0";
  document.getElementById(trId).innerHTML = "0";
  document.getElementById(busId).innerHTML = "0000";
  document.getElementById(outrId).innerHTML = "0";
  document.getElementById(inprId).innerHTML = "0";
  document.getElementById(aluValId).innerHTML = "0";
  document.getElementById(aluCarryId).innerHTML = "0";
  document.getElementById(aluOpId).innerHTML = "0";
  document.getElementById(aluOverflowId).innerHTML = "0";
  seqCounter.setValue("0000");
  changeStateFF("I0", "0");
  changeStateFF("I1", "0");
  changeStateFF("R", "0");
  changeStateFF("IEN", "0");
  changeStateFF("SS", "1");
  changeStateFF("FGI", "0");
  changeStateFF("FGO", "0");
  changeStateFF("V", "0");
  changeStateFF("S", "0");
  changeStateFF("Z", "0");
  changeStateFF("C", "0");
}

function getCurrentState() {
  const currentState = {
    pc: getValue(pcId),
    ar: getValue(arId),
    ac: getValue(acId),
    dr: getValue(drId),
    b: getValue(bId),
    tr: getValue(trId),
    ir: getValue(irId),
    sc: seqCounter.VALUE(),
    inpr: getValue(inprId),
    outr: getValue(outrId),
    i0: getValue(i0Id),
    i1: getValue(i1Id),
    ien: getValue(ienId),
    c: getValue(cId),
    v: getValue(vId),
    s: getValue(sId),
    z: getValue(zId),
    fgi: getValue(fgiId),
    fgo: getValue(fgoId),
    ss: getValue(ssId),
    r: getValue(rId),
    bus: getValue(busId),
    aluOp: getValue(aluOpId),
    alu: getValue(aluValId),
    aluCarry: getValue(aluCarryId),
    aluOver: getValue(aluOverflowId),
  };
  return currentState;
}

function setCurrentState(state) {
  document.getElementById(pcId).innerHTML = state.pc;
  document.getElementById(drId).innerHTML = state.dr;
  document.getElementById(acId).innerHTML = state.ac;
  document.getElementById(arId).innerHTML = state.ar;
  document.getElementById(bId).innerHTML = state.b;
  document.getElementById(irId).innerHTML = state.ir;
  document.getElementById(trId).innerHTML = state.tr;
  document.getElementById(outrId).innerHTML = state.outr;
  document.getElementById(inprId).innerHTML = state.inpr;
  document.getElementById(aluValId).innerHTML = state.alu;
  document.getElementById(aluCarryId).innerHTML = state.aluCarry;
  document.getElementById(aluOpId).innerHTML = state.aluOp;
  document.getElementById(aluOverflowId).innerHTML = state.aluOver;
  document.getElementById(busId).innerHTML = state.bus;
  seqCounter.setValue(state.sc);
  changeStateFF("I0", state.i0);
  changeStateFF("I1", state.i1);
  changeStateFF("R", state.r);
  changeStateFF("IEN", state.ien);
  changeStateFF("SS", state.ss);
  changeStateFF("FGI", state.fgi);
  changeStateFF("FGO", state.fgo);
  changeStateFF("V", state.v);
  changeStateFF("S", state.s);
  changeStateFF("Z", state.z);
  changeStateFF("C", state.c);
}

const stack = new Stack();

const myOperations = [];
let operationsIndex = -1;

const myColors = [];
