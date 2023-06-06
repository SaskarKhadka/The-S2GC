const lineNumberTextarea = document.getElementById("line-number");
const codeEditorTextarea = document.getElementById("code-editor");
function updateLineNumbers() {
  const lineCount = codeEditorTextarea.value.split("\n").length;
  const lineNumbers = Array.from(
    Array(lineCount),
    (_, index) => index + 1
  ).join("\n");
  lineNumberTextarea.value = lineNumbers;

  lineNumberTextarea.scrollTop = codeEditorTextarea.scrollTop;
}
updateLineNumbers();

function convertToUppercase() {
  codeEditorTextarea.value = codeEditorTextarea.value.toUpperCase();
}
const runButton = document.getElementById("run-button");
const buttonContainer = document.getElementById("editor-footer");
function toggleButtonState() {
  runButton.disabled = codeEditorTextarea.value.trim() === "";
  codeEditorTextarea.value.trim() === ""
    ? buttonContainer.classList.add("disableButtonContainer")
    : buttonContainer.classList.remove("disableButtonContainer");
}
toggleButtonState();
codeEditorTextarea.addEventListener("input", toggleButtonState);
codeEditorTextarea.addEventListener("input", convertToUppercase);
codeEditorTextarea.addEventListener("input", updateLineNumbers);
codeEditorTextarea.addEventListener("scroll", updateLineNumbers);
