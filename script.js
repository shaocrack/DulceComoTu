const startBtn = document.getElementById("startBtn");
const scanner = document.getElementById("scanner");
const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");
const statusText = document.getElementById("statusText");
const continueBtn = document.getElementById("continueBtn");
const report = document.getElementById("report");
const traits = document.getElementById("traits");
const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");
const finalSong = document.getElementById("finalSong");

const traitList = [
  "💖 Belleza: 1000000% (Confirmado por la NASA y mi corazón xD)",
  "🌸 Ternura: 40% (ya por compromiso este porcentaje)",
  "😡 Enojo: 2000% (cuando hablas de cosas que te molestan)",
  "🎭 Hecha la víctima: 10000% (como toda mujer xD)",
  "🗣️ Chismocita: 3000000% (no tengo pruebas, pero tampoco dudas xD)",
  "😅 Sentido del humor: 15% (nada chistoso me has contado :V)",
  "🍫 Antojo constante: 85% (¡vamos por un morochitoo! :D)",
  "📱 Contestadora de mensajes: 10% (apenas me respondes uno)"
];

let percent = 0;
let scanInterval;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  scanner.classList.remove("hidden");
  statusText.textContent = "Iniciando escaneo...";
  scanInterval = setInterval(scanProgress, 80);
});

function scanProgress() {
  percent++;
  progress.style.width = percent + "%";
  percentage.textContent = percent + "%";

  if (percent === 70) {
    statusText.textContent = "Detenido... está difícil este escaneo 😅";
    clearInterval(scanInterval);
    continueBtn.classList.remove("hidden");
  }

  if (percent >= 100) {
    clearInterval(scanInterval);
    statusText.textContent = "Escaneo finalizado con dificultades... 😵";
    showReport();
  }
}

continueBtn.addEventListener("click", () => {
  continueBtn.classList.add("hidden");
  statusText.textContent = "Reanudando escaneo...";
  scanInterval = setInterval(scanProgress, 80);
});

function showReport() {
  setTimeout(() => {
    scanner.classList.add("hidden");
    report.classList.remove("hidden");
    traitList.forEach((trait, index) => {
      setTimeout(() => {
        const li = document.createElement("li");
        li.textContent = trait;
        traits.appendChild(li);
      }, index * 300);
    });
  }, 1500);
}

finalBtn.addEventListener("click", () => {
  report.classList.add("hidden");
  finalMessage.classList.remove("hidden");
  finalSong.play();
});
