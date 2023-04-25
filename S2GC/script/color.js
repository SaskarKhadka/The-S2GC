var IDArray = [];

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
}

function borderOn(boxBorderID) {
  let element = document.getElementById(boxBorderID);
  element.style.setProperty("border", "var(--activeBorderOn)");
}

function borderOff(boxBorderID) {
  let element = document.getElementById(boxBorderID);
  element.style.setProperty("border", "var(--activeBorderOff)");
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
      }
      if (Object.id === "boxBorderId") {
        element.style.setProperty("border", "var(--activeBorderOff)");
      }
    });
  }
  IDArray = [];
}
