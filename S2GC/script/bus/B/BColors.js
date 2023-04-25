function BLoadColors() {
  activeBoxOn("B-box");
  activeSignalOn("B-load-signal");
  activeSignalOn("B-load-text");
  topArrowOn("B-to-selection-0");
  transferSignalOn("B-to-selection-0");
  borderOn("bus-selector");
}

function BIncrementColors() {
  activeBoxOn("B-box");
  activeSignalOn("B-increment-signal");
  activeSignalOn("B-increment-text");
}

function BClearColors() {
  activeBoxOn("B-box");
  activeSignalOn("B-clear-signal");
  activeSignalOn("B-clear-text");
}

function BtoBusColors() {
  activeBoxOn("bus-selector");
  bottomArrowOn("B-to-selection-0");
  transferSignalOn("B-to-selection-0");
  activeSignalOn("bus-selector-0");
  activeSignalOn("bus-content-value");
  borderOn("B-box");
}
