function toggleMemorySlot(value) {
  if (value == "on") {
    document.getElementById("checkbox-input").value = "off";
    document.getElementById("headline-title").innerHTML = "Instruction View";
    document.getElementById("memoryType0").style.display = "none";
    document.getElementById("memoryType1").style.display = null;
  }
  if (value == "off") {
    document.getElementById("checkbox-input").value = "on";
    document.getElementById("headline-title").innerHTML = "Data View";
    document.getElementById("memoryType1").style.display = "none";
    document.getElementById("memoryType0").style.display = null;
  }
  document.getElementById("slider-input").value = 0;
  document.getElementById("sliderValue").innerHTML = 0;
}
