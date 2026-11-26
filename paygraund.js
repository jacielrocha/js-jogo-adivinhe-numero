
function verificarIdade(idade) {
    idade = Number(idade);
    let votar = false;
    if(idade >= 16) {
        votar =true;
    }
    return votar;
}



function podeVotar (nome, sobrenome, idade) {
    const votar = verificarIdade(idade);
    if(votar) {
        alert(nome + " " + sobrenome + " pode votar");
    } else {
        alert(nome + " " + sobrenome + " não pode votar"); 
    }
}