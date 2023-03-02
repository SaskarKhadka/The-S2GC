function addHoverEffect(obj) {
    let hoverId = obj.id;
    let x = hoverId.slice(0, 2);
    let y = hoverId.slice(2, 3);
    let w = hoverId.slice(1, 2);
    let z = hoverId.slice(0, 1);
    let horizontalIndex = y == 'A' ? 10 : y == 'B' ? 11 : y == 'C' ? 12 : y == 'D' ? 13 : y == 'E' ? 14 : y == 'F' ? 15 : y
    let verticalIndex = w == 'A' ? 10 : w == 'B' ? 11 : w == 'C' ? 12 : w == 'D' ? 13 : w == 'E' ? 14 : w == 'F' ? 15 : w;
    document.getElementById(hoverId).classList.add('directHoverCell');
    for (let i = 0; i <= 15; i++) {
        if (i <= horizontalIndex) {
            if (i == 10) {
                document.getElementById(`${x}A`).classList.add('hoverCell');
            } else if (i == 11) {
                document.getElementById(`${x}B`).classList.add('hoverCell');
            } else if (i == 12) {
                document.getElementById(`${x}C`).classList.add('hoverCell');
            } else if (i == 13) {
                document.getElementById(`${x}D`).classList.add('hoverCell');
            } else if (i == 14) {
                document.getElementById(`${x}E`).classList.add('hoverCell');
            } else if (i == 15) {
                document.getElementById(`${x}F`).classList.add('hoverCell');
            } else {
                document.getElementById(`${x}${i}`).classList.add('hoverCell');
            }
        }
        if (i <= verticalIndex) {
            if (i == 10) {
                document.getElementById(`${z}A${y}`).classList.add('hoverCell');
            } else if (i == 11) {
                document.getElementById(`${z}B${y}`).classList.add('hoverCell');
            } else if (i == 12) {
                document.getElementById(`${z}C${y}`).classList.add('hoverCell');
            } else if (i == 13) {
                document.getElementById(`${z}D${y}`).classList.add('hoverCell');
            } else if (i == 14) {
                document.getElementById(`${z}E${y}`).classList.add('hoverCell');
            } else if (i == 15) {
                document.getElementById(`${z}F${y}`).classList.add('hoverCell');
            } else {
                document.getElementById(`${z}${i}${y}`).classList.add('hoverCell');
            }
        }
    }
}

function removeHoverEffect(obj) {
    let hoverId = obj.id;
    let x = hoverId.slice(0, 2);
    let y = hoverId.slice(2, 3);
    let w = hoverId.slice(1, 2);
    let z = hoverId.slice(0, 1);
    let horizontalIndex = y == 'A' ? 10 : y == 'B' ? 11 : y == 'C' ? 12 : y == 'D' ? 13 : y == 'E' ? 14 : y == 'F' ? 15 : y
    let verticalIndex = w == 'A' ? 10 : w == 'B' ? 11 : w == 'C' ? 12 : w == 'D' ? 13 : w == 'E' ? 14 : w == 'F' ? 15 : w;
    document.getElementById(hoverId).classList.remove('directHoverCell');
    for (let i = 0; i <= 15; i++) {
        if (i <= horizontalIndex) {
            if (i == 10) {
                document.getElementById(`${x}A`).classList.remove('hoverCell');
            } else if (i == 11) {
                document.getElementById(`${x}B`).classList.remove('hoverCell');
            } else if (i == 12) {
                document.getElementById(`${x}C`).classList.remove('hoverCell');
            } else if (i == 13) {
                document.getElementById(`${x}D`).classList.remove('hoverCell');
            } else if (i == 14) {
                document.getElementById(`${x}E`).classList.remove('hoverCell');
            } else if (i == 15) {
                document.getElementById(`${x}F`).classList.remove('hoverCell');
            } else {
                document.getElementById(`${x}${i}`).classList.remove('hoverCell');
            }
        }
        if (i <= verticalIndex) {
            if (i == 10) {
                document.getElementById(`${z}A${y}`).classList.remove('hoverCell');
            } else if (i == 11) {
                document.getElementById(`${z}B${y}`).classList.remove('hoverCell');
            } else if (i == 12) {
                document.getElementById(`${z}C${y}`).classList.remove('hoverCell');
            } else if (i == 13) {
                document.getElementById(`${z}D${y}`).classList.remove('hoverCell');
            } else if (i == 14) {
                document.getElementById(`${z}E${y}`).classList.remove('hoverCell');
            } else if (i == 15) {
                document.getElementById(`${z}F${y}`).classList.remove('hoverCell');
            } else {
                document.getElementById(`${z}${i}${y}`).classList.remove('hoverCell');
            }
        }
    }
}


// document.getElementById(id).style.backgroundColor = "#0ff8a4";