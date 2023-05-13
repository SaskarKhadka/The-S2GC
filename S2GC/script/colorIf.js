function ifNotsXORvAndNotzARtoBusColors() {
  if (getValue(sId) == getValue(zId) && getValue(zId) == "0") {
    ARtoBusColors();
  }
}

function ifNotsXORvAndNotzPCLoadColors() {
  if (getValue(sId) == getValue(zId) && getValue(zId) == "0") {
    PCLoadColors();
  }
}

function ifsXORvORzARtoBusColors() {
  if (getValue(sId) != getValue(zId) || getValue(zId) == "1") {
    ARtoBusColors();
  }
}

function ifsXORvORzPCLoadColors() {
  if (getValue(sId) != getValue(zId) || getValue(zId) == "1") {
    PCLoadColors();
  }
}

function ifsXORvARtoBusColors() {
  if (getValue(sId) != getValue(zId)) {
    ARtoBusColors();
  }
}

function ifNotsXORvARtoBusColors() {
  if (getValue(sId) == getValue(zId)) {
    ARtoBusColors();
  }
}

function ifsXORvPCLoadColors() {
  if (getValue(sId) != getValue(zId)) {
    PCLoadColors();
  }
}

function ifNotsXORvPCLoadColors() {
  if (getValue(sId) == getValue(zId)) {
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
