let nome = "Igor";
let idade = 19;

console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos.");

let mensagem = 'Olá, meu nome é ${nome}'
//alert(mensagem);

console.log(typeof mensagem); //string
console.log(typeof idade); //number

let profissao;
console.log(typeof profissao); //undefined

let endereco = null;
console.log(typeof endereco); //null

//*Estrutura condicional

//*IF / ELSE
let temperatura = 12;

if (temperatura > 25)
{
    console.log("Está calor!");
}
else
{
    console.log("Está frio!");
}

let nomeUsuario = prompt("Digite seu nome: ");
alert("Seu nome é: " + nomeUsuario)

//*IF / ELSE IF / ELSE
let nota = parseInt(prompt("Digite a nota: "));

if(nota > 6)
{
    console.log("Aprovado(a)!");
}
else if(nota >= 5)
{
    console.log("Está de recuperação!");
}
else
{
    console.log("Reprovado(a)!");
}

//*IF TERNÁRIO
let saldo = 90;

let podeComprar = saldo >= 100 ? "Compra aprovada!" : "Saldo insuficiente";

console.log(podeComprar);

//*CONDICIONAL ANINHADA
//*MULTIPLAS VERIFICAÇÕES

let hora = 8;
let diaDaSemana = "terça";

if(hora >= 6 && hora < 12)
{
    console.log("Bom dia!");
}
else
{
    if(hora >= 12 && hora < 18)
    {
        if(diaDaSemana == "segunda")
        {
            console.log("Boa tarde! Ótima semana!");
        }
        else
        {
            console.log("Boa tarde!");
        }
            }
}

//*SWITCH CASE
let dia = 2;

switch(dia)
{
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
        break;
}