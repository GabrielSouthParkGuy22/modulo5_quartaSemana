function enviarCadastro() {
  const name = document.getElementById("nome").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("senha").value;

  const div = document.createElement("div");
  div.innerHTML = `
  <h3> DADOS </h3>
  <p>${name}</p>
  <p>${email}</p>
  <p>${password}</p>
  `;

  document.body.appendChild(div);
  document.getElementById("cadastroForm").reset();
}
