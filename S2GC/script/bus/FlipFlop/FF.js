function changeState(FF, value) {
  activeBoxOn(`FF-${FF}`);
  changeStateFF(FF, value);
}

function toggle(FF) {
  activeBoxOn(`FF-${FF}`);
  toggleFF(FF);
}
