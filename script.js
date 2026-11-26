alert("Boas vindas");
let nomeJogador = prompt("Digite seu nome");
let querJogar = confirm("Deseja jogar?");

if (querJogar) {
  boaSorte (nomeJogador);
  const numeroSecreto = 7;
  let acertou = false;

  while (!acertou) {
    let numeroDigitado = Number(prompt("Digite um numero"));
    acertou = verificarPalpite(numeroDigitado, numeroSecreto);
  }
} else {
  alert("Que pena! Até a próxima");
}