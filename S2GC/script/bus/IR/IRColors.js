function IRLoadColors() {
  selectionColors(null, null, 2);
  activeBoxOn("IR-box");
  activeSignalOn("IR-load-signal");
  activeSignalOn("IR-load-text");
  topArrowOn("IR-to-selection-4");
  transferSignalOn("IR-to-selection-4");
  borderOn("bus-selector");
}

function IRtoBusColors() {
  selectionColors(null, null, 2);
  activeBoxOn("bus-selector");
  bottomArrowOn("IR-to-selection-4");
  transferSignalOn("IR-to-selection-4");
  activeSignalOn("bus-selector-4");
  activeSignalOn("bus-content-value");
  borderOn("IR-box");
}
