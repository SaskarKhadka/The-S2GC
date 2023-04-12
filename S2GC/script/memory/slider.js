//slider control

function sliderChange(value) {
  document.getElementById("sliderValue").innerHTML = value;
  for (let l = 0; l <= 15; l++) {
    document.getElementById(`memory-table0${chars[l]}`).style.display = "none";
    document.getElementById(`memory-table1${chars[l]}`).style.display = "none";
  }
  document.getElementById(`memory-table0${chars[value]}`).style.display = null;
  document.getElementById(`memory-table1${chars[value]}`).style.display = null;
}
sliderChange(0);
