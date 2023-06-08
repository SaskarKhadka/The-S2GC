var aboutModal = document.getElementById("about-modal");
var modalContent = document.getElementById("about-modal-content");
var peopleContainer = document.getElementById("people");

document.getElementById("about-btn").addEventListener("click", function () {
  aboutModal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});

document
  .getElementsByClassName("about-close")[0]
  .addEventListener("click", function () {
    aboutModal.style.display = "none";
  });

createPeopleElements(userData);

function createPeopleElements(peopleData) {
  peopleContainer.innerHTML = "";

  for (var i = 0; i < peopleData.length; i++) {
    var person = peopleData[i];

    var personElement = document.createElement("div");
    personElement.classList.add("person");

    var imgElement = document.createElement("img");
    imgElement.src = person.image;
    imgElement.alt = person.name;
    personElement.appendChild(imgElement);

    var nameElement = document.createElement("div");
    nameElement.classList.add("person-name");
    nameElement.textContent = person.name;
    personElement.appendChild(nameElement);

    var linksElement = document.createElement("div");
    linksElement.classList.add("person-links");

    for (var j = 0; j < person.links.length; j++) {
      var link = person.links[j];

      var aElement = document.createElement("a");
      aElement.href = link.url;
      aElement.target = "_blank";

      var iElement = document.createElement("i");
      iElement.classList.add(link.iconClass[0], link.iconClass[1]);
      aElement.appendChild(iElement);

      linksElement.appendChild(aElement);
    }

    personElement.appendChild(linksElement);

    peopleContainer.appendChild(personElement);
  }
}
