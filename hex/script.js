function textoParaHex() {
  const texto = document.getElementById('entrada').value;
  const hex = [...texto]
    .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join(' ');
  document.getElementById('saida').value = hex;
}

function hexParaTexto() {
  const hex = document.getElementById('entrada').value.trim();
  const texto = hex
    .split(' ')
    .map(h => String.fromCharCode(parseInt(h, 16)))
    .join('');
  document.getElementById('saida').value = texto;
}
