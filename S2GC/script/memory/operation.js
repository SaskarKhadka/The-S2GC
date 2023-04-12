function memoryOperation(Read, Write, AR, AC) {
  let memoryLocationId = document.getElementById(AR);
  if (Read && !Write) {
    return memoryLocationId.innerHTML;
  }
  if (!Read && Write) {
    memoryLocationId.innerHTML = AC;
    memoryLocationId.classList.add("edited");
  }
}
