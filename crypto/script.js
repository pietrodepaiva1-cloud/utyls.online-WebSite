function criptografar() {
  const texto = document.getElementById('entrada').value;
  const metodo = document.getElementById('metodo').value;
  let resultado = '';

  switch (metodo) {
    case 'base64':
      resultado = btoa(unescape(encodeURIComponent(texto)));
      break;
    case 'cesar':
      resultado = texto.replace(/[a-z]/gi, c => 
        String.fromCharCode(c.charCodeAt(0) + 3)
      );
      break;
    case 'reverso':
      resultado = texto.split('').reverse().join('');
      break;
  }

  document.getElementById('saida').value = resultado;
}

function descriptografar() {
  const texto = document.getElementById('entrada').value;
  const metodo = document.getElementById('metodo').value;
  let resultado = '';

  switch (metodo) {
    case 'base64':
      try {
        resultado = decodeURIComponent(escape(atob(texto)));
      } catch (e) {
        resultado = 'Texto inválido para Base64.';
      }
      break;
    case 'cesar':
      resultado = texto.replace(/[a-z]/gi, c =>
        String.fromCharCode(c.charCodeAt(0) - 3)
      );
      break;
    case 'reverso':
      resultado = texto.split('').reverse().join('');
      break;
  }

  document.getElementById('saida').value = resultado;
}
