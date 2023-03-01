
function changeEffect(id, color) {
    let hoverId = id;
    //x firstTwoDigit
    //y lastDigit
    //z firstDigit
    //w middleDigit
    let x = hoverId.slice(0, 2);
    let y = hoverId.slice(2, 3);
    let w = hoverId.slice(1, 2);
    let z = hoverId.slice(0, 1);
    let horizontalIndex = y == 'A' ? 10 : y == 'B' ? 11 : y == 'C' ? 12 : y == 'D' ? 13 : y == 'E' ? 14 : y == 'F' ? 15 : y
    let verticalIndex = w == 'A' ? 10 : w == 'B' ? 11 : w == 'C' ? 12 : w == 'D' ? 13 : w == 'E' ? 14 : w == 'F' ? 15 : w;

    for (let i = 0; i <= 15; i++) {
        if (i <= horizontalIndex) {
            if (i == 10) {
                document.getElementById(`${x}A`).style.backgroundColor = color;
            } else if (i == 11) {
                document.getElementById(`${x}B`).style.backgroundColor = color;
            } else if (i == 12) {
                document.getElementById(`${x}C`).style.backgroundColor = color;
            } else if (i == 13) {
                document.getElementById(`${x}D`).style.backgroundColor = color;
            } else if (i == 14) {
                document.getElementById(`${x}E`).style.backgroundColor = color;
            } else if (i == 15) {
                document.getElementById(`${x}F`).style.backgroundColor = color;
            } else {
                document.getElementById(`${x}${i}`).style.backgroundColor = color;
            }
        }
        if (i <= verticalIndex) {
            if (i == 10) {
                document.getElementById(`${z}A${y}`).style.backgroundColor = color;
            } else if (i == 11) {
                document.getElementById(`${z}B${y}`).style.backgroundColor = color;
            } else if (i == 12) {
                document.getElementById(`${z}C${y}`).style.backgroundColor = color;
            } else if (i == 13) {
                document.getElementById(`${z}D${y}`).style.backgroundColor = color;
            } else if (i == 14) {
                document.getElementById(`${z}E${y}`).style.backgroundColor = color;
            } else if (i == 15) {
                document.getElementById(`${z}F${y}`).style.backgroundColor = color;
            } else {
                document.getElementById(`${z}${i}${y}`).style.backgroundColor = color;
            }
        }

    }
}

function addHoverEffect(obj) {
    changeEffect(obj.id, "#00ff84");
}

function removeHoverEffect(obj) {
    changeEffect(obj.id, "#ffffff");
}

