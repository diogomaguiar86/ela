// Efeito de digitação
const message = "💕 Oi, meu amor! Criei esse site só para dizer o quanto você é especial pra mim. 💕";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typedText").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Mostrar mensagem secreta
function mostrarMensagem() {
  document.getElementById("Te Amo Erika ").classList.remove("hidden");
}

function mostrarMensagem() {
  document.getElementById("mensagemSecreta").classList.remove("hidden");

  const mensagem = " 💕 Lembra quando nos conhecemos no Shopping Metropole 💕 ... Foi uma noite muito especial !!! 💕 Naquele dia fiquei pensando como seria minha vida se nosso relacionamento desse certo !!! 💕 Somos sobreviventes de relacionamentos frustrados e sei que não seria fácil encontrar alguem que me fizesse feliz... 💕 Mas com sua presença a minha vida mudou pra melhor !!! 💕 Eu me livrei da ansiedade, a vida ficou mais leve, bonita e divertida !!! 💕 Graças ao seu jeitinho de ser que me conquistou !!! 💕 Lembra daquele dia na Prainha Branca, e o pedido de namoro 💕 você merece um momento único e especial, te levar em uma ilha e te pedir em namoro não foi facil, ainda bem que deu tudo certo e você aceitou... 💕 Apesar de não me deixar dormir a noite roncando, como aceitar uma MULÉ dessas meu DEUS ( Vai saber ) ... KKKKKKKKKKKKK !!! Obrigado por aceitar fazer parte da minha história !!! Te amo Erika 💖";

  let j = 0;
  const p = document.getElementById("mensagemDigitada");
  p.innerHTML = ""; 

  function digitarSecreta() {
    if (j < mensagem.length) {
      p.innerHTML += mensagem.charAt(j);
      j++;
      setTimeout(digitarSecreta, 50);
    }
  }

  digitarSecreta();
}

// Carrossel de Fotos
const fotos = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
  "07.jpeg",
  "08.jpeg",
  "09.jpeg",
  "10.jpeg"
];
let fotoAtual = 0;

function trocarFoto(direcao) {
  fotoAtual = (fotoAtual + direcao + fotos.length) % fotos.length;
  document.getElementById("foto").src = fotos[fotoAtual];
}

// Contagem Progressiva desde o início do relacionamento
const inicioRelacao = new Date("2025-02-15T00:00:00").getTime(); // ALTERE para a data real de vocês

setInterval(() => {
  const agora = new Date().getTime();
  const tempoJuntos = agora - inicioRelacao;

  const anos = Math.floor(tempoJuntos / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((tempoJuntos % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor((tempoJuntos % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoJuntos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoJuntos % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoJuntos % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `Estamos juntos há: ${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ` +
    `${horas}h ${minutos}m ${segundos}s 💞`;
}, 1000);

  document.getElementById("countdown").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s 💞`;


