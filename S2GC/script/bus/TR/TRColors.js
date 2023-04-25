function TRLoadColors() {
  activeBoxOn("TR-box");
  activeSignalOn("TR-load-signal");
  activeSignalOn("TR-load-text");
  topArrowOn("TR-to-selection-5");
  transferSignalOn("TR-to-selection-5");
  borderOn("bus-selector");
}

function TRIncrementColors() {
  activeBoxOn("TR-box");
  activeSignalOn("TR-increment-signal");
  activeSignalOn("TR-increment-text");
}

function TRClearColors() {
  activeBoxOn("TR-box");
  activeSignalOn("TR-clear-signal");
  activeSignalOn("TR-clear-text");
}

function TRtoBusColors() {
  activeBoxOn("bus-selector");
  bottomArrowOn("TR-to-selection-5");
  transferSignalOn("TR-to-selection-5");
  activeSignalOn("bus-selector-5");
  activeSignalOn("bus-content-value");
  borderOn("TR-box");
}
