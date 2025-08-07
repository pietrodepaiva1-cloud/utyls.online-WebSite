document.getElementById("btn-codificar").addEventListener("click", () => {
  const input = document.getElementById("entrada").value;
  const resultado = encodeURIComponent(input);
  document.getElementById("saida").value = resultado;
});

document.getElementById("btn-decodificar").addEventListener("click", () => {
  const input = document.getElementById("entrada").value;
  try {
    const resultado = decodeURIComponent(input);
    document.getElementById("saida").value = resultado;
  } catch {
    document.getElementById("saida").value = "Erro: URL inválida!";
  }
});
