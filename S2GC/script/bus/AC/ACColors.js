function ACLoadColors() {
  selectionColors(0, 1, 2);
  activeBoxOn("AC-box");
  activeSignalOn("AC-load-signal");
  activeSignalOn("AC-load-text");
  topArrowOn("AC-to-selection-7");
  transferSignalOn("AC-to-selection-7");
  borderOn("bus-selector");
}

function ACIncrementColors() {
  activeBoxOn("AC-box");
  activeSignalOn("AC-increment-signal");
  activeSignalOn("AC-increment-text");
}

function ACClearColors() {
  activeBoxOn("AC-box");
  activeSignalOn("AC-clear-signal");
  activeSignalOn("AC-clear-text");
}

function ACtoBusColors() {
  selectionColors(0, 1, 2);
  activeBoxOn("bus-selector");
  bottomArrowOn("AC-to-selection-7");
  transferSignalOn("AC-to-selection-7");
  activeSignalOn("bus-selector-7");
  activeSignalOn("bus-content-value");
  borderOn("AC-box");
}
