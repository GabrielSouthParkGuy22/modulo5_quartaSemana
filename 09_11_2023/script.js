//atividade 1
const mainNews = document.getElementById("noticia-principal");
//alert(mainNews.innerHTML);
mainNews.style.color = "#bea9ff";

//atividade 2
const highLight = document.getElementsByClassName("titulo-noticia");
for (const i of highLight) {
  i.style.color = "#47a3fe";
}

//atividade 3
const newsParagraph = document.getElementsByClassName("paragrafo-noticia");
for (const i of newsParagraph) {
  i.innerHTML = "Leia a notícia completa";
}
//titulo-noticia

//atividade 4
const secComments = document.getElementById("secao-comentarios");
const comments = document.createElement("p");
comments.innerHTML = "Deixe seu comentário!";
secComments.appendChild(comments);

//atividade 5
const lastUpdates = document.getElementById("ultimas-atualizacoes");
const lastItem = lastUpdates.lastElementChild;
lastUpdates.removeChild(lastItem);

//extra
function colorScheme() {
  const colorBG = document.getElementById("change_color");
  colorBG.classList.toggle("dark_theme");
}
