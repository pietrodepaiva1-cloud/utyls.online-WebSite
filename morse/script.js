const morseCode = {
  'A': '.-',    'B': '-...',  'C': '-.-.',
  'D': '-..',   'E': '.',     'F': '..-.',
  'G': '--.',   'H': '....',  'I': '..',
  'J': '.---',  'K': '-.-',   'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',
  'S': '...',   'T': '-',     'U': '..-',
  'V': '...-',  'W': '.--',   'X': '-..-',
  'Y': '-.--',  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..',
  '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..',
  '!': '-.-.--', '/': '-..-.',  '(': '-.--.',
  ')': '-.--.-','&': '.-...',  ':': '---...',
  ';': '-.-.-.','=': '-...-',  '+': '.-.-.',
  '-': '-....-','_': '..--.-', '"': '.-..-.',
  '$': '...-..-','@': '.--.-.', ' ': '/'
};

const inverseMorse = Object.fromEntries(
  Object.entries(morseCode).map(([k, v]) => [v, k])
);

function converterParaMorse() {
  const texto = document.getElementById('texto').value.toUpperCase();
  let resultado = '';

  for (const char of texto) {
    resultado += morseCode[char] ? morseCode[char] + ' ' : '';
  }

  document.getElementById('resultado').value = resultado.trim();
}

function converterParaTexto() {
  const morse = document.getElementById('texto').value.trim().split(' ');
  let resultado = '';

  for (const code of morse) {
    resultado += inverseMorse[code] || '';
  }

  document.getElementById('resultado').value = resultado;
}
