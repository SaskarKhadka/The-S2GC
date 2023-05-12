let SCContentID = document.getElementById("SC-content-value");
function incrementSC() {
  SCContentID.innerHTML++;
  SCIncrementColors();
}

function clearSC() {
  SCContentID.innerHTML = "0000";
  SCClearColors();
}
