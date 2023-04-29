function addHoverEffect(obj) {
  let hoverId = obj.id;
  let x = hoverId.slice(0, 3); //first 3 digit
  let y = hoverId.slice(3, 4); //last 1 digit
  let w = hoverId.slice(2, 3); //third digit
  let z = hoverId.slice(0, 2); //first 2 digit
  let horizontalIndex = chars.indexOf(y);
  let verticalIndex = chars.indexOf(w);
  document.getElementById(hoverId).classList.add("directHoverCell");
  for (let i = 0; i <= 15; i++) {
    if (i <= horizontalIndex) {
      document.getElementById(`${x}${chars[i]}`).classList.add("hoverCell");
    }
    if (i <= verticalIndex) {
      document.getElementById(`${z}${chars[i]}${y}`).classList.add("hoverCell");
    }
  }
}

function removeHoverEffect(obj) {
  let hoverId = obj.id;
  let x = hoverId.slice(0, 3);
  let y = hoverId.slice(3, 4);
  let w = hoverId.slice(2, 3);
  let z = hoverId.slice(0, 2);
  let horizontalIndex = chars.indexOf(y);
  let verticalIndex = chars.indexOf(w);
  document.getElementById(hoverId).classList.remove("directHoverCell");
  for (let i = 0; i <= 15; i++) {
    if (i <= horizontalIndex) {
      document.getElementById(`${x}${chars[i]}`).classList.remove("hoverCell");
    }
    if (i <= verticalIndex) {
      document
        .getElementById(`${z}${chars[i]}${y}`)
        .classList.remove("hoverCell");
    }
  }
}
