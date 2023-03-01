//slider control
function sliderChange(value) {
    document.getElementById('sliderValue').innerHTML = value;
    for (let l = 0; l <= 15; l++) {
        if (l == 10) {
            document.getElementById('memory-tableA').style.display = "none";
        } else if (l == 11) {
            document.getElementById('memory-tableB').style.display = "none";
        } else if (l == 12) {
            document.getElementById('memory-tableC').style.display = "none";
        } else if (l == 13) {
            document.getElementById('memory-tableD').style.display = "none";
        } else if (l == 14) {
            document.getElementById('memory-tableE').style.display = "none";
        } else if (l == 15) {
            document.getElementById('memory-tableF').style.display = "none";
        } else {
            document.getElementById(`memory-table${l}`).style.display = "none";
        }
    }
    if (value == 10) {
        document.getElementById('memory-tableA').style.display = "block";
    } else if (value == 11) {
        document.getElementById('memory-tableB').style.display = "block";
    } else if (value == 12) {
        document.getElementById('memory-tableC').style.display = "block";
    } else if (value == 13) {
        document.getElementById('memory-tableD').style.display = "block";
    } else if (value == 14) {
        document.getElementById('memory-tableE').style.display = "block";
    } else if (value == 15) {
        document.getElementById('memory-tableF').style.display = "block";
    } else {
        document.getElementById(`memory-table${value}`).style.display = "block";
    }
}
sliderChange(0);