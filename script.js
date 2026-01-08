// ===== Typed Text =====
const message = "Erika, você é uma mulher Incrível 💕...";
let index = 0;
const typedTextElem = document.getElementById("typedText");

function typeWriter() {
  if (index < message.length) {
    typedTextElem.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// ===== Carousel =====
const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg"
];
let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("carouselImage").src = images[currentIndex];
}

// ===== Countdown =====
// Ajuste a data para quando vocês começaram o relacionamento:
const eventDate = new Date("2023-05-03T00:00:00");
const countdownElem = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = now - eventDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownElem.innerHTML = `${days} dias juntos ❤️`;
}
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);

// ===== Secret Message =====
function showSecret() {
  const msg = "Obrigado por cada momento, eu te amo 💖";
  let idx2 = 0;
  const secretElem = document.getElementById("typedSecret");
  document.getElementById("secretMessage").classList.remove("hidden");

  function typeSecret() {
    if (idx2 < msg.length) {
      secretElem.innerHTML += msg.charAt(idx2);
      idx2++;
      setTimeout(typeSecret, 80);
    }
  }
  typeSecret();
}
