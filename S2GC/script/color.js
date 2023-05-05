var IDArray = [];

function selectionColors(S0, S1, S2) {
  S0 !== null ? activeSignalOn(`selection-${S0}`) : null;
  S1 !== null ? activeSignalOn(`selection-${S1}`) : null;
  S2 !== null ? activeSignalOn(`selection-${S2}`) : null;
  S0 !== null ? activeSignalOn(`selection-text-${S0}`) : null;
  S1 !== null ? activeSignalOn(`selection-text-${S1}`) : null;
  S2 !== null ? activeSignalOn(`selection-text-${S2}`) : null;
}

function toggeFF(FF) {
  let element = document.getElementById(`FF-${FF}-value`);
  element.innerHTML == "0"
    ? (element.innerHTML = "1")
    : (element.innerHTML = "0");
}

function changeStateFF(FF, value) {
  let element = document.getElementById(`FF-${FF}-value`);
  element.innerHTML = value;
}

function activeSignalOn(signalID) {
  IDArray.push({ id: "signalID", value: signalID });
  let element = document.getElementById(signalID);
  element.style.setProperty("color", "var(--activeSignalOn)");
}

function transferSignalOn(connectionID) {
  IDArray.push({ id: "connectionID", value: connectionID });
  let element = document.getElementById(connectionID);
  element.style.setProperty("background-color", "var(--transferSignalOn)");
}

function topArrowOn(topArrowID) {
  IDArray.push({ id: "topArrowID", value: topArrowID });
  let element = document.getElementById(topArrowID);
  element.classList.add(`${topArrowID}-top`);
}

function bottomArrowOn(bottomArrowID) {
  IDArray.push({ id: "bottomArrowID", value: bottomArrowID });
  let element = document.getElementById(bottomArrowID);
  element.classList.add(`${bottomArrowID}-bottom`);
}

function activeBoxOn(boxID) {
  IDArray.push({ id: "boxID", value: boxID });
  let element = document.getElementById(boxID);
  element.style.setProperty("background-color", "var(--activeBoxOn)");
  element.style.setProperty("color", "var(--activeBoxOnText)");
}

function borderOn(boxBorderID) {
  IDArray.push({ id: "boxBorderID", value: boxBorderID });
  let element = document.getElementById(boxBorderID);
  element.style.setProperty("border", "var(--activeBorderOn)");
}

function signalOff() {
  if (IDArray.length !== 0) {
    IDArray.map((object) => {
      let element = document.getElementById(object.value);
      if (object.id === "signalID") {
        element.style.setProperty("color", "var(--activeSignalOff)");
      }
      if (object.id === "connectionID") {
        element.style.setProperty(
          "background-color",
          "var(--transferSignalOff)"
        );
      }
      if (object.id === "topArrowID") {
        element.classList.remove(`${object.value}-top`);
      }
      if (object.id === "bottomArrowID") {
        element.classList.remove(`${object.value}-bottom`);
      }
      if (object.id === "boxID") {
        element.style.setProperty("background-color", "var(--activeBoxOff)");
        element.style.setProperty("color", "var(--activeBoxOffText)");
      }
      if (object.id === "boxBorderID") {
        element.style.setProperty("border", "var(--activeBorderOff)");
      }
    });
  }
  IDArray = [];
}
