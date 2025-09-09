//! 1. Calculadora simples:
let numero1 = parseFloat(prompt("Digite o primeiro numero"));
let numero2 = parseFloat(prompt("Digite o segundo numero"));
let operacao = prompt("Escreva uma operacao");
let resultado;

if(operacao == "soma")
{
    resultado = numero1 + numero2
    console.log(resultado);
}

else if(operacao == "subtracao")
{
    resultado = numero1 - numero2
    console.log(resultado);
}

else if(operacao == "divisao")
{
    resultado = numero1 / numero2;
    console.log(resultado);
}

else if (operacao == "multiplicacao")
{
    resultado = numero1 * numero2;
    console.log(resultado);
}

//! 2. Maior entre três números:
let numeroA = parseFloat(prompt("Digite o primeiro numero: "));
let numeroB = parseFloat(prompt("Digite o segundo numero: "));
let numeroC = parseFloat(prompt("Digite o terceiro numero: "));
let maior;

if(numeroA > numeroB && numeroA > numeroC)
{
    maior = numeroA;
}
else if( numeroB > numeroA && numeroB > numeroC)
{
    maior = numeroB;
}
else
{
    maior = numeroC;
}
console.log(maior);

//! 3. Desconto em compras:
let valorCompra = parseFloat(prompt("Digite o valor da sua compra: "));

let ValorDesconto = valorCompra/10;
let precoFinal;

if(valorCompra >= 100)
{
    precoFinal = valorCompra - ValorDesconto;
}
else
{
    precoFinal = valorCompra;
}
console.log(precoFinal);

//! 4. Sistema de login simples:
let usuario = prompt("Digite seu usuario: ");
let senha = prompt("Digite sua senha: ");

if(senha == "1234" && usuario == "admin")
{
    console.log("Login bem-sucedido");
}
else
{
    console.log("Acesso negado");
}