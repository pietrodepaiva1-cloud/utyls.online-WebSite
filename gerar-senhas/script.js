function atualizarTamanho() {
  const tamanho = document.getElementById("tamanho").value;
  document.getElementById("valorTamanho").textContent = tamanho;
}

function gerarSenha() {
  const tamanho = parseInt(document.getElementById("tamanho").value);
  const usarMaiusculas = document.getElementById("maiusculas").checked;
  const usarMinusculas = document.getElementById("minusculas").checked;
  const usarNumeros = document.getElementById("numeros").checked;
  const usarEspeciais = document.getElementById("especiais").checked;

  let caracteres = "";
  if (usarMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (usarMinusculas) caracteres += "abcdefghijklmnopqrstuvwxyz";
  if (usarNumeros) caracteres += "0123456789";
  if (usarEspeciais) caracteres += "!@#$%^&*()-_=+[]{};:,.<>?/|";

  if (!caracteres) {
    alert("Selecione pelo menos uma opção de caractere!");
    return;
  }

  let senha = "";
  const array = new Uint32Array(tamanho);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < tamanho; i++) {
    const index = array[i] % caracteres.length;
    senha += caracteres.charAt(index);
  }

  document.getElementById("saida").value = senha;
}

function copiarSenha() {
  const saida = document.getElementById("saida");
  saida.select();
  document.execCommand("copy");
}

function limpar() {
  document.getElementById("saida").value = "";
}
