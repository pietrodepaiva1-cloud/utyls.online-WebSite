const qrcodeContainer = document.getElementById('qrcode');
const btnGerar = document.getElementById('btnGerar');
const entrada = document.getElementById('entrada');

btnGerar.addEventListener('click', () => {
  const valor = entrada.value.trim();
  if (!valor) {
    alert('Por favor, digite um link para gerar o QR Code.');
    return;
  }

  // Limpa QR code anterior
  qrcodeContainer.innerHTML = '';

  // Gera o QR code
  new QRCode(qrcodeContainer, {
    text: valor,
    width: 200,
    height: 200,
    colorDark: "#00ffc8",
    colorLight: "#1a1a1a",
    correctLevel: QRCode.CorrectLevel.H
  });
});
