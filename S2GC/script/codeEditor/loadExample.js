const exampleContainer = document.getElementById("example-container");
const exampleButton = document.querySelector(".example-button");
const closeButton = document.querySelector(".close-button");
const exampleCardContainer = document.querySelector(".example-card-container");

function showExampleContainer() {
  exampleContainer.style.display = "block";
}

function hideExampleContainer() {
  exampleContainer.style.display = "none";
}

function loadExample(code) {
  codeEditorTextarea.value = code;
  updateLineNumbers();
  toggleButtonState();
}

function createExampleCard(example) {
  const card = document.createElement("div");
  card.classList.add("example-card");
  const title = document.createElement("span");
  title.textContent = example.title;
  card.addEventListener("click", () => {
    loadExample(example.code);
    hideExampleContainer();
  });
  card.appendChild(title);
  return card;
}

function populateExampleCards() {
  exampleCardContainer.innerHTML = "";
  examples.forEach((example) => {
    const card = createExampleCard(example);
    exampleCardContainer.appendChild(card);
  });
}

exampleButton.addEventListener("click", () => {
  showExampleContainer();
  populateExampleCards();
});

closeButton.addEventListener("click", hideExampleContainer);

window.addEventListener("click", (event) => {
  if (event.target === exampleContainer) {
    hideExampleContainer();
  }
});
