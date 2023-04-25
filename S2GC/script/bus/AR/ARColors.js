function ARLoadColors() {
  activeBoxOn("AR-box");
  activeSignalOn("AR-load-signal");
  activeSignalOn("AR-load-text");
  topArrowOn("AR-to-selection-2");
  transferSignalOn("AR-to-selection-2");
  borderOn("bus-selector");
}

function ARIncrementColors() {
  activeBoxOn("AR-box");
  activeSignalOn("AR-increment-signal");
  activeSignalOn("AR-increment-text");
}

function ARClearColors() {
  activeBoxOn("AR-box");
  activeSignalOn("AR-clear-signal");
  activeSignalOn("AR-clear-text");
}

function ARtoBusColors() {
  activeBoxOn("bus-selector");
  bottomArrowOn("AR-to-selection-2");
  transferSignalOn("AR-to-selection-2");
  activeSignalOn("bus-selector-2");
  activeSignalOn("bus-content-value");
  borderOn("AR-box");
}
