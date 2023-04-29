let scriptList = [
  "../script/color.js",
  "../script/navBar/navbar.js",
  "../script/memory/memory.js",
  "../script/memory/slider.js",
  "../script/memory/hover.js",
  "../script/memory/edit.js",
  "../script/memory/toggle.js",
  "../script/memory/operation/memoryColors.js",
  "../script/memory/operation/memory.js",
  "../script/bus/AR/ARColors.js",
  "../script/bus/AR/AR.js",
  "../script/bus/PC/PCColors.js",
  "../script/bus/PC/PC.js",
  "../script/bus/DR/DRColors.js",
  "../script/bus/DR/DR.js",
  "../script/bus/B/BColors.js",
  "../script/bus/B/B.js",
  "../script/bus/AC/ACColors.js",
  "../script/bus/AC/AC.js",
  "../script/bus/TR/TRColors.js",
  "../script/bus/TR/TR.js",
  "../script/bus/IR/IRColors.js",
  "../script/bus/IR/IR.js",
  "../script/bus/OUTR/OUTRColors.js",
  "../script/bus/OUTR/OUTR.js",
  "../script/bus/INPR/INPRColors.js",
  "../script/bus/INPR/INPR.js",
  "../script/bus/ALU/ALUColors.js",
  "../script/bus/ALU/ALU.js",
  "../script/bus/FlipFlop/FF.js",
  "../script/codeEditor/model.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});
