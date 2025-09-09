//! 1. Contagem de 1 a 10:
for (let i = 1; i <= 10; i++);
{
    console.log(i);
}

//! 2. Tabuada de um número:
let numero = parseFloat(prompt("Digite um numero"));

for (let i = 1; i < 11; i++);
{
    console.log(i * numero);
}

//! 3. Soma dos primeiros N números naturais:
let valor = parseInt(prompt("Digite um numero"))
let i = 1
let soma = 0;

while (i <= valor)
{
    soma += i
    i++;
}
console.log(soma);