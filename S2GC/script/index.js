let scriptList = [
  "./script/navBar/navbar.js",
  "./script/memory/memory.js",
  "./script/memory/slider.js",
  "./script/memory/hover.js",
  "./script/memory/edit.js",
  "./script/memory/toggle.js",
  "./script/memory/operation.js",
  "./script/codeEditor/model.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});
