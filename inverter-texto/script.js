function inverterTexto() {
  const entrada = document.getElementById('entrada').value;
  const invertido = entrada.split('').reverse().join('');
  document.getElementById('saida').value = invertido || "Digite algo para inverter.";
}

function copiarTexto() {
  const saida = document.getElementById('saida');
  if (!saida.value.trim()) return;

  navigator.clipboard.writeText(saida.value).then(() => {
    const btn = document.querySelector('button[onclick="copiarTexto()"]');
    const textoOriginal = btn.textContent;
    btn.textContent = "Copiado!";
    setTimeout(() => {
      btn.textContent = textoOriginal;
    }, 1500);
  });
}

function limparTexto() {
  document.getElementById('entrada').value = "";
  document.getElementById('saida').value = "";
}
