function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf[10]);
}

document.getElementById("validar").addEventListener("click", () => {
  const cpf = document.getElementById("cpf").value;
  const resultado = document.getElementById("resultado");

  if (validarCPF(cpf)) {
    resultado.textContent = "✅ CPF válido!";
    resultado.style.color = "#00ffc8";
  } else {
    resultado.textContent = "❌ CPF inválido.";
    resultado.style.color = "#ff4b4b";
  }
});
