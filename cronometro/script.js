let segundos = 0;
let intervalo = null;

const tempoEl = document.getElementById("tempo");
const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnResetar = document.getElementById("resetar");

function formatar(seg) {
  const h = String(Math.floor(seg / 3600)).padStart(2, "0");
  const m = String(Math.floor((seg % 3600) / 60)).padStart(2, "0");
  const s = String(seg % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function atualizarTempo() {
  tempoEl.textContent = formatar(segundos);
}

btnIniciar.addEventListener("click", () => {
  if (intervalo) return;
  intervalo = setInterval(() => {
    segundos++;
    atualizarTempo();
  }, 1000);
});

btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
});

btnResetar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  atualizarTempo();
});

atualizarTempo();
