
function verificarPalpite (numeroDigitado, numeroSecreto) {
 if (numeroDigitado < 1 || numeroDigitado > 10 || isNaN(numeroDigitado)) {
    alert("Número inválido! Digite de 1 a 10.");
    return false;
  } else if (numeroSecreto === numeroDigitado) {
    alert("Parabéns, você acertou");
    return true;
  } else if (numeroSecreto < numeroDigitado) {
    alert("É menor!");
    return false;
  } else {
    alert("É maior!");
    return false;
  }
}
