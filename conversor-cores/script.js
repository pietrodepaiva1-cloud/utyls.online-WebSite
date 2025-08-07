function converterCor() {
  const input = document.getElementById('inputCor').value.trim();
  const erroEl = document.getElementById('erro');
  const resultadoEl = document.getElementById('resultado');
  const preview = document.getElementById('previewCor');
  erroEl.textContent = '';
  resultadoEl.style.display = 'none';

  if (!input) {
    erroEl.textContent = 'Por favor, insira um código de cor.';
    return;
  }

  try {
    // Detectar e normalizar a cor para RGB
    let rgb;

    if (/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(input)) {
      rgb = hexParaRgb(input);
    } else if (/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/i.test(input)) {
      rgb = extrairRgb(input);
    } else if (/^hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)$/i.test(input)) {
      rgb = hslParaRgb(extrairHsl(input));
    } else if (/^cmyk\(\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)$/i.test(input)) {
      rgb = cmykParaRgb(extrairCmyk(input));
    } else {
      throw new Error('Formato de cor não reconhecido.');
    }

    if (!rgb) throw new Error('Não foi possível converter a cor.');

    // Exibir resultados
    document.getElementById('hex').textContent = rgbParaHex(rgb);
    document.getElementById('rgb').textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const hsl = rgbParaHsl(rgb);
    document.getElementById('hsl').textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    const cmyk = rgbParaCmyk(rgb);
    document.getElementById('cmyk').textContent = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;

    preview.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    resultadoEl.style.display = 'block';

  } catch (err) {
    erroEl.textContent = err.message;
  }
}

// Helpers

function hexParaRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(ch => ch + ch).join('');
  }
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function extrairRgb(rgbStr) {
  const partes = rgbStr.match(/\d+/g).map(Number);
  return { r: partes[0], g: partes[1], b: partes[2] };
}

function extrairHsl(hslStr) {
  const partes = hslStr.match(/\d+/g).map(Number);
  return { h: partes[0], s: partes[1], l: partes[2] };
}

function extrairCmyk(cmykStr) {
  const partes = cmykStr.match(/\d+/g).map(Number);
  return { c: partes[0], m: partes[1], y: partes[2], k: partes[3] };
}

function rgbParaHex({ r, g, b }) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}

function rgbParaHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function rgbParaCmyk({ r, g, b }) {
  if (r === 0 && g === 0 && b === 0) return { c:0, m:0, y:0, k:100 };

  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  let k = Math.min(c, m, y);

  c = Math.round(((c - k) / (1 - k)) * 100);
  m = Math.round(((m - k) / (1 - k)) * 100);
  y = Math.round(((y - k) / (1 - k)) * 100);
  k = Math.round(k * 100);

  return { c, m, y, k };
}
