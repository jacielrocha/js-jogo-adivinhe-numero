alert ("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

if(querJogar) {

    alert("Boa Sorte, "+ nomeJogador);

    const numeroSecreto = 7;

    let numeroDigitado = prompt("Digite um número");

    if(numeroDigitado == numeroSecreto) {
        alert("Parabéns, você acertou");
    } else if(numeroSecreto > numeroDigitado) {
        alert("É menor")
    } else alert ("É maior") 

} else {

    alert("Que pena! Até a próxima")

}

//console.log(typeof querJogar);
//console.log(querJogar);

//alert("Boa sorte, "+ nomeJogador);

//let numero = prompt("Digite um número");

//alert(Number(numero) + 10);


