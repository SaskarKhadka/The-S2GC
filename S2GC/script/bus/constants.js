const acId = "AC-content-value";
const drId = "DR-content-value";
const irId = "IR-content-value";
const inprId = "INPR-content-value";
const pcId = "PC-content-value";
const arId = "AR-content-value";
const bId = "B-content-value";
const trId = "TR-content-value";
const outrId = "OUTR-content-value";
const busId = "bus-content-value";
const aluValId = "ALU-content-value";
const aluOpId = "ALU-content-operation";
const aluCarryId = "ALU-content-carry";
const aluOverflowId = "ALU-content-overflow";
const i0Id = "FF-I0-value";
const i1Id = "FF-I1-value";
const rId = "FF-R-value";
const ienId = "FF-IEN-value";
const ssId = "FF-SS-value";
const sId = "FF-S-value";
const fgiId = "FF-FGI-value";
const fgoId = "FF-FGO-value";
const cId = "FF-C-value";
const vId = "FF-V-value";
const zId = "FF-Z-value";
const arSize = 13;
const pcSize = 13;
const acSize = 32;
const drSize = 32;
const trSize = 32;
const irSize = 32;
const bSize = 32;
const outrSize = 8;
const inprSize = 8;
const busSize = 32;

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

function getValue(id) {
  return document.getElementById(id).innerHTML;
}

const TokenType = {
  EOF: "EOF",
  IDENTIFIER: "IDENTIFIER",
  COLON: "COLON",
  SEMICOLON: "COLON",
  KEYWORD: "KEYWORD",
  AT: "AT",
  PLUS: "PLUS",
  MINUS: "MINUS",
  NUMBER: "NUMBER",
  HASHTAG: "HASHTAG",
  DOLLAR: "DOLLAR",
};

let firstTimeForward = true;
let paused = false;
let prev = false;
let next = false;
let play = false;
