function toggleMenu() {
  const menu = document.getElementById('dropdown-menu');
  const body = document.body;

  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    body.classList.remove('menu-open');
  } else {
    menu.style.display = 'block';
    body.classList.add('menu-open');
  }
}

const funcoes = [
  { nome: "Código Morse", desc: "Converta texto para morse.", link: "morse/index.html" },
  { nome: "Criptografia", desc: "Proteja seu texto.", link: "crypto/index.html" },
  { nome: "Texto Estilizado", desc: "Fontes diferentes.", link: "stylized/index.html" },
  { nome: "ASCII", desc: "Texto em código ASCII.", link: "ascii/index.html" },
  { nome: "Binário", desc: "Converter texto ↔ binário.", link: "binary/index.html" },
  { nome: "Hexadecimal", desc: "Converter texto ↔ HEX.", link: "hex/index.html" },
  { nome: "Base64", desc: "Codificador Base64.", link: "base64/index.html" },
  { nome: "Contador de Palavras", desc: "Conte palavras e caracteres.", link: "contador/index.html" },
  { nome: "Inverter Texto", desc: "Texto de trás pra frente.", link: "inverter-texto/index.html" },
  { nome: "Remover Espaços", desc: "Limpa os espaços.", link: "remover-espacos/index.html" },
  { nome: "Gerar Senha", desc: "Crie senhas seguras.", link: "gerar-senhas/index.html" },
  { nome: "Codificar URL", desc: "Converta para URL-safe.", link: "codificador-url/index.html" },
  { nome: "Decodificar URL", desc: "Volte da URL codificada.", link: "decodificar-url/index.html" },
  { nome: "Timestamp UNIX", desc: "Veja o tempo em UNIX.", link: "timestamp/index.html" },
  { nome: "Cor Aleatória", desc: "Gere uma cor aleatória.", link: "gerador-cor/index.html" },
  { nome: "RGB ↔ HEX", desc: "Converta entre cores.", link: "conversor-cores/index.html" },
  { nome: "QRCode", desc: "Gere QR Codes rapidamente.", link: "gerar-qrcode/index.html" },
  { nome: "Validador de CPF", desc: "Verifique CPF válido.", link: "validar-cpf/index.html" },
  { nome: "Calculadora IMC", desc: "Veja seu IMC.", link: "calcular-imc/index.html" },
  { nome: "Cronômetro", desc: "Tempo decorrido.", link: "cronometro/index.html" }
];

const container = document.getElementById('functions-section');
funcoes.forEach((f, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-delay", i * 10);
  card.innerHTML = `
    <h2>${f.nome}</h2>
    <p>${f.desc}</p>
    <a href="${f.link}" target="_blank">Abrir</a>
  `;
  container.appendChild(card);
});
