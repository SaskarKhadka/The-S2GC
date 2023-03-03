//slider control

function sliderChange(value) {
    document.getElementById('sliderValue').innerHTML = value;
    for (let l = 0; l <= 15; l++) {
        document.getElementById(`memory-table${chars[l]}`).style.display = "none";
    }
    document.getElementById(`memory-table${chars[value]}`).style.display = null;
}
sliderChange(0);