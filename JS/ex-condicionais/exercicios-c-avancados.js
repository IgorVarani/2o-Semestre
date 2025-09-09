//! 1. Classificação de triângulos:
let lado1 = parseFloat(prompt("Digite o primeiro lado: "));
let lado2 = parseFloat(prompt("Digite o segundo lado: "));
let lado3 = parseFloat(prompt("Digite o terceiro lado: "));

if(lado1 == lado2 && lado1 == lado3)
{
    console.log("Triangulo Equilatero");
}
else if( lado1 == lado2 && lado1 !== lado3 || lado1 == lado3 && lado1 !== lado2)
{
    console.log("Triangulo isoceles");
}
else
{
    console.log("Triangulo escaleno")
}

//! 2. Conversão de notas para conceitos:
let nota = parseInt(prompt("Digite sua nota"));

if(nota < 60)
{
    console.log("F");
}
else if(nota <= 69)
{
    console.log("D")
}
else if(nota <= 79)
{
    console.log("C");
}
else if(nota <= 89)
{
    console.log("B")
}
else if(nota >= 90)
{
    console.log("A");
}

//! 3. Cálculo de IMC:
let peso = parseFloat(prompt("Digite seu peso:"));
let altura = parseFloat(prompt("Digite sua altura"));

let imc = peso / (altura * altura)

if (imc <= 18.5)
{
    console.log("Magreza");
}
else if (imc <= 24.9)
{
    console.log("Normal");
}
else if (imc <= 29.9)
{
    console.log("Sobrepeso");
}
else
{
    console.log("Obesidade")
}

//! 4. Validação de ano bissexto:
let ano = prompt("Digite o ano:");

ano = parseInt(ano);
let resultado;

((!Boolean(ano % 4) && Boolean(ano % 100)) || !Boolean(ano % 400))
    ? resultado = "E bissexto"
    : resultado = "Nao e bissexto";
console.log("O ano" + ano + resultado);