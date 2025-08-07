function converterParaData() {
  const timestamp = parseInt(document.getElementById('timestamp').value);
  if (isNaN(timestamp)) {
    document.getElementById('resultadoData').value = 'Timestamp inválido.';
    return;
  }
  const data = new Date(timestamp * 1000);
  document.getElementById('resultadoData').value = data.toLocaleString();
}

function dataAtualParaTimestamp() {
  const timestampAtual = Math.floor(Date.now() / 1000);
  document.getElementById('timestampAtual').value = timestampAtual;
}
