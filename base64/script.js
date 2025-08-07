function codificarBase64() {
  const texto = document.getElementById('entrada').value;
  try {
    const codificado = btoa(unescape(encodeURIComponent(texto)));
    document.getElementById('saida').value = codificado;
  } catch (e) {
    document.getElementById('saida').value = 'Erro ao codificar.';
  }
}

function decodificarBase64() {
  const base64 = document.getElementById('entrada').value.trim();
  try {
    const texto = decodeURIComponent(escape(atob(base64)));
    document.getElementById('saida').value = texto;
  } catch (e) {
    document.getElementById('saida').value = 'Base64 inválido.';
  }
}
