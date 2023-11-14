function enviarReserva() {
  const name = document.getElementById("nome").value;
  const phoneNumber = document.getElementById("telefone").value;
  const date = document.getElementById("data").value;

  if (validaTelefone(phoneNumber)) {
    const div = document.getElementById("dadosReserva");
    div.innerHTML = `
    <h3> DADOS </h3>
    <p>${name}</p>
    <p>${phoneNumber}</p>
    <p>${date}</p>
  `;
  } else {
    alert("Número de telefone inválido!");
    return;
  }
}

function validaTelefone(phone) {
  const phoneNum = phone.replace(/\D/g, "");
  if (phoneNum.length >= 10 && phoneNum.length <= 11) {
    return true;
  } else {
    return false;
  }
}
