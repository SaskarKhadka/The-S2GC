function PCLoadColors() {
  selectionColors(0, 1, null);
  activeBoxOn("PC-box");
  activeSignalOn("PC-load-signal");
  activeSignalOn("PC-load-text");
  topArrowOn("PC-to-selection-3");
  transferSignalOn("PC-to-selection-3");
  borderOn("bus-selector");
}

function PCIncrementColors() {
  activeBoxOn("PC-box");
  activeSignalOn("PC-increment-signal");
  activeSignalOn("PC-increment-text");
}

function PCClearColors() {
  activeBoxOn("PC-box");
  activeSignalOn("PC-clear-signal");
  activeSignalOn("PC-clear-text");
}

function PCtoBusColors() {
  selectionColors(0, 1, null);
  activeBoxOn("bus-selector");
  bottomArrowOn("PC-to-selection-3");
  transferSignalOn("PC-to-selection-3");
  activeSignalOn("bus-selector-3");
  activeSignalOn("bus-content-value");
  borderOn("PC-box");
}
