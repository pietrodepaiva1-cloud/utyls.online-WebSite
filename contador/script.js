function contarTudo() {
  const texto = document.getElementById('entrada').value;

  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  const caracteres = texto.length;
  const semEspacos = texto.replace(/\s/g, '').length;
  const linhas = texto.split('\n').length;

  document.getElementById('palavras').textContent = palavras;
  document.getElementById('caracteres').textContent = caracteres;
  document.getElementById('semEspacos').textContent = semEspacos;
  document.getElementById('linhas').textContent = linhas;
}
