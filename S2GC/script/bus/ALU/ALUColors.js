function DRtoALUColors() {
  activeBoxOn("ALU-box");
  topArrowOn("DR-to-ALU");
  transferSignalOn("DR-to-ALU");
  borderOn("DR-box");
}

function BtoALUColors() {
  activeBoxOn("ALU-box");
  topArrowOn("B-to-ALU");
  transferSignalOn("B-to-ALU");
  borderOn("B-box");
}

function ALUtoBColors() {
  activeBoxOn("B-box");
  bottomArrowOn("B-to-ALU");
  transferSignalOn("B-to-ALU");
  borderOn("ALU-box");
}

function ACtoALUColors() {
  activeBoxOn("ALU-box");
  topArrowOn("AC-to-ALU");
  transferSignalOn("AC-to-ALU");
  borderOn("AC-box");
}

function ALUtoACColors() {
  activeBoxOn("AC-box");
  bottomArrowOn("AC-to-ALU");
  transferSignalOn("AC-to-ALU");
  borderOn("ALU-box");
}

function ALUtoCColors() {
  topArrowOn("ALU-to-C");
  transferSignalOn("ALU-to-C");
  activeBoxOn("FLAG-C");
  activeSignalOn("Flag-C-content");
}
function ALUtoVColors() {
  topArrowOn("ALU-to-V");
  transferSignalOn("ALU-to-V");
  activeBoxOn("FLAG-V");
  activeSignalOn("Flag-V-content");
}
function ALUtoSColors() {
  topArrowOn("ALU-to-S");
  transferSignalOn("ALU-to-S");
  activeBoxOn("FLAG-S");
  activeSignalOn("Flag-S-content");
}
function ALUtoZColors() {
  topArrowOn("ALU-to-Z");
  transferSignalOn("ALU-to-Z");
  activeBoxOn("FLAG-Z");
  activeSignalOn("Flag-Z-content");
}
