//! 1. Verificar maioridade:
let idadeUsuario = parseInt(prompt("Digite sua idade: "));

if(idadeUsuario >= 18)
{
    console.log("Você é maior de idade.");
    alert("Você é maior de idade.");
}
else
{
    console.log("Você é menor de idade.");
    alert("Você é menor de idade.");
}

//! 2. Verificar se um número é positivo, negativo:
//* Observação: o zero é considerado negativo nesse exercício.
let numeroUsuario = parseFloat(prompt("Digite um número: "));

if(numeroUsuario > 0)
{
    console.log("O número é positivo.");
    alert("O número é positivo.");
}
else
{
    console.log("O número é negativo.");
    alert("O número é negativo.");
}

//! 3. Aprovação em uma prova:
//* Observação: Vai de 0 a 100, precisando de no mínimo 60 para a aprovação.
let notaAluno = parseInt(prompt("Digite a nota do aluno: "));

if(notaAluno >= 60)
{
    console.log("Aprovado(a)!");
    alert("Aprovado(a)!");
}
else
{
    console.log("Reprovado(a)!");
    alert("Reprovado(a)!");
}

//! 4. Verificar se um número é positivo, negativo ou zero:
let numeroUsuario2 = parseFloat(prompt("Digite um número: "));

if(numeroUsuario2 = 0)
{
    console.log("O número é zero.");
    alert("O número é zero.");
}
else if(numeroUsuario2 >= 1)
{
    console.log("O número é positivo.");
    alert("O número é positivo.");
}
else
{
    console.log("O número é negativo.");
    alert("O número é negativo.");
}

//! 5. Classificação de idade:
let idadePessoa = parseInt(prompt("Digite a idade da pessoa: "));

if(idadePessoa <= 12)
{
    console.log("Criança");
    alert("Criança");
}
else if(idadePessoa >= 13)
{
    console.log("Adolescente");
    alert("Adolescente");
}
else if(idadePessoa >= 18)
{
    console.log("Adulto");
    alert("Adulto");
}

//! 6. Verificar se um número é par ou ímpar:
let numeroUsuario3 = parseInt(prompt("Digite um número: "));

if(numeroUsuario3 % 2 == 0)
{
    console.log("O número é par.");
    alert("O número é par.");
}
else
{
    console.log("O número é ímpar.");
    alert("O número é ímpar.");
}