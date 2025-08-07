function textoParaBinario() {
  const texto = document.getElementById('entrada').value;
  const binario = [...texto]
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
  document.getElementById('saida').value = binario;
}

function binarioParaTexto() {
  const binario = document.getElementById('entrada').value.trim();
  const texto = binario
    .split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
  document.getElementById('saida').value = texto;
}
