//! 1. Exibir os números pares de 1 a 50:
for(i = 1; i <51; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}

//! 2. Jogo de advinhação:
let numeroSecreto = Math.floor(Math.random() * 100) + 1; //Math random gera um numero entre 0 e 1, math floor arredonda ele para baixo
let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = prompt("Digite o numero e tente acertar");
    if (palpite < numeroSecreto) {
        alert("O numero secreto e maior")
    }
    else if (palpite > numeroSecreto)
    {
        alert("O numero secreto e menor")
    }
    else
    {
        alert("Parabens vc acertou o numero era " + numeroSecreto)
        palpite = numeroSecreto;
    }
}

//! 3. Contagem regressiva:
let numero = parseInt(prompt("Digite um numero"))

while(numero !== -0)
{
    numero --;
    console.log(numero);
}
