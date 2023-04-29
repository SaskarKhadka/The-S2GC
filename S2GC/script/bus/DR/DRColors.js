function DRLoadColors() {
  selectionColors(null, 1, 2);
  activeBoxOn("DR-box");
  activeSignalOn("DR-load-signal");
  activeSignalOn("DR-load-text");
  topArrowOn("DR-to-selection-6");
  transferSignalOn("DR-to-selection-6");
  borderOn("bus-selector");
}

function DRIncrementColors() {
  activeBoxOn("DR-box");
  activeSignalOn("DR-increment-signal");
  activeSignalOn("DR-increment-text");
}

function DRClearColors() {
  activeBoxOn("DR-box");
  activeSignalOn("DR-clear-signal");
  activeSignalOn("DR-clear-text");
}

function DRtoBusColors() {
  selectionColors(null, 1, 2);
  activeBoxOn("bus-selector");
  bottomArrowOn("DR-to-selection-6");
  transferSignalOn("DR-to-selection-6");
  activeSignalOn("bus-selector-6");
  activeSignalOn("bus-content-value");
  borderOn("DR-box");
}
