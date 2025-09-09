//! 1. Soma dos dígitos de um número:
let numeroD = parseInt(prompt("Digite um número inteiro positivo:"));

let soma = 0;

while (numeroD > 0)
{
    let digito = numeroD % 10;
    soma += digito;
    numeroD = Math.floor(numeroD / 10);
}

console.log("A soma dos dígitos é: " + soma);
alert("A soma dos dígitos é: " + soma);

//! 2. Fatorial de um número:
let numero = parseInt(prompt("Digite um numero"));
let fatoracao = 1;

for( let i = 1; i <= numero; i++)
{
    fatoracao *= i;
}
console.log(fatoracao);

//! 3. Inverter um número:
let numeroI = parseInt(prompt("Digite um número:"));

let invertido = 0;

while (numeroI > 0)
{
    let digito = numeroI % 10;
    invertido = invertido * 10 + digito;
    numeroI = Math.floor(numeroI / 10);
}

console.log("Número invertido: " + invertido);
alert("Número invertido: " + invertido);

//! 4. Números perfeitos de 1 a 100:
for (let num = 1; num <= 1000; num++)
{
    let soma = 0;

    for (let i = 1; i < num; i++)
    {
        if (num % i === 0)
        {
            soma += i;
        }
    }

    if (soma === num)
    {
        console.log(num + " é um número perfeito.");
        alert(num + " é um número perfeito.");
    }
}
