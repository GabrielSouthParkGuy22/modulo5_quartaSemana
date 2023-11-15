//onclick
const clickBtn = document.getElementById("btnClick");

function clickFun() {
  alert("Botão clicado!!");
}

clickBtn.addEventListener("click", clickFun);

//onchange
const textInputBlue = (document.getElementById("inputText").onchange =
  function () {
    this.style.color = "#4e7ff3";
  });

//oninput
const textInputPurple = (document.getElementById("inputText").oninput =
  function () {
    this.style.color = "#631375";
  });

//onkeys
const textInputDown = (document.getElementById("inputText").onkeydown =
  function () {
    document.getElementById("outputMessage").innerText = "Tecla Pressionada";
  });

const textInputPress = (document.getElementById("inputText").onkeypress =
  function () {
    document.getElementById("outputMessage").innerText =
      "Tecla Sendo Pressionada";
  });

const textInputUp = (document.getElementById("inputText").onkeyup =
  function () {
    document.getElementById("outputMessage").innerText = "Tecla Liberada";
  });

//onmouse
const containerOn = (document.getElementById("box").onmouseover = function () {
  this.style.backgroundColor = "#630794";
});

const containerOut = (document.getElementById("box").onmouseout = function () {
  this.style.backgroundColor = "#00c8a8";
});

//ondrop/drag
const containerDragStart = (document.getElementById("box").ondragstart =
  function (event) {
    event.dataTransfer.setData("text/plain", "Drag Me!");
  });

const containerDragOver = (document.getElementById("box").ondragover =
  function (event) {
    event.preventDefault();
  });

const containerOnDrop = (document.getElementById("box").ondrop = function (
  event
) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text/plain");
  box.innerHTML = data;
});

//onload

const onloadMsg = (window.onload = function () {
  alert("Página completamente carregada!");
});

//extra
const extraBtn = document.getElementById("btnChallenge");
let counter = 0;

function clickCount() {
  counter++;
  const count = (document.getElementById("count").innerHTML = counter);
}

extraBtn.addEventListener("click", clickCount);

const time = setTimeout(timeCount, 10000);

function timeCount() {
  alert(`time out!, ${counter}`);
}
