function addHoverEffect(obj) {
    let hoverId = obj.id;
    let x = hoverId.slice(0, 2);
    let y = hoverId.slice(2, 3);
    let w = hoverId.slice(1, 2);
    let z = hoverId.slice(0, 1);
    let horizontalIndex = chars.indexOf(y);
    let verticalIndex = chars.indexOf(w);
    document.getElementById(hoverId).classList.add('directHoverCell');
    for (let i = 0; i <= 15; i++) {
        if (i <= horizontalIndex) {
            document.getElementById(`${x}${chars[i]}`).classList.add('hoverCell');
        }
        if (i <= verticalIndex) {
            document.getElementById(`${z}${chars[i]}${y}`).classList.add('hoverCell');
        }
    }
}

function removeHoverEffect(obj) {
    let hoverId = obj.id;
    let x = hoverId.slice(0, 2);
    let y = hoverId.slice(2, 3);
    let w = hoverId.slice(1, 2);
    let z = hoverId.slice(0, 1);
    let horizontalIndex = chars.indexOf(y);
    let verticalIndex = chars.indexOf(w);
    document.getElementById(hoverId).classList.remove('directHoverCell');
    for (let i = 0; i <= 15; i++) {

        if (i <= horizontalIndex) {
            document.getElementById(`${x}${chars[i]}`).classList.remove('hoverCell');
        }
        if (i <= verticalIndex) {
            document.getElementById(`${z}${chars[i]}${y}`).classList.remove('hoverCell');
        }
    }
}