//esconder img
function occult_img() {
  const occultContent = document.getElementById("foto");
  if (occultContent.style.visibility == "visible") {
    occultContent.style.visibility = "hidden";
  } else {
    occultContent.style.visibility = "visible";
  }
}

//alterar alinhamento de texto
function alter_text() {
  const aboutMeText = document.getElementById("sobre");
  const formatText = document.getElementById("format");
  aboutMeText.style.textAlign = formatText.value;
}

//alterar cores do header e footer
function alter_headAndFootColor() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const alterColorBtn = document.getElementById("color");

  if (alterColorBtn.value.toLowerCase() == "black") {
    header.style.backgroundColor = "black";
    header.style.color = "#e7e7e7";
    footer.style.backgroundColor = "black";
    footer.style.color = "#e7e7e7";
  } else if (alterColorBtn.value.toLowerCase() == "white") {
    header.style.backgroundColor = "white";
    header.style.color = "#222";
    footer.style.backgroundColor = "white";
    footer.style.color = "#222";
  } else {
    header.style.backgroundColor = alterColorBtn.value;
    footer.style.backgroundColor = alterColorBtn.value;
  }
}

//alterar font
function alter_fontFamily() {
  const aboutMeText = document.getElementById("sobre");
  const textFont = document.getElementById("fontFamily");
  aboutMeText.style.fontFamily = textFont.value;
}

//modo escuro/claro
function dark_whiteMode() {
  const content = document.getElementById("conteudo");
  if (content.style.backgroundColor == "black") {
    content.style.backgroundColor = "white";
    content.style.color = "#222";
  } else {
    content.style.backgroundColor = "black";
    content.style.color = "#e7e7e7";
  }
}
