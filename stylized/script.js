const estilos = [
  text => text.toUpperCase(),
  text => text.toLowerCase(),
  text => [...text].map(l => l + l).join(''),
  text => [...text].map(l => l + ' ').join(''),
  text => [...text].reverse().join(''),
  text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
  text => [...text].map(c => String.fromCharCode(c.charCodeAt(0) + 120)).join(''), // glitched
  text => [...text].map(l => mapFont(l, '𝒶')).join(''), // script
  text => [...text].map(l => mapFont(l, '𝓐')).join(''), // script negrito
  text => [...text].map(l => mapFont(l, '𝔄')).join(''), // fraktur
  text => [...text].map(l => mapFont(l, '𝕬')).join(''), // double-struck
  text => [...text].map(l => mapFont(l, '𝗔')).join(''), // bold
  text => [...text].map(l => mapFont(l, '𝘈')).join(''), // italic
  text => [...text].map(l => mapFont(l, '𝘼')).join(''), // bold italic
  text => [...text].map(l => mapFont(l, '𝐀')).join(''), // sans bold
  text => [...text].map(l => mapFont(l, '𝖠')).join(''), // serif
  text => [...text].map(l => mapFont(l, '𝙰')).join(''), // monospace
  text => [...text].map(l => 'ᴘᴛʙʀ'.includes(l) ? l : l.toUpperCase()).join(''),
  text => [...text].map(l => l + '\u0332').join(''), // underline
  text => [...text].map(l => l + '\u0336').join(''), // strike
  text => [...text].map(l => l + '\u0305').join(''), // overline
  text => [...text].map(l => l + '\u0301').join(''), // acute accent
  text => [...text].map(l => l + '\u0300').join(''), // grave accent
  text => [...text].map(l => l + '\u0308').join(''), // diaeresis
  text => [...text].map(l => l + '\u0303').join(''), // tilde
  text => [...text].map(l => l + '\u0342').join(''), // circumflex
  text => text.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' '), // Capitalize
  text => '🄣🅔🅧🅣: ' + text,
  text => '➤ ' + text + ' ➤',
  text => '✦ ' + text + ' ✦',
  text => '• ' + text + ' •',
  text => '『 ' + text + ' 』',
  text => '《 ' + text + ' 》',
  text => '✧･ﾟ: *✧･ﾟ:* ' + text + ' *:･ﾟ✧*:･ﾟ✧',
  text => text.split('').join('✨'),
  text => text.split('').join('🌀'),
  text => text.split('').join('🔥'),
  text => text.split('').join('⭐'),
  text => text.split('').join('💎'),
  text => text.split('').join('💀')
];

function mapFont(letter, base) {
  const offset = base.codePointAt(0) - 'A'.codePointAt(0);
  const code = letter.toUpperCase().charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromCodePoint(offset + code);
  return letter;
}

function gerarEstilos() {
  const input = document.getElementById('entrada').value;
  const container = document.getElementById('resultados');
  container.innerHTML = '';

  estilos.forEach(estilo => {
    const resultado = estilo(input);
    const linha = document.createElement('div');
    linha.className = 'resultado';
    linha.innerHTML = `
      <span>${resultado}</span>
      <button onclick="copiarTexto(\`${resultado.replace(/`/g, "\\`")}\`)">Copiar</button>
    `;
    container.appendChild(linha);
  });
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado!");
  });
}
