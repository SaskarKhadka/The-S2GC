function memoryReadColors() {
  activeBoxOn("bus-selector");
  activeSignalOn("read-arrow");
  activeSignalOn("read-text");
  activeSignalOn("bus-selector-1");
  transferSignalOn("AR-to-memory");
  topArrowOn("AR-to-memory");
  transferSignalOn("memory-to-selection-1");
  bottomArrowOn("memory-to-selection-1");
  activeSignalOn("bus-content-value");
}

function memoryWriteColors() {
  activeBoxOn("memory-box");
  activeSignalOn("write-arrow");
  activeSignalOn("write-text");
  activeSignalOn("bus-selector-1");
  transferSignalOn("AR-to-memory");
  topArrowOn("AR-to-memory");
  transferSignalOn("memory-to-selection-1");
  topArrowOn("memory-to-selection-1");
}
