function gerarCor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const hex = rgbParaHex(r, g, b)
  const hsl = rgbParaHsl(r, g, b)
  const cmyk = rgbParaCmyk(r, g, b)

  document.getElementById("cor-preview").style.backgroundColor = `rgb(${r},${g},${b})`
  document.getElementById("hex").textContent = hex
  document.getElementById("rgb").textContent = `rgb(${r}, ${g}, ${b})`
  document.getElementById("hsl").textContent = hsl
  document.getElementById("cmyk").textContent = cmyk
}

function rgbParaHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase()
}

function rgbParaHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  let max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  h = Math.round(h * 360)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return `hsl(${h}, ${s}%, ${l}%)`
}

function rgbParaCmyk(r, g, b) {
  if (r === 0 && g === 0 && b === 0) return "cmyk(0%, 0%, 0%, 100%)"

  let c = 1 - (r / 255)
  let m = 1 - (g / 255)
  let y = 1 - (b / 255)
  let k = Math.min(c, m, y)

  c = Math.round(((c - k) / (1 - k)) * 100)
  m = Math.round(((m - k) / (1 - k)) * 100)
  y = Math.round(((y - k) / (1 - k)) * 100)
  k = Math.round(k * 100)

  return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`
}
