function paraAscii() {
  const texto = document.getElementById('entrada').value;
  const ascii = [...texto].map(c => c.charCodeAt(0)).join(' ');
  document.getElementById('saida').value = ascii;
}

function deAscii() {
  const input = document.getElementById('entrada').value.trim();
  const texto = input
    .split(' ')
    .map(cod => String.fromCharCode(Number(cod)))
    .join('');
  document.getElementById('saida').value = texto;
}
