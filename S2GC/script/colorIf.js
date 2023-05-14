function ifNotsXORvAndNotzARtoBusColors() {
  if (getValue(sId) == getValue(vId) && getValue(zId) == "0") {
    ARtoBusColors();
  }
}

function ifNotsXORvAndNotzPCLoadColors() {
  if (getValue(sId) == getValue(vId) && getValue(zId) == "0") {
    PCLoadColors();
  }
}

function ifsXORvORzARtoBusColors() {
  if (getValue(sId) != getValue(vId) || getValue(zId) == "1") {
    ARtoBusColors();
  }
}

function ifsXORvORzPCLoadColors() {
  if (getValue(sId) != getValue(vId) || getValue(zId) == "1") {
    PCLoadColors();
  }
}

function ifsXORvARtoBusColors() {
  if (getValue(sId) != getValue(vId)) {
    ARtoBusColors();
  }
}

function ifNotsXORvARtoBusColors() {
  if (getValue(sId) == getValue(vId)) {
    ARtoBusColors();
  }
}

function ifsXORvPCLoadColors() {
  if (getValue(sId) != getValue(vId)) {
    PCLoadColors();
  }
}

function ifNotsXORvPCLoadColors() {
  if (getValue(sId) == getValue(vId)) {
    PCLoadColors();
  }
}

function ifZisSetARtoBusColors() {
  if (getValue(zId) == "1") {
    ARtoBusColors();
  }
}

function ifZisResetARtoBusColors() {
  if (getValue(zId) == "0") {
    ARtoBusColors();
  }
}

function ifZisSetPCLoadColors() {
  if (getValue(zId) == "1") {
    PCLoadColors();
  }
}

function ifZisResetPCLoadColors() {
  if (getValue(zId) == "0") {
    PCLoadColors();
  }
}

function ifNotImmedAddMemoryReadColors() {
  if (getValue(i1Id) + getValue(i0Id) != "10") {
    memoryReadColors();
  }
}

function ifNotImmedAddDRLoadColors() {
  if (getValue(i1Id) + getValue(i0Id) != "10") {
    DRLoadColors();
  }
}

function ifDRZeroPCIncrementColors() {
  const drValue = getValue(drId);
  if (parseInt(drValue) == 0) {
    PCIncrementColors();
  }
}

function ifCPCIncrementColors() {
  if (getValue(cId) == "1") {
    PCIncrementColors();
  }
}

function ifNotCPCIncrementColors() {
  if (getValue(cId) == "0") {
    PCIncrementColors();
  }
}

function ifZPCIncrementColors() {
  if (getValue(zId) == "1") {
    PCIncrementColors();
  }
}

function ifNotZPCIncrementColors() {
  if (getValue(zId) == "0") {
    PCIncrementColors();
  }
}

function ifSPCIncrementColors() {
  if (getValue(sId) == "1") {
    PCIncrementColors();
  }
}

function ifNotSPCIncrementColors() {
  if (getValue(sId) == "0") {
    PCIncrementColors();
  }
}

function ifVPCIncrementColors() {
  if (getValue(vId) == "1") {
    PCIncrementColors();
  }
}

function ifNotVPCIncrementColors() {
  if (getValue(vId) == "0") {
    PCIncrementColors();
  }
}

function ifsXORvORzPCIncrementColors() {
  if (getValue(sId) != getValue(vId) || getValue(zId) == "1") {
    PCIncrementColors();
  }
}

function ifNotsXORvAndNotzPCIncrementColors() {
  if (getValue(sId) == getValue(vId) && getValue(zId) == "0") {
    PCIncrementColors();
  }
}

function ifsXORvPCIncrementColors() {
  if (getValue(sId) != getValue(vId)) {
    PCIncrementColors();
  }
}

function ifNotsXORvPCIncrementColors() {
  if (getValue(sId) == getValue(vId)) {
    PCIncrementColors();
  }
}
