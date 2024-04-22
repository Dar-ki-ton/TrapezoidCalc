var topIn = document.getElementById("a-in");
var topLeg = document.getElementById("lengthA");
var botIn = document.getElementById("b-in");
var botLeg = document.getElementById("lengthB");
var heiIn = document.getElementById("h-in");
var heiLeg = document.getElementById("heightC");
var decIn = document.getElementById("d-in");
var decNum = document.getElementById("decimalD");
var calcBtn = document.getElementById("calc");
var trapAreaOut = document.getElementById("area-out");

calcBtn.addEventListener("click", areaCalc);

function areaCalc() {
  var top = parseInt(topIn.value);
  var bottom = parseInt(botIn.value);
  var height = parseInt(heiIn.value);
  var decimal = parseInt(decIn.value);

  var img1 = document.createElement(`img`);
  img1.src = `img/check.png`;
  var img2 = document.createElement(`img`);
  img2.src = `img/check.png`;
  var img3 = document.createElement(`img`);
  img3.src = `img/check.png`;
  var img4 = document.createElement(`img`);
  img4.src = `img/check.png`;

  trapArea = (height * (top + bottom)) / 2;
  trapArea = trapArea.toFixed(decimal);

  topIn.value = "";
  botIn.value = "";
  heiIn.value = "";
  decIn.value = "";

  topLeg.appendChild(img1);
  botLeg.appendChild(img2);
  heiLeg.appendChild(img3);
  decNum.appendChild(img4);
  trapAreaOut.innerHTML = trapArea;
}
