document.getElementById("calcular").addEventListener("click", () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !alturaCm) {
    resultado.textContent = "❌ Preencha todos os campos corretamente.";
    resultado.style.color = "#ff4b4b";
    return;
  }

  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);
  const imcFormatado = imc.toFixed(2);
  let classificacao = "";
  let cor = "";

  if (imc < 18.5) {
    classificacao = "Magreza";
    cor = "#ffa600";
  } else if (imc < 24.9) {
    classificacao = "Normal";
    cor = "#00ffc8";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
    cor = "#f2c744";
  } else if (imc < 39.9) {
    classificacao = "Obesidade";
    cor = "#ff4b4b";
  } else {
    classificacao = "Obesidade grave";
    cor = "#c50000";
  }

  resultado.textContent = `IMC: ${imcFormatado} - ${classificacao}`;
  resultado.style.color = cor;
});
